import { Divide } from '../divide';

describe("割り算テスト", () => {
    let div : Divide;
    beforeAll(() => {
        div = new Divide();
    })

    test('０が含まれていた時', () => {
        const args = ["10", "0"]
        expect(div.calculate(args)).toBe("０で割れません！！");
    });
    test('正常値', () => {
        const args = ["999", "3"]
        expect(div.calculate(args)).toBe("333");
    });

});