import { Minus } from '../minus';

describe("引き算テスト", () => {
    let add : Minus;
    beforeAll(() => {
        add = new Minus();
    })

    test('計算結果が０を超える時', () => {
        const args = ["10", "1", "2"]
        expect(add.calculate(args)).toBe("7");
    });
    test('計算結果が０以下の時', () => {
        const args = ["1", "2"]
        expect(add.calculate(args)).toBe("negative number");
    });

});