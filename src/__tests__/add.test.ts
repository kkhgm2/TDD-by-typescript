import { add } from '../script';

describe("", () => {

    test('計算結果が１０００を超える時', () => {
        const args = ["add", "1", "1000"]
        expect(add(args)).toBe("too big");
    });
    test('計算結果が１０００を超えない', () => {
        const args = ["add", "1", "999"]
        expect(add(args)).toBe("1000");
    });

});