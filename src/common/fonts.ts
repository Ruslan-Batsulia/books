import localFont from "next/font/local";

export const Oswald = localFont({
  src: [{
    path: "./../../public/fonts/Oswald-Regular.woff",
    weight: "100 900",
  }],
  variable: "--font-oswald",
  display: "swap",
});
