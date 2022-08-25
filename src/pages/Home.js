import Game from "../components/Game";
import Mobile from "../components/Mobile";
import { isBrowser } from "react-device-detect";
import Background from "../components/Background";

const Home = () => {
  if (isBrowser) {
    return <Game />;
  }
  return (
    <Background>
      <Mobile />
    </Background>
  );
};
export default Home;
