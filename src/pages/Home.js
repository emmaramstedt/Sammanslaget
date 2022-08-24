import Game from "../components/Game";
import Mobile from "../components/Mobile";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1920);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return <div>{isDesktop ? <Game /> : <Mobile />}</div>;
};
export default Home;
