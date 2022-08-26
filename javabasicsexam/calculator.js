function Calulator(num1, num2){

    function sum(){ 
        num1 = document.getElementById("firstNumber").value; 
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 +num2; 
    } 
    function sub(){ 
        num1 = document.getElementById("firstNumber").value; 
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 - num2; 
    }
    function multiply()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}
    
    function divid{ 
        num1 = document.getElementById("firstNumber").value; 
        num2 = document.getElementById("secondNumber").value; 
        document.getElementById("result").innerHTML = num1 / num2; 
    }
    return{add,sub,multiply,divid} 
    
}
const calc = calculator(2,3)
console.log(calc.add())
console.log(calc.sub())
console.log(calc.multiply())
console.log(calc.divid())

