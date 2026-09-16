import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PokemonDetails() {

  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setPokemon(data));

  }, [id]);


  if (!pokemon) {

    return (
      <div className="loader">

        <div className="pokeball-loader"></div>

        <p>Loading...</p>

      </div>
    );

  }


  return (

    <section className="details">

      <Link
        to="/pokedex"
        className="back-button"
      >
        ← Back to Pokédex
      </Link>


      <div className="details-card">

        <div className="details-image">

          <img
            src={
              pokemon.sprites.other.home.front_default
            }
            alt={pokemon.name}
          />

        </div>


        <div className="details-info">

          <span className="pokemon-id">
            #{String(pokemon.id).padStart(3, "0")}
          </span>

          <h1>
            {pokemon.name}
          </h1>


          <div className="types">

            {pokemon.types.map(t => (

              <span
                key={t.type.name}
                className={`type ${t.type.name}`}
              >
                {t.type.name}
              </span>

            ))}

          </div>


          <div className="detail-stats">

            <div>
              <span>Height</span>
              <strong>
                {pokemon.height / 10} m
              </strong>
            </div>

            <div>
              <span>Weight</span>
              <strong>
                {pokemon.weight / 10} kg
              </strong>
            </div>

          </div>


          <h3>Base Stats</h3>


          {pokemon.stats.map(stat => (

            <div
              className="stat"
              key={stat.stat.name}
            >

              <div className="stat-name">

                <span>
                  {stat.stat.name}
                </span>

                <b>
                  {stat.base_stat}
                </b>

              </div>

              <div className="stat-bar">

                <div
                  style={{
                    width:
                      `${Math.min(
                        stat.base_stat,
                        100
                      )}%`
                  }}
                ></div>

              </div>

            </div>

          ))}


        </div>

      </div>

    </section>
  );
}

export default PokemonDetails;
