

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




setInterval(function(){
  let localTime = new Date();

  document.querySelector("span[data-time =hours]").textContent = localTime.getHours().toString().padStart(2,"0");
  document.querySelector("span[data-time =minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
  document.querySelector("span[data-time =seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
  
},1000)

// Gallery Section

const galleryImages = [
  { 
    src:"./assets/gallery/image1.jpg",
    alt:"Thumbnail Image 1"
  } ,{ 
    src:"./assets/gallery/image2.jpg",
    alt:"Thumbnail Image 2"
  } ,
  { 
    src:"./assets/gallery/image3.jpg",
    alt:"Thumbnail Image 3"
  }
];

// for (let image in galleryImages)
// {
//   console.log(galleryImages[image])
// }

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");
mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;


galleryImages.forEach(function(image,index){
   let thumb = document.createElement("img");
   thumb.src = image.src;
   thumb.src = image.alt;
   thumb.dataset.arrayIndex = index;
   thumb.dataset.selected = false;
   thumbnails.appendChild(thumb);
});

