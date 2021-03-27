import { Formula } from "./formula";

export class Divide implements Formula{
    calculate(args: string[]): string {
        //引数に０が含まれていなかチェック
        const hasZero: string[] =  args.filter(a => parseInt(a) == 0);
        if (hasZero.length) return "０で割れません！！"
        
        const callback = (a, b) => { 
            let aa = a / parseInt(b);
            return aa.toString();
        }

        let div: string = args.reduce(callback);

        return div;
    }
}