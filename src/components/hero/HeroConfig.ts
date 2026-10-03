export interface HeroConfig {
  name: string;
  tagline: string;
  subDescription: string;
  photoSrc: string;
  navContactText: string;
  navContactHref: string;
  logoWordmark: string;
  dotLetter: string;
  footerText: string;
  privacyText: string;
  privacyHref: string;
  githubHref: string;
  linkedinHref: string;
  palette: {
    bg: string;
    powderBlue: string;
    violetAccent: string;
    offWhite: string;
    graySubtle: string;
    borderSubtle: string;
  };
  skills: string[];
}

export const HERO_CONFIG: HeroConfig = {
  name: "Parth Khowal",
  tagline: "full-stack developer & AI engineer",
  subDescription: "Specializing in deterministic software, production web systems, and AI-integrated pipelines.",
  photoSrc: "/me.jpg",
  navContactText: "Contact",
  navContactHref: "/contact",
  logoWordmark: "parth",
  dotLetter: "a",
  footerText: "© parth 2026 — built with passion, code & AI.",
  privacyText: "Privacy",
  privacyHref: "#privacy",
  githubHref: "https://github.com/ParthK0",
  linkedinHref: "https://linkedin.com/in/parth-khowal-a37903294",
  palette: {
    bg: "#101010",
    powderBlue: "#97B6DA",
    violetAccent: "#A87BFF",
    offWhite: "#EEECE6",
    graySubtle: "#888888",
    borderSubtle: "#222222",
  },
  skills: [
    "React",
    "Python",
    "Next.js",
    "TensorFlow",
    "FastAPI",
    "TypeScript",
    "PostgreSQL",
    "PyTorch",
  ],
};
