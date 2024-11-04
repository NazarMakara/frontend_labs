const num = parseFloat (prompt("Input number")); 
const sigh = prompt("Input sign"); 
const num2 = parseFloat (prompt("Input next number")); 
let result; 
switch(sigh){ 
    case"-": 
        result = num - num2; 
    break; 
    case"+": 
        result = num + num2; 
    break; 
    case"/": 
        result = num / num2; 
    break;      
    case"*": 
    result = num * num2; 
    break; 
} 
alert (`Result: ${result}`); 