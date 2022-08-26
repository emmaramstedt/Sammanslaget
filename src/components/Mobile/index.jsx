import styled from "styled-components";
import atervinnarenlarge from "../../assets/logos/atervinnaren.webp";

const MobileView = styled.div`
  border-width: 2px;
  padding: 1em;
  background: #ffffff;
  img {
    width: 100%;
  }
`;

const Mobile = () => {
  return (
    <MobileView>
      <img src={atervinnarenlarge} alt="spel-logga till ÅterVinnaren" />
      <p>Vänligen besök oss på en dator för att spela ÅterVinnaren.</p>
      <p>Mobila enheter stöds ej!</p>
    </MobileView>
  );
};

export default Mobile;
