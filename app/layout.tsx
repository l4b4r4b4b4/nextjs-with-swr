import "../styles/globals.css";
import ClientProvider from "./Components/ClientProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientProvider>
        <body>{children}</body>
      </ClientProvider>
    </html>
  );
}
