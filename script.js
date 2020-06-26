const teamName = "FTR eSports";
const input = document.querySelector("input");
const result = document.querySelector("#result");
const bottomDiv = document.querySelector("#bottomDiv");

bottomDiv.textContent = `Made for ${teamName}`;

input.addEventListener("input", updateResult);

function updateResult(e) {
  let inputValue = e.target.value.toUpperCase();;

  if (inputValue.includes("C") && !inputValue.includes("F")) {
    let temp;

    temp = inputValue.split(" ")[0];
    temp = temp.split("C")[0];

    result.textContent = `${celsiusToFahrenheit(temp)}F`;
  } else if (inputValue.includes("F") && !inputValue.includes("C")) {
    let temp;

    temp = inputValue.split(" ")[0];
    temp = temp.split("F")[0];

    result.textContent = `${fahrenheitToCelsius(temp)}C`;
  } else {
    result.textContent = "Please enter a valid temperature above.";
  }
}

function celsiusToFahrenheit(celsius) {
  // F = (C * 9/5) + 32
  let fahrenheit = 0;

  fahrenheit = celsius * (9 / 5) + 32;

  return Math.round(fahrenheit * 10) / 10;
}

function fahrenheitToCelsius(fahrenheit) {
  // C = (F − 32) * 5/9
  let celsius = 0;

  celsius = (fahrenheit - 32) * (5 / 9);

  return Math.round(celsius * 10) / 10;
}
