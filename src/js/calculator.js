export function calculateTip(bill, tipPercentage) {
  const tip = bill * (tipPercentage / 100);

  return tip;
}

export function calculateTipPerPerson(tip, numberOfPerson) {
  const tipPerPerson = tip / numberOfPerson;

  return tipPerPerson;
}

export function calculateTotalAmountPerPerson(bill, tip, numberOfPerson) {
  const amountPerPerson = (bill + tip) / numberOfPerson;

  return amountPerPerson;
}
