import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: auto;
`;

const Navbar = () => {
  return (
    <FooterWrapper>
      <footer>jag är en footer</footer>
    </FooterWrapper>
  );
};

export default Navbar;
