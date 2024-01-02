import Text from "../atoms/Text";

const Headline = () => {
    return (
        <div className="flex gap-2 flex-col w-full">
            <Text
                type="heading"
                language="ko"
                variant="default"
                className="text-white mt-60 text-3xl tracking-tighter leading-9 font-bold sm:text-[3rem] sm:leading-tight "
            >
                특별한 경험이 함께하는
                <br /> 극단 ‘기억’입니다
            </Text>
            <Text
                type="paragraph"
                language="ko"
                variant="desk_body"
                className="text-neutral_600 sm:text-2xl sm:font-bold"
            >
                이 순간을 멋진 기억으로 남기길 바랍니다.
            </Text>
        </div>
    );
};

export default Headline;
