import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pokedex() {

  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const limit = 12;

  useEffect(() => {

    setLoading(true);

    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`
    )
      .then(res => res.json())
      .then(data => {

        const requests = data.results.map(p =>
          fetch(p.url).then(res => res.json())
        );

        Promise.all(requests)
          .then(result => {

            setPokemon(result);
            setLoading(false);

          });

      });

  }, [page]);


  const filteredPokemon = pokemon.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <section className="pokedex">

      <div className="section-title">

        <p>EXPLORE</p>

        <h2>Pokédex</h2>

      </div>


      <div className="search-box">

        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <span>🔍</span>

      </div>


      {loading ? (

        <div className="loader">

          <div className="pokeball-loader"></div>

          <p>Loading Pokémon...</p>

        </div>

      ) : (

        <>

          <div className="pokemon-grid">

            {filteredPokemon.map(p => (

              <Link
                to={`/pokemon/${p.id}`}
                key={p.id}
                className="card-link"
              >

                <div className="pokemon-card">

                  <span className="pokemon-number">
                    #{String(p.id).padStart(3, "0")}
                  </span>

                  <img
                    src={
                      p.sprites.other.home.front_default
                    }
                    alt={p.name}
                  />

                  <h2>
                    {p.name}
                  </h2>

                  <div className="types">

                    {p.types.map(t => (

                      <span
                        key={t.type.name}
                        className={`type ${t.type.name}`}
                      >
                        {t.type.name}
                      </span>

                    ))}

                  </div>

                </div>

              </Link>

            ))}

          </div>


          <div className="pagination">

            <button
              disabled={page === 0}
              onClick={() =>
                setPage(page - 1)
              }
            >
              ← Previous
            </button>

            <span>
              Page {page + 1}
            </span>

            <button
              onClick={() =>
                setPage(page + 1)
              }
            >
              Next →
            </button>

          </div>

        </>

      )}

    </section>
  );
}

export default Pokedex;

