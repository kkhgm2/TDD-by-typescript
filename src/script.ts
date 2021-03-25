import {isArgsCountLess31, hasNumber} from "./common"

let args: string[] = process.argv.slice(2);
// console.log(args)

const formula: string = args[0];
const targetNumber: string[] = args.slice(1);  

// console.log(formula)
// console.log(targetNumber)

let errorMessage : string;

//クラス化して、calculateの方がよさそう
export const add = function  (args: string[]): string {
    const callback = (a, b) => {
        return a + parseInt(b);
    }
    let sum = args.reduce(callback, 0) 
    
    if (sum >1000) {
        return "too big";
    }
    return sum.toString();
}

// 　/$%& 辺りを入れると、バグる　マッチャーいれるか
export const hasFormula = function (formula: string) : boolean {
    const isAdd :boolean = "add" == formula;
    const isMiuns :boolean = "minus" == formula;
    const isMulti :boolean = "multiple" == formula;
    const isDivide :boolean = "divide" == formula;

    return isAdd || isMiuns || isMulti ||isDivide;
}

if (! hasFormula(formula))  errorMessage = "引数に計算方法を入力してください。"
if (! isArgsCountLess31(args)) errorMessage = "引数が多すぎます。３０個までにしてください！";
if (! hasNumber(targetNumber)) errorMessage = "計算する対象に、文字が含まれています！";

let sum :string;
if (! errorMessage) {
    sum = add(targetNumber);
} else {
    console.log(errorMessage)
}