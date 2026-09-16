import { Link } from "react-router-dom";

function Hero() {

  return (
    <section className="hero">

      <div className="hero-content">

        <p className="small-title">
          WELCOME TO THE POKÉMON WORLD
        </p>

        <h1>
          Gotta Catch
          <span>'Em All!</span>
        </h1>

        <p className="hero-text">
          Discover Pokémon, explore their abilities,
          learn their stats and build your collection.
        </p>

        <Link
          to="/pokedex"
          className="hero-button"
        >
          Explore Pokédex ⚡
        </Link>

      </div>

      <div className="hero-pokemon">

        <div className="circle"></div>

        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
          alt="Pikachu"
        />

      </div>

    </section>
  );
}

export default Hero;

