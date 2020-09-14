/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((res) => {
      showWeatherData(res);
    })
    .catch((error) => {
      console.log(error);
      console.log("Something happend");
    });
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText =
    weatherData.main.temp_min + "°F";
  document.getElementById("max-temp").innerText =
    weatherData.main.temp_max + "°F";
  document.getElementById("feels-like").innerHTML =
    weatherData.main.feels_like + "°F";
  document.getElementById("humidity").innerHTML =
    weatherData.main.humidity + "%";
  document.getElementById("wind").innerHTML = weatherData.wind.speed + "km/hr";
  document.getElementById("weather-output").classList.add("visible");
};
