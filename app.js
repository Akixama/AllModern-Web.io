const plusOne = document.getElementById("plusOne");
const plusTwo = document.getElementById("plusTwo");
const plusThree = document.getElementById("plusThree");
const plusFour = document.getElementById("plusFour");
const signPage = document.getElementById("Sign");
const theMain = document.getElementById("theMain");
const body = document.getElementById("bodyz");
const header = document.getElementById("HeadGo");
const firstChair = document.getElementById("chair_1");
const secondChair = document.getElementById("chair_2");
// let userName = document.getElementById("userName");
const userName = document.querySelector("#userName");
// let passWord = document.getElementById("passWord");
const passWord = document.querySelector("#passWord");

function plusOneClick() {
  plusOne.style.display = "block";
  plusTwo.style.display = "none";
  plusThree.style.display = "none";
  plusFour.style.display = "none";
}

function plusTwoClick() {
  plusTwo.style.display = "block";
  plusOne.style.display = "none";
  plusThree.style.display = "none";
  plusFour.style.display = "none";
}

function plusThreeClick() {
  plusThree.style.display = "block";
  plusOne.style.display = "none";
  plusTwo.style.display = "none";
  plusFour.style.display = "none";
}

function plusFourClick() {
  plusFour.style.display = "block";
  plusThree.style.display = "none";
  plusTwo.style.display = "none";
  plusOne.style.display = "none";
}

function SignUp() {
  theMain.style.display = "block";
  body.style.background = "rgba(0,0,0, 0.7)";
  // body.style.filter = 'brightness(0.3)'
  // header.style.background = 'rgba(0,0,0, 0.7)'
  header.style.position = "relative";
}

function closeBro() {
  theMain.style.display = "none";
  header.style.position = "sticky";
  body.style.background = "rgba(0,0,0, 0)";
}

function mainChair() {
  firstChair.style.display = "none";
  secondChair.style.display = "block";
}

function mainChairSecond() {
  firstChair.style.display = "block";
  secondChair.style.display = "none";
}

function loginBut() {
  if (userName.value < '' || passWord.value < '') {
    alert("Please Put In A USERNAME and PASSWORD");
  }else{
    alert(`Welcome To AllModern, Sir/Ma ${userName.value}`);
    endBut();
    userName.value = ''
    passWord.value = ''
  }
}

function endBut(){
  theMain.style.display = "none";
  header.style.position = "sticky";
  body.style.background = "rgba(0,0,0, 0)";
}
