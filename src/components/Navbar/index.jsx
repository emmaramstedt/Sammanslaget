import "./navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav>
        <ul>
          <div className="logo">Logga placeholder</div>
          <li>
            <a href="/">Hem</a>
          </li>
          <li>
            <a href="/omoss">Om</a>
          </li>
          <li className="bcg">
            <a href="/">Vad kan jag göra?</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
