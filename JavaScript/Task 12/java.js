function multiply() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;

  if (firstNumber === "" || secondNumber === "") {
    alert("Please enter both numbers");
    return;
  }

  var result = parseFloat(firstNumber) * parseFloat(secondNumber);
  document.getElementById("result").textContent = result;
}

function divide() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;

  if (firstNumber === "" || secondNumber === "") {
    alert("Please enter both numbers");
    return;
  }

  if (parseFloat(secondNumber) === 0) {
    alert("Cannot divide by zero");
    return;
  }

  var result = parseFloat(firstNumber) / parseFloat(secondNumber);
  document.getElementById("result").textContent = result;
}

function convert() {
  var fahrenheit = document.getElementById("fahrenheitInput").value;
  var celsius = document.getElementById("celsiusInput").value;

  if (fahrenheit === "" && celsius === "") {
    alert("Please enter a Fahrenheit or Celsius value");
    return;
  }

  if (fahrenheit !== "") {
    var convertedCelsius = (parseFloat(fahrenheit) - 32) / 1.8;
    document.getElementById("resultt").textContent = convertedCelsius.toFixed(2) + " °C";
  } else {
    var convertedFahrenheit = (parseFloat(celsius) * 1.8) + 32;
    document.getElementById("resultt").textContent = convertedFahrenheit.toFixed(2) + " °F";
  }
}