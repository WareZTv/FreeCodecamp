const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultContainer = document.getElementById("results-div");

const isUSValidNumber = inputValue => {
  const regex = /^(?:\+?1 ?)?([2-9]\d\d|\([2-9]\d\d\))[- ]?[2-9]\d\d[- ]?\d\d\d\d$/;
  return regex.test(inputValue);
}

const updateResults = () => {
  const value = input.value.trim();
  if (!value) {
    alert("Please provide a phone number")
  }
  let resultHTML;
  if (isUSValidNumber(value)) {
   resultHTML = `<br>Valid US number: ${value}<br>`
  } else {
    resultHTML = `<br>Invalid US number: ${value}<br>`
  }
  resultContainer.innerHTML += resultHTML
  input.textContent = "";
}

const clearResults = () => {
  resultContainer.innerHTML = "";
}

checkBtn.addEventListener("click", updateResults);
clearBtn.addEventListener("click", clearResults)