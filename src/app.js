

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

function formatDay(timestamp) { 
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = [
        "Sun",
        "Mon",
        "Tue", 
        "Wed",
        "Thu",
        "Fri",
        "Sat"];

    return days[day];
}

function displayForecast(response) {
    let forecast = response.data.daily;

    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = "";

    
    forecast.forEach(function(forecastDay, index) { 
        let src = `http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}.png`;
        if (forecastDay.weather[0].icon === "01d") { 
            src = "img/sun.png";
        } 
        if (forecastDay.weather[0].icon === "01n") { 
            src = "img/night.png";
        } 
        if (forecastDay.weather[0].icon === "02d") { 
            src = "img/partly-cloudy.png";
        } 
        if (forecastDay.weather[0].icon === "02n") { 
            src = "img/partly-cloudy-night.png";
        } 
        if (forecastDay.weather[0].icon === "03d") { 
            src = "img/cloud.png";
        } 
        if (forecastDay.weather[0].icon === "03n") { 
            src = "img/cloud.png";
        } 
        if (forecastDay.weather[0].icon === "04d") { 
            src = "img/cloud.png";
        } 
        if (forecastDay.weather[0].icon === "04n") { 
            src = "img/cloud.png";
        } 
        if (forecastDay.weather[0].icon === "50d") { 
            src = "img/fog.png";
        } 
        if (forecastDay.weather[0].icon === "13d") { 
            src = "img/snowy.png";
        } 
        if (forecastDay.weather[0].icon === "13n") { 
            src = "img/snowy.png";
        } 
        if (forecastDay.weather[0].icon === "09d") { 
            src = "img/rainy.png";
        } 
        if (forecastDay.weather[0].icon === "10d") { 
            src = "img/rain.png";
        } 
        if (forecastDay.weather[0].icon === "11d") { 
            src = "img/storm.png";
        } 
        if (forecastDay.weather[0].icon === "10n") { 
            src = "img/rain.png";
        } 
        if (forecastDay.weather[0].icon === "09n") { 
            src = "img/rainy.png";
        }
        if (index < 5) {
        forecastHTML = 
    forecastHTML + `
    <div class="col-daily">
                        <div class="day">${formatDay(forecastDay.dt)}</div>
                        <div class="daily-icon"><img 
                        src="${src}"
                        alt="${forecastDay.weather[0].description}" 
                        width="42"
                        id="icon-daily"
                        />
                        </div>
                        <div class="weather"><span class="high">${Math.round(forecastDay.temp.max)}°</span> <span class="low">${Math.round(forecastDay.temp.min)}°</span></div>
                    </div>
                    `;}

    });
    
 
   forecastElement.innerHTML = forecastHTML;

}

function getForecast(coordinates) { 
    let unit = "imperial";
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${unit}`
    axios.get(apiUrl).then(displayForecast);
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
    } if (response.data.weather[0].icon === "09n") { 
        currentIcon.setAttribute("src", "img/rainy.png")
    }

    getForecast(response.data.coord);

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
    } if (response.data.weather[0].icon === "09n") { 
        currentIcon.setAttribute("src", "img/rainy.png")
    }

    getForecast(response.data.coord);

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


    let form = document.querySelector("#city-search");
    form.addEventListener("submit", handleSubmit)
    

    search("New York");
  