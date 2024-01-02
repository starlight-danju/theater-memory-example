import Evidence from "../atoms/Evidence";

const EvidenceGroup = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-4 md:flex-row">
            <Evidence
                title="정당한 음원 사용"
                description="기억 극단은 합법적으로 음악을 사용합니다"
            />
            <Evidence
                title="정당한 음원 사용"
                description="기억 극단은 합법적으로 음악을 사용합니다"
            />
            <Evidence
                title="정당한 음원 사용"
                description="기억 극단은 합법적으로 음악을 사용합니다"
            />
        </div>
    );
};

export default EvidenceGroup;
