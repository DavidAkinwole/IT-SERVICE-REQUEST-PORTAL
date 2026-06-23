import { NavLink } from "react-router-dom";
import "../Styles/Requestform.css";

export default function RequestForm() {
  return (
    <main className="rf-page">

      <header className="rf-header">
        <div className="rf-logo">
          <div className="rf-logo__icon">G</div>
          <span>GoDesk</span>
        </div>
        <nav>
          <ul className="rf-nav">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/request">Submit Request</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="rf-heading">
          <h1>Submit a Support Request</h1>
          <p>
            Fill out the form below and our team will get back to you.
          </p>
      </section>
      <section className="rf-card">
        <form>
        <div className="rf-row">

    <div className="rf-field">
        <label htmlFor="name">Full Name</label>

        <input
            id="name"
            type="text"
            placeholder="John Doe"
        />
    </div>

       <div className="rf-field">
        <label htmlFor="email">Email Address</label>

          <input
            id="email"
            type="email"
            placeholder="john@email.com"
          />
         </div>
        </div>
        <div className="rf-row">
  <div className="rf-field">
    <label htmlFor="department">Department</label>

    <select id="department">
      <option>Select a department</option>
      <option>Technical Support</option>
      <option>Billing</option>
      <option>Sales</option>
    </select>
  </div>

  <div className="rf-field">
    <label htmlFor="requestType">Request Type</label>

    <select id="requestType">
      <option>Select request type</option>
      <option>Bug Report</option>
      <option>Feature Request</option>
      <option>General Inquiry</option>
    </select>
  </div>
</div>

<div className="rf-field">
  <label htmlFor="description">Description</label>

  <textarea
    id="description"
    rows={6}
    placeholder="Please describe your request..."
  />
</div>
<div className="rf-field">
  <label htmlFor="priority">Priority Level</label>

  <select id="priority">
    <option>Select priority</option>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </select>
</div>
<div className="rf-actions">
  <button type="button" className="rf-cancel-btn">
    Cancel
  </button>

  <button type="submit" className="rf-submit-btn">
    Submit Request
  </button>
</div>
        </form>
      </section>

    </main>
  );
}