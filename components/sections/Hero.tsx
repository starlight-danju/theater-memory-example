"use client";

import Button from "../atoms/Button";
import Headline from "../modules/Headline";
import MobileBg from "../modules/MobileBg";
import { motion as m } from "framer-motion";
import SocialProofs from "../modules/SocialProofs";
import Link from "next/link";
import TanstackProvider from "../TanstackProvider";
import { heroPadding, sectionPadding } from "@/style";

const Hero = () => {
    return (
        <div className={`${heroPadding}`}>
            <m.div
                className="flex gap-10 flex-col mb-[120px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
            >
                <TanstackProvider>
                    <Headline />
                </TanstackProvider>
                <Link href="#cta">
                    <Button className="w-full sm:w-[186px] md:w-[160px]">
                        공연 보러가기
                    </Button>
                </Link>
            </m.div>
            <SocialProofs />
            <MobileBg />
        </div>
    );
};

export default Hero;
