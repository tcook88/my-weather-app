let now = new Date();

let hours = now.getHours();
if(hours < 10) {
    hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}

let days = [
    "Sunday",
    "Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
let day = days[now.getDay()];

let currentTime = document.querySelector(".current-time");

currentTime.innerHTML = `Last updated: ${day} ${hours}:${minutes}`;


function showTemp(response) {
    console.log(response.data);
    let currentTemp = document.querySelector("#current-temperature");
    let city = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    currentTemp.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
}

    let city = "New York";
    let unit = "imperial";
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;


    axios.get(apiUrl).then(showTemp);
