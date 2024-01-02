import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/modules/NavBar";
import Footer from "@/components/sections/Footer";
import MainBg from "@/components/atoms/MainBg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "극단 기억",
    description: "관객분들에게 특별한 기억을 선사합니다.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko" className="">
            <body className="relative bg-gradient-to-b from-[#020202] to-[#0D0D0D]">
                <Navbar />
                <MainBg />
                {children}
                <Footer />
            </body>
        </html>
    );
}
