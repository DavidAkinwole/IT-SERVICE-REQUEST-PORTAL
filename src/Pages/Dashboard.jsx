import "../Styles/Dashboard.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState, useMemo } from "react";

import DashboardStats from "../Components/DashboardStats";
import DashboardFilters from "../Components/DashboardFilters";
import RequestsTable from "../Components/RequestsTable";
import RequestDetailsDrawer from "../Components/RequestDetailsDrawer";

export default function Dashboard() {
  const navigate = useNavigate();

  // Protect route
  const isAdmin = localStorage.getItem("isAdmin");

  if (isAdmin !== "true") {
    return <Navigate to="/admin" replace />;
  }

  // Requests state
  const [requests, setRequests] = useState(
    JSON.parse(localStorage.getItem("requests")) || []
  );

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  // Selected request
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin", { replace: true });
  };

  // Filter + Sort
  const filteredRequests = useMemo(() => {
    let data = [...requests];

    if (searchTerm.trim() !== "") {
      data = data.filter(
        (request) =>
          request.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          request.id
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      data = data.filter(
        (request) => request.status === statusFilter
      );
    }

    switch (sortBy) {
      case "Oldest":
        data.reverse();
        break;

      case "Priority":
        const order = {
          High: 3,
          Medium: 2,
          Low: 1,
        };

        data.sort(
          (a, b) =>
            order[b.priority] - order[a.priority]
        );
        break;

      default:
        break;
    }

    return data;
  }, [requests, searchTerm, statusFilter, sortBy]);

  return (
    <main className="dashboard-page">
      <div className="dashboard-content">

        <div className="dashboard-top">

          <div>
            <h1>Admin Dashboard</h1>

            <p>
              Manage IT service requests and update
              request status.
            </p>
          </div>

          <div className="dashboard-actions">

            <button
              className="new-request-btn"
              onClick={() => navigate("/request")}
            >
              + New Request
            </button>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Sign Out
            </button>

          </div>

        </div>

        <DashboardStats requests={requests} />

        <DashboardFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {filteredRequests.length === 0 ? (

          <div className="empty-state">

            <div className="empty-icon">
              📥
            </div>

            <h2>No requests found.</h2>

            <p>
              Try changing your search or filters.
            </p>

          </div>

        ) : (

          <RequestsTable
            requests={filteredRequests}
            allRequests={requests}
            setRequests={setRequests}
            onSelect={setSelectedRequest}
          />

        )}

        {selectedRequest && (

          <RequestDetailsDrawer
            request={selectedRequest}
            onClose={() =>
              setSelectedRequest(null)
            }
          />

        )}

      </div>
    </main>
  );
}