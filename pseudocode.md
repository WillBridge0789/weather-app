# Weather App
## Goal
Making an application that outputs the weather for a location based on the users zipcode input.

## Variables:
* Error message(**errorMessage**)
* Show Conditions(**showConditions**)
* Zip Code(**zipCode**)

## Objects:
* State Object?
    * **currentWeather{}** 
        * City: "",
        * Conditions: "",
        * Temperature: "", **<--** *likely always going to be an integer*
            * (Fahrenheit, Celsius, Kelvin)
        * Image/icon **<--** *could possibly be a **boolean** later on?*
            * **IF** condition === "weather condition example: Rain"
                * return "img/rain.jpg";<br>
            * **ELSE IF** condition === "sunny"
                * return "img/sunny.jpg"; and so on...


## Functions:
* **init()**
* **tempConvert()**
* **buildHTML()** **<--**
    * Show city, populate with state object **currentWeather**-->**currentWeather.city**
    * Show temperature
    * Change **src** of the **img** tag to the **currentWeather.image**
    * Populate with api data
* **changeHTML()** **<--** *may or may not need*
* **getData()** - call the api
    * Uses **axios** to call some endpoint?
        * **.then** for success()
            * updateState()
        * **.then** for state updated
            * buildHTML()
        * **.catch** for failure()
            * handleError()
* **handleError()**

# START
## Procedure:
**1.** On page load, page should display zipcode input box and a button that "onClick and/or onSubmit" lets the app find the weather of the area matching the zipcode. **getData()**

**2.** After zipcode input and button is clicked, it should output the state object **currentWeather** with the zipcode areas city, temperature, conditions and image of corresponding conditions. **Fill the HTML with Data**