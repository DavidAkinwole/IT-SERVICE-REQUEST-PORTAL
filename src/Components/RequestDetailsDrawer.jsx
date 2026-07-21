import "../Styles/RequestDetailsDrawer.css";

export default function RequestDetailsDrawer({
  request,
  onClose,
}) {

  if (!request) return null;

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

  return (

    <>

      {/* Overlay */}

      <div
        className="drawer-overlay"
        onClick={onClose}
      />

      {/* Drawer */}

      <aside className="request-drawer">

        <div className="drawer-header">

          <div>

            <h2>Request Details</h2>

            <p>
              View complete information about this
              support request.
            </p>

          </div>

          <button
            className="drawer-close"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="drawer-content">

          <div className="detail-group">

            <label>Ticket ID</label>

            <p>{request.id}</p>

          </div>

          <div className="detail-group">

            <label>Submitted By</label>

            <p>{request.name}</p>

          </div>

          <div className="detail-group">

            <label>Email Address</label>

            <p>{request.email}</p>

          </div>

          <div className="detail-group">

            <label>Department</label>

            <p>{request.department}</p>

          </div>

          <div className="detail-group">

            <label>Request Type</label>

            <p>{request.requestType}</p>

          </div>

          <div className="detail-group">

            <label>Description</label>

            <div className="description-box">

              {request.description}

            </div>

          </div>

          <div className="detail-group">

            <label>Priority</label>

            <div className="priority-pill">

              {request.priority}

            </div>

          </div>

          <div className="detail-group">

            <label>Status</label>

            <div
              className={`status-badge ${getStatusClass(
                request.status
              )}`}
            >

              {request.status}

            </div>

          </div>

          <div className="detail-group">

            <label>Submitted Date</label>

            <p>

              {request.submittedAt || "--"}

            </p>

          </div>

        </div>

      </aside>

    </>

  );

}