import localFont from "next/font/local";

export const chamferGothic = localFont({
  src: "./ChamferGothicRR-Bold.woff2",
  variable: "--font-chamfer",
  display: "swap",
});

export const trebuc = localFont({
  src: [
    {
      path: "./trebuc.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Trebuchet-MS-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-trebuc",
  display: "swap",
});