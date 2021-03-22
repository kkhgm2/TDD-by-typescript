import { checkArgsCount, checkArgsType } from '../common';

describe("共通処理、引数チェック", () => { 
    test('配列が３０以下の時', () => {
        const ary: Array<string> = new Array(30).fill("30");
        expect(checkArgsCount(ary)).toBe(true);
    });
    
    test('配列が０の時', () => {
        const ary: Array<string> = new Array(0);
        expect(checkArgsCount(ary)).toBe(false);
    });
    
    test('配列が３１以上の時', () => {
        const ary: Array<string> = new Array(31).fill("30");
        expect(checkArgsCount(ary)).toBe(false);
    });
    
    test('数字だけの時', () => {
        const ary: Array<string> = new Array(30).fill("30");
        expect(checkArgsType(ary)).toBe(true);
    });
    
    test('数字以外が含まれている時', () => {
        const ary: Array<string> = ["aa", "12"];
        expect(checkArgsType(ary)).toBe(false);
    });
}); 