import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/ui/header/";
import { Footer } from "@/components/ui/footer/";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto Jangada",
  description: "Gerenciando minhas finanças e projetando futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col gap-20 justify-between min-h-dvh">
        <Header />
        <main className="flex flex-auto flex-col container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
