import { Link, NavLink } from "react-router";
import "./header.css";
const Header = () => {
  // const h1 = React.createElement('h1',{className:"logo"},"Logo")
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">Logo</Link>
      </h1>
      <nav className="navBar">
        <NavItem label={"Products"} path="/products" />
        <NavItem label={"Practice"} path="/practice" />
        <NavItem label={"About"} path="/about" />
        <NavItem label={"Contanct"} path="/contact" />
      </nav>
    </div>
  );
};

const NavItem = ({ path, label }) => {
  return (
    <NavLink
      className={({ isActive }) => `navItem ${isActive ? "active" : ""}`}
      to={path}
    >
      {label}
    </NavLink>
  );
};

export default Header;
