"use Client";
import "./css/mobile.css";
import "./css/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/img/favicon.png" sizes="any" />
      </Head>
      <Script
        async
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"
      />
      <Script async type="text/javascript" src="/script/app.js" />
{/* 
      <Script
        async
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"
      />
      <Script
        async
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"
      />
      <Script
        async
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"
      />
      <Script
        async
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"
       
      />
      <Script
        async
        type="text/javascript"
        src="https://cdn.tailwindcss.com/3.4.0"
      /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
