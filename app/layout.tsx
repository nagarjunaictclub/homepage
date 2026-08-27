import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "remixicon/fonts/remixicon.css";
import { ToastContainer } from "react-toastify";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

export const metadata = {
  metadataBase: new URL("https://www.nagarjunaictclub.com"), // ✅ Add this line
  title: "Nagarjuna ICT Club",
  description: "Empowering Innovation, Connecting Minds | Open to students who are interested in any aspect of technology, from programming and web development to networking and cybersecurity",
  generator: 'cwsstudio',
  keywords: [
    'College club in nepal', 'nagarjuna ict club', 'nagarjuna college', 'ncit'
  ],
  authors: [{ name: 'Nagarjuna ICT Club', url: 'https://www.nagarjunaictclub.com' }],
  creator: 'Nagarjuna ICT Club',
  publisher: 'Nagarjuna ICT Club',
  openGraph: {
    title: "Nagarjuna ICT Club",
    description: "Empowering Innovation, Connecting Minds | Open to students who are interested in any aspect of technology, from programming and web development to networking and cybersecurity",
    url: 'https://www.nagarjunaictclub.com',
    siteName: 'Nagarjuna ICT Club',
    images: [
      {
        url: 'https://www.nagarjunaictclub.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f741106f.png&w=256&q=75',
        width: 1200,
        height: 630,
        alt: 'Nagarjuna ICT Club',
        type: 'image/jpeg'
      }
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nagarjuna ICT Club',
    description: "Empowering Innovation, Connecting Minds | Open to students who are interested in any aspect of technology, from programming and web development to networking and cybersecurity",
    creator: '@nagarjunaictclub',
    images: ['https://www.nagarjunaictclub.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f741106f.png&w=256&q=75'],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-white dark:bg-black">
        <Providers>
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}

import { Providers } from "./providers";
