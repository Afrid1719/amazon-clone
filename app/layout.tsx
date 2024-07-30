import "@/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased bg-primary-bg text-primary-text`}>
        {children}
      </body>
    </html>
  );
}
