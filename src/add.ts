import { Common } from "./common";

export class Add extends Common{
//クラス化して、calculateの方がよさそう
    calculate(args: string[]): string {
        const callback = (a, b) => {
            return a + parseInt(b);
        }
        let sum = args.reduce(callback, 0) 
        
        if (sum >1000) {
            return "too big";
        }
        return sum.toString();
    }
}