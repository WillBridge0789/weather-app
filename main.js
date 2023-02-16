//import axios from 'axios'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '608e84446ac7199dba4b83b7a7b880b5';
let zipCode;

//------------------------Objects:--------------------------------//

let currentWeather = {
  city: "",
  conditions: "",
  temperature: "",
  weatherImage: ""
}

//-----------------------Variables:-------------------------------//

const errorMessage = "";

let showConditions = "";
let main = document.getElementById('main');

let header = document.createElement('h1');
header.id = 'topHead';
header.innerText = 'Current Weather';
main.appendChild(header);

let button = document.createElement('button');
button.id = 'btn';
button.innerText = 'Check Weather';
main.appendChild(button);

let input = document.createElement("input");
input.id = 'zipCode';
input.setAttribute("type", "text");
main.appendChild(input);

let cityHeader = document.createElement('h2');
cityHeader.id = 'cityHead';
cityHeader.textContent = 'City';
main.appendChild(cityHeader);

let cityValue = document.createElement('p');
cityValue.textContent = currentWeather.city;
main.appendChild(cityValue);

let weatherCond = document.createElement('h2');
weatherCond.id = 'weatherCond';
weatherCond.textContent = 'Conditions';
main.appendChild(weatherCond);

let weathValue = document.createElement('p');
weathValue.textContent = currentWeather.conditions;
main.appendChild(weathValue);

let currentTemp = document.createElement('h2');
currentTemp.id = 'currentTemp';
currentTemp.textContent = 'Temperature';
main.appendChild(currentTemp);

let tempValue = document.createElement('p');
tempValue.textContent = currentWeather.temperature;
main.appendChild(tempValue);







//------------------------UNUSED:------------------------------//

/* function init() {
  cityHeader.innerHTML = currentWeather.city;
} /*

/*function tempConvert() {

}*/

/* function buildHTML() {
    document.getElementById('userData').innerHTML = '';
    let img = document.createElement('img');
    img.setAttribute('src', currentWeather.image);
    let div = document.createElement('div');
    div.innerText = `${currentWeather.city.temperature.weather}`;
    document.getElementById('userData').appendChild(img);
    document.getElementById('userData').appendChild(div);
} */

//function changeHTML() {}

//------------------------FUNCTIONS:------------------------------//

function getData() {
    let options = {
        baseURL: BASE_URL,
        params: {
            appid: API_KEY,
            zip: document.getElementById('zipCode').value,
            units: 'imperial'
          }
    }
    axios.get('/weather', options)
      .then(function (response) {
        console.log(response.data);
        currentWeather.city = response.data.name;
        currentWeather.conditions = response.data.weather[0].description; 
        currentWeather.temperature = Math.round(response.data.main.temp); 
        console.log(currentWeather);
        cityValue.innerText = currentWeather.city;
        weathValue.innerText = currentWeather.conditions;
        tempValue.innerText = currentWeather.temperature + ' ' + 'F';
      })
      .catch(function (error) {
        document.getElementById('zipCode').style.backgroundColor = 'red';
        console.log('Make sure to put in a Zip Code');
      
      })

  } 

//------------------------Event Listeners:------------------------------//

//When submitting zipCode to retrieve data from weather api
document.getElementById('btn').addEventListener('click', getData);
console.log(currentWeather);