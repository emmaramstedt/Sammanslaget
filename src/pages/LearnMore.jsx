import Background from "../components/Background";
import Facts from "../components/Facts";
import Infographic from "../components/Infographic";

const LearnMore = () => {
  return (
    <>
      <Background>
        <Facts
          Class="fakta"
          Title="Modeindustrin och vattenåtgång"
          Content={
            <>
              <p>
                Modeindustrin är den näst mest vattenintensiva industrin i
                världen. Varje år används
                <strong> 79 miljarder kubikmeter vatten.</strong>
              </p>

              <p>
                För att odla ett kilo bomullsfibrer går det åt upp till
                <strong> 29 000 liter vatten </strong>eller
                <strong> 193 fyllda badkar.</strong>
              </p>

              <p>
                Bara jeansen du har på dig har sannolikt förbrukat
                <strong> 11 000 liter vatten </strong>
                vilket motsvarar
                <strong> dricksvatten för en person i 10 år.</strong>
              </p>
              <Infographic />
            </>
          }
        />
      </Background>
      <Background>
        <Facts
          HeaderStyle="orange"
          Class="bidra"
          Title="Hur kan jag bidra?"
          Content={
            <>
              <ul>
                <li>Köp begagnat i första hand.</li>
                <li>Vädra kläderna ofta, då håller de sig fräscha!</li>
                <li>Lär dig lappa och laga dina kläder. </li>
                <li>
                  Designa om! Kanske dina gamla favoriter går att sy om, eller
                  dekorera med ett broderi?
                </li>
                <li>
                  Skänk alltid kläder när du inte längre vill använda dem. Kasta
                  aldrig! Trasiga eller inte, dina kläder gör större nytta i
                  kretsloppet än de gör i soptunnan.
                </li>
                <li>Om du ändå måste köpa nyproducerat, köp ekologiskt.</li>
              </ul>
            </>
          }
        />
      </Background>
    </>
  );
};

export default LearnMore;
