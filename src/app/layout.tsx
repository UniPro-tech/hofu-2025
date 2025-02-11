import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="w-full min-h-screen bg-white text-black">
        <header className="bg-gray-800 text-white w-full min-h-20">
          <nav className="flex items-center justify-between p-2 font-yujiboku">
            <Link href="https://www.uniproject.jp">
              <h1 className="lg:text-2xl font-bold space-x-4 flex items-center">
                <Image
                  src={"/img/UniPro_Logo.webp"}
                  alt="UniProject's Logo"
                  width={50}
                  height={50}
                />
                <div>
                  今年の抱負は！！
                </div>
                <span className="text-sm">Powered by UniProject</span>
              </h1>
            </Link>
          </nav>
        </header>
        {children}
        <footer className="p-4 bg-gray-800 text-white w-full flex lg:flex-row flex-col items-center justify-center lg:justify-between relative">
          <iframe
            src="https://uniproject.instatus.com/embed-status/3559d5ef/light-md"
            width="230"
            height="61"
            className="border-0"
          />
          <div className="mx-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            Copyright&copy;2024 Yuito Akatsuki All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
