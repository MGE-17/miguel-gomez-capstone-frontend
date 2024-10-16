import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/InStock-Logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="app-header">
      <NavLink className="app-header__logolink" to="/">
        <img src={logo} />
      </NavLink>
      <nav className="app-header__nav">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "app-header__navlink app-header__navlink--active"
              : "app-header__navlink"
          }
          to="/warehouses"
        >
          Warehouses
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "app-header__navlink app-header__navlink--active"
              : "app-header__navlink"
          }
          to="/inventories"
        >
          Inventory
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
