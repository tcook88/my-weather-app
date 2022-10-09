

function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if(hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
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
    let day = days[date.getDay()];
    return `Last updated: ${day} ${hours}:${minutes}`;
}

function showTemp(response) {
    let currentTemp = document.querySelector("#current-temperature");
    let city = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let currentTime = document.querySelector("#date");
    let currentIcon = document.querySelector("#current-icon");

    currentTemp.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
    currentTime.innerHTML = formatDate(response.data.dt * 1000);
    currentIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
    currentIcon.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
    let unit = "imperial";
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showTemp);
}


    function handleSubmit(event) {
        event.preventDefault();
        let cityInput = document.querySelector("#city-input");
        search(cityInput.value);
    }

    


    let form = document.querySelector("#city-search");
    form.addEventListener("submit", handleSubmit)