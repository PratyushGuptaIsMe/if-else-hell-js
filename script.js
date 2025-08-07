class IfElseStatementGenerator{
    constructor(){}

    modulusoperation(variable, amountOfIfElse){
        let iflse = `if(${variable} === 0){return true}; `;
        let j = 0;
        for(let i = 0; i < amountOfIfElse/2; i++){
                j++;
                iflse = iflse + `if(${variable} === ${j}){return false}; `;
                j++;
                iflse = iflse + `if(${variable} === ${j}){return true}; `;
        }
        return iflse;
    }
}
let ifElseVarName = 'number';
let maxNumberThatCanBeChecked = 3000;

let numInput = 0;   //number inputted by user

const iesg = new IfElseStatementGenerator();    //class object;

let modulusOperationCode = iesg.modulusoperation(ifElseVarName, maxNumberThatCanBeChecked);
//Generated if-else statements

let modulus;
try{
    modulus = new Function(ifElseVarName, modulusOperationCode);
    numInput = Number(window.prompt("Enter a number"));
    console.log(modulus(numInput));
}catch(err){
    console.error("You have entered a string or empty space.");
    throw new Error(err);
}

