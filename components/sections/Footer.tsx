import Logo from "../atoms/Logo";
import Text from "../atoms/Text";

const Footer = () => {
    return (
        <div className="py-[160px] bg-neutral_1200 flex justify-center items-center flex-col gap-4 md:py-[320px]">
            <Logo />
            <Text
                type="paragraph"
                language="ko"
                variant="desk_caption"
                className="text-neutral_500 text-sm"
            >
                극단소개
            </Text>
            <Text
                type="paragraph"
                language="ko"
                variant="desk_caption"
                className="text-neutral_500 text-sm"
            >
                극원소개
            </Text>
            <Text
                type="paragraph"
                language="ko"
                variant="desk_caption"
                className="text-neutral_500 text-sm"
            >
                단장소개
            </Text>
        </div>
    );
};

export default Footer;
