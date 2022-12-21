let input = document.getElementById('number-input');
let result = document.getElementById('number-result');
let inputValue = document.getElementById('inputType');
let resultValue = document.getElementById('resultType');
let inputTypeValue, resultTypeValue;

input.addEventListener('change', Results); //keyup when a keyboard is released 
inputValue.addEventListener('change', Results); //input also changes
resultValue.addEventListener('change', Results); // when it is done changing

const conversionArray = {
  //stackoverflow and chatgpt--slightly-- let me know the relative conversion in nanometers
  feet: 3.048e8,
  inches: 2.54e7,
  meters: 1e9,
  cm: 1e7,
}

function Results(theArray){
  
  inputTypeValue = inputValue.value;
  resultTypeValue = resultValue.value;
  
  if([input, inputValue, resultValue].includes(theArray.target)){
    //if the input, the user puts in, the input type and result type are all in the array, then
    // we get the input.value which converted to a Number, 
    //to do: study lines 27-29 a little more -- understanding is minimal
    //to do: understand more of the "theArray.target"
    result.value = (Number(input.value) * conversionArray[inputTypeValue]/conversionArray[resultTypeValue]).toFixed(2);
  }
}



