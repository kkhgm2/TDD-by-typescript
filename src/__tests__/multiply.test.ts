import { Multiply } from '../multiply';

describe("掛け算テスト", () => {
    let mul : Multiply;
    beforeAll(() => {
        mul = new Multiply();
    })

    test('計算結果が1000を超える時', () => {
        const args = ["1001", "1"]
        expect(mul.calculate(args)).toBe("big big number");
    });
    test('計算結果が1000以下の時', () => {
        const args = ["999", "1"]
        expect(mul.calculate(args)).toBe("999");
    });

});