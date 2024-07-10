function operate(num1,num2,operator){
    if (num1 && num2 && operator){
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        switch (operator){
            case "+":
                return num1 + num2;
                break;
            case "-":
                return num1 - num2;
                break;
            case "*":
                return num1 * num2;
                break;
            case "/":
                return num1 / num2;
                break;
        }
    }
    else{
        return "Digite a operação correta"
    }
}

let num1 = prompt('Número 1: ')
let num2 = prompt('Número 2: ')
let operator = prompt('Operador: ')

let result = operate(num1,num2,operator);
alert(result)