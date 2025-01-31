import { Inter } from "next/font/google";
import "./globals.css";
import { SnackbarProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jepsoft | Smart Web & Software Solutions for Your Business",
  description: "Jepsoft delivers top-notch web, software, and NFC solutions. From custom websites to smart business tools, we craft high-quality digital experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  style={{height:'100vh'}} >
      <SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: 'top' }}>
        {children}
      </SnackbarProvider>
      </body>
    </html>
  );
}
