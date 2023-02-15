//import axios from 'axios'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '608e84446ac7199dba4b83b7a7b880b5';


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
input.setAttribute("type", "text");
document.body.appendChild(input);


//------------------------Objects:--------------------------------//

let currentWeather = {
    city: "",
    conditions: "",
    temperature: "",
    image: ""
}

//------------------------FUNCTIONS:------------------------------//

function init() {

}

/*function tempConvert() {

}*/

function buildHTML() {
    document.getElementById('userData').innerHTML = ''
    let img = document.createElement('img');
    img.setAttribute('src', currentWeather.image);
    let div = document.createElement('div');
    div.innerText = `${currentWeather.city.temperature.weather}`;
    document.getElementById('userData').appendChild(img);
    document.getElementById('userData').appendChild(div);
}

function changeHTML() {

}

function getData() {
    let options = {
        baseURL: BASE_URL,
        params: {
            appid: API_KEY,
            zip: 40517,
            units: 'imperial'
          }
    }
    axios.get('/weather', options)
      .then(function (response) {
        console.log(response);
        //console.log();
        currentWeather.user = response.data.results[0];
        insertUser()
  
      })
      .catch(function (error) {
        console.log(error);
      })
  } 

//------------------------Event Listeners:------------------------------//

//When submitting zipCode to retrieve data from weather api
document.getElementById('btn').addEventListener('click', getData);