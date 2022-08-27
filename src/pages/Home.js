import Game from "../components/Game";
import Mobile from "../components/Mobile";
import { isBrowser } from "react-device-detect";
import GameBackground from "../components/GameBackground";
import Background from "../components/Background";

const Home = () => {
  // if (isBrowser) {
  //   return (
  //     <>
  //       <GameBackground />
  //       <Game />
  //     </>
  //   );
  // }
  return (
    <>
      <GameBackground />
      <Background>
        <Game />
      </Background>
    </>
  );
};
export default Home;
