import {checkArgsCount, checkArgsType} from "./common"

const args = process.argv;

console.log(args.slice(2))
console.log(typeof args.slice(2,3))


export const add = function  (args: string[]): string {
    
    return "too big";
}
