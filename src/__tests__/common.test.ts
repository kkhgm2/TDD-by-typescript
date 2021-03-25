// import { isArgsCountLess31, hasNumber } from '../common';
import {Common} from "../common"
let common: Common;

beforeAll(() => {
    common = new Common();
})

describe("共通処理、引数チェック", () => { 
    test('配列が３０以下の時', () => {
        const ary: Array<string> = new Array(30).fill("30");
        expect(common.isArgsCountLess31(ary)).toBe(true);
    });
    
    test('配列が０の時', () => {
        const ary: Array<string> = new Array(0);
        expect(common.isArgsCountLess31(ary)).toBe(false);
    });
    
    test('配列が３１以上の時', () => {
        const ary: Array<string> = new Array(31).fill("30");
        expect(common.isArgsCountLess31(ary)).toBe(false);
    });
    // test('計算方法が設定されている', () => {
    //     const formula: string = "add";
    //     expect(hasFormula(formula)).toBe(true);
    // });
    
    // test('計算方法が設定されていない', () => {
    //     const formula: string = "10";
    //     expect(hasFormula(formula)).toBe(false);
    // });

    test('数字だけの時', () => {
        const ary: Array<string> = new Array(30).fill("30");
        expect(common.hasNumber(ary)).toBe(true);
    });
    
    test('数字以外が含まれている時', () => {
        const ary: Array<string> = ["aa", "12"];
        expect(common.hasNumber(ary)).toBe(false);
    });
}); 