import { Amaranth } from "next/font/google";
import DrawerWrapper from "./components/DrawerWrapper";
import { Providers } from "./providers";
import "./globals.css";

const amaranth = Amaranth({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amaranth",
});

export const metadata = {
  title: "Lotus Bloom Forum",
  description: "A forum for the Lotus Bloom community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${amaranth.variable}`}>
        <Providers>
          {children}
          <DrawerWrapper />
        </Providers>
      </body>
    </html>
  );
}
