import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/TheroyOfChangeGZipVersion2.loader.js",
    dataUrl: "/Build/TheroyOfChangeGZipVersion2.data.unityweb",
    frameworkUrl: "/Build/TheroyOfChangeGZipVersion2.framework.js.unityweb",
    codeUrl: "/Build/TheroyOfChangeGZipVersion2.wasm.unityweb",
  });
  return <Unity className="atervinnaren" unityProvider={unityProvider} />;
};
export default Game;
