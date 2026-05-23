import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Operations",
  description: "Frontend take home test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main
          className="
            min-h-screen
            bg-linear-to-br
            from-blue-300
            via-sky-200
            to-violet-300
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
