/* 
Create another button that, when clicked, clears any text in the input field.

Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.

If the temperature is greater than 90F/32C the color of the converted temperature should be red.
If the temperature is less than 32F/0C the color of the converted temperature should be blue.
For any other temperature, the color should be green. */



function toCelsius (tempIn) {
  tempOut = (tempIn - 32) * (5/9);
  return tempOut.toFixed(2);
}

function toFahrenheit (tempIn) {
  tempOut = (tempIn * (9/5)) + 32;
  return tempOut.toFixed(2);
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clearBtn = document.getElementById("clear");
var output = document.getElementById("outputTemp");
var input = document.getElementById("inputTemp");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  var whichRadio;
  var radio = document.getElementsByClassName("radio");
  var tempOut;
  var tempIn;
  tempIn = input.value;
  
  
  for(let i = 0; i < radio.length;i++){
    if(radio[i].checked){
      whichRadio = radio[i].value;
      break;
    }
  }

  if (whichRadio == 0) {
    tempOut = toCelsius(tempIn);
    if(tempOut < 0){ 
      output.classList = "blue";
    } else if (tempOut < 32){
      output.classList = "green";
    } else {
      output.classList = "red";
    }

  } else if (whichRadio == 1){
     tempOut = toFahrenheit(tempIn);
    if(tempOut < 32){ 
      output.classList = "blue";
    } else if (tempOut < 90){
      output.classList = "green";
    } else {
      output.classList = "red";
    }
  }
  output.value = tempOut;
}

// Clears Converter ***  Sets output  & tempIn value to 0

function clearConverter(){
  output.value = "";
  input.value = "";
  output.classList = "";
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
button.addEventListener("keyup", function(event){
  if (event.which === 13){
    determineConverter;
  }
});
input.addEventListener("keypress", function(event){
  if (event.which === 13){
    event.preventDefault();
    button.click();
  }
});

clearBtn.addEventListener("click", clearConverter);
