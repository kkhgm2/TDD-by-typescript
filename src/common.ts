export const checkArgsCount = function (args: string[]) : boolean {
    if (args.length == 0) {
        return false;
    } else if (args.length > 30) {
        return false;
    }
    return true;
}

export const checkArgsType = function (args: string[]) : boolean {
    for(let i = 0; i < args.length; i++) {
        if(isNaN(parseInt(args[i]))) return false 
    } 
    return true;
}