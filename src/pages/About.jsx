import AboutCard from "../components/About";
import styled from "styled-components";
import Emma from "../assets/photos/emma.webp";
import Adam from "../assets/photos/adam.webp";
import Furkan from "../assets/photos/furkan.webp";
import Sofia from "../assets/photos/sofia.webp";
import Background from "../components/Background";

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
      <Background>
        <AboutUs>
          <h1>Om oss</h1>
          <article>
            <p>
              Vi är ett gäng studerande på&nbsp;
              <a href="https://yrgo.se" target="_blank" rel="noreferrer">
                Yrgo
              </a>
              . Den här sidan är vårt bidrag till Sammanslaget - ett årligt
              hackathon som Yrgo anordnar. I år är temat "Theory of Change" i
              samarbete med&nbsp;
              <a
                href="https://bjorkafrihet.se/"
                target="_blank"
                rel="noreferrer"
              >
                Björk & Frihet
              </a>
              .
            </p>
            <p>
              Med vårt bidrag ÅterVinnaren vill vi med hjälp av kontrasterna
              trevligt spel och mindre trevlig statistik shocka besökaren till
              en tankeställare och till följd av detta hoppas vi på att ingjuta
              en vilja om att förändra sin konsumption.
            </p>
          </article>
        </AboutUs>
        <Wrapper>
          <AboutCard
            Name="Adam Sköld"
            Role="UX Designer"
            Photo={Adam}
            Contribution="Jag har drivit designprocessen. Jag har skissat på gränssnitt och skapat prototyper. Jag har även utfört tester och intervjuer för att se till att upplevelsen lämnar rätt känsla."
          />
          <AboutCard
            Name="Furkan Cirik"
            Role="Game Creator Programmer"
            Photo={Furkan}
            Contribution="Jag har tagit vår spel-idé och gjort den till verklighet med hjälp av spelmotorn Unity dom kodas i C#."
          />
          <AboutCard
            Name="Sofia Lennhager"
            Role="Game Creator Artist"
            Photo={Sofia}
            Contribution="Jag har, enligt projektets färgsättning och känsla, tagit fram det visuella i ÅterVinnaren, så som sprites, bakgrund och animationer."
          />
          <AboutCard
            Name="Emma Ramstedt"
            Role="Webbutvecklare"
            Photo={Emma}
            Contribution="Jag har utvärderat projektets kriterier och valt att utveckla denna hemsida i React. Jag har lagt fokus på optimering av material, att sidan följer WCAG2 samt att den är responsiv."
          />
        </Wrapper>
      </Background>
    </>
  );
};

export default About;
