import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "What is React Demo",
  description: "Pluralsight course demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
