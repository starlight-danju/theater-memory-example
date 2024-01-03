"use client";

import SocialProof from "./SocialProof";
import { motion as m } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const SocialProofs = () => {
    return (
        <div className="flex flex-col gap-4 w-full md:flex-row">
            <m.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
                className="w-full flex justify-center"
                viewport={{ once: true }}
            >
                <SocialProof title="여태까지 올린 극" description="3 개 작품" />
            </m.div>
            <m.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
                className="w-full flex justify-center"
                viewport={{ once: true }}
            >
                <SocialProof title="여태까지 올린 극" description="3 개 작품" />
            </m.div>
            <m.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
                className="w-full flex justify-center"
                viewport={{ once: true }}
            >
                <SocialProof title="여태까지 올린 극" description="3 개 작품" />
            </m.div>
        </div>
    );
};

export default SocialProofs;
