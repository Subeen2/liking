import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liking",
  description: "Liking, Linking",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // TODO :: 일단 header, footer 여기에 두고 페이지 별로 헤더 푸터 유동적으로 사용해야 하는지 판단 후 구조 변경
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          <Header />
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
