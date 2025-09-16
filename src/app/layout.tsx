import { Tangerine, Sansita_Swashed, Nunito } from "next/font/google";
import "./globals.css";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
});

const sansita = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sansita",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Dhevan & Nurra",
  description: "The Wedding Of Dhevan & Nurra",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tangerine.variable} ${sansita.variable} ${nunito.variable} bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
