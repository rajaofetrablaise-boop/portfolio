import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PostHogProvider } from "@/components/posthog-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blaise | Product UX/UI Designer",
  description:
    "Product UX/UI Designer basé à Madagascar. Je transforme des besoins produit complexes en interfaces claires et utilisables.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <PostHogProvider>
          <LanguageProvider>
            <SmoothScroll />
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <WhatsAppButton />
          </LanguageProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
