import styled from "styled-components";
import desktop from "../../assets/images/backgrounddesktop.webp";
import medium from "../../assets/images/backgroundmedium.webp";

const Background = styled.div`
  position: absolute;
  top: 45px;
  z-index: -1;
  width: 100vw;
  height: 900px;

  @media only screen and (min-width: 1024px) {
    background: url(${medium}) no-repeat;
    background-size: auto 900px;
  }

  @media only screen and (min-width: 1201px) {
    background: url(${desktop}) no-repeat;
    background-size: 100vw 900px;
    background-position: center;
  }
`;

const GameBackground = () => {
  return <Background></Background>;
};

export default GameBackground;
