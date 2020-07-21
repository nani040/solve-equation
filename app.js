const algebra = require("algebra.js")
const fs = require("fs")
const mainObj = JSON.parse(fs.readFileSync('./equation.json'))
const optObj = {
    add : "+",
    subtract : "-",
    multiply : "*",
    divide : "/",
    equal : "="
}
let str = ''

function solexp(lhs, op, rhs, openB, closeB){
    if(typeof lhs == "object"){
        str = str + solexp(lhs.lhs,  lhs.op, lhs.rhs, "(", ")")
        if(typeof rhs == "object"){
            str = str + optObj[op] 
            return str = solexp(rhs.lhs,  rhs.op, rhs.rhs, "(", ")")
        }else{
            return str = str + optObj[op] + rhs
        }
    }else{
        if(openB){
            str = str + openB + lhs + optObj[op]
        }else{
            str = str + lhs + optObj[op]
        }
        if(typeof rhs == "object"){
            return solexp(rhs.lhs,  rhs.op, rhs.rhs, "(", ")")
        }else{
            if(closeB){
                return str = str + rhs + closeB
            }else{
                return str = str + rhs
            }
        }
    }
}

let finalexp = solexp(mainObj.lhs.lhs,  mainObj.lhs.op, mainObj.lhs.rhs) + optObj[mainObj.op] + mainObj.rhs
console.log("equation: ", finalexp)
let eq = algebra.parse(finalexp);
console.log(eq.toString());
let ans = eq.solveFor("x");
console.log("x = " + ans.toString());