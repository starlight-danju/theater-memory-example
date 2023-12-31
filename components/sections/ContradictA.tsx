import Image from "next/image";
import Text from "../atoms/Text";
import VOCAL from "@/public/vocaltraining-min.jpg";
import PRACTICE from "@/public/training-min.jpg";
import SHOW from "@/public/show-min.jpg";
import POSTIT from "@/public/post_it-min.jpg";
import { headerText, sectionPadding, subHeaderText } from "@/style";

const ContradictA = () => {
    return (
        <div
            className={`w-full flex flex-col gap-10 sm:gap-20 ${sectionPadding}`}
        >
            <div className="flex flex-col gap-2 sm:gap-4">
                <Text type="heading" language="ko" className={`${headerText}`}>
                    아마추어 극단 공연, <br /> 시간 아깝다구요?
                </Text>
                <Text
                    type="paragraph"
                    language="ko"
                    className={`${subHeaderText}`}
                >
                    작품마다 반년을 준비 합니다. 일반 동아리 수준이 아닙니다
                </Text>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Image src={VOCAL} alt="training" className="rounded-2xl" />
                <Image src={PRACTICE} alt="training" className="rounded-2xl" />
                <Image
                    src={SHOW}
                    alt="training"
                    className="rounded-2xl col-span-2"
                />
                <Image
                    src={POSTIT}
                    alt="training"
                    className="rounded-2xl col-span-2"
                />
            </div>
        </div>
    );
};

export default ContradictA;
