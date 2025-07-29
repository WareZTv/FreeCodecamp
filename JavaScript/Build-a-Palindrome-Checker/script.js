const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultOutput = document.getElementById("result");

const preFormatText = text =>
  text.replace(/[^a-z0-9]/gi, "").toLowerCase()

const isPalindrome = text => {
  const n = text.length;
  if (n === 1) {
    return true
  }
  let currentDigitIndex;
  let currentDigitIndexMiror;
  if (n % 2 === 0) {
    currentDigitIndex = Math.floor(n/2) - 1;
    currentDigitIndexMiror = Math.floor(n/2)
  } else {
    currentDigitIndex = Math.floor(n/2) -1;
    currentDigitIndexMiror = Math.floor(n/2) + 1;
  }

  while (currentDigitIndex >= 0) {
    if (text[currentDigitIndex] !== text[currentDigitIndexMiror]) {
      return false
    }
    currentDigitIndex --;
    currentDigitIndexMiror ++;
  }
  return true
}

const updateResult = (event) => {
  event.preventDefault();
  if (textInput.value === "") {
    alert("Please input a value")
    return
  }
  
  const preFormatedText = preFormatText(textInput.value);
  console.log(preFormatedText);
  if (isPalindrome(preFormatedText)) {
    result.innerText = `${textInput.value} is a palindrome.`
  } else {
    result.innerText = `${textInput.value} is not a palindrome.`
  }
  
}

checkButton.addEventListener("submit", updateResult);

