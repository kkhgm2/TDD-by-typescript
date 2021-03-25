import { Add } from "./add";
import {Common} from "./common"

let args: string[] = process.argv.slice(2);
// console.log(args)

const formula: string = args[0];
const targetNumber: string[] = args.slice(1);  

// console.log(formula)
// console.log(targetNumber)

let errorMessage : string;


const common: Common = new Common();
const add:Add = new Add();

if (! add.hasFormula(formula))  errorMessage = "引数に計算方法を入力してください。"
if (! common.isArgsCountLess31(args)) errorMessage = "引数が多すぎます。３０個までにしてください！";
if (common.hasStorangeWord(args)) errorMessage = "不正な文字が入力されています"
if (! common.hasNumber(targetNumber)) errorMessage = "計算する対象に、文字が含まれています！";

let sum :string;
if (! errorMessage) {
    sum = add.calculate(targetNumber);
    console.log(sum)
} else {
    console.log(errorMessage)
}
