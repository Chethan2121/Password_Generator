const lengthSlider = document.getElementById("length-range");
const passwordInput = document.getElementById("generated-password");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const passIndicator = document.getElementById("pass-indicator");
const passStrengthText = document.getElementById("strength-value");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+[]{}|;:,.<>?/"
};

const generatePassword = () => {
  let passwordLength = lengthSlider.value;
  let staticPassword = "";
  let randomPassword = "";

  if (document.getElementById("lowercase").checked) staticPassword += characters.lowercase;
  if (document.getElementById("uppercase").checked) staticPassword += characters.uppercase;
  if (document.getElementById("numbers").checked) staticPassword += characters.numbers;
  if (document.getElementById("symbols").checked) staticPassword += characters.symbols;

  for (let i = 0; i < passwordLength; i++) {
    randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
  }

  passwordInput.value = randomPassword;
  updatePassStrength(randomPassword);
};

const updatePassStrength = (password) => {
  let strength = password.length <= 8 ? "Weak" : password.length <= 16 ? "Medium" : "Strong";
  passStrengthText.innerText = strength;
  passIndicator.style.width = strength === "Weak" ? "30%" : strength === "Medium" ? "60%" : "100%";

  passStrengthText.className = strength.toLowerCase();
};

const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.value);
  alert("Password copied to clipboard!");
};

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

lengthSlider.addEventListener("input", () => {
  document.getElementById("length-value").innerText = lengthSlider.value;
});
