import styled from "styled-components";
import yrgologo from "../../assets/logos/yrgo.png";
import bflogo from "../../assets/logos/b-f.png";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 2em;
  padding-top: 1em;
  font-size: 0.7em;
  background: #ffffff;

  footer {
    margin-left: 1%;
    margin-right: 1%;
  }

  footer div {
    margin-bottom: 1em;
  }

  hr {
    opacity: 0.4;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: auto;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;

  a {
    margin-right: 1em;
  }
`;

const Navbar = () => {
  return (
    <FooterWrapper>
      <footer>
        <div>Ett samarbete mellan Yrgo och Björk & Frihet</div>
        <LogoWrapper>
          <a href="https://yrgo.se" target="_blank" rel="noreferrer">
            <img src={yrgologo} alt="Yrgo logga" />
          </a>
          <a href="https://bjorkafrihet.se" target="_blank" rel="noreferrer">
            <img src={bflogo} alt="Björk & Frihet logga" />
          </a>
        </LogoWrapper>
        <hr />
        <div>© 2022 ÅterVinnaren</div>
      </footer>
    </FooterWrapper>
  );
};

export default Navbar;
