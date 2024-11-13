import styled from "styled-components";
import { usePokemonContext } from "../PokemonContext";
import Pokemonball from "../assets/Pokemonball.png";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin: 20px;
  align-items: center;
`;

const PokemonSlot = styled.div`
  width: 120px;
  height: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  background-image: ${({ isEmpty }) =>
    isEmpty ? `url(${Pokemonball})` : "none"};
  background-size: 80px;
  background-position: center;
  background-repeat: no-repeat;
`;

const PokemonImage = styled.img`
  width: 80px;
  height: 80px;
  display: ${({ isEmpty }) => (isEmpty ? "none" : "block")};
`;

const PokemonName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  display: ${({ isEmpty }) => (isEmpty ? "none" : "block")};
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  display: ${({ isEmpty }) => (isEmpty ? "none" : "block")};

  &:hover {
    background-color: #ff4d4d;
    color: #fff;
  }
`;

function Dashboard() {
  const { selectedPokemon, removePokemon } = usePokemonContext();
  const totalSlots = 6; // 전체 슬롯 개수

  return (
    <DashboardContainer>
      {Array.from({ length: totalSlots }).map((_, index) => {
        const pokemon = selectedPokemon[index];
        const isEmpty = !pokemon;

        return (
          <PokemonSlot key={index} isEmpty={isEmpty}>
            {pokemon && (
              <>
                <PokemonImage
                  src={pokemon.img_url}
                  alt={pokemon.korean_name}
                  isEmpty={isEmpty}
                />
                <PokemonName isEmpty={isEmpty}>
                  {pokemon.korean_name}
                </PokemonName>
                <RemoveButton
                  isEmpty={isEmpty}
                  onClick={() => removePokemon(pokemon.id)}
                >
                  삭제
                </RemoveButton>
              </>
            )}
          </PokemonSlot>
        );
      })}
    </DashboardContainer>
  );
}

export default Dashboard;
