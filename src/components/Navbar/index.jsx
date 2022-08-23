import styled from "styled-components";

const NavWrapper = styled.div`
  nav {
    margin-bottom: 2em;
    font-size: 0.8em;
    box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.1);
    height: 54px;
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
    padding: 0 16px 0 16px;
  }

  li a {
    text-decoration: none;
    color: #494949;
  }

  li a:hover {
    color: #6f5eec;
  }
  /* .bcg {
  background-color: #f46555;
  border-radius: 2%;
  padding: 5px;
  margin-right: 0.2em;
}

.bcg a:hover {
  color: #6e5df1;
} */

  .logo {
    display: block;
    position: absolute;
    left: 0;
  }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <nav>
        <ul>
          {/* <div className="logo">Logga placeholder</div> */}
          <li>
            <a href="/">Hem</a>
          </li>
          <li className="bcg">
            <a href="/merinfo">Lär dig mer</a>
          </li>
          <li>
            <a href="/omoss">Om oss</a>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
