import { Video } from "@remotion/media";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, type Clip as ClipType, type Line } from "./storyboard";

const FONT_DISPLAY = "'Helvetica Neue', Arial, sans-serif";

// Rendu d'une ligne de texte : segments blancs + mots-clés cyan.
const TextLines: React.FC<{ lines: Line[]; fontSize: number }> = ({
  lines,
  fontSize,
}) => (
  <>
    {lines.map((line, i) => (
      <div
        key={i}
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 800,
          fontSize,
          lineHeight: 1.12,
          letterSpacing: "-0.01em",
          color: COLORS.white,
          textShadow: "0 2px 18px rgba(0,0,0,0.55)",
        }}
      >
        {line.map((seg, j) => (
          <span key={j} style={{ color: seg.cy ? COLORS.cyan : COLORS.white }}>
            {seg.t}
          </span>
        ))}
      </div>
    ))}
  </>
);

export const Clip: React.FC<{ clip: ClipType; durationInFrames: number }> = ({
  clip,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { width } = useVideoConfig();
  const startFrame = Math.round(clip.startSec * fps);
  const endFrame = Math.round(clip.endSec * fps);

  // Recadrage carré explicite (cover fiable) : le rush 720x1280 est affiché
  // en pleine largeur, puis décalé verticalement pour garder le produit centré.
  const videoW = width; // 1080
  const videoH = Math.round((width * 1280) / 720); // 1920
  const overflowY = videoH - width; // 840
  const topOffset = -(clip.objY / 100) * overflowY;

  // Zoom lent, maximum 3 % sur toute la durée du plan.
  const scale = interpolate(frame, [0, durationInFrames], [1, 1.03], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Apparition douce du texte (6 frames), reste ensuite affiché.
  const textOpacity = interpolate(frame, [3, 9], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy, overflow: "hidden" }}>
      {/* Vidéo recadrée en carré, produit centré, zoom lent */}
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            width: videoW,
            height: videoH,
            left: 0,
            top: topOffset,
            scale: String(scale),
            transformOrigin: "center center",
          }}
        >
          <Video
            src={staticFile("rush.mp4")}
            trimBefore={startFrame}
            trimAfter={endFrame}
            muted
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </AbsoluteFill>

      {/* Scrim bas pour la lisibilité du texte sur mobile */}
      {(clip.lines || clip.brand) && (
        <AbsoluteFill
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,22,40,0) 45%, rgba(10,22,40,0.35) 65%, rgba(10,22,40,0.82) 100%)",
          }}
        />
      )}

      {/* Texte lower-third classique */}
      {clip.lines && !clip.brand && (
        <AbsoluteFill
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 90px 110px",
            textAlign: "center",
            opacity: textOpacity,
          }}
        >
          <TextLines lines={clip.lines} fontSize={76} />
        </AbsoluteFill>
      )}

      {/* Plan final : logotype Fraïk + tagline sur le beau plan de brume */}
      {clip.brand && (
        <AbsoluteFill
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 90px 108px",
            textAlign: "center",
            opacity: textOpacity,
          }}
        >
          <div
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 800,
              fontSize: 120,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: COLORS.white,
              textShadow: "0 3px 22px rgba(0,0,0,0.6)",
            }}
          >
            Fraïk
          </div>
          <div
            style={{
              marginTop: 18,
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontSize: 46,
              lineHeight: 1.15,
              color: COLORS.white,
              textShadow: "0 2px 16px rgba(0,0,0,0.55)",
            }}
          >
            La <span style={{ color: COLORS.cyan }}>fraîcheur</span> ciblée sur
            toi
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
