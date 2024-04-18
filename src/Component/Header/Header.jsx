import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
    </div>
  );
};

export default Header;
