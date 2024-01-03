"use client";

import { useQuery } from "@tanstack/react-query";
import Text from "../atoms/Text";

const Headline = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["heading"],
        queryFn: async () => {
            const response = await fetch(
                "http://localhost:3000/api/main-heading"
            );
            const result = await response.json();
            return result as headLineDTO;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    else
        return (
            <div className="flex gap-2 flex-col w-full">
                <Text
                    type="heading"
                    language="ko"
                    variant="default"
                    className="main-text text-white mt-60 text-3xl tracking-tighter leading-9 font-bold sm:text-[3rem] sm:leading-tight "
                >
                    {data?.headline}
                </Text>
                <Text
                    type="paragraph"
                    language="ko"
                    variant="desk_body"
                    className="text-neutral_600 sm:text-2xl sm:font-bold"
                >
                    {data?.subline}
                </Text>
            </div>
        );
};

export default Headline;
