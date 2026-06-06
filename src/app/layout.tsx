import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GA_ID, SITE_NAME, SITE_URL } from "@/lib/constants";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Free GST, TDS & Income Tax Calculators India`,
    template: `%s - ${SITE_NAME}`,
  },
  description:
    "Free online GST calculator, TDS calculator, income tax calculator and 15+ finance tools for India. Fast, accurate, mobile-friendly tax calculators.",
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-gray-50 min-h-screen flex flex-col`}>
        {GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Header />
        <meta name="google-site-verification" content="hBicHnsVbZme-3F9Ru9IKE48B0ukuLBRkm8sh7kO_HQ" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
