let result = document.getElementById("result");
let answer = 0;

function appendToResult(value) {
  result.innerText += value;
}

function calculateResult() {
  let expression = result.innerText;
  try {
    answer = eval(expression);
    result.innerText = answer;
  } catch (error) {
    result.innerText = "Error";
  }
}

function clearResult() {
  result.innerText = "";
}

