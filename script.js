let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (e.target.innerHTML === "%") {
      const regex = /(\d+(\.\d+)?[+\-*/]\d+(\.\d+)?)$/;
      const match = string.match(regex);

      if (match) {
        const expression = match[1];
        const parts = expression.split(/[+\-*/]/);
        const number1 = parseFloat(parts[0]);
        const number2 = parseFloat(parts[1]);
        const operator = expression.replace(number1, "").replace(number2, "");
        let result = 0;
        switch (operator) {
          case "+":
            result = number1 + number2 * (number1 / 100);
            break;
          case "-":
            result = number1 - number2 * (number1 / 100);
            break;
          case "*":
            result = (number1 / 100) * number2;
            break;
          case "/":
            result = (number1 * 100) / number2;
            break;
        }
        string = string.replace(expression, result);
      }
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
