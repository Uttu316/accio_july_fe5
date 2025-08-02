import { Link, NavLink } from "react-router";
import "./header.css";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GloabalContext";
const Header = () => {
  // const h1 = React.createElement('h1',{className:"logo"},"Logo")

  const { cart } = useContext(GlobalContext);
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">Logo</Link>
      </h1>
      <nav className="navBar">
        <NavItem label={"Products"} path="/products" />
        <NavItem
          pill={cart.length > 99 ? "99+" : cart.length}
          label={"Cart"}
          path="/cart"
        />
        {/* <NavItem label={"Practice"} path="/practice" /> */}
        <NavItem label={"About"} path="/about" />
        <NavItem label={"Contanct"} path="/contact" />
      </nav>
    </div>
  );
};

const NavItem = ({ path, pill, label }) => {
  const isPill = pill !== undefined;
  return (
    <NavLink
      className={({ isActive }) => `navItem ${isActive ? "active" : ""}`}
      to={path}
    >
      {label}
      {isPill && <span className="pill">{pill}</span>}
    </NavLink>
  );
};

export default Header;
