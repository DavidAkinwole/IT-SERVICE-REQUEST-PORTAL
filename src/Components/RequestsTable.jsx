import "../Styles/RequestsTable.css";

export default function RequestsTable({
  requests,
  searchTerm,
  statusFilter,
  setRequests,
}) {

  const filteredRequests = requests.filter((request) => {

    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      request.status === statusFilter;

    return matchesSearch && matchesStatus;

  });

  const handleStatusChange = (id, newStatus) => {

    const updatedRequests = requests.map((request) =>
      request.id === id
        ? { ...request, status: newStatus }
        : request
    );

    setRequests(updatedRequests);

    localStorage.setItem(
      "requests",
      JSON.stringify(updatedRequests)
    );
  };

  return (
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

        {filteredRequests.map((request) => (

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

              <select
  className={`status-select ${
    request.status === "Open"
      ? "status-open"
      : request.status === "In Progress"
      ? "status-progress"
      : request.status === "Closed"
      ? "status-closed"
      : "status-blocked"
  }`}
  value={request.status}
  onChange={(e) =>
    handleStatusChange(request.id, e.target.value)
  }
    >
  <option value="Open">Open</option>
  <option value="In Progress">In Progress</option>
  <option value="Closed">Closed</option>
  <option value="Blocked">Blocked</option>
              </select>

            </span>

          </div>

        ))}

      </div>

      {/* Mobile Cards */}

      <div className="mobile-cards">

        {filteredRequests.map((request) => (

          <div className="mobile-card" key={request.id}>

            <div className="mobile-header">

              <span className="request-id">
                {request.id}
              </span>

              <select
                className="status-select"
                value={request.status}
                onChange={(e) =>
                  handleStatusChange(
                    request.id,
                    e.target.value
                  )
                }
              >
                <option>Open</option>
                <option>In Progress</option>
                <option>Closed</option>
                <option>Blocked</option>
              </select>

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
  );
}