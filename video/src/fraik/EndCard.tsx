import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { COLORS } from "./storyboard";

const FONT_DISPLAY = "'Helvetica Neue', Arial, sans-serif";

// Sign-off marque sur fond navy — clôture propre, pas de flash.
export const EndCard: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const ruleWidth = interpolate(frame, [4, 20], [0, 120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.navy,
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 800,
          fontSize: 140,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: COLORS.white,
        }}
      >
        Fraïk
      </div>
      <div
        style={{
          width: ruleWidth,
          height: 4,
          borderRadius: 4,
          backgroundColor: COLORS.cyan,
          margin: "26px 0",
        }}
      />
      <div
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 700,
          fontSize: 40,
          color: COLORS.steel,
          letterSpacing: "0.01em",
        }}
      >
        La fraîcheur ciblée sur toi
      </div>
    </AbsoluteFill>
  );
};
