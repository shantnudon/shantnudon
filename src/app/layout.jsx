import "./globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata = {
  title: "ShantnuDON",
  description: "Its me ShantnuDON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body style={{"backgroundImage": `url(/bg.png)`}} className="text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
