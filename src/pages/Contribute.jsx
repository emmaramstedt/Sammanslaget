import Background from "../components/Background";
import Buttons from "../components/Buttons";
import Facts from "../components/Facts";

const Contribute = () => {
  return (
    <>
      <Background>
        <Buttons />
        <Facts
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

export default Contribute;
