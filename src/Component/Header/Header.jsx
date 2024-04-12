import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Header;
