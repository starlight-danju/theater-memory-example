"use client";
import Image from "next/image";
import MAIN_BG from "@/public/mainbg-min.png";
import { motion as m } from "framer-motion";

const MainBg = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative hidden sm:block"
        >
            <div className="w-full h-full bg-gradient-to-b from-black/80 to-black absolute -z-10 inset-0" />
            <Image
                src={MAIN_BG}
                alt="mainbg"
                className="absolute -z-20 max-h-[980px] sm:h-[1080px] md:w-[1920px] md:h-[880px]"
            />
        </m.div>
    );
};

export default MainBg;
