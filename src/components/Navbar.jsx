import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🚀 CrewmatesHQ</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/create" className="nav-btn">Create a Crewmate</Link>
      </div>
    </nav>
  );
};

export default Navbar;
