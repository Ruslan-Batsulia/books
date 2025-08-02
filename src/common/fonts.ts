import localFont from "next/font/local";

export const Nunito = localFont({
  src: [{
    path: "./../../public/fonts/Nunito-Regular.woff",
    weight: "100 900",
  }],
  variable: "--font-nunito",
  display: "swap",
});
