import { add, hasFormula } from '../script';

describe("", () => {

    test("足し算が指定されている",() => {
        const formula = "add"
        expect(hasFormula(formula)).toBe(true);
    });
    test("足し算が指定されていない",() => {
        const formula = "１０"
        expect(hasFormula(formula)).toBe(false);
    });
    test('計算結果が１０００を超える時', () => {
        const args = ["1", "1000"]
        expect(add(args)).toBe("too big");
    });
    test('計算結果が１０００を超えない', () => {
        const args = ["1", "999"]
        expect(add(args)).toBe("1000");
    });

});