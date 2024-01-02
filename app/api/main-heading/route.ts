export async function GET() {
    const data: headLineDTO = {
        headline: "특별한 경험이 함께하는\n 극단 ‘기억’입니다",
        subline: "다시 오지 않을 이 순간을 멋진 기억으로 남기길 바랍니다.",
    };
    return Response.json(data);
}
