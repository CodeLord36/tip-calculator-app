import "../style.css";

console.log("Tip Calculator App is ready");

const billInput = document.querySelector("#bill");
const customTipInput = document.querySelector("#customTip");
const numberOfPeople = document.querySelector("#numberOfPeople");

// Tip Button
// const tipButtons = document.querySelector("#tipButtons");
// const tipButtons = document.querySelectorAll("#tipButtons");
const tipBtns = document.querySelectorAll(".tipBtn");

// Result elements
const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");

//Reset Button
const resetBtn = document.querySelector("#resetBtn");

// Log all element values
// console.log(billInput);
// console.log(customTipInput);
// console.log(numberOfPeople);
// console.log(tipButtons);
// console.log(tipAmount);
// console.log(totalAmount);
// console.log(resetBtn);

console.log(billInput.value);
console.log(customTipInput.value);
console.log(numberOfPeople.value);
// console.log(tipButtons.value);
console.log(tipBtns.values);

console.log(tipAmount.value);
console.log(totalAmount.value);
console.log(resetBtn.value);

billInput.addEventListener("input", () => {
  const bill = parseFloat(billInput.value);
  console.log("The Bill has been changed to - ", bill);
});

// tipButtons.addEventListener("click", (event) => {
//   const tipPercentage = Number(event.currentTarget.dataset.tip);

//   console.log("Selected Tip: ", tipPercentage);
// });

// tipButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const tipPercentage = Number(button.dataset.tip);

//     console.log("Selected tip: ", tipPercentage);
//   });
// });

tipBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const tipPercentage = Number(button.dataset.tip);

    console.log("Selected tip: ", tipPercentage);
  });
});

resetBtn.disabled = false;
resetBtn.addEventListener("click", () => {
  console.log("calculator reset!");
});
