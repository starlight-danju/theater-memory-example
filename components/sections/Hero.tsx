"use client";

import Button from "../atoms/Button";
import Headline from "../modules/Headline";
import MobileBg from "../modules/MobileBg";
import { motion as m } from "framer-motion";
import SocialProofs from "../modules/SocialProofs";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="pb-[160px] md:pb-[320px]">
            <m.div
                className="flex gap-10 flex-col mb-[120px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
            >
                <Headline />
                <Link href="#cta">
                    <Button className="sm:w-[186px] md:w-[160px]">
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
