import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        ⚡ POKÉMON
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/pokedex">
          Pokédex
        </Link>

      </div>

      <Link to="/pokedex" className="nav-button">
        Explore
      </Link>

    </nav>
  );
}

export default Navbar;
