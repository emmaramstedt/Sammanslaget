import styled from "styled-components";
import atervinnarenlarge from "../../assets/logos/atervinnaren.webp";

const MobileView = styled.div`
  border-width: 2px;
  padding: 1em;
  background: #ffffff;
  text-align: center;

  img {
    width: 100%;
  }
`;

const Mobile = () => {
  return (
    <MobileView>
      <img src={atervinnarenlarge} alt="spel-logga till ÅterVinnaren" />
      <h1>Dator krävs</h1>
      <p>Vänligen besök oss på en dator för att spela ÅterVinnaren.</p>
      <p>Mobila enheter stöds ej!</p>
    </MobileView>
  );
};

export default Mobile;
