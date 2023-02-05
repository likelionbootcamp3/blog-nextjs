import Navbar from "@/components/partials/Navbar";
import { Poppins } from "@next/font/google";
import "@/styles/globals.css";
import clsx from "clsx";
import Footer from "@/components/partials/Footer";

const bodyFont = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={clsx(
          "flex h-full min-h-screen flex-col bg-background text-base text-body",
          bodyFont.className
        )}
      >
        <Navbar />
        <main className="py-4 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
