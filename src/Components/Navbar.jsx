import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";
const Navbar = ({ isLoggedIn, onLogout }) => {
  var [dropdown, showDropdown] = useState(false);
  var [dropdown1, showDropdown1] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/" className="link">
        <li className="li">Home</li>
      </Link>
      <Link to="/about" className="link">
        <li className="li">About</li>
      </Link>
      <div className="dropdown"
        onMouseEnter={() => showDropdown(!dropdown)}
        onMouseLeave={() => showDropdown(!dropdown)}
      >
        <span className="link">Hooks</span>
        {dropdown && (
          <ul className="dropdown-list">
            <Link to="/use-state" className="dropdown-link"><li>useState</li></Link>
            <Link to="/use-effect" className="dropdown-link"><li>useEffect</li></Link>
            <Link to="/use-effect-api" className="dropdown-link"><li>useEffectAPI</li></Link>
            <Link to="/use-ref" className="dropdown-link"><li>useRef</li></Link>
            <Link to="/use-memo" className="dropdown-link"><li>useMemo</li></Link>
          </ul>
        )}
      </div>
      <div
      className="dropdown"
        onMouseEnter={() => showDropdown1(!dropdown1)}
        onMouseLeave={() => showDropdown1(!dropdown1)}
      >
        <span className="link">Cart</span>
        {dropdown1 && (
          <ul className="dropdown-list">
            <li className="dropdown-link">View Cart</li>
            <li className="dropdown-link">Edit Cart</li>
          </ul>
        )}
      </div>
      {isLoggedIn ? (
        <span className="link" onClick={handleLogout} style={{ cursor: "pointer" }}>
          <li className="li">Logout</li>
        </span>
      ) : (
        <Link to="/login" className="link">
          <li className="li">Login</li>
        </Link>
      )}
    </nav>
  );
};
export default Navbar;