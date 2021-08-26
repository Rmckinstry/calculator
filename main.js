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
    return ("nah fam")    
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