//----------------------API KEY & URL------------------------//

const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '608e84446ac7199dba4b83b7a7b880b5';

//---------------------------OBJECTS:--------------------------------//

let currentWeather = {
  city: "",
  conditions: "",
  temperature: "",
  weatherImage: ""
}

//-----------------------BOOTSTRAP STYLING:--------------------------//

let main = document.getElementById('main');
let divCont = document.createElement('div');
divCont.setAttribute('class', "container");
main.appendChild(divCont);

let divRow = document.createElement('div');
//divRow.setAttribute('class', "row");
divRow.className = 'row mt-3 p-3'
divCont.appendChild(divRow);

let divCol = document.createElement('div');
//divCol.setAttribute('class', "col");
divCol.className = 'col d-flex justify-content-center mt-3 mt-3 p-3 bg-light border-bottom rounded-3 text-secondary';
divRow.appendChild(divCol);

let divRow2 = document.createElement('div');
//divRow2.setAttribute('class', "row");
divRow.className = 'row mt-3';
divCont.appendChild(divRow2);

let divCol2 = document.createElement('div');
//divCol.setAttribute('class', "col");
divCol2.className = 'col d-flex justify-content-center mt-3 mt-3 p-3 bg-light border-bottom rounded-3 text-secondary';
divRow2.appendChild(divCol2);

let divRow3 = document.createElement('div');
//divRow3.setAttribute('class', "row");
divRow3.className = 'row m-3';
divCont.appendChild(divRow3);

let divCol3 = document.createElement('div');
//divCol.setAttribute('class', "col");
divCol3.className = 'col d-flex flex-column text-center mt-3 mb-3 bg-light border-bottom rounded-3 text-secondary';
divRow3.appendChild(divCol3);

//-----------------------------VARIABLES:-------------------------------//

let header = document.createElement('h1');
header.id = 'topHead';
header.innerText = 'Current Weather';
divCol.appendChild(header);

let button = document.createElement('button');
button.id = 'btn';
button.innerText = 'Check Weather';
divCol2.appendChild(button);

let input = document.createElement("input");
input.id = 'zipCode';
input.setAttribute("type", "text");
input.setAttribute("placeholder", 'Enter Zip Code');
divCol2.appendChild(input);

let cityHeader = document.createElement('h2');
cityHeader.id = 'cityHead';
cityHeader.textContent = 'City';
divCol3.appendChild(cityHeader);

let cityValue = document.createElement('p');
cityValue.textContent = currentWeather.city;
divCol3.appendChild(cityValue);

let weatherCond = document.createElement('h2');
weatherCond.id = 'weatherCond';
weatherCond.textContent = 'Conditions';
divCol3.appendChild(weatherCond);

let weathValue = document.createElement('p');
weathValue.textContent = currentWeather.conditions;
divCol3.appendChild(weathValue);

let currentTemp = document.createElement('h2');
currentTemp.id = 'currentTemp';
currentTemp.textContent = 'Temperature';
divCol3.appendChild(currentTemp);

let tempValue = document.createElement('p');
tempValue.textContent = currentWeather.temperature;
divCol3.appendChild(tempValue);

//--------------------------FUNCTIONS:------------------------------//

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

//---------------------------EVENT LISTENERS:------------------------------//

//When submitting zipCode to retrieve data from weather api
document.getElementById('btn').addEventListener('click', getData);
console.log(currentWeather);

//------------------------UNUSED VARIABLES:-------------------------------//

//const errorMessage = "";
//let showConditions = "";
//let zipCode;

//------------------------UNUSED FUNCTIONS:------------------------------//

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

/*function show() {
  if (options.zip) {
    return getData;
  } else {
    cityHeader.style.visibility = "hidden";
    weatherCond.style.visibilty = "hidden";
    currentTemp.style.visibility = "hidden";
  }
} */