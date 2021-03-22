const args = process.argv;

console.log(args.slice(2))
console.log(typeof args.slice(2,3))


export const add = function  (...args: String[]): String {
    
    return "too big";
}


export const checkArgsCount = function (args: String[]) : boolean {
    
    return true;
}

export const checkArgsType = function (args: String[]) : boolean {
    
    return true;
}