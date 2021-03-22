import { add, checkArgsCount, checkArgsType } from '../script';


test('Array under 30', () => {
    const ary: Array<String> = new Array(30).fill("30");
    expect(checkArgsCount(ary)).toBe(true);
});

test('Array 0', () => {
    const ary: Array<String> = new Array(30).fill("30");
    expect(checkArgsCount(ary)).toBe(false);
});

test('Array over 31', () => {
    const ary: Array<String> = new Array(30).fill("30");
    expect(checkArgsCount(ary)).toBe(false);
});

test('args type is int', () => {
    const ary: Array<String> = new Array(30).fill("30");
    expect(checkArgsType(ary)).toBe(true);
});

test('args type is String', () => {
    const ary: Array<String> = new Array(30).fill("aaa");
    expect(checkArgsType(ary)).toBe(false);
});


test('over 1000', () => {
  expect(add("add", "1", "1000")).toBe("too big");
});

