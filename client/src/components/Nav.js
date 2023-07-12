import { Link } from "react-router-dom";
import "./index.css";

const Nav = ({ user }) => {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + ""}
          alt="oops"
        />
        <span className="shop-name">&nbsp; Salty's Surfshop</span>
      </Link>
      <ul>
        <li className="nav-link-wrapper">
          <Link to="/products"> Products </Link>
        </li>

        <li className="nav-link-wrapper">
          <Link to="/products/new">Sell</Link>
        </li>

        <li className="nav-link-wrapper">
          <Link to="/cartitems"> Cart </Link>
        </li>

        <li className="nav-link-wrapper">
          <Link to="/home"> Home </Link>
        </li>

        <li className="nav-link-wrapper">
          <Link to="/about"> About </Link>
        </li>

        <li className="nav-link-wrapper">
          <Link to={user ? "/signout" : "/signin"}>
            {user ? "SignOut" : "SignIn"}
          </Link>
        </li>

        <li className="nav-link-wrapper">
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
