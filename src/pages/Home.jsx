import { Link } from "react-router-dom";
import PokemonLogo from "../assets/PokemonLogo.png";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #cacaca;
`;

const LogoImage = styled.img`
  width: 550px;
  height: auto;
`;

const StyledLink = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;

  &:hover {
    background-color: #ffffff;
    color: black;
  }
`;

function Home() {
  return (
    <CenteredContainer>
      <LogoImage src={PokemonLogo} alt="Pokemon Logo" />
      <StyledLink to="/dex">포켓몬도감 시작하기</StyledLink>
    </CenteredContainer>
  );
}

export default Home;
