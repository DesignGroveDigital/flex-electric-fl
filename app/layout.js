import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Nav";
import FooterDark from "./components/Footer";

const xoireqe = localFont({
  src: '../fonts/Xoireqe.ttf',
  variable: '--font-xoireqe',
});

const optiEdgar = localFont({
  src: '../fonts/OPTIEdgarBold-Extended.otf',
  variable: '--font-opti-edgar',
});

export const metadata = {
  title: "FlexElectric - Professional Electrical Services",
  description: "Licensed electrical contractors serving South Florida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${xoireqe.variable} ${optiEdgar.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FooterDark />
      </body>
    </html>
  );
}