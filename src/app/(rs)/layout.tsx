import { Header } from "@/components/Header";
import React from "react";

export default async function RSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
    <Header />
      <main>
        {children}
      </main>
    </div>
  );
}
