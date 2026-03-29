import type { Metadata } from "next";
import "./globals.css";
import { ProgressProvider } from "@/context/ProgressContext";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";

export const metadata: Metadata = {
  title: "Nobi",
  description: "Extend your AI-native PM skills, one stone at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProgressProvider>
          <Header />
          <main className="pb-20">{children}</main>
          <BottomNav />
        </ProgressProvider>
      </body>
    </html>
  );
}
