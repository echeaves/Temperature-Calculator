/*const kelvin = 293; // Today's forcast is 293 Kelvin
let celsius = kelvin - 273; //Converts Kelvin to Celsius
let fahrenheit = celsius * (1.8) + 32; //Equatio to n calculate Fahrenheit
fahrenheit = Math.floor(fahrenheit); //Fahrenheit temp will round down 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); //will output the sentence using Fahrenheit temperature.

let newton = celsius * (33 / 100); //Equation to calcuate Newton
newton = Math.floor(newton);  //Newton will round down
console.log(`The temperature is ${newton} degrees Newton.`); //will output the sentence using Newton temperature.*/


/*const celsiusToFahrenheit = celsius => (celsius * 1.8) + 32;
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;
const convertTemperature = (temperature, unit) => {
  if (unit === 'c'){
  return celsiusToFahrenheit(temperature);
  }
  else if(unit === 'F'){
    return fahrenheitToCelsius(temperature);
  }
else{
  return 'Invalid unit. Use "C" for Celsius or "F" for fahrenheit';
  }
}
const celsiusValue = 25;
const fahrenheitValue = 17;

const convertedToFahrenheit = convertTemperature(celsiusValue, 'C');
const convertedToCelsius = convertTemperature(fahrenheitValue, 'F');*/



function celsiusToFahrenheit(celsius){
  const celsiusToFahrenheit = (celsius * 1.8) + 32;
  return celsiusToFahrenheit;
}

function fahrenheitToCelsius(fahrenheit){
  const fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
  return fahrenheitToCelsius;
}

function convertTemperature(celsius = "C", fahrenheit = "F"){
  if (celsius === "C"){
    return celsiusToFahrenheit;
  } else if (fahrenheit === "F") {
    return fahrenheitToCelsius;
  } else {
    return 'Invalid';
  }
}


