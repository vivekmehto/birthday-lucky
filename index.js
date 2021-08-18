const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-button");
const paragraph = document.querySelector("#paragraph");

function checkBirthdateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);

  if (sum % luckyNumber.value === 0) {
    paragraph.innerText = "Your Birthday is Lucky🎉";
  } else {
    paragraph.innerText = "Your Birthday is NOT Lucky😐";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (var index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }

  return sum;
}

checkNumberButton.addEventListener("click", checkBirthdateIsLucky);
