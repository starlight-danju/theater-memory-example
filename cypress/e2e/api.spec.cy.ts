describe("api 통신 테스트", () => {
    it("메인 텍스트 api가 잘 동작 하는가?", () => {
        cy.request("/api/main-heading").then((res) => {
            expect(res.body.headline).to.equal(
                "특별한 경험이 함께하는\n 극단 ‘기억’입니다"
            );
        });
    });
});
