import "../Styles/DashboardStats.css";

export default function DashboardStats({ requests }) {

  const total = requests.length;

  const open = requests.filter(
    (request) => request.status === "Open"
  ).length;

  const inProgress = requests.filter(
    (request) => request.status === "In Progress"
  ).length;

  const closed = requests.filter(
    (request) => request.status === "Closed"
  ).length;

  const blocked = requests.filter(
    (request) => request.status === "Blocked"
  ).length;

  const highPriority = requests.filter(
    (request) => request.priority === "High"
  ).length;

  const mediumPriority = requests.filter(
    (request) => request.priority === "Medium"
  ).length;

  const lowPriority = requests.filter(
    (request) => request.priority === "Low"
  ).length;

  return (

    <section className="dashboard-stats">

      <div className="stat-card total-card">

        <h3>Total Requests</h3>

        <h2>{total}</h2>

        <p>All submitted tickets</p>

      </div>

      <div className="stat-card open-card">

        <h3>Open</h3>

        <h2>{open}</h2>

        <p>Awaiting action</p>

      </div>

      <div className="stat-card progress-card">

        <h3>In Progress</h3>

        <h2>{inProgress}</h2>

        <p>Currently being worked on</p>

      </div>

      <div className="stat-card closed-card">

        <h3>Closed</h3>

        <h2>{closed}</h2>

        <p>Successfully resolved</p>

      </div>

      <div className="stat-card blocked-card">

        <h3>Blocked</h3>

        <h2>{blocked}</h2>

        <p>Needs further action</p>

      </div>

      <div className="stat-card priority-card">

        <h3>Priority Breakdown</h3>

        <div className="priority-summary">

          <div className="priority-item">
            <span className="priority-dot high"></span>
            High
            <strong>{highPriority}</strong>
          </div>

          <div className="priority-item">
            <span className="priority-dot medium"></span>
            Medium
            <strong>{mediumPriority}</strong>
          </div>

          <div className="priority-item">
            <span className="priority-dot low"></span>
            Low
            <strong>{lowPriority}</strong>
          </div>

        </div>

      </div>

    </section>

  );
}