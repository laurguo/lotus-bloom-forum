import { Geist, Geist_Mono } from "next/font/google";
import DrawerWrapper from "./components/DrawerWrapper";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lotus Bloom Forum",
  description: "A forum for the Lotus Bloom community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          {children}
          <DrawerWrapper />
        </Providers>
      </body>
    </html>
  );
}
