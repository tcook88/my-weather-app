

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

function displayForecast() {
    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = "";
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    days.forEach(function(day){ 
        forecastHTML = 
    forecastHTML + `
    <div class="col-daily">
                        <div class="day">${day}</div>
                        <div class="daily-icon">🌤</div>
                        <div class="weather"><span class="high">70°</span> <span class="low">54°</span></div>
                    </div>
                    `;
    });
    
 
   forecastElement.innerHTML = forecastHTML;
}


function showTemp(response) {
    let currentTemp = document.querySelector("#current-temperature");
    let city = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let currentTime = document.querySelector("#date");
    let currentIcon = document.querySelector("#current-icon");
    let currentHigh = document.querySelector("#current-high");
    let currentLow = document.querySelector("#current-low");

    fahrenheitTemp = response.data.main.temp;

    currentTemp.innerHTML = Math.round(fahrenheitTemp);
    city.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
    currentTime.innerHTML = formatDate(response.data.dt * 1000);
    currentIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
    currentIcon.setAttribute("alt", response.data.weather[0].description);
    currentHigh.innerHTML = Math.round(response.data.main.temp_max);
    currentLow.innerHTML = Math.round(response.data.main.temp_min);

    if (response.data.weather[0].icon === "01d") { 
        currentIcon.setAttribute("src", "img/sun.png")
    } if (response.data.weather[0].icon === "01n") { 
        currentIcon.setAttribute("src", "img/night.png")
    } if (response.data.weather[0].icon === "02d") { 
        currentIcon.setAttribute("src", "img/partly-cloudy.png")
    } if (response.data.weather[0].icon === "02n") { 
        currentIcon.setAttribute("src", "img/partly-cloudy-night.png")
    } if (response.data.weather[0].icon === "03d") { 
        currentIcon.setAttribute("src", "img/cloud.png")
    } if (response.data.weather[0].icon === "03n") { 
        currentIcon.setAttribute("src", "img/cloud.png")
    } if (response.data.weather[0].icon === "04d") { 
        currentIcon.setAttribute("src", "img/cloud.png")
    } if (response.data.weather[0].icon === "04n") { 
        currentIcon.setAttribute("src", "img/cloud.png")
    } if (response.data.weather[0].icon === "50d") { 
        currentIcon.setAttribute("src", "img/fog.png")
    } if (response.data.weather[0].icon === "13d") { 
        currentIcon.setAttribute("src", "img/snowy.png")
    } if (response.data.weather[0].icon === "13n") { 
        currentIcon.setAttribute("src", "img/snowy.png")
    } if (response.data.weather[0].icon === "09d") { 
        currentIcon.setAttribute("src", "img/rainy.png")
    } if (response.data.weather[0].icon === "10d") { 
        currentIcon.setAttribute("src", "img/rain.png")
    } if (response.data.weather[0].icon === "11d") { 
        currentIcon.setAttribute("src", "img/storm.png")
    } if (response.data.weather[0].icon === "10n") { 
        currentIcon.setAttribute("src", "img/rain.png")
    }

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

    

function showLocationTemperature(response) {
    let currentTemp = document.querySelector("#current-temperature");
    let city = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let currentTime = document.querySelector("#date");
    let currentIcon = document.querySelector("#current-icon");
    let currentHigh = document.querySelector("#current-high");
    let currentLow = document.querySelector("#current-low");
    let cityInput = document.querySelector("#city-input");

    fahrenheitTemp = response.data.main.temp;

    currentTemp.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
    currentTime.innerHTML = formatDate(response.data.dt * 1000);
    currentIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
    currentIcon.setAttribute("alt", response.data.weather[0].description);
    currentHigh.innerHTML = Math.round(response.data.main.temp_max);
    currentLow.innerHTML = Math.round(response.data.main.temp_min);
    cityInput.value = response.data.name;

    if (response.data.weather[0].icon === "01d") { 
        currentIcon.setAttribute("src", "img/sun.png")
    } if (response.data.weather[0].icon === "01n") { 
        currentIcon.setAttribute("src", "img/night.png")
    } if (response.data.weather[0].icon === "02d") { 
        currentIcon.setAttribute("src", "img/partly-cloudy.png")
    } if (response.data.weather[0].icon === "02n") { 
        currentIcon.setAttribute("src", "img/partly-cloudy-night.png")
    } if (response.data.weather[0].icon === "03d") { 
        currentIcon.setAttribute("src", "img/cloud.png")
    } if (response.data.weather[0].icon === "03n") { 
        currentIcon.setAttribute("src", "img/cloud.png")
    } if (response.data.weather[0].icon === "04d") { 
        currentIcon.setAttribute("src", "img/cloud.png")
    } if (response.data.weather[0].icon === "04n") { 
        currentIcon.setAttribute("src", "img/cloud.png")
    } if (response.data.weather[0].icon === "50d") { 
        currentIcon.setAttribute("src", "img/fog.png")
    } if (response.data.weather[0].icon === "13d") { 
        currentIcon.setAttribute("src", "img/snowy.png")
    } if (response.data.weather[0].icon === "13n") { 
        currentIcon.setAttribute("src", "img/snowy.png")
    } if (response.data.weather[0].icon === "09d") { 
        currentIcon.setAttribute("src", "img/rainy.png")
    } if (response.data.weather[0].icon === "10d") { 
        currentIcon.setAttribute("src", "img/rain.png")
    } if (response.data.weather[0].icon === "11d") { 
        currentIcon.setAttribute("src", "img/storm.png")
    } if (response.data.weather[0].icon === "10n") { 
        currentIcon.setAttribute("src", "img/rain.png")
    }

}


function showLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log('position', position);
    let unit = "imperial";
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showLocationTemperature);
}

function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
}


    let locationButton = document.querySelector("#location-btn");
    locationButton.addEventListener("click", getLocation);

    function displayCelsiusTemp(event) { 
        event.preventDefault();
       let celsiusTemp = (fahrenheitTemp - 32)*5/9;
       let currentTemp = document.querySelector("#current-temperature");
       currentTemp.innerHTML = Math.round(celsiusTemp);
       celsiusLink.classList.add("active");
       fahrenheitLink.classList.remove("active");
    }

    function displayFahrenheitTemp(event) { 
        event.preventDefault();
        let currentTemp = document.querySelector("#current-temperature");
        currentTemp.innerHTML = Math.round(fahrenheitTemp);
        celsiusLink.classList.remove("active");
        fahrenheitLink.classList.add("active");
    }
    
    let fahrenheitTemp = null;

    let form = document.querySelector("#city-search");
    form.addEventListener("submit", handleSubmit)
    
    let celsiusLink = document.querySelector("#celsius-link");
    celsiusLink.addEventListener("click", displayCelsiusTemp);

    let fahrenheitLink = document.querySelector("#fahrenheit-link");
    fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

    search("New York");
    displayForecast();