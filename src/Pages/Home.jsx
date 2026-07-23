import "../Styles/Home.css";
import { NavLink } from "react-router-dom";
import { FaLaptop, FaTools, FaShieldAlt, FaWifi } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home () {
  const navigate = useNavigate();

const [ticketId, setTicketId] = useState("");

const [statusError, setStatusError] = useState("");

const handleCheckStatus = () => {

  const requests =
    JSON.parse(localStorage.getItem("requests")) || [];

  const request = requests.find(
    (item) =>
      item.id.toLowerCase() ===
      ticketId.trim().toLowerCase()
  );

  if (!request) {

    setStatusError(
      "No request found with that Request ID."
    );

    return;
  }

  setStatusError("");

  navigate(`/track/${request.id}`);

};
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FaLaptop />
            <span> Internal Support </span> 
          </div>

           <h1> IT Service Request Portal </h1>
            <p> Submit Software, Hardware,
              Access or Technical support quickly and easily
            </p>

          <div
            className="hero-buttons">
            <NavLink to="/request" className={({ isActive }) => isActive ? "primary-btn active-btn" : "secondary-btn"}>Submit a Request</NavLink>
            <NavLink to="/admin" className={({ isActive }) => isActive ? "primary-btn active-btn" : "secondary-btn"}>Admin Login</NavLink>
          </div>
          <p className="hero-note">
  Dashboard access is restricted to administrators.
  Visitors can submit requests and track their status
  using their Request ID.
</p>
        </div>
        <section className="status-checker">

  <h2>Check Request Status</h2>

  <p>
    Already submitted a request? Enter your Request ID
    below to check its current status.
  </p>

  <div className="status-search">

    <input
      type="text"
      placeholder="Enter Request ID (e.g. IT-394)"
      value={ticketId}
      onChange={(e) => {
        setTicketId(e.target.value);
        setStatusError("");
      }}
    />

    <button
      onClick={handleCheckStatus}
    >
      Check Status
    </button>

  </div>

  {statusError && (

    <p className="status-error">

      {statusError}

    </p>

  )}

</section>
          <section className="features">
            <div className="feature-card"
            onClick={() => navigate("/request", { state: { requestType: "Software Issue", }, }) }>
              <div className="feature-icon"><FaLaptop /></div>
              <h3>Software Issues</h3>
              <p>Report problems with software or application</p>
            </div>
            <div className="feature-card"
             onClick={() => navigate("/request", { state: { requestType: "Hardware Issue", }, }) }>
              <div className="feature-icon"><FaTools /></div>
              <h3>Hardware Request</h3>
              <p>Request hardware repairs or replacement</p>
            </div>
            <div className="feature-card"
            onClick={() => navigate("/request", { state: { requestType: "Access Permission", }, }) }>
              <div className="feature-icon"><FaShieldAlt /></div>
              <h3>Access Permissions</h3>
              <p>Request access to system or applications</p>
            </div>
            <div className="feature-card"
            onClick={() => navigate("/request", { state: { requestType: "Network Problem", }, }) }>
              <div className="feature-icon"><FaWifi /></div>
              <h3>Network problems</h3>
              <p>Report network or conectivity issues</p>
            </div>
          </section>
      </section>
    </main>
  );
}

export default Home;