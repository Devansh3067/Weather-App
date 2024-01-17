const apiKey = "692eec81468dd31f8993a915298b7673";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input = document.querySelector(".input");
console.log(input.value);

let details = document.querySelector(".details");

let error = document.querySelector(".error");

let weatherIcon = document.querySelector(".weather-icon img");

let search_btn = document.querySelector(".search-btn");
search_btn.addEventListener("click",()=>{
    console.log(input.value);
    getWeather(input.value);
});

async function getWeather(city_name){
    const response = await fetch(apiUrl +city_name+ `&appid=${apiKey}`);
    var data = await response.json();

   if(response.status == 404){
        details.style.display = "none";
        error.style.display = "block";
   }
   else{
        error.style.display = "none";
        details.style.display = "block";
   }

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "% Humidity";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h Wind speed";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

}

