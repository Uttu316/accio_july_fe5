import "./header.css";
const Header = () => {
  // const h1 = React.createElement('h1',{className:"logo"},"Logo")
  return (
    <div className="header">
      <h1 className="logo">Logo</h1>
      <nav className="navBar">
        <a className="navItem" href="#about">
          About
        </a>
        <a className="navItem" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
