import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/Requestform.css";
import { useState } from "react";

export default function RequestForm() {
const [formData, setFormData] = useState({
    name:"",
    email:"",
    department:"",
    requestType:"",
    description:"",
    priority:""
});
const [errors, setErrors] = useState({});
const navigate = useNavigate();
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });

  let error = "";

  if (value.trim() === "") {
    switch (name) {
      case "name":
        error = "Full Name is required";
        break;

      case "email":
        error = "Email Address is required";
        break;

      case "department":
        error = "Please select a department";
        break;

      case "requestType":
        error = "Please select a request type";
        break;

      case "description":
      error = "Description is required";
      break;

      case "priority":
      error = "Please select a priority level";
      break;

      default:
        break;
    }
  }

 setErrors(prev => ({
  ...prev,
  [name]: error
}));
};

const handleCancel = () => {
  navigate("/");
};

const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Full Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email Address is required";
  }

  if (!formData.department) {
    newErrors.department = "Please select a department";
  }

  if (!formData.requestType) {
    newErrors.requestType = "Please select a request type";
  }

  if (!formData.description.trim()) {
  newErrors.description = "Description is required";
}

  if (!formData.priority) {
    newErrors.priority = "Please select a priority level";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

 const requestData = {
  id: `IT-${Math.floor(Math.random() * 1000)}`,
  ...formData,
  status: "Open"
};
navigate("/confirmation", {
  state: requestData
});
};

  return (
    <main className="rf-page">
      <div className="rf-main">
      <section className="rf-heading">
          <h1>Submit a Support Request</h1>
          <p>
            Fill out the form below and our team will get back to you.
          </p>
      </section>
      <section className="rf-card">
          <form onSubmit={handleSubmit}>

  <div className="rf-row">
    <div className="rf-field">
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        placeholder="John Doe"
        name="name"
    value={formData.name}
    onChange={handleChange}
    className={errors.name ? "rf-input rf-input--error" : "rf-input"}
  />

  {errors.name && (
    <p className="rf-error">{errors.name}</p>
  )}
    </div>

    <div className="rf-field">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        placeholder="john@email.com"
        name="email"
    value={formData.email}
    onChange={handleChange}
    className={errors.email ? "rf-input rf-input--error" : "rf-input"}
  />

  {errors.email && (
    <p className="rf-error">{errors.email}</p>
  )}
    </div>
  </div>

  <div className="rf-row">
    <div className="rf-field">
      <label htmlFor="department">Department</label>

      <select id="department"
       name="department"
      value={formData.department}
      onChange={handleChange}
      className="rf-select">
      <option value="">Select Department</option>
      <option value="Engineering">Engineering</option>
      <option value="Product">Product</option>
      <option value="Design">Design</option>
      <option value="Marketing">Marketing</option>
      <option value="Sales">Sales</option>
      <option value="Finance">Finance</option>
      <option value="HR">HR</option>
      <option value="Operations">Operations</option>
      <option value="Other">Other</option>
      </select>
      {errors.department && (
  <p className="rf-error">{errors.department}</p>
)}
    </div>

    <div className="rf-field">
      <label htmlFor="requestType">Request Type</label>

      <select id="requestType"
       name="requestType"
        value={formData.requestType}
        onChange={handleChange}
        className="rf-select">
        <option value="">Select request type</option>
        <option value>Software Issue</option>
        <option value>Hardware Request</option>
        <option value>Access Permission</option>
        <option value>Network Problem</option>
        <option value>Others</option>
      </select>

{errors.requestType && (
  <p className="rf-error">{errors.requestType}</p>
)}
    </div>
  </div>

  <div className="rf-field rf-field--full">
    <label htmlFor="description">Description</label>

    <textarea
  id="description"
  name="description"
  rows={5}
  placeholder="Describe your issue..."
  className="rf-textarea"
  value={formData.description}
  onChange={handleChange}
    />

    {errors.description && (
  <p className="rf-error">{errors.description}</p>
)}
  </div>
  <div className="rf-field rf-field--full">
  <label>Priority Level</label>

  <div className="rf-priority">

    <label className="priority-option">
      <input
        type="radio"
        name="priority"
        value="Low"
        checked={formData.priority==="Low"}
        onChange={handleChange}
      />
      <span>Low</span>
    </label>

    <label className="priority-option">
      <input
        type="radio"
        name="priority"
        value="Medium"
        checked={formData.priority==="Medium"}
        onChange={handleChange}
      />
      <span>Medium</span>
    </label>

    <label className="priority-option">
      <input
        type="radio"
        name="priority"
        value="High"
        checked={formData.priority==="High"}
        onChange={handleChange}
      />
      <span>High</span>
    </label>
    {errors.priority && (
  <p className="rf-error">{errors.priority}</p>
)}
  </div>
</div>
      <div className="rf-actions">
    <button
  type="button"
  className="cancel-btn"
  onClick={handleCancel}>
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