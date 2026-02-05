import type { Metadata } from "next";
import { Comfortaa, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// nimbuslab branding fonts
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "create-next-landing | Build stunning landing pages in minutes",
  description:
    "The fastest way to launch your next project. Built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui. Production-ready, type-safe, and beautiful.",
  keywords: [
    "landing page",
    "nextjs",
    "next.js 16",
    "react 19",
    "tailwind css 4",
    "shadcn/ui",
    "template",
    "starter",
    "typescript",
    "nimbuslab",
  ],
  authors: [{ name: "nimbuslab", url: "https://nimbuslab.com.br" }],
  creator: "nimbuslab",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "create-next-landing | Build stunning landing pages in minutes",
    description:
      "The fastest way to launch your next project. Built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.",
    siteName: "create-next-landing",
    url: "https://github.com/nimbuslab/create-next-landing",
  },
  twitter: {
    card: "summary_large_image",
    title: "create-next-landing | Build stunning landing pages in minutes",
    description:
      "The fastest way to launch your next project. Production-ready, type-safe, and beautiful.",
    creator: "@nimbuslab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${comfortaa.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
