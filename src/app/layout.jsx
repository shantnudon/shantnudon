import "./globals.css";

export const metadata = {
  title: "ShantnuDON",
  description: "Its me ShantnuDON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body style={{"backgroundImage": `url(/bg.png)`}} className="text-white"> */}
      <body className="text-white">
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
