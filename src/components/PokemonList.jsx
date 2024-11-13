import styled from "styled-components";
import MOCK_DATA from "./mockDate";
import PokemonCard from "./PokemonCard";

const Cardstyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function PokemonList() {
  return (
    <Cardstyle>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Cardstyle>
  );
}

export default PokemonList;
