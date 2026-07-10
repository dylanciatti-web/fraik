import "./index.css";
import { Composition } from "remotion";
import { FraikPdpDemo, TOTAL_FRAMES } from "./fraik/FraikPdpDemo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FraikPdpDemo"
        component={FraikPdpDemo}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
