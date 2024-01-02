import { cn } from "@/lib/utils";
import Text from "./Text";

interface socialProofProops {
    title: string;
    description: string;
    className?: string;
}

const SocialProof: React.FC<socialProofProops> = ({
    title,
    description,
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                "max-w-[456px] h-20 flex flex-col gap-1 justify-center items-center p-px bg-gradient-to-b rounded-2xl from-white/50 to-white/10 hover:from-white hover:to-white active:bg-primary_500",
                className
            )}
        >
            <div className="flex flex-col gap-1 justify-center items-center px-4 py-1 rounded-2xl bg-neutral_1300 w-full h-full">
                <Text
                    type="paragraph"
                    language="ko"
                    variant="desk_body"
                    className="text-neutral_700"
                >
                    {title}
                </Text>
                <Text
                    type="paragraph"
                    language="ko"
                    variant="desk_sm"
                    className="text-neutral_500"
                >
                    {description}
                </Text>
            </div>
        </div>
    );
};
export default SocialProof;
