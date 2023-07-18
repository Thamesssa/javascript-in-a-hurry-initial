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
let weatherText = `The weather is ${weatherCondition } and ${temperature.toFixed(1)} degrees in ${userLocation}.`;




document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector('p#weather').innerHTML = weatherText;








