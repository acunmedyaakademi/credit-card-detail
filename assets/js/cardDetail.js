let cardCvv = document.querySelector("#cardCvv");
let cardNumber = document.querySelector("#cardNumber");
let names = document.querySelector("#name");
let date = document.querySelector("#date");
let date2 = document.querySelector("#date2");
let holderInput = document.querySelector("#holderInput");
let numberInput = document.querySelector("#numberInput");
let aa = document.querySelector("#aa");
let yy = document.querySelector("#yy");
let cvInput = document.querySelector("#cvInput");
let btn = document.querySelector(".btn");
let checkContainer = document.querySelector(".checkContainer");
let card = document.querySelector(".card");
let cardDetail = document.querySelector(".cardDetail");

checkContainer.style.display = "none";

cvInput.oninput = () => {
  if (cvInput.value.length > cvInput.maxLength)
    cvInput.value = cvInput.value.slice(0, cvInput.maxLength);

  cardCvv.innerText = cvInput.value;
};

numberInput.oninput = () => {
  if (numberInput.value.length > numberInput.maxLength)
    numberInput.value = numberInput.value.slice(0, numberInput.maxLength);
  cardNumber.innerText = numberInput.value;
};

holderInput.oninput = () => {
  names.innerText = holderInput.value;
};

aa.oninput = () => {
  if (aa.value.length > aa.maxLength)
    aa.value = aa.value.slice(0, aa.maxLength);
  date.innerText = aa.value;
  if (parseInt(aa.value) > 12) {
    aa.value = "12";
  }
};

yy.oninput = () => {
  if (yy.value.length > yy.maxLength)
    yy.value = aa.value.slice(0, yy.maxLength);
  date2.innerText = "/" + yy.value;
};

// yy.addEventListener('focusout',() => {
//   const dates = new Date()
//   const newdate = dates.getFullYear().toLocaleString();
//   const currentYear = newdate.substring(newdate.length-2);
//   if (yy.value < currentYear) {
//     yy.value = currentYear;
//   } else if (yy.value > 50) {
//     yy.value = 50;

//   }

// })

function handleForm() {
  cardDetail.style.display = "none";
  checkContainer.style.display = "block";
}
btn.addEventListener("click", handleForm);

function maxLengthCheck(object) {}
