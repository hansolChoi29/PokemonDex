import { Routes, Route } from "react-router-dom";
import Dex from "./pages/Dex";
import Home from "./pages/Home";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dex" element={<Dex />} />
      <Route path="/dex/:id" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
