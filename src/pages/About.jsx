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
  justify-content: center;
  @media only screen and (min-width: 713px) {
    flex-direction: row;
  }
`;

const AboutUs = styled.div`
  display: flex;
  padding: 0 10% 0 10%;
`;

const About = () => {
  return (
    <>
      <AboutUs>
        <article>
          <p>
            Vi är ett gäng studerande på
            <a href="https://yrgo.se" target="_blank" rel="noreferrer">
              Yrgo
            </a>
            . Den här sidan är vårt bidrag till Sammanslaget - ett årligt
            hackathon som Yrgo anordnar. I år har uppdraget temat "Theory of
            Change".
          </p>
          <p>
            Med vårt bidrag vill vi med hjälp av kontrasterna "trevligt spel"
            och den statistik, otroliga volymen vatten som snabbmodet shockera
            användare
          </p>
        </article>
      </AboutUs>
      <Wrapper>
        <AboutCard
          Name="Adam Sköld"
          Role="UX Designer"
          Photo={Adam}
          Contribution="hejsan"
        />
        <AboutCard
          Name="Furkan Cirik"
          Role="Game Creator Programmer"
          Photo={Furkan}
          Contribution="hejsan"
        />
        <AboutCard
          Name="Sofia Lennhager"
          Role="Game Creator Artist"
          Photo={Sofia}
          Contribution="hejsan"
        />
        <AboutCard
          Name="Emma Ramstedt"
          Role="Webbutvecklare"
          Photo={Emma}
          Contribution="hejsan"
        />
      </Wrapper>
    </>
  );
};

export default About;
