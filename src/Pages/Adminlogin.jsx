import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../Styles/Adminlogin.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

export default function Adminlogin() {

const navigate = useNavigate();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const isAdmin = localStorage.getItem("isAdmin");
if (isAdmin === "true")
    { return <Navigate to="/dashboard" replace />;}
const [error, setError] = useState("");

    const ADMIN = {
        username: "admin",
        password: "admin123",
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            username === ADMIN.username &&
            password === ADMIN.password
        ) {
            localStorage.setItem("isAdmin", "true");
            navigate("/dashboard");
        } else {
            setError("Invalid username or password.");
        }
    };

 return (
    <main className="admin-page">

        <div className="admin-card">

          <div className="admin-icon">
            🔒
          </div>

          <h1>Admin Sign In</h1>

          <p>
            Sign in to view and manage submitted IT requests.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="admin-field">
              <label>Username</label>

              <input
              className="admin-input"
                type="text"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="admin-field">
  <label htmlFor="password">Password</label>

  <div className="password-field">
    <input
      id="password"
      className="admin-input"
      type={showPassword ? "text" : "password"}
      placeholder="••••••••"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
      type="button"
      className="password-toggle"
      onClick={() => setShowPassword(!showPassword)}
      aria-label={
        showPassword ? "Hide password" : "Show password"
      }
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>

  {error && (
    <p className="login-error">{error}</p>
  )}
</div>

            <button
              type="submit"
              className="admin-btn"
            >
              Sign In
              
            </button>

          </form>

          <p className="demo-text">
            Demo credentials: admin / admin123
          </p>

        </div>

    </main>
  );
}