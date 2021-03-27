import { Common } from "./common";
import { Formula } from "./formula";
import { Factory } from "./factory";

let args: string[] = process.argv.slice(2);
// console.log(args)

const formula: string = args[0];
const targetNumber: string[] = args.slice(1);

// console.log(formula)
// console.log(targetNumber)

//共通処理、引数チェック
let errorMessage: string;
const common: Common = new Common();
if (!common.hasFormula(formula))
  errorMessage = "引数に計算方法を入力してください。";
if (!common.isArgsCountLess31(args))
  errorMessage = "引数が多すぎます。３０個までにしてください！";
if (common.hasStorangeWord(args)) errorMessage = "不正な文字が入力されています";
if (!common.hasNumber(targetNumber))
  errorMessage = "計算する対象に、文字が含まれています！";

let usingFormula: Formula;
switch (formula) {
  case "add":
    usingFormula = Factory.makeAddInstance();
    break;
  case "minus":
    usingFormula = Factory.makeMinusInstance();
    break;
  case "multiply":
    usingFormula = Factory.makeMultiplyInstance();
    break;
  case "divide":
    usingFormula = Factory.makeDivideInstance();
    break;
}

if (! usingFormula) errorMessage = "add, minus, multiply, divide の中から選択してください！！"; 

let reslut: string;
if (!errorMessage) {
  reslut = usingFormula.calculate(targetNumber);
  console.log(reslut);
} else {
  console.log(errorMessage);
}
