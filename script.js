//these are for the length/distance conversions
let input = document.getElementById('number-input');
let result = document.getElementById('number-result');
let inputValue = document.getElementById('inputType');
let resultValue = document.getElementById('resultType');
let inputTypeValue, resultTypeValue;

//these are for the weight conversions
let inputWeight = document.getElementById('number-input2'); 
let resultWeight = document.getElementById('number-result2');
let inputValueWeight = document.getElementById('inputType2');
let resultValueWeight = document.getElementById('resultType2');
let inputTypeValue2, resultTypeValue2;

input.addEventListener('change', Results); //keyup when a keyboard is released 
inputValue.addEventListener('change', Results); //input also changes
resultValue.addEventListener('change', Results); // when it is done changing
inputWeight.addEventListener('change', WeightResult);
inputValueWeight.addEventListener('change', WeightResult);
resultValueWeight.addEventListener('change', WeightResult);

const conversionObject = {
  //stackoverflow and chatgpt--slightly-- let me know the relative conversion in nanometers
  feet: 3.048e8,
  inches: 2.54e7,
  meters: 1e9,
  cm: 1e7,
  km: 1.0000e12,
  deci: 100000000,
}

function Results(theArray){
  
  inputTypeValue = inputValue.value;
  resultTypeValue = resultValue.value;
  
  if([input, inputValue, resultValue].includes(theArray.target)){
    //to do: study lines 27-29 a little more -- understanding is minimal
    //to do: understand more of the "theArray.target"
    result.value = (Number(input.value) * conversionObject[inputTypeValue]/conversionObject[resultTypeValue]).toFixed(3);
  }
}

const weightObject = {
  //used the smallest weight for relative conversions: oz
  oz: 1,
  kilogram: 35.274,
  lb: 16,
  grams: 0.03527,
}

function WeightResult(e){
  inputTypeValue2 = inputValueWeight.value;
  resultTypeValue2 = resultValueWeight.value;
  
  if([inputWeight, inputValueWeight, resultValueWeight].includes(e.target)) {
    resultWeight.value = (Number(inputWeight.value) *  weightObject[inputTypeValue2]/weightObject[resultTypeValue2]).toFixed(3);
  }
}
