import { Minus } from '../minus';

describe("", () => {
    let add : Minus;
    beforeAll(() => {
        add = new Minus();
    })

    test('計算結果が０を超える時', () => {
        const args = ["0", "0"]
        expect(add.calculate(args)).toBe("0");
    });
    test('計算結果が０以下の時', () => {
        const args = ["1", "1"]
        expect(add.calculate(args)).toBe("negative number");
    });

});