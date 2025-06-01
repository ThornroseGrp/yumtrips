import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ItineraryProvider } from "@/lib/itinerary-context";
import type { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beach 'n Boil - Outer Banks Adventure",
  description: "Smith family beach vacation itinerary with real-time tracking",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#06b6d4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ItineraryProvider>
            {children}
          </ItineraryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
