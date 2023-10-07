function sum(){
    let num1 = document.getElementById("sum_first").value; 
    let num2 = document.getElementById("sum_second").value;
    let sum = Number(num1)+Number(num2);
    let result = document.getElementById("result_sum");
    result.innerHTML = "";
    result.innerHTML+=sum;
}

function subtract(){
    let num1 = document.getElementById("subtract_first").value; 
    let num2 = document.getElementById("subtract_second").value;
    let subtract = Number(num1)-Number(num2);
    let result = document.getElementById("result_subtract");
    result.innerHTML = "";
    result.innerHTML+=subtract;
}

function average(){
    let num1 = document.getElementById("average_first").value; 
    let num2 = document.getElementById("average_second").value;
    let average = (Number(num1)+Number(num2))/2;
    let result = document.getElementById("result_average");
    result.innerHTML = "";
    result.innerHTML+=average;
}

function average2(){
    let num1 = document.getElementById("average2_first").value; 
    let num2 = document.getElementById("average2_second").value;
    let average2 = (Number(num1)**2 + Number(num2)**2)/2;
    let result = document.getElementById("result_average2");
    result.innerHTML = "";
    result.innerHTML+=average2;
}


/*

работает когда в HTML <button onclick="calc_sum()">+</button> и тд

function calc_sum(){
    let num1 = document.getElementById("calculator_first").value; 
    let num2 = document.getElementById("calculator_second").value;
    let calc_sum = Number(num1) + Number(num2);
    let result = document.getElementById("result_calculator");
    result.innerHTML = "";
    result.innerHTML+=calc_sum;
}

function calc_sub(){
    let num1 = document.getElementById("calculator_first").value; 
    let num2 = document.getElementById("calculator_second").value;
    let calc_sub = Number(num1) - Number(num2);
    let result = document.getElementById("result_calculator");
    result.innerHTML = "";
    result.innerHTML+=calc_sub;
}

function calc_mul(){
    let num1 = document.getElementById("calculator_first").value; 
    let num2 = document.getElementById("calculator_second").value;
    let calc_mul = Number(num1) * Number(num2);
    let result = document.getElementById("result_calculator");
    result.innerHTML = "";
    result.innerHTML+=calc_mul;
}

function calc_div(){
    let num1 = document.getElementById("calculator_first").value; 
    let num2 = document.getElementById("calculator_second").value;
    let calc_div = Number(num1) / Number(num2);
    let result = document.getElementById("result_calculator");
    result.innerHTML = "";
    result.innerHTML+=calc_div;
}
*/

/*function calc(){
    let operation;
    let num1 = document.getElementById("calculator_first").value; 
    let num2 = document.getElementById("calculator_second").value;
    let result;

    if (operation = '+'){
        result = Number(num1) + Number(num2); 
    }
    else if (operation = '-'){
        result = Number(num1) - Number(num2); 
    }
    else if (operation = '*'){
        result = Number(num1) * Number(num2); 
    }
    else {
        result = Number(num1) / Number(num2); 
    }

    result = document.getElementById("result_calculator");
    result.innerHTML = "";
    result.innerHTML+=result;
}*/




function calculator(){
    let num1 = document.getElementById("calculator_first").value; 
    let num2 = document.getElementById("calculator_second").value;
    let operators = document.getElementById("operators").value;
    let calc;

    if (operators == '+') {
        calc = Number(num1) + Number(num2); 
    }
    else if (operators == '-') {
        calc = Number(num1) - Number(num2); 
    }
    else if (operators == '*') {
        calc = Number(num1) * Number(num2); 
    }
    else if (operators == '/') {
        calc = Number(num1) / Number(num2); 
    }

    let result = document.getElementById("result_calculator");
    result.innerHTML = "";
    result.innerHTML+=calc;
}

