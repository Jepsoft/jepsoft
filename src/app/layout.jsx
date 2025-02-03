import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import Head for meta tags
import StructuredData from "./StructuredData";
import { SnackbarProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jepsoft | Smart Web & Software Solutions for Your Business",
  description: "Jepsoft delivers top-notch web, software, and NFC solutions. From custom websites to smart business tools, we craft high-quality digital experiences",
  openGraph: {
    title: "Jepsoft - Custom Software & NFC Solutions",
    description: "Jepsoft offers custom software, NFC cards, chatbots, and web solutions for businesses. Contact us today!",
    url: "https://www.jepsoft.com",
    type: "website",
    images: [
      {
        url: "https://jepsoft.com/og-image.jpg",
      },
    ],
  },
  alternates: {
    canonical: "https://www.jepsoft.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <meta property="og:title" content="Jepsoft - Custom Software & NFC Solutions" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://jepsoft.com/og-image.jpg" />
          <meta property="og:url" content="https://jepsoft.com" />
          <meta property="og:description" content="Jepsoft offers custom software, NFC cards, chatbots, and web solutions for businesses. Contact us today!" />
          <meta property="og:site_name" content="Jepsoft" />
          <meta property="og:locale" content="en_US" />
          <link rel="canonical" href="https://www.jepsoft.com/" />
          <link rel="canonical" href="https://www.jepsoft.com/about-us" />

        </Head>

        {/* Your page content */}
        {children}

        {/* Structured Data Injection */}
        <StructuredData />
      </body>
    </html>
  );
}
