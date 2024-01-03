import { unitTestFunc } from "../../lib/hooks";
describe("함수별 유닛 테스트도 가능하다.", () => {
    it("유닛 테스트 예시", () => {
        expect(unitTestFunc()).to.eq("예시 함수");
    });
});
