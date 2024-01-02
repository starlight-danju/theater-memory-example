"use client";

import Image from "next/image";
import Text from "../atoms/Text";
import POSTER from "@/public/poster-min.jpg";
import Button from "../atoms/Button";

const CTA = () => {
    return (
        <div className="py-[160px] md:py-[320px]">
            <Text
                type="heading"
                language="ko"
                className="text-[32px] leading-9 font-bold text-white text-center mb-10"
            >
                현재 중비 중인 공연
            </Text>
            <div className="flex flex-col gap-2 sm:mb-10">
                <Image
                    src={POSTER}
                    alt="공연 준비 중 포스터"
                    className="w-[240px] h-[320px] rounded-2xl mx-auto"
                />
                <a href="" id="cta"></a>
                <Text
                    type="paragraph"
                    language="ko"
                    className="text-2xl text-white leading-7 font-bold text-center"
                >
                    [카메라맨]
                </Text>
            </div>
            <Text
                type="paragraph"
                language="ko"
                variant="desk_body"
                className="text-neutral_700 text-center mb-8 sm:mb-20"
            >
                헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정
                또는 ...
            </Text>
            <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
                <Button className="sm:w-[456px]">공연 에매하기</Button>
                <Button variant="secondary" className="sm:w-[456px]">
                    배우가 되고 싶으신가요?
                </Button>
            </div>
        </div>
    );
};

export default CTA;
