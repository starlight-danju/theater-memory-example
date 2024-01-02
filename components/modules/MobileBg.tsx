"use client";
import { motion as m } from "framer-motion";

const MobileBg = () => {
    return (
        <>
            <m.div
                className="absolute -z-10 top-56 -left-8 bg-secondary_300/20 rounded-full blur-3xl sm:hidden"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ width: "160px", height: "160px", opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            ></m.div>
            <m.div
                className="absolute -z-10 top-52 -right-4 bg-primary_300/10 rounded-full blur-3xl sm:hidden"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ width: "240px", height: "240px", opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
            ></m.div>
        </>
    );
};

export default MobileBg;
