import { Formula } from "./formula";

export class Add implements Formula{
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