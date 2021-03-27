import { Formula } from "./formula";

export class Minus implements Formula{
    calculate(args: string[]): string {
        //callback, if 文をメソッドで持たせられれば、更に共通化可能？
        const callback = (a, b) => {
            return a - parseInt(b);
        }
        let sum = args.reduce(callback, 0) 
        
        if (sum < 0) {
            console.log(sum)
            return "negative number";
        }
        return sum.toString();
    }
}