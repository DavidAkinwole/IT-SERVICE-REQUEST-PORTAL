import { NavLink } from "react-router-dom";
import "../Styles/Confirmation.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Confirmation() {
const navigate = useNavigate();
const { state } = useLocation();
const request = state || {};

navigate("/dashboard", {
  state
});
  return (
    <main className="confirmation-page">

      <div className="confirmation-container">

        <div className="confirmation-card">

          <div className="success-icon">
            ✓
          </div>

          <h1>Request Submitted Successfully</h1>

          <p>
            Thank you. Your IT support request has been received.
          </p>

          <div className="request-info">
            <span>REQUEST ID</span>
            <strong>{request.id}</strong>

            <span className="status-pill">
              • {request.status}
            </span>
          </div>

          <div className="confirmation-actions">

            <button className="confirmation-btn confirmation-btn-primary"
            onClick={() => navigate("/dashboard", {
              state})
              }>
               View Dashboard
            </button>
            <button className="confirmation-btn confirmation-btn-secondary"
             onClick={() => navigate("/request")}>
              Submit Another
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}