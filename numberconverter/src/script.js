let input = document.getElementById('number-input');
let result = document.getElementById('number-result');
let inputValue = document.getElementById('inputType');
let resultValue = document.getElementById('resultType');
let inputTypeValue;
let resultTypeValue;

input.addEventListener('keyup', Results); //keyup when a keyboard is released 
inputValue.addEventListener('change', Results); //input also changes
resultValue.addEventListener('change', Results); // when it is done changing

function Results() {
  
inputTypeValue = inputValue.value;
resultTypeValue = resultValue.value;
  
  // feet to inches, inches to feet
  // feet to meters, meters to inches
  // feet to centimeters, centimeters to feet
  //feet to feet

if(inputTypeValue === "inches" && resultTypeValue === "feet"){
  result.value = Number(input.value) * 1/12;
} else if (inputTypeValue === "feet" && resultTypeValue === "inches"){
  result.value = Number(input.value) * 12;
} else if(inputTypeValue === "feet" && resultTypeValue === "meters") {
  result.value = Number(input.value) / 3.2808399;
} else if (inputTypeValue === "meters" && resultTypeValue === "feet"){
  result.value = Number(input.value) * 3.2808399;
} else if(inputTypeValue === "feet" && resultTypeValue === "cm"){
  result.value = Number(input.value) *  30.48;
} else if (inputTypeValue === "cm" && resultTypeValue === "feet"){
  result.value = Number(input.value) / 30.48;
} else if(inputTypeValue === "feet" && resultTypeValue === "feet"){
  result.value = Number(input.value) * 1;
}
  
  //inches to meters, meters to inches
  // inches to centimeters, centimeters to inches
  //inches to inches
  
  if(inputTypeValue === "inches" && resultTypeValue === "meters"){
    result.value = Number(input.value) / 39.3700787;
  } else if (inputTypeValue === "meters" && resultTypeValue === "inches"){
    result.value = Number(input.value) * 39.3700787;
  } else if (inputTypeValue === "inches" && resultTypeValue === "cm") {
    result.value = Number(input.value) * 2.54;
  } else if (inputTypeValue === "cm" && resultTypeValue === "inches") {
    result.value = Number(input.value) / 2.54;
  } else if (inputTypeValue === "inches" && resultTypeValue === "inches"){
    result.value = Number(input.value) * 1;
  }
  
  
  //cm to meters, meters to cm
  //cm to cm
  
  if(inputTypeValue === "cm" && resultTypeValue === "meters"){
    result.value = Number(input.value) / 100;
  } else if(inputTypeValue === "meters" && resultTypeValue === "cm") {
    result.value = Number(input.value) * 100;
  } else if (inputTypeValue === "cm" && resultTypeValue === "cm") {
     result.value = Number(input.value) * 1;
  }
  
  //meters to meters 
  if(inputTypeValue === "meters" && resultTypeValue === "meters"){
     result.value = Number(input.value) * 1;
  }
  
  
  
  
 //conversions for weight here

}





