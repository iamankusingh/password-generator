let passwordBox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
const lovercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "`~!@#$%^&*()_+-=[]{};':,.</>?";

const allchars = uppercase + lovercase + number + symbol;

function creatPass() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lovercase[Math.floor(Math.random() * lovercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordBox.value = password;
}

function copyPass() {
  passwordBox.setSelectionRange(0, 99999); //for mobile devices
  navigator.clipboard.writeText(passwordBox.value);
  alert("Password coppied : " + passwordBox.value);
}
