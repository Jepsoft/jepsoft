import { Inter } from "next/font/google";
import "./globals.css";
import { SnackbarProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jepsoft",
  description: "Best Software Company of the planet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  style={{height:'100vh'}}>
      <SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: 'top' }}>
        {children}
      </SnackbarProvider>
      </body>
    </html>
  );
}
