function confirm() {
  let chname = document.getElementById("chnameinput").value;
  let cnumber = document.getElementById("cnumberinput").value;
  let expmm = document.getElementById("expmminput").value;
  let expyy = document.getElementById("expyyinput").value;
  let cvcinput = document.getElementById("cvcinput").value;
  let cardDataInputs = document.getElementById("data_final");
  let cardDataInputs_cardHolderName = document.getElementById("chnamediv");
  let cardDataInputs_cardHolderNameInput =
    document.getElementById("chnameinputDiv");
  let cardDataInputs_cardNumber = document.getElementById("cnumberDiv");
  let cardDataInputs_cardNumberInput =
    document.getElementById("cnumberinputDiv");
  let cardDataInputs_exp = document.getElementById("expDiv");
  let cardDataInputs_button = document.getElementById("confirmButtonDiv");
  let completeIconSVG = document.getElementById("completeIcon");
  let completeTYLetter = document.getElementById("TYLetter");
  let completeTYLetterText = document.getElementById("TYLetterText");
  let completeContinueButton = document.getElementById("continueButton");
  let nnumber = document.getElementById("nnumber");
  let nname = document.getElementById("nname");
  let ddate = document.getElementById("ddate");
  let ccvvcc = document.getElementById("ccvvcc");
  checkname(chname);
  cnumber = checknumber(cnumber);
  expmm = checkmm(expmm);
  expyy = checkyy(expyy);
  cvcinput = checkCVC(cvcinput);
  nnumber.innerHTML = cnumber;
  nname.innerHTML = chname;
  ddate.innerHTML = `${expmm}/${expyy}`;
  ccvvcc.innerHTML = cvcinput;
  let final = finalAccept();
  if (final) {
    cardDataInputs.removeChild(cardDataInputs_cardHolderName);
    cardDataInputs.removeChild(cardDataInputs_cardHolderNameInput);
    cardDataInputs.removeChild(cardDataInputs_cardNumber);
    cardDataInputs.removeChild(cardDataInputs_cardNumberInput);
    cardDataInputs.removeChild(cardDataInputs_exp);
    cardDataInputs.removeChild(cardDataInputs_button);
    completeIconSVG.style.display = "block";
    completeTYLetter.style.display = "block";
    completeTYLetterText.style.display = "block";
    completeContinueButton.style.display = "block";
  }
}
function finalAccept() {
  let error1 = document.getElementById("error1");
  let error2 = document.getElementById("Error2");
  let error3 = document.getElementById("Error3");
  let error1style = error1.style.display;
  let error2style = error2.style.display;
  let error3style = error3.style.display;
  if (error1style == "none" && error2style == "none" && error3style == "none") {
    return true;
  }
}
function checkname(name) {
  let exceptions = "123456789!@#$%^&*()-_=+./']\\[;.,|`";
  error1Disable();
  if (name == 0) {
    error1();
  }
  for (let char of name) {
    for (let char1 of exceptions) {
      if (char == char1) {
        error1();
      }
    }
  }
}
function checknumber(num) {
  //нужно добавить автоудаление пробелов и приведение к формату 0000 0000 0000 0000
  let exceptions =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+./']\\[;.,|`АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  error2Disable();
  num = clearSpaces(num);
  for (let char of num) {
    for (let char1 of exceptions) {
      if (char == char1) {
        error2();
      }
    }
  }
  let counter = num.length;
  if (counter != 16) {
    error2();
    return "0000 0000 0000 0000";
  } else {
    let n1 = num.slice(0, 4);
    let n2 = num.slice(4, 8);
    let n3 = num.slice(8, 12);
    let n4 = num.slice(12);
    let answer = `${n1} ${n2} ${n3} ${n4}`;
    return answer;
  }
}
function checkmm(num) {
  error3Disable();
  let numINT = Number(num);
  if (!(numINT > 0 && numINT < 13)) {
    error3();
  }
  let exceptions =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+./']\\[;.,|`";
  for (let char of num) {
    for (let char1 of exceptions) {
      if (char == char1) {
        error3();
      }
    }
  }
  let counter = num.length;
  if (counter != 2) {
    error3();
    return "01";
  } else {
    return num;
  }
}
function checkyy(num) {
  error4Disable();
  let exceptions =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+./']\\[;.,|`";
  let numINT = Number(num);
  if (!(numINT > 21 && numINT < 100)) {
    error4();
  }
  for (let char of num) {
    for (let char1 of exceptions) {
      if (char == char1) {
        error4();
      }
    }
  }
  let counter = num.length;
  if (counter != 2) {
    error4();
    return "23";
  } else {
    return num;
  }
}
function checkCVC(num) {
  error5Disable();
  let exceptions =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+./']\\[;.,|`";
  let numINT = Number(num);
  if (!(numINT > 0 && numINT < 1000)) {
    error5();
  }
  for (let char of num) {
    for (let char1 of exceptions) {
      if (char == char1) {
        error5();
      }
    }
  }
  let counter = num.length;
  if (counter != 3) {
    error5();
    return "123";
  } else {
    return num;
  }
}
function clearSpaces(num) {
  return num.split(" ").join("");
}

function error1() {
  document.getElementById("error1").style.display = "block";
  chnameinput.style.border = "1px solid red";
}
function error1Disable() {
  document.getElementById("error1").style.display = "none";
  document.getElementById("chnameinput").style.border =
    "1px solid hsl(270, 3%, 87%)";
}
function error2() {
  document.getElementById("Error2").style.display = "block";
  cnumberinput.style.border = "1px solid red";
}
function error2Disable() {
  document.getElementById("Error2").style.display = "none";
  document.getElementById("cnumberinput").style.border =
    "1px solid hsl(270, 3%, 87%)";
}
function error3() {
  document.getElementById("Error3").style.display = "block";
  expmminput.style.border = "1px solid red";
}
function error3Disable() {
  document.getElementById("Error3").style.display = "none";
  document.getElementById("expmminput").style.border =
    "1px solid hsl(270, 3%, 87%)";
}
function error4() {
  document.getElementById("Error3").style.display = "block";
  expyyinput.style.border = "1px solid red";
}
function error4Disable() {
  document.getElementById("Error3").style.display = "none";
  document.getElementById("expyyinput").style.border =
    "1px solid hsl(270, 3%, 87%)";
}
function error5() {
  document.getElementById("Error3").style.display = "block";
  cvcinput.style.border = "1px solid red";
}
function error5Disable() {
  document.getElementById("Error3").style.display = "none";
  document.getElementById("cvcinput").style.border =
    "1px solid hsl(270, 3%, 87%)";
}
