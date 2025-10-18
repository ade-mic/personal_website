import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainLayout from "@/components/MainLayout";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
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
    type: 'website',
    siteName: "Ademola Aina — Code & Cultivate",
  },
  twitter: {
    card: 'summary',
    title: "Ademola Aina — Code & Cultivate",
    description: "PhD Researcher, Full-Stack Software Engineer, Builder of AI-Driven Solutions",
    images: ['/logo.svg'],
    creator: '@AdelinuxApp',
    site: '@AdelinuxApp',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Ademola Aina', url: process.env.NEXT_PUBLIC_SITE_URL }],
  generator: 'Next.js',
  applicationName: 'Ademola Aina Portfolio',
  keywords: ['PhD Research', 'Software Engineering', 'AI Solutions', 'Agriculture', 'Education', 'Sustainability', 'Full-Stack Development', 'Portfolio', 'Ademola Aina'],
  category: 'portfolio',
  alternates: {
    canonical: '/',
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
        <Header />
        <MainLayout>
          {children}
        </MainLayout>
        <Footer />
      </body>
    </html>
  );
}
