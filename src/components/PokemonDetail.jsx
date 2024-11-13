import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "./mockDate";
import styled from "styled-components";

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));

  if (!pokemon) return;
  const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8efa0;
    text-align: center;
  `;

  const PokemonImage = styled.img`
    width: 150px;
    height: 150px;
  `;

  const BackButton = styled.button`
    margin-top: 20px;
    font-size: 16px;
    padding: 10px 20px;
    color: #fff;
    background-color: #ff0000;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #ffffff;
      color: black;
      &:hover {
        background-color: #ff4d4d;
        color: #fff;
      }
    }
  `;
  return (
    <DetailContainer>
      <h2>{pokemon.korean_name}</h2>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>{pokemon.description}</p>

      <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
    </DetailContainer>
  );
}

export default PokemonDetail;
