document.querySelector("#open-nav-menu").addEventListener("click", function(){document.querySelector("header nav .wrapper").classList.add("nav-open");});

document.querySelector("#close-nav-menu").addEventListener("click", function(){document.querySelector("header nav .wrapper").classList.remove("nav-open");});

// change greeting to "heelo world
document.querySelector("#greeting").innerHTML = "Hello World!";

//create a greeting text variable
const greetingText = "Good morning";

//create a weather condition variable
const weatherCondition = "sunny";

//create a user location variable
const userLocation = "London";

//create a temperatuure variable
let temperature = 22.8673;

//create a weather text variable
let celsiusText = `The weather is ${weatherCondition } and ${temperature.toFixed(1)} °C n ${userLocation}.`;
//farh text
let farhText = `The weather is ${weatherCondition } and ${convertCelsiusToFahrenheit(temperature.toFixed(1))} °F in ${userLocation}.`;





document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector('p#weather').innerHTML = celsiusText;


//a function to convert celsius to fahrenheit
function convertCelsiusToFahrenheit(temperature) {
    const fahr = temperature * 1.8 + 32;
    return   fahr;
}

//add an event listener to the to weather-group
document.querySelector(".weather-group").addEventListener("click", function(event){
  if(event.target.id=="celsius") {
   document.querySelector('p#weather').innerHTML = celsiusText;
  }else if(event.target.id=="fahr"){
   document.querySelector('p#weather').innerHTML = farhText;
  }


     
});







