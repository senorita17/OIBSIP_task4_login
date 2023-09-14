const DB_USERS = [];

const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");
const formBx = document.querySelector(".formBx");
const body = document.querySelector("body");

signupBtn.onclick = function () {
  formBx.classList.add("active");
  body.classList.add("active");
};
signinBtn.onclick = function () {
  formBx.classList.remove("active");
  body.classList.remove("active");
};

let encryptionRule = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  a: "n",
  b: "o",
  c: "p",
  d: "q",
  e: "r",
  f: "s",
  g: "t",
  h: "u",
  i: "v",
  j: "w",
  k: "x",
  l: "y",
  m: "z",
  n: "a",
  o: "b",
  p: "c",
  q: "d",
  r: "e",
  s: "f",
  t: "g",
  u: "h",
  v: "i",
  w: "j",
  x: "k",
  y: "l",
  z: "m",
  0: "5",
  1: "6",
  2: "7",
  3: "8",
  4: "9",
  5: "0",
  6: "1",
  7: "2",
  8: "3",
  9: "4",
  "!": "#",
  $: "%",
  "&": "+",
  "-": "@",
  _: "~",
  "#": "!",
  "%": "$",
  "+": "&",
  "@": "-",
  "~": "_",
};
let allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

// Captcha Function
const captcha = document.querySelector(".captacha");
const reloadBtn = document.querySelector(".reload-btn");
const inputField = document.getElementById("loginCapt");
const checkBtn = document.querySelector(".check-btn");
// const statusTxt = document.querySelector(".status-txt");

function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomChar =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomChar}`;
  }
}
getCaptcha();
reloadBtn.addEventListener("click", () => {
  captcha.innerText = "";
  getCaptcha();
});

// For Sign UP
const captcha2 = document.querySelector(".captacha2");
const reloadBtn2 = document.querySelector(".reload-btn2");
const inputField2 = document.getElementById("signupCapt");
const checkBtn2 = document.querySelector(".check-btn2");

function getCaptcha2() {
  for (let i = 0; i < 6; i++) {
    let randomChar =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha2.innerText += ` ${randomChar}`;
  }
}
getCaptcha2();
reloadBtn2.addEventListener("click", () => {
  captcha2.innerText = "";
  getCaptcha2();
});

const encrypt = (inputPassword) => {
  let encryptedPassword = "";
  for (char of inputPassword) {
    encryptedPassword = encryptedPassword + encryptionRule[char];
  }
  return encryptedPassword;
};

const decrypt = (encryptedPassword) => {
  let actualPassword = "";
  let keys = Object.keys(encryptionRule);
  let values = Object.values(encryptionRule);
  for (char of encryptedPassword) {
    let requiredIndex = values.findIndex((value) => value === char);
    actualPassword = actualPassword + keys[requiredIndex];
  }
  return actualPassword;
};

const lowercase = document.getElementById("lower");
const uppercase = document.getElementById("upper");
const number = document.getElementById("number");
const special = document.getElementById("special");
const minlength = document.getElementById("least");

let flag = false;

function checkPassword(data) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const digit = new RegExp("(?=.*[0-9])");
  const specialChar = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(?=.{8,})");

  if (lower.test(data)) {
    lowercase.classList.add("valid");
    lowercase.style.opacity = "1";
    flag = true;
  } else {
    lowercase.classList.remove("valid");
    lowercase.style.opacity = "1";
    flag = false;
  }
  if (upper.test(data)) {
    uppercase.classList.add("valid");
    uppercase.style.opacity = "1";
    flag = true;
  } else {
    uppercase.classList.remove("valid");
    uppercase.style.opacity = "1";
    flag = false;
  }

  if (digit.test(data)) {
    number.classList.add("valid");
    number.style.opacity = "1";
    flag = true;
  } else {
    number.classList.remove("valid");
    number.style.opacity = "1";
    flag = false;
  }

  if (specialChar.test(data)) {
    special.classList.add("valid");
    special.style.opacity = "1";
    flag = true;
  } else {
    special.classList.remove("valid");
    special.style.opacity = "1";
    flag = false;
  }

  if (length.test(data)) {
    minlength.classList.add("valid");
    minlength.style.opacity = "1";
    flag = true;
  } else {
    minlength.classList.remove("valid");
    minlength.style.opacity = "1";
    flag = false;
  }

  return flag;
}
const signUp = () => {
  let signupName = document.getElementById("signup-name").value;
  let signupNumber = document.getElementById("signup-number").value;
  let signupEmail = document.getElementById("signup-email").value;
  let signupPassword = document.getElementById("signup-password").value;
  let signupConfirmPassword =
    document.getElementById("signup-cnfpassword").value;
  // let captchaFilled = document.getElementById("signupCapt").value;

  let name = document.getElementById("name");
  let no = document.getElementById("no");
  let smail = document.getElementById("smail");
  let scapt = document.getElementById("sCapt");
  let cpass = document.getElementById("cpass");
  let error = false;

  if (signupName.length >= 3) {
    name.style.color = "green";
    name.innerHTML = `Look's Good`;
  } else {
    error = true;
    name.style.color = "red";
    name.innerHTML = `Name must be greater than three Charcters`;
  }
  if (signupNumber.length >= 10) {
    no.style.color = "green";
    no.innerHTML = `Look's Good`;
  } else {
    error = true;
    no.style.color = "red";
    no.innerHTML = `Contact number must be of ten digits`;
  }
  if (
    signupEmail &&
    signupEmail.includes("@") &&
    signupEmail.includes(".") &&
    signupEmail.lastIndexOf(".") <= signupEmail.length - 3 &&
    signupEmail.indexOf("@") != 0
  ) {
    smail.style.color = "green";
    smail.innerHTML = `Look's Good`;
  } else {
    error = true;
    smail.style.color = "red";
    smail.innerHTML = `Please enter a valid e-mail like abc@xyz.com`;
  }
  if (flag) {
  } else {
    checkPassword(signupPassword);
    error = true;
  }
  if (signupConfirmPassword && signupPassword === signupConfirmPassword) {
    cpass.style.color = "green";
    cpass.innerHTML = `Look's Good`;
  } else {
    error = true;
    cpass.style.color = "red";
    cpass.innerHTML = `Password and confirm password doesn't match`;
  }
  var signUpCaptacha;
  function validateCaptcha2(e) {
    let inputval = inputField2.value.split("").join(" ");
    if (inputval == captcha2.innerText) {
      signUpCaptacha = true;
      captcha2.innerText = "";
      getCaptcha2();
    } else {
      signUpCaptacha = false;
      captcha2.innerText = "";
      getCaptcha2();
    }
  }
  validateCaptcha2();
  // console.log(signUpCaptacha)

  if (signUpCaptacha) {
    scapt.style.color = "green";
    scapt.innerHTML = `Look's Good`;
  } else {
    error = true;
    scapt.style.color = "red";
    scapt.innerHTML = `Captcha doesn't match`;
  }

  if (!error) {
    let userDetails = {
      signupName,
      signupEmail,
      signupNumber,
      password: encrypt(signupPassword),
    };
    DB_USERS.push(userDetails);
    let signUpSuccessAlert = document.getElementById("signUpSuccessAlert");
    signUpSuccessAlert.style.display = "block";
    signUpSuccessAlert.innerText = "Sign Up Successfully !!";
    signUpSuccessAlert.classList.add("success");
    setTimeout(() => {
      signUpSuccessAlert.style.display = "none";
    }, 5000);
    resetSignupFields();
  } else {
    let signUpSuccessAlert = document.getElementById("signUpSuccessAlert");
    signUpSuccessAlert.innerText = "Sign Up failed, try using different inputs";
    signUpSuccessAlert.style.display = "block";
    signUpSuccessAlert.classList.remove("success");
    setTimeout(() => {
      signUpSuccessAlert.style.display = "none";
    }, 5000);
  }
};

const logIn = () => {
  let enteredEmail = document.getElementById("login-email").value;
  let enteredPassword = document.getElementById("login-password").value;

  let loginSuccessAlert = document.getElementById("loginSuccessAlert");

  let currentUser = DB_USERS.find(
    (user) =>
      user.signupEmail === enteredEmail &&
      decrypt(user.password) === enteredPassword
  );

  let logInCaptacha;

  function validateCaptcha(e) {
    let inputval = inputField.value.split("").join(" ");
    if (inputval == captcha.innerText) {
      logInCaptacha = true;
      captcha.innerText = "";
      getCaptcha();
    } else {
      logInCaptacha = false;
      captcha.innerText = "";
      getCaptcha();
    }
  }

  validateCaptcha();

  if (!logInCaptacha) {
    let logCapt = document.getElementById("logCapt");
    logCapt.style.color = "red";
    logCapt.innerText = "Invalid Captacha";
  }

  if (currentUser && logInCaptacha) {
    loginSuccessAlert.style.display = "block";
    loginSuccessAlert.classList.add("success");
    loginSuccessAlert.innerText = "Successfully Logged In !!";
    setTimeout(() => {
      loginSuccessAlert.style.display = "none";
    }, 3000);
    resetLoginFields();
  } else {
    loginSuccessAlert.style.display = "block";
    loginSuccessAlert.classList.remove("success");
    loginSuccessAlert.innerText = "Log In Fail !!";
    setTimeout(() => {
      loginSuccessAlert.style.display = "none";
    }, 3000);
  }
};

const resetSignupFields = () => {
  document.getElementById("signup-name").value = "";
  document.getElementById("signup-number").value = "";
  document.getElementById("signupCapt").value = "";
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
  document.getElementById("signup-cnfpassword").value = "";
  document.getElementById("name").innerHTML = "";
  document.getElementById("no").innerHTML = "";
  document.getElementById("smail").innerHTML = "";
  document.getElementById("sCapt").innerHTML = "";
  document.getElementById("cpass").innerHTML = "";
  resetPasswordField();
};

const resetPasswordField = () => {
  lowercase.style.opacity = "0";
  uppercase.style.opacity = "0";
  number.style.opacity = "0";
  special.style.opacity = "0";
  minlength.style.opacity = "0";
};

const resetLoginFields = () => {
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
  document.getElementById("logCapt").value = "";
};