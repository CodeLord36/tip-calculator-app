import "../style.css";
import {
  calculateTip,
  calculateTipPerPerson,
  calculateTotalAmountPerPerson,
} from "./calculator";
import { resetCalculator, validateInput } from "./validation";

console.log("Tip Calculator App is ready");

const billInput = document.querySelector("#bill");
const customTipInput = document.querySelector("#customTip");
const numberOfPeople = document.querySelector("#numberOfPeople");

// Tip Button
const tipBtns = document.querySelectorAll(".tipBtn");

// Result elements
const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");

// Error elements
const peopleError = document.querySelector("#peopleError");

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

  //show people error
  const showPeopleError = numberOfPeople.value !== "" && people <= 0;
  peopleError.textContent = showPeopleError ? "Can't be Zero" : "";

  numberOfPeople.classList.toggle("input-error", showPeopleError);
  // validate the inputs
  const isValid = validateInput(bill, tipPercentage, people);

  if (!isValid) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    return;
  }

  // using the calculation functions
  const tip = calculateTip(bill, tipPercentage);
  const tipPerPerson = calculateTipPerPerson(tip, people);
  const amountPerPerson = calculateTotalAmountPerPerson(bill, tip, people);

  // display results to the output elements
  tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmount.textContent = `$${amountPerPerson.toFixed(2)}`;
}

// Reset function
function updateResetButton() {
  const hasValues =
    billInput.value.trim() !== "" ||
    customTipInput.value.trim() !== "" ||
    numberOfPeople.value.trim() !== "" ||
    selectedTip !== null;

  resetBtn.disabled = !hasValues;
}

// Bill input listener
billInput.addEventListener("input", () => {
  updateCalculator();
  updateResetButton();
});

// Number of People input listener
numberOfPeople.addEventListener("input", () => {
  updateCalculator();
  updateResetButton();
});

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
    updateResetButton();
  });
});

// Custom percentage input listener
customTipInput.addEventListener("input", () => {
  selectedTip = null;

  tipBtns.forEach((button) => {
    button.classList.remove("active");
  });

  updateCalculator();
  updateResetButton();
});

// Reset button listener
// resetBtn.disabled = false;
resetBtn.addEventListener("click", () => {
  selectedTip = null;

  resetCalculator(
    billInput,
    customTipInput,
    numberOfPeople,
    tipBtns,
    tipAmount,
    totalAmount,
    peopleError,
    resetBtn,
  );

  console.log("Calculator is reset!!!");
});
