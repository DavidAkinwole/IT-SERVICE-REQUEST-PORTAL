import "../Styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const requests =
    JSON.parse(localStorage.getItem("requests")) || [];

  return (
    <main className="dashboard-page">
      <div className="dashboard-content">

        <div className="dashboard-top">
          <div>
            <h1>My Requests</h1>
            <p>
              View and track your submitted IT support requests.
            </p>
          </div>

          <button
            className="new-request-btn"
            onClick={() => navigate("/request")}
          >
            + New Request
          </button>
        </div>

        {requests.length === 0 ? (

          <div className="empty-state">

            <div className="empty-icon">📥</div>

            <h2>No requests submitted yet.</h2>

            <p>
              When you submit a request, it'll show up here.
            </p>

            <button
              className="submit-empty-btn"
              onClick={() => navigate("/request")}
            >
              Submit a Request
            </button>

          </div>

        ) : (

          <>

            {/* Desktop Table */}

            <div className="dashboard-table">

              <div className="table-header">
                <span>REQUEST ID</span>
                <span>NAME</span>
                <span>DEPARTMENT</span>
                <span>REQUEST TYPE</span>
                <span>PRIORITY</span>
                <span>STATUS</span>
              </div>

              {requests.map((request) => (

                <div className="table-row" key={request.id}>

                  <span>{request.id}</span>

                  <span>{request.name}</span>

                  <span>{request.department}</span>

                  <span>{request.requestType}</span>

                  <span>

                    <div className="priority-pill">

                      {request.priority}

                    </div>

                  </span>

                  <span>

                    <div className="status-pill">

                      • {request.status}

                    </div>

                  </span>

                </div>

              ))}

            </div>

            {/* Mobile */}

            <div className="mobile-cards">

              {requests.map((request) => (

                <div className="mobile-card" key={request.id}>

                  <div className="mobile-header">

                    <span className="request-id">
                      {request.id}
                    </span>

                    <div className="status-pill">
                      • {request.status}
                    </div>

                  </div>

                  <h3>{request.name}</h3>

                  <p>{request.department}</p>

                  <p>{request.requestType}</p>

                  <div className="priority-pill">
                    {request.priority}
                  </div>

                </div>

              ))}

            </div>

          </>

        )}

      </div>
    </main>
  );
}