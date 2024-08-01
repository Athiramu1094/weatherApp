async function checkWeather(cityName){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6db56744be9d40c9c39354aae21b365d&units=metric`
    const response = await fetch (apiUrl)
    const data = await response.json()
    console.log(data)

    if(response.status == 404){
        alert("Invalid city name ")
    }
    else{
        document.querySelector("#temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#humiditySpan").innerHTML = `${data.main.humidity}%<br>Humidity`;
        document.querySelector("#windSpan").innerHTML = `${data.wind.speed}km/h<br>Wind Speed`;
        document.querySelector(".description").innerHTML = `${data.weather[0].description.toUpperCase()}`
    
        const weatherIcon = document.querySelector(".weatherIcon");

        if (data.weather[0].main ==="Clear"){
            weatherIcon.src =   "images/clearIcon.png";
        }

        else if (data.weather[0].main ==="Clouds"){
            weatherIcon.src = "images/cloudsIcon.png";
        }

        else if (data.weather[0].main ==="Drizzle"){
            weatherIcon.src = "images/drizzleIcon.png";
        }

        else if (data.weather[0].main ==="Rain"){
            weatherIcon.src = "images/rainIcon.png";
        }

        else if (data.weather[0].main ==="Snow"){
            weatherIcon.src = "images/snowIcon.png";
        }

        document.querySelector(".weather-info").style.display = "block"
    }
}


document.querySelector("#searchBtn").addEventListener("click", ()=>{
    const cityName = document.querySelector("#searchInput").value
    if (cityName){
        checkWeather(cityName)
    }
})


document.querySelector("#searchInput").addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        const cityName = document.querySelector("#searchInput").value
        if (cityName){
            checkWeather(cityName)
    }
}
})