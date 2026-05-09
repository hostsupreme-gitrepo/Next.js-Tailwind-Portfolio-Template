/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Art By EliSaddiq Online Portfolio",
  description:
    "Introducing Art By EliSaddiq, a versatile and stylish Portrature Artist. With a passion for capturing the essence of individuals through art, EliSaddiq creates stunning portraits that blend creativity and realism. Explore a diverse portfolio showcasing a range of styles and subjects, from classic to contemporary. Whether you're looking for a personalized portrait or seeking inspiration, Art By EliSaddiq offers a unique artistic experience that celebrates individuality and creativity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*         <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script> */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={roboto.className} >
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
