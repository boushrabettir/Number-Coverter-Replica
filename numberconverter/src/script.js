
const feet = 1/12;
const meters = 100;

const numberOfDayInput = document.querySelector('#number-input');
const calculatorButton = document.querySelector('#calculate-button');
const theFeet = document.querySelector('#feet');
const theMeters = document.querySelector('#meters');


calculatorButton.addEventListener('click',() => {
  let number = numberOfDayInput.value;
  let calculationFeet = number * feet;
  let calculationMeters = number / meters;
 
  
  theFeet.innerHTML =`${calculationFeet} feet`;
  theMeters.innerHTML = `${calculationMeters} meters`;

});
  
  
