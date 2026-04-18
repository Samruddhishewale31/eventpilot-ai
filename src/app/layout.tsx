import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { AIAssistant } from "@/components/assistant/AIAssistant";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "EventPilot AI | The Intelligent Event Companion",
  description: "Navigate, plan, and connect at physical events with an AI-first personalized experience.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import { SettingsProvider } from "@/components/providers/SettingsProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col mesh-gradient`}>
        <SettingsProvider>
          <Navbar />
          <main className="flex-1 flex flex-col pt-24 md:pt-32">
            {children}
          </main>
          <AIAssistant />
        </SettingsProvider>
      </body>
    </html>
  );
}
