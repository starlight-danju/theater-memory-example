import Evidence from "@/components/atoms/Evidence";
import SocialProof from "@/components/atoms/SocialProof";

export default function Home() {
    return (
        <div>
            <SocialProof title="여태까지 올린 극" description="3개 작품" />
            <Evidence
                title="정당한 음원 사용"
                description="기억 극단은 합법적으로 음악을 사용합니다"
            />
        </div>
    );
}
