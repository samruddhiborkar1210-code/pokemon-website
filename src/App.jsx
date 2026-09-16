import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import PokemonDetails from "./PokemonDetails";
import Pokedex from "./Pokedex";

import Navbar from ".//Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/pokemon/:id"
          element={<PokemonDetails />}
        />

        <Route
          path="/pokedex"
          element={<Pokedex />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
