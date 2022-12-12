import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "green" } : { color: "black" }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          style={({ isActive }) =>
            isActive ? { color: "green" } : { color: "black" }
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Product"
          style={({ isActive }) =>
            isActive ? { color: "green" } : { color: "black" }
          }
        >
          Product
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
