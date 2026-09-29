import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/">Pokémon</Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/pokedex">Pokédex</Link>

        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;