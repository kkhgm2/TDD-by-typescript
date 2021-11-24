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
let errorMessage = checkArgs(formula);
let usingFormula = selectFormula(formula);
if (!usingFormula) errorMessage = "add, minus, multiply, divide の中から選択してください！！";

let reslut: string;
if (!errorMessage) {
  reslut = usingFormula.calculate(targetNumber);
  console.log(reslut);
} else {
  console.log(errorMessage);
}


function checkArgs(formula: string): string {
  const common: Common = new Common();
  if (!common.hasFormula(formula))
    return "引数に計算方法を入力してください。";
  if (!common.isArgsCountLess31(args))
    return "引数が多すぎます。３０個までにしてください！";
  if (common.hasStorangeWord(args))
    return "不正な文字が入力されています";
  if (!common.hasNumber(targetNumber))
    return "計算する対象に、文字が含まれています！";
}

function selectFormula(formula: string): Formula {
  if (formula == "add")
    return Factory.makeAddInstance();
  if (formula == "minus")
    return Factory.makeMinusInstance();
  if (formula == "multiply")
    return Factory.makeMultiplyInstance();
  if (formula == "divide")
    return Factory.makeDivideInstance();
}