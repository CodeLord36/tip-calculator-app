import "../style.css";
import {
  calculateTip,
  calculateTipPerPerson,
  calculateTotalAmountPerPerson,
} from "./calculator";

console.log("Tip Calculator App is ready");

const billInput = document.querySelector("#bill");
const customTipInput = document.querySelector("#customTip");
const numberOfPeople = document.querySelector("#numberOfPeople");

// Tip Button
const tipBtns = document.querySelectorAll(".tipBtn");

// Result elements
const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");

//Reset Button
const resetBtn = document.querySelector("#resetBtn");

// Default tip percentage value created
let selectedTip = null;

// function for calculation
function updateCalculator() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(numberOfPeople.value);

  // checking between either the selected and custom tip
  const tipPercentage =
    customTipInput.value.trim() !== ""
      ? parseFloat(customTipInput.value)
      : selectedTip;

  // using the calculation functions
  const tip = calculateTip(bill, tipPercentage);
  const tipPerPerson = calculateTipPerPerson(tip, people);
  const amountPerPerson = calculateTotalAmountPerPerson(bill, tip, people);

  // display results to the output elements
  tipAmount.textContent = tipPerPerson.toFixed(2);
  totalAmount.textContent = amountPerPerson.toFixed(2);
}

// Bill input listener
billInput.addEventListener("input", updateCalculator);

// Number of People input listener
numberOfPeople.addEventListener("input", updateCalculator);

// Preset percentage button select listener
tipBtns.forEach((button) => {
  button.addEventListener("click", () => {
    selectedTip = Number(button.dataset.tip);

    customTipInput.value = "";

    tipBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    updateCalculator();
  });
});

// Custom percentage input listener
customTipInput.addEventListener("input", () => {
  selectedTip = null;

  tipBtns.forEach((button) => {
    button.classList.remove("active");
  });

  updateCalculator();
});

// Reset button listener
// resetBtn.disabled = false;
resetBtn.addEventListener("click", () => {
  console.log("calculator reset!");
});
