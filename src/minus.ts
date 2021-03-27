import { Formula } from "./formula";

export class Minus implements Formula{
    calculate(args: string[]): string {
        //callback, if 文をメソッドで持たせられれば、更に共通化可能？
        const callback = (a, b) => {
            let aa = a - parseInt(b);
            return aa.toString();
        }

        let sum: string = args.reduce(callback);
        if (parseInt(sum) < 0) {
            return "negative number";
        }
        return sum.toString();
    }
}