import "../Styles/RequestsTable.css";

export default function RequestsTable({
  requests,
  allRequests,
  setRequests,
  onSelect,
}) {

  const saveRequests = (updatedRequests) => {
    setRequests(updatedRequests);

    localStorage.setItem(
      "requests",
      JSON.stringify(updatedRequests)
    );
  };

  const handleStatusChange = (id, newStatus) => {

    const updatedRequests = allRequests.map((request) =>
      request.id === id
        ? {
            ...request,
            status: newStatus,
          }
        : request
    );

    saveRequests(updatedRequests);
  };

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Delete this request?"
    );

    if (!confirmDelete) return;

    const updatedRequests = allRequests.filter(
      (request) => request.id !== id
    );

    saveRequests(updatedRequests);
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

  return (

    <>

      {/* =======================
          Desktop Table
      ======================== */}

      <div className="dashboard-table">

        <div className="table-header">

          <span>ID</span>

          <span>Name</span>

          <span>Department</span>

          <span>Request</span>

          <span>Priority</span>

          <span>Status</span>

          <span>Submitted</span>

          <span>Action</span>

        </div>

        {requests.map((request) => (

          <div
            className="table-row"
            key={request.id}
            onClick={() => onSelect(request)}
          >

            <span className="request-id">
              {request.id}
            </span>

            <span>{request.name}</span>

            <span>{request.department}</span>

            <span>{request.requestType}</span>

            <span>

              <div className="priority-pill">

                {request.priority}

              </div>

            </span>

            <span>

              <select

                className={`status-select ${getStatusClass(
                  request.status
                )}`}

                value={request.status}

                onClick={(e) =>
                  e.stopPropagation()
                }

                onChange={(e) =>
                  handleStatusChange(
                    request.id,
                    e.target.value
                  )
                }

              >

                <option value="Open">
                  Open
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Closed">
                  Closed
                </option>

                <option value="Blocked">
                  Blocked
                </option>

              </select>

            </span>

            <span>

              {request.submittedAt || "--"}

            </span>

            <span>

              <button

                className="delete-btn"

                onClick={(e) => {

                  e.stopPropagation();

                  handleDelete(request.id);

                }}

              >

                Delete

              </button>

            </span>

          </div>

        ))}

      </div>
            {/* =======================
          Mobile Cards
      ======================== */}

      <div className="mobile-cards">

        {requests.map((request) => (

          <div
            className="mobile-card"
            key={request.id}
            onClick={() => onSelect(request)}
          >

            <div className="mobile-header">

              <span className="request-id">
                {request.id}
              </span>

              <select

                className={`status-select ${getStatusClass(
                  request.status
                )}`}

                value={request.status}

                onClick={(e) =>
                  e.stopPropagation()
                }

                onChange={(e) =>
                  handleStatusChange(
                    request.id,
                    e.target.value
                  )
                }

              >

                <option value="Open">
                  Open
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Closed">
                  Closed
                </option>

                <option value="Blocked">
                  Blocked
                </option>

              </select>

            </div>

            <h3 className="request-name">
              {request.name}
            </h3>

            <p className="request-department">
              {request.department}
            </p>

            <p className="request-type">
              {request.requestType}
            </p>

            <div className="mobile-footer">

              <div className="priority-pill">
                {request.priority}
              </div>

              <span className="submitted-date">
                {request.submittedAt || "--"}
              </span>

            </div>

            <button

              className="delete-btn mobile-delete"

              onClick={(e) => {

                e.stopPropagation();

                handleDelete(request.id);

              }}

            >

              Delete Request

            </button>

          </div>

        ))}

      </div>

    </>

  );

}