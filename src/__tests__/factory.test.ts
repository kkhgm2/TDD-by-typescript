import { Add } from '../add';
import { Minus } from '../minus';
import { Divide } from '../divide';
import { Multiply } from '../multiply';
import { Factory } from '../factory';


describe("ファクトリーテスト", () => {

    test('add インスタンスが作成される', () => {
        expect(Factory.makeAddInstance()).toBeInstanceOf(Add);
    });
    test('minus インスタンスが作成される', () => {
        expect(Factory.makeMinusInstance()).toBeInstanceOf(Minus);
    });
    test('divide インスタンスが作成される', () => {
        expect(Factory.makeDivideInstance()).toBeInstanceOf(Divide);
    });
    test('multiply インスタンスが作成される', () => {
        expect(Factory.makeMultiplyInstance()).toBeInstanceOf(Multiply);
    });

});