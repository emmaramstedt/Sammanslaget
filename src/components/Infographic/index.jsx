import styled from "styled-components";
import infographicdesktop from "../../assets/images/infographicdesktop.webp";
import infographicmobile from "../../assets/images/infographicmobile.webp";

const InfographicCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Infographic = () => {
  return (
    <InfographicCard>
      <picture>
        <source media="(min-width: 536px)" srcSet={infographicdesktop} />
        <img
          src={infographicmobile}
          alt="En infografisk bild med statistik. Statistiken visar att 1 tshirt och ett par jeans kostar 13700 liter vatten vilket motsvarar 91 badkar."
        />
      </picture>
    </InfographicCard>
  );
};

export default Infographic;
