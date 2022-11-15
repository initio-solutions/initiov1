import "../styles/globals.css";
import Navbar from "../components/navbar";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
