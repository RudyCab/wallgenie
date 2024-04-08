import { useState } from "react";
import WallEditorPage from "./WallEditorPage";

const WallEditorContainer = () => {
  const [wallColor, setWallColor] = useState("lightgrey");

  return <WallEditorPage wallColor={wallColor} setWallColor={setWallColor} />;
};

export default WallEditorContainer;
