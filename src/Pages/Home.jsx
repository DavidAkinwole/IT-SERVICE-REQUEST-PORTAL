import "../Styles/Home.css";
import { NavLink } from "react-router-dom";
import { FaLaptop, FaTools, FaShieldAlt, FaWifi } from "react-icons/fa";

function Home () {
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
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "primary-btn active-btn" : "secondary-btn"}>View Dashboard</NavLink>
          </div>
        </div>
          <section className="features">
            <div className="feature-card">
              <div className="feature-icon"><FaLaptop /></div>
              <h3>Software Issues</h3>
              <p>Report problems with software or application</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaTools /></div>
              <h3>Hardware Request</h3>
              <p>Request hardware repairs or replacement</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaShieldAlt /></div>
              <h3>Access Permissions</h3>
              <p>Request access to system or applications</p>
            </div>
            <div className="feature-card">
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