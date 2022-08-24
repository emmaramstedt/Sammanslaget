import Game from "../components/Game";
import Mobile from "../components/Mobile";
import { isBrowser } from "react-device-detect";

const Home = () => {
  if (isBrowser) {
    return <Mobile />;
  }
  return <Game />;
};
export default Home;
