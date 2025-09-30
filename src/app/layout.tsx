import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Carlos Gabriel Mercado Jimenez | Full Stack Developer & Game Developer",
    template: "%s | Carlos Gabriel Mercado Jimenez"
  },
  description: "Computer science graduate specializing in front end web development, game development, and creative technology solutions. Building responsive websites, games, and innovative tech experiences.",
  keywords: [
    "Carlos Gabriel Mercado Jimenez",
    "Game Developer", 
    "Web Developer",
    "Computer Science",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Front End"
  ],
  authors: [{ name: "Carlos Gabriel Mercado Jimenez" }],
  creator: "Carlos Gabriel Mercado Jimenez",
  publisher: "Carlos Gabriel Mercado Jimenez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Carlos Gabriel Mercado Jimenez | Full Stack Developer & Game Developer',
    description: 'Computer science graduate specializing in front end web development, game development, and creative technology solutions.',
    siteName: 'Carlos Gabriel Mercado Jimenez Portfolio',
    images: [
      {
        url: '/images/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Carlos Gabriel Mercado Jimenez - Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Gabriel Mercado Jimenez | Full Stack Developer & Game Developer',
    description: 'Computer science graduate specializing in front end web development, game development, and creative technology solutions.',
    images: ['/images/og-image.jpg'], // Same image as Open Graph
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
