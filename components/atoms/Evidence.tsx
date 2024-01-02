import { FileAudio } from "lucide-react";
import Text from "./Text";

interface EvidenceProps {
    title: string;
    description: string;
}

const Evidence: React.FC<EvidenceProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center border border-white rounded-2xl max-w-[456px] min-h-[240px] w-full">
            <div className="text-white flex justify-center flex-col items-center px-6 py-4 gap-4">
                <FileAudio className="w-12 h-12" />
                <Text type="paragraph" language="ko" variant="mobile_sm">
                    {title}
                </Text>
            </div>
            <Text
                type="paragraph"
                language="ko"
                variant="desk_body"
                className="text-neutral_800"
            >
                {description}
            </Text>
        </div>
    );
};

export default Evidence;
