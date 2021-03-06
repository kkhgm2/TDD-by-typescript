export class Common {
    
    //引数が３１個より少ない事を確認
    isArgsCountLess31 = function (args: string[]) : boolean {
        if (args.length == 0) {
            return false;
        } else if (args.length > 30) {
            return false;
        }
        return true;
    }

    //引数に数字以外がないか確認
    public hasNumber = function (args: string[]) : boolean {
        for(let i = 0; i < args.length; i++) {
            if(isNaN(parseInt(args[i]))) return false 
        } 
        return true;
    }

    hasFormula(formula: string) : boolean {
        const isAdd :boolean = "add" == formula;
        const isMiuns :boolean = "minus" == formula;
        const isMulti :boolean = "multiple" == formula;
        const isDivide :boolean = "divide" == formula;

    return isAdd || isMiuns || isMulti ||isDivide;
    }

    //文字数字以外は禁止
    hasStorangeWord(args: string[]) : boolean {
        const reg = /\W+/;
        for(let i = 0; i < args.length; i ++) {
            if (args[i].match(reg)) return true;
        }
        return false;
    }

    calculate(args: string[]): any {};

}