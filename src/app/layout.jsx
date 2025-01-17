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
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}  style={{height:'100vh'}} >
      <SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: 'top' }}>
        {children}
      </SnackbarProvider>
      </body>
    </html>
  );
}
