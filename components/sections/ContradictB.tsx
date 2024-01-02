"use client";

import Image from "next/image";
import Text from "../atoms/Text";
import LISENCE from "@/public/license-min.jpg";
import EvidenceGroup from "../modules/EvidenceGroup";
import { motion as m } from "framer-motion";
import { headerText, sectionPadding, subHeaderText } from "@/style";

const ContradictB = () => {
    return (
        <div className={`w-full flex flex-col gap-10 ${sectionPadding}`}>
            <m.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Text type="heading" language="ko" className={`${headerText}`}>
                    저희는 불법 공연을 하지 않습니다
                </Text>
                <Text
                    type="paragraph"
                    language="ko"
                    className={`${subHeaderText}`}
                >
                    라이센스 등 필요한 모든 법적 절차를 만족 후 <br />
                    공연합니다
                </Text>
            </m.div>
            <div>
                <m.div
                    initial={{ opacity: 0, x: -40 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        delay: 0.4,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={LISENCE}
                        alt="training"
                        className="rounded-2xl mb-8"
                    />
                </m.div>
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        delay: 0.8,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <EvidenceGroup />
                </m.div>
            </div>
        </div>
    );
};

export default ContradictB;
