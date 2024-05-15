import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "@/components/navbar";
import Providers from "@/components/Provider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Activity Map",
  description:
    "Join the fun and connect with like-minded enthusiasts at Activity Map! Discover exciting activities, forge new connections, and embark on unforgettable adventures. It's where passion meets people, and every moment is a chance to create lifelong memories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <Navbar />
          <main className="pb-16 md:pt-28 pt-24">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
