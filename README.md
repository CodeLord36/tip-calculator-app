# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges helps improve coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Tip calculator app solution](#frontend-mentor---tip-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Handling tip percentage selection](#handling-tip-percentage-selection)
      - [Working with custom tip input](#working-with-custom-tip-input)
      - [Calculating the tip and total per person](#calculating-the-tip-and-total-per-person)
      - [Form validation](#form-validation)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
    - [AI Collaboration](#ai-collaboration)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person
- Select a predefined tip percentage
- Enter a custom tip percentage
- Enter the bill amount and number of people
- Reset all inputs and calculated results

### Screenshot

![Desktop View](./preview-desktop.png)
![Mobile View](./preview-mobile.png)

### Links

- Solution URL: [Tip Calculator App Repo](https://github.com/CodeLord36/tip-calculator-app)
- Live Site URL: [Tip Calculator App Live Site](https://tip-calculator-app-rho-mocha.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [TailwindCSS](https://tailwindcss.com/)
- Vanilla JavaScript
- [Vite](https://vite.dev/)
- Mobile-first workflow
- Responsive design
- DOM manipulation
- Event listeners
- Form validation

### What I learned

This project helped me improve my understanding of JavaScript fundamentals and how to use JavaScript to make an interactive application.

One of the major things I learned was how to handle user input, work with event listeners, and update the DOM dynamically based on user interactions.

#### Handling tip percentage selection

I learned how to use event listeners to handle tip percentage buttons and update the selected tip value.

```js
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
```

#### Working with custom tip input

I also practiced handling custom user input and ensuring that the custom tip value is used instead of a predefined percentage.

```js
customTipInput.addEventListener("input", () => {
  selectedTip = null;

  tipBtns.forEach((button) => {
    button.classList.remove("active");
  });

  updateCalculator();
  updateResetButton();
});
```

#### Calculating the tip and total per person

The project helped me understand how to break a calculation into smaller steps and use variables to store and update values.

Calculator.js

```js
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
```

#### Form validation

I also practiced validating user input to prevent invalid values, such as an empty bill amount, a negative value, or zero people, from causing incorrect calculations.

validation.js

```js
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
```

### Continued development

Going forward, I want to continue improving my JavaScript fundamentals, especially in the following areas:

- DOM manipulation and event handling
- Form validation and error handling
- Working with user input
- Writing reusable functions
- Improving code organization and readability
- Building responsive layouts with Bootstrap
- Developing better problem-solving skills without relying too heavily on tutorials

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/) - This platform provides realistic frontend challenges that help me practice and improve my development skills.
- [MDN Web Docs](https://developer.mozilla.org/) - A useful resource for understanding HTML, CSS, JavaScript, and web APIs.
- [TailwindCSS Documentation](https://tailwindcss.com/docs/) - Helped me understand and use TailwindCSS's layout system, utility classes, and responsive design features.
- [Vite Documentation](https://vite.dev/) - Useful for understanding project setup and the development environment.

### AI Collaboration

I used ChatGPT as an AI assistant during this project.

- Helped clarify JavaScript concepts and explain how certain functionality works.
- Assisted with debugging and troubleshooting.
- Provided guidance on event listeners, input handling, validation, and DOM manipulation.
- Helped me understand different approaches to implementing the calculator functionality.

AI assistance was used as a learning tool, while I worked on implementing the features and understanding the code myself.

## Author

- GitHub - [@CodeLord36](https://github.com/CodeLord36)
- Frontend Mentor - [@CodeLord36](https://www.frontendmentor.io/profile/CodeLord36)

## Acknowledgments

Thanks to Frontend Mentor for providing the challenge and design resources, which made it possible to practice frontend development by building a realistic application.
