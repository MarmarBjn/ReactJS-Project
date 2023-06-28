import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/gallery" className="nav-item">
          Gallery
        </Link>
        <Link to="/about-me" className="nav-item">
          About Me
        </Link>
        <Link to="/" className="nav-item">
          Home |
        </Link>
      </nav>
    </div>
  );
}
