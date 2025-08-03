const input = document.getElementById("number");
const form = document.querySelector("form");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const decToRomanAssociation = [
  [1, "I"],
  [1, "I"],
  [5, "V"],
  [10, "X"],
  [10, "X"],
  [50, "L"],
  [100, "C"],
  [100, "C"],
  [500, "D"],
  [1000, "M"],
]

const displayMsgNotValid = msg => {
  output.classList.add("danger");
  output.classList.remove("hidden");
  output.textContent = msg
  input.value = "";
}

const decToRomanDigit = (inputInt, firstDigit, maxRomanToSubstractIndex) => {
  if (decToRomanAssociation[maxRomanToSubstractIndex][0] > inputInt) {
    return [inputInt, "", maxRomanToSubstractIndex - 1]
  }
  let romanDigit;
  if (firstDigit === 4 || firstDigit === 9) {
    const associationSup = decToRomanAssociation[maxRomanToSubstractIndex + 1];
    const associationInf = decToRomanAssociation[maxRomanToSubstractIndex - 1];
    inputInt -= (associationSup[0] - associationInf[0]);
    romanDigit = associationInf[1] + associationSup[1];
  } else {
    const association = decToRomanAssociation[maxRomanToSubstractIndex];
    inputInt -= association[0];
    romanDigit = association[1];
  }
  return [inputInt, romanDigit, maxRomanToSubstractIndex];
}

const decToRomanNumeral = inputInt => {
  let romanNumeral = "";
  let maxRomanToSubstractIndex = decToRomanAssociation.length - 1;
  let romanDigit;
  while (inputInt > 0) {
    const firstDigit = parseInt(String(inputInt)[0]);
    [inputInt, romanDigit, maxRomanToSubstractIndex] = decToRomanDigit(inputInt, firstDigit, maxRomanToSubstractIndex);
    console.log(inputInt);
    romanNumeral += romanDigit;
  }
  return romanNumeral;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputInt = parseInt(input.value);
  if (isNaN(inputInt)) {
    displayMsgNotValid("Please enter a valid number");
  } else if (inputInt < 1) {
    displayMsgNotValid("Please enter a number greater than or equal to 1");
  } else if (inputInt > 3999) {
    displayMsgNotValid("Please enter a number less than or equal to 3999");
  } else {
    output.classList.remove("danger");
    output.classList.remove("hidden");
    input.value = ""
    output.textContent = decToRomanNumeral(inputInt);
  }
})
