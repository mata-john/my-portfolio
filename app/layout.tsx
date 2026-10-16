import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "../data/profile";
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
  metadataBase: new URL("https://cv-john-mata.vercel.app"),
  title: `${profile.name} | ${profile.role}`,
  description:
    "Portfolio of John Jayferson Mata, a full-stack developer building modern web applications, community tools, and enterprise software.",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/",
    siteName: profile.name,
    title: `${profile.name} | ${profile.role}`,
    description:
      "Selected web applications, enterprise projects, and technical experience by John Jayferson Mata.",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | ${profile.role}`,
    description:
      "Selected web applications, enterprise projects, and technical experience by John Jayferson Mata.",
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0f" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Script
          id="restore-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "try { const theme = localStorage.getItem('portfolio-theme'); if (theme === 'dark' || theme === 'light') document.documentElement.dataset.theme = theme; } catch {}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
