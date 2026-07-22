function calculate() {
   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);
   
   let operator = "+"; // Change this to -, *, / whenever you want
   
   let answer;
   
   switch (operator) {
      case "+":
         answer = num1 + num2;
         break;
         
      case "-":
         answer = num1 - num2;
         break;
         
      case "*":
         answer = num1 * num2;
         break;
         
      case "/":
         answer = num1 / num2;
         break;
         
      default:
         answer = "Invalid Operator";
   }
   
   document.getElementById("result").textContent = "Answer: " + answer;
}