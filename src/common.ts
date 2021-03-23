//引数が３１個より少ない事を確認
export const isArgsCountLess31 = function (args: string[]) : boolean {
    if (args.length == 0) {
        return false;
    } else if (args.length > 30) {
        return false;
    }
    return true;
}

//引数に数字以外がないか確認
export const hasNumber = function (args: string[]) : boolean {
    for(let i = 0; i < args.length; i++) {
        if(isNaN(parseInt(args[i]))) return false 
    } 
    return true;
}