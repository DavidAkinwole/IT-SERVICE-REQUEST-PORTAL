import { NavLink } from "react-router-dom";
import "../Styles/Requestform.css";

const [formData, setFormData] = useState({
    name:"",
    email:"",
    department:"",
    requestType:"",
    description:"",
    priority:""
});

const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    });
};

const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(formData);
};

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
      <div className="rf-main">
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

      <select id="department" className="rf-select">
        <option value="">Select department</option>
        <option>IT</option>
        <option>HR</option>
        <option>Finance</option>
      </select>
    </div>

    <div className="rf-field">
      <label htmlFor="requestType">Request Type</label>

      <select id="requestType" className="rf-select">
        <option value="">Select request type</option>
        <option>Bug</option>
        <option>Support</option>
        <option>Feature Request</option>
      </select>
    </div>
  </div>

  <div className="rf-field">
    <label htmlFor="description">Description</label>

    <textarea
      id="description"
      rows={6}
      placeholder="Describe your issue..."
    />
  </div>
  <div className="rf-field">
  <label>Priority Level</label>

  <div className="rf-priority">

    <label className="priority-option">
      <input
        type="radio"
        name="priority"
        value="Low"
      />
      <span>Low</span>
    </label>

    <label className="priority-option">
      <input
        type="radio"
        name="priority"
        value="Medium"
      />
      <span>Medium</span>
    </label>

    <label className="priority-option">
      <input
        type="radio"
        name="priority"
        value="High"
      />
      <span>High</span>
    </label>

  </div>
</div>
      <div className="rf-actions">
    <button type="button" className="cancel-btn">
        Cancel
    </button>

    <button type="submit" className="submit-btn">
        Submit Request
    </button>
</div>
</form>
        </section>
      </div>
    </main>
  );
}