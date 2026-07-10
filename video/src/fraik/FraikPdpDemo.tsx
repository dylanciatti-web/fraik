import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion";
import { Clip } from "./Clip";
import { EndCard } from "./EndCard";
import {
  CLIPS,
  COLORS,
  CROSSFADE,
  ENDCARD_FRAMES,
} from "./storyboard";

const FPS = 30;

// Durée de chaque plan en frames (vitesse réelle, extraits imposés).
const clipDurations = CLIPS.map((c) =>
  Math.round((c.endSec - c.startSec) * FPS),
);

// Placement séquentiel avec chevauchement = CROSSFADE (fondu enchaîné simple).
const clipStarts: number[] = [];
clipDurations.forEach((dur, i) => {
  if (i === 0) clipStarts.push(0);
  else clipStarts.push(clipStarts[i - 1] + clipDurations[i - 1] - CROSSFADE);
});

const endCardStart =
  clipStarts[clipStarts.length - 1] +
  clipDurations[clipDurations.length - 1] -
  CROSSFADE;

export const TOTAL_FRAMES = endCardStart + ENDCARD_FRAMES;

// Fondu d'entrée/sortie (4-6 frames) — jamais de flash, base navy dessous.
const Fade: React.FC<{
  durationInFrames: number;
  fadeIn: boolean;
  fadeOut: boolean;
  children: React.ReactNode;
}> = ({ durationInFrames, fadeIn, fadeOut, children }) => {
  const frame = useCurrentFrame();
  const inOpacity = fadeIn
    ? interpolate(frame, [0, CROSSFADE], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1;
  const outOpacity = fadeOut
    ? interpolate(
        frame,
        [durationInFrames - CROSSFADE, durationInFrames],
        [1, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
      )
    : 1;
  return (
    <AbsoluteFill style={{ opacity: Math.min(inOpacity, outOpacity) }}>
      {children}
    </AbsoluteFill>
  );
};

export const FraikPdpDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy }}>
      {CLIPS.map((clip, i) => {
        const dur = clipDurations[i];
        return (
          <Sequence
            key={clip.id}
            from={clipStarts[i]}
            durationInFrames={dur}
            name={clip.id}
          >
            <Fade durationInFrames={dur} fadeIn={i !== 0} fadeOut>
              <Clip clip={clip} durationInFrames={dur} />
            </Fade>
          </Sequence>
        );
      })}

      <Sequence
        from={endCardStart}
        durationInFrames={ENDCARD_FRAMES}
        name="endcard"
      >
        <EndCard />
      </Sequence>
    </AbsoluteFill>
  );
};
