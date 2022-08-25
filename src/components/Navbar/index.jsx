import styled from "styled-components";
import { NavLink } from "react-router-dom";
import atervinnarenlogo from "../../assets/logos/atervinnaren.png";

const NavWrapper = styled.div`
  width: 100vw;
  border-bottom: 1px solid #6e5eec74;
  background-color: #ffffffda;
  nav {
    margin-bottom: 2em;
    font-size: 0.8em;
    font-weight: 800;
    height: 1.5em;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 54px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  li {
    display: inline;
    margin: 0 15px 0 15px;
    padding: 0 1px 0 1px;
  }

  a {
    text-decoration: none;
    color: #494949;
  }

  a:hover {
    color: #6f5eec;
  }

  .logo {
    display: block;

    left: 0;
  }

  .active li {
    border-bottom: 1px solid #6f5eec;
    color: #6f5eec;
  }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <nav>
        <ul>
          <NavLink to="/">
            {/* <img src={atervinnarenlogo} alt="Återvinnaren logo" /> */}
            <li>ÅterVinnaren</li>
          </NavLink>
          <NavLink to="/merinfo">
            <li>Lär dig mer</li>
          </NavLink>
          <NavLink to="/omoss">
            <li>Om oss</li>
          </NavLink>
        </ul>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
