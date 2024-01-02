"use client";

import Logo from "../atoms/Logo";
import { AlignJustify } from "lucide-react";
import { motion as m } from "framer-motion";
import Text from "../atoms/Text";

const Navbar = () => {
    return (
        <div className="fixed top-10 min-w-[390px] w-screen">
            <m.div
                className="flex justify-between items-center  px-4 w-full sm:gap-2 sm:px-32 md:px-64 md:gap-36"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <Logo />
                <div className="flex justify-center items-center">
                    <AlignJustify className="text-white w-8 h-8 sm:hidden" />
                </div>
                <div className="gap-4 px-8 py-[12px] justify-between w-full rounded-2xl bg-neutral_1200 hidden sm:flex">
                    <Text
                        type="paragraph"
                        language="ko"
                        variant="desk_body"
                        className="text-neutral_800 w-full text-center cursor-pointer hover:text-neutral_100 active:text-primary_500"
                    >
                        극단 소개
                    </Text>
                    <Text
                        type="paragraph"
                        language="ko"
                        variant="desk_body"
                        className="text-neutral_800 w-full text-center cursor-pointer hover:text-neutral_100 active:text-primary_500"
                    >
                        공연 안내
                    </Text>
                    <Text
                        type="paragraph"
                        language="ko"
                        variant="desk_body"
                        className="text-neutral_800 w-full text-center cursor-pointer hover:text-neutral_100 active:text-primary_500"
                    >
                        극단 소개
                    </Text>
                    <Text
                        type="paragraph"
                        language="ko"
                        variant="desk_body"
                        className="text-neutral_800 w-full text-center cursor-pointer hover:text-neutral_100 active:text-primary_500"
                    >
                        극단 소개
                    </Text>
                </div>
            </m.div>
        </div>
    );
};

export default Navbar;
