import styled from "styled-components";
import { Link } from "react-router-dom";
import { usePokemonContext } from "../context/PokemonContext";

const CardStyle = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f8f8f8;
  transition: transform 0.2s ease;
  gap: 30px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;
const ButtonStyle = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;
function PokemonCard({ pokemon }) {
  const { addPokemon } = usePokemonContext();
  return (
    <CardStyle>
      <Link to={`/dex/${pokemon.id}`}>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
      </Link>
      <h3>{pokemon.korean_name}</h3>
      <ButtonStyle onClick={() => addPokemon(pokemon)}>추가</ButtonStyle>
    </CardStyle>
  );
}

export default PokemonCard;
