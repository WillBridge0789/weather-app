//import axios from 'axios'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '608e84446ac7199dba4b83b7a7b880b5';
let zipCode;

//-----------------------Variables:-------------------------------//

const errorMessage = "";

let showConditions = "";

let header = document.createElement('h1');
header.innerText = 'Current Weather';
document.body.appendChild(header);

let button = document.createElement('button');
button.id = 'btn';
button.innerText = 'Check Weather';
document.body.appendChild(button);

let input = document.createElement("input");
input.id = 'zipCode';
input.setAttribute("type", "text");
document.body.appendChild(input);

let paragraph = document.createElement('p');
paragraph.id = 'UserData';
document.body.appendChild(paragraph);



//------------------------Objects:--------------------------------//

let currentWeather = {
    city: "",
    conditions: "",
    temperature: "",
    weatherImage: ""
}

//------------------------FUNCTIONS:------------------------------//

function init() {

}

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

function changeHTML() {

}

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
        //console.log();
        currentWeather.city = response.data.name;
        currentWeather.conditions = response.data.weather[0].description; 
        currentWeather.temperature = Math.round(response.data.main.temp); 
        //currentWeather.image = response.data.name;  
        console.log(currentWeather);
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