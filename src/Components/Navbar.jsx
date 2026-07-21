import { Link } from "react-router-dom";
import "../Styles/Navbar.css"
import { FaLifeRing } from "react-icons/fa";

function Navbar () {
    return (
        <nav>
            <div className="logo">
                <div className="logo-icon">
                    <FaLifeRing />
                </div>
                <h2>IT Service Portal</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/request">Submit Request</Link>
                </li>
                <li>
                    <Link to="/admin">Admin Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;