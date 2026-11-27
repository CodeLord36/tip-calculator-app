export function validateInput(bill, tipPercentage, people) {
  if (
    !Number.isFinite(bill) ||
    !Number.isFinite(tipPercentage) ||
    !Number.isFinite(people) ||
    bill <= 0 ||
    tipPercentage < 0 ||
    people <= 0
  ) {
    return false;
  }
  return true;
}

export function resetCalculator(
  billInput,
  customTipInput,
  numberOfPeople,
  tipBtns,
  tipAmount,
  totalAmount,
  peopleError,
  resetBtn,
) {
  billInput.value = "";
  customTipInput.value = "";
  numberOfPeople.value = "";

  tipBtns.forEach((button) => {
    button.classList.remove("active");
  });

  numberOfPeople.classList.remove("input-error");

  peopleError.textContent = "";

  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";

  resetBtn.disabled = true;
}
