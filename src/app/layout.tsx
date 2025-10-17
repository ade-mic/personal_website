import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const firaCode = Fira_Code({
  weight: ['400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Ademola Aina — Bridging Research and Real-World Innovation",
  description: "PhD Researcher, Full-Stack Software Engineer, Builder of AI-Driven Solutions for Agriculture, Education, and Sustainability",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "Ademola Aina — Code & Cultivate",
    description: "PhD Researcher, Full-Stack Software Engineer, Builder of AI-Driven Solutions for Agriculture, Education, and Sustainability",
    images: ['/logo.svg'],
  },
  twitter: {
    card: 'summary',
    title: "Ademola Aina — Code & Cultivate",
    description: "PhD Researcher, Full-Stack Software Engineer, Builder of AI-Driven Solutions",
    images: ['/logo.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
