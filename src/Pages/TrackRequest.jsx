import "../Styles/TrackRequest.css";
import {
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import { useState } from "react";

export default function TrackRequest() {
  const navigate = useNavigate();
  const { id } = useParams();

  const requests =
    JSON.parse(localStorage.getItem("requests")) || [];

  const request = requests.find(
    (item) =>
      item.id.toLowerCase() === id.toLowerCase()
  );

  const [searchId, setSearchId] = useState(id);
  const [searchError, setSearchError] = useState("");

  const handleSearch = () => {
    const foundRequest = requests.find(
      (item) =>
        item.id.toLowerCase() ===
        searchId.trim().toLowerCase()
    );

    if (!searchId.trim()) {
      setSearchError("Please enter a ticket ID.");
      return;
    }

    if (!foundRequest) {
      setSearchError(
        "No request found with that Request ID."
      );
      return;
    }

    setSearchError("");

    navigate(`/track/${foundRequest.id}`);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Open":
        return "status-open";

      case "In Progress":
        return "status-progress";

      case "Closed":
        return "status-closed";

      case "Blocked":
        return "status-blocked";

      default:
        return "";
    }
  };

  if (!request) {
    return (
      <main className="track-page">
        <div className="track-card">

          <h1>Request Not Found</h1>

          <p>
            No request exists with ID{" "}
            <strong>{id}</strong>.
          </p>

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ← Back Home
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="track-page">

      <div className="track-container">

        <button
          className="back-link"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <h1>Track your request</h1>

        <p className="track-subtitle">
          Enter your ticket ID to see the latest status and details.
        </p>

        {/* Search */}

        <div className="track-search-card">

          <div className="search-row">

            <input
              type="text"
              value={searchId}
              placeholder="e.g. IT-421"
              onChange={(e) => {
                setSearchId(e.target.value);
                setSearchError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button
              className="search-btn"
              onClick={handleSearch}
            >
              Check Status
            </button>

          </div>

          {searchError && (
            <p className="search-error">
              {searchError}
            </p>
          )}

        </div>

        {/* Details */}

        <div className="request-details-card">

          <div className="request-header">

            <div>

              <span className="label">
                REQUEST ID
              </span>

              <h3>{request.id}</h3>

              <h2>{request.requestType}</h2>

              <p className="submitted-date">
                Submitted on{" "}
                {request.submittedAt || "Recently"}
              </p>

            </div>

            <div className="request-meta">

              <div
                className={`status-pill ${getStatusClass(
                  request.status
                )}`}
              >
                ● {request.status}
              </div>

              <p className="priority-text">
                Priority:
                <strong> {request.priority}</strong>
              </p>

            </div>

          </div>

          <div className="request-body">

            <div>

              <span className="label">
                DEPARTMENT
              </span>

              <p>{request.department}</p>

            </div>

            <div>

              <span className="label">
                REQUESTER
              </span>

              <p>{request.name}</p>

            </div>

            <div className="full-width">

              <span className="label">
                DESCRIPTION
              </span>

              <p className="description-text">
                {request.description}
              </p>

            </div>

          </div>

          <div className="request-footer">

            <span>
              Need to file a new one?
            </span>

            <Link to="/request">
              Submit a Request →
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}