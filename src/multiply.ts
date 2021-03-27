import { Formula } from "./formula";

export class Multiply implements Formula{
    calculate(args: string[]): string {
        const callback = (a, b) => {
            let aa = a * parseInt(b);
            return aa.toString();
        }

        let mul: string = args.reduce(callback);
        if (parseInt(mul) > 1000) {
            return "big big number";
        }
        return mul;
    }
}