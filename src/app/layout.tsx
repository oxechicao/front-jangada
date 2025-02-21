import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui";
import { getDictionary, Locales } from "@/dictionaries";
import { DictionaryProvider } from "@/app/_context/DictionaryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export interface RootLayoutProps {
  children?: React.ReactNode;
  params: Promise<{ lang: Locales }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locales }>;
}>) {
  const dictionary: Record<string, {}> = getDictionary("pt-BR");
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="bg-neutral-900 p-16 flex min-h-screen  align-middle justify-center">
          <DictionaryProvider dictionary={dictionary}>
            {children}
          </DictionaryProvider>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
