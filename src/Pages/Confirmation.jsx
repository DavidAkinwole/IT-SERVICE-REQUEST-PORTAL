import "../Styles/Confirmation.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

export default function Confirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const request = state || {};

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!request.id) return;

    try {
      await navigator.clipboard.writeText(request.id);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="confirmation-page">

      <div className="confirmation-container">

        <div className="confirmation-card">

          <div className="success-icon">
            ✓
          </div>

          <h1>Request Submitted Successfully</h1>

          <p>
            Your IT support request has been received successfully.
          </p>

          <div className="request-info">

            <span className="request-label">
              REQUEST ID
            </span>

            <div className="request-id-row">

              <strong>{request.id}</strong>

               <button className="copy-btn" onClick={handleCopy}>
                {copied ? ( <>
      <FaCheck /> <span>Copied</span> </>
  ) : (
    <> <FaRegCopy /> <span>Copy</span>
    </>
  )}
</button>

            </div>

            {copied && (
              <small className="copied-text">
                ✓ Request ID copied
              </small>
            )}

            <span
              className={`status-pill ${
                request.status === "Open"
                  ? "status-open"
                  : request.status === "In Progress"
                  ? "status-progress"
                  : request.status === "Closed"
                  ? "status-closed"
                  : "status-blocked"
              }`}
            >
              ● {request.status}
            </span>

          </div>

          <p className="save-note">
            Save this Request ID. You'll need it to
            track the progress of your request later.
          </p>

          <div className="confirmation-actions">

            <button
              className="confirmation-btn confirmation-btn-primary"
              onClick={() =>
                navigate(`/track/${request.id}`)
              }
            >
              Track My Request
            </button>

            <button
              className="confirmation-btn confirmation-btn-secondary"
              onClick={() => navigate("/request")}
            >
              Submit Another Request
            </button>

            <button
              className="confirmation-btn confirmation-btn-outline"
              onClick={() => navigate("/")}
            >
              Back Home
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}