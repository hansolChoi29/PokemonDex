// PokemonList.jsx
import styled from "styled-components";
import MOCK_DATA from "./mockDate";
import PokemonCard from "./PokemonCard";

const Cardstyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function PokemonList({ addPokemon }) {
  // addPokemon을 props로 받음
  return (
    <Cardstyle>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
        />
      ))}
    </Cardstyle>
  );
}

export default PokemonList;
