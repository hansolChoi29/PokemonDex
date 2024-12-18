import { Routes, Route } from "react-router-dom";

import PokemonDetail from "./components/PokemonDetail";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <>
    //////앙아ㅏㅇㅇ
    // 아아아아아아앙
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/dex/:id" element={<PokemonDetail />} />
        </Routes>
      </PokemonProvider>
    </>
    
  );
}

export default App;