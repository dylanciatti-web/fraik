// Storyboard Fraïk — démo produit PDP (v1)
// Rush source : public/rush.mp4 (720x1280, 30 fps)
// Vitesse réelle, extraits imposés, textes validés par le client.

export type Segment = { t: string; cy?: boolean };
export type Line = Segment[];

export type Clip = {
  id: string;
  startSec: number; // début de l'extrait dans le rush
  endSec: number; // fin de l'extrait dans le rush
  // Position verticale du cadrage carré (objectPosition Y en %).
  // Plus la valeur est haute, plus on montre le bas de l'image.
  objY: number;
  lines?: Line; // texte lower-third (sinon rien)
  brand?: boolean; // plan final : logotype Fraïk + tagline
};

// Mots à mettre en cyan #00C2D9 : glaçons, fraîcheur/brume fraîche (mots de fraîcheur).
export const CLIPS: Clip[] = [
  {
    id: "clip1",
    startSec: 0.0,
    endSec: 1.3,
    objY: 48,
    lines: [[{ t: "Ajoute des " }, { t: "glaçons", cy: true }]],
  },
  {
    id: "clip2",
    startSec: 3.6,
    endSec: 5.2,
    objY: 52,
    lines: [
      [{ t: "Pour une " }, { t: "fraîcheur", cy: true }],
      [{ t: "plus intense" }],
    ],
  },
  {
    id: "clip3",
    startSec: 5.7,
    endSec: 6.7,
    objY: 52,
    lines: [[{ t: "Appuie. C’est prêt." }]],
  },
  {
    id: "clip4",
    startSec: 13.1,
    endSec: 14.3,
    objY: 46,
    lines: [
      [{ t: "Une " }, { t: "brume fraîche", cy: true }],
      [{ t: "que tu sens immédiatement" }],
    ],
  },
  {
    id: "clip5",
    startSec: 14.4,
    endSec: 16.1,
    objY: 55,
    lines: [
      [{ t: "Brume", cy: true }, { t: " visible" }],
      [{ t: "en quelques secondes" }],
    ],
  },
  {
    id: "clip6",
    startSec: 17.7,
    endSec: 19.4,
    objY: 55,
    brand: true,
  },
];

// Couleurs de marque (cohérentes avec le thème Shopify Fraïk)
export const COLORS = {
  navy: "#0A1628",
  cyan: "#00C2D9",
  white: "#FFFFFF",
  steel: "#B8CCD6",
};

// Transitions
export const CROSSFADE = 5; // frames (fade simple 4-6 frames, pas de flash)
export const ENDCARD_FRAMES = 42; // ~1,4 s de sign-off marque
