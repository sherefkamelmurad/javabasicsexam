function Calulator(num1, num2){

    function sumby(){ 
        num1 = document.getElementById("firstNumber").value; 
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 +num2; 
    } 
    function subtractby(){ 
        num1 = document.getElementById("firstNumber").value; 
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 - num2; 
    }
    function multiplyby()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}
    
    function dividby(){ 
        num1 = document.getElementById("firstNumber").value; 
        num2 = document.getElementById("secondNumber").value; 
        document.getElementById("result").innerHTML = num1 / num2; 
    }
    
}
