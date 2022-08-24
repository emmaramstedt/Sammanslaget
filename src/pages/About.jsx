import AboutCard from "../components/About";
import styled from "styled-components";
import Emma from "../assets/photos/emma.jpeg";
import Adam from "../assets/photos/adam.png";
import Furkan from "../assets/photos/furkan.png";
import Sofia from "../assets/photos/sofia.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  max-width: 900px;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;

  a {
    color: rgb(229 19 54);
    font-weight: 800;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <>
      <AboutUs>
        <h1>Om oss</h1>
        <article>
          <p>
            Vi är ett gäng studerande på&nbsp;
            <a href="https://yrgo.se" target="_blank" rel="noreferrer">
              Yrgo
            </a>
            . Den här sidan är vårt bidrag till Sammanslaget - ett årligt
            hackathon som Yrgo anordnar. I år har uppdraget temat "Theory of
            Change" i ett samarbete med&nbsp;
            <a href="https://bjorkafrihet.se/" target="_blank" rel="noreferrer">
              Björk & Frihet
            </a>
            .
          </p>
          <p>
            Med vårt bidrag vill vi med hjälp av kontrasterna "trevligt spel"
            och statistik, shockera besökaren till en tankeställare och
            förhoppningsvis skapa en vilja om förändring till följd av det.
          </p>
        </article>
      </AboutUs>
      <Wrapper>
        <AboutCard
          Name="Adam Sköld"
          Role="UX Designer"
          Photo={Adam}
          Contribution="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure placeat, itaque odio architecto error eligendi ea expedita perferendis ullam, deserunt, et reprehenderit tempore nemo aspernatur? Fugiat quidem expedita nulla et"
        />
        <AboutCard
          Name="Furkan Cirik"
          Role="Game Creator Programmer"
          Photo={Furkan}
          Contribution="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure placeat, itaque odio architecto error eligendi ea expedita perferendis ullam, deserunt, et reprehenderit tempore nemo aspernatur? Fugiat quidem expedita nulla et"
        />
        <AboutCard
          Name="Sofia Lennhager"
          Role="Game Creator Artist"
          Photo={Sofia}
          Contribution="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure placeat, itaque odio architecto error eligendi ea expedita perferendis ullam, deserunt, et reprehenderit tempore nemo aspernatur? Fugiat quidem expedita nulla et"
        />
        <AboutCard
          Name="Emma Ramstedt"
          Role="Webbutvecklare"
          Photo={Emma}
          Contribution="Jag har utvärderat projektets kriterier och valt att programmera denna hemsida i React. Jag har fokuserat på optimering av materialet som publiceras och sett till att sidan följer WCAG2 samt är responsiv. Det var även jag som föreslog namnet ÅterVinnaren."
        />
      </Wrapper>
    </>
  );
};

export default About;
