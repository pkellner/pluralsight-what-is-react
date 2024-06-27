import { Inter } from "next/font/google";
import "./bootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "What is React Demo",
  description: "Pluralsight course demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
