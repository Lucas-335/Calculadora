let num1 = false;
let num2 = false;
let operator = false;
let resultbool = false;
let display = document.querySelector('#display')
let smallDisplay = document.querySelector('#small-display')

//Função para calcular a expressão numérica dada os dois números e o operador
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
            case "%":
                return num1 % num2;
                break;
        }
    }
    else{
        return "Digite a operação correta"
    }
}

//Função para limpar a tela e as variáveis
function clearDisplay(a,b,op){
    display.textContent = ''
    smallDisplay.textContent = ''

    a,b,op,resultbool = false;
}

//Função para exibir o número do botão clicado no display
function displayNumber(){
    if(resultbool){
        display.textContent = ''
        resultbool = false
    }
    let text = this.textContent
    display.textContent += text

    
}

//Colocando a função de exibir no display em cada botão de números
let numberButtons = Array.from(document.querySelectorAll('.number'))
numberButtons.forEach((button)=>{
    button.addEventListener('click',displayNumber)
})

//Colocando uma função de exibir o operador com número no display em cada botão de operador
let operatorButtons = Array.from(document.querySelectorAll('.operator'))
operatorButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(display.textContent){
            num1 = display.textContent
            operator = button.textContent
            smallDisplay.textContent = `${num1} ${operator}`
            display.textContent = ''
        }
        else{
            alert('Digite ao menos um número')
        }
    })
    
})

//Função para exibir o resultado da operação
let resultButton = document.querySelector("#result")
resultButton.addEventListener('click',()=>{
    if(!display.textContent){
        alert('Digite ao menos um número')
        return
    }
    num2 = display.textContent

    if(operator){
        display.textContent = operate(num1,num2,operator)
        smallDisplay.textContent += ` ${num2}`
        num1,num2,operator = false;
        resultbool = true
    }
    else{
        display.textContent = num2
    }

})

//Colocando a função de limpa tela no botão OFF
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',()=>{clearDisplay(num1,num2,operator)})

