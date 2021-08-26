function add(num1, num2){
    const result = num1 + num2;
    return result
}

function subtract(num1, num2){
    const result = num1 - num2;
    return result
}

function multiply(num1, num2){
    const result = num1 * num2;
    return result
}

function divide(num1, num2){

    if (num2 == 0){
        display.textContent='nahhhh lmao'
        return (0)    
    }
    else{
        const result = num1 / num2;
        return result
    }
    
}

function operate(num1, num2, operator){
    switch (operator){
        case '+':
            const added = add(num1,num2);
            return(added);
        case '-':
            const subtracted = subtract(num1,num2);
            return (subtracted);
        case '*':
            const multiplied = multiply(num1,num2);
            return (multiplied)
        case '/':
            const divided = divide(num1,num2);
            return (divided)
    }
    
}

//prog start

const numbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.op')
const display = document.querySelector('.display')


let displayValue='';
let prevValue='';
let userOperator='';

numbers.forEach((number)=>{
    number.addEventListener('click',()=>{
        if(displayValue.length<12){
            display.textContent=`${displayValue}${number.id}`;
            displayValue= displayValue+number.id;
        }
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        switch (operator.id){
            case 'add':
                if(displayValue==''){
                    prevValue = 0;
                    displayValue ='';
                    display.textContent='0'
                    userOperator='+'
                    break;
                }
                else{
                    prevValue=Number(displayValue);
                    displayValue ='';
                    display.textContent='0';
                    userOperator='+'
                    break;
                }
            case 'subtract':
            if(displayValue==''){
                prevValue = 0;
                displayValue ='';
                display.textContent='0'
                userOperator='-'
                break;
            }
            else{
                prevValue=Number(displayValue);
                displayValue ='';
                display.textContent='0';
                userOperator='-'
                break;
            }
            case 'multiply':
                if(displayValue==''){
                    prevValue = 0;
                    displayValue ='';
                    display.textContent='0'
                    userOperator='*'
                    break;
                }
                else{
                    prevValue=Number(displayValue);
                    displayValue ='';
                    display.textContent='0';
                    userOperator='*'
                    break;
                }
            case 'divide':
            if(displayValue==''){
                prevValue = 0;
                displayValue ='';
                display.textContent='0'
                userOperator='/'
                break;
            }
            else{
                prevValue=Number(displayValue);
                displayValue ='';
                display.textContent='0';
                userOperator='/'
                break;
            }
            case 'equal':
                if(displayValue==''){
                    displayValue=0;
                    console.log(operate(prevValue,displayValue,userOperator));
                    displayValue=(operate(prevValue,Number(displayValue),userOperator));
                    break;
                }
                else{
                    display.textContent=`${(operate(prevValue,Number(displayValue),userOperator))}`
                    displayValue=(operate(prevValue,Number(displayValue),userOperator));
                    break;
                }
        }
    })
})