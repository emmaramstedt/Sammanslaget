import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/TheoryOfChange.loader.js",
    dataUrl: "/Build/TheoryOfChange.data.unityweb",
    frameworkUrl: "/Build/TheoryOfChange.framework.js.unityweb",
    codeUrl: "/Build/TheoryOfChange.wasm.unityweb",
  });
  return <Unity className="atervinnaren" unityProvider={unityProvider} />;
};
export default Game;
