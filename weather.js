// https://api.openweathermap.org/data/2.5/weather?q=japan&appid=d82e6c7cf22b1d7b5667bfa812af5b77
const apiKey = "d82e6c7cf22b1d7b5667bfa812af5b77"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=japan"

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML=  Math.round(data.main.temp) + "°C";
    document.querySelector(".cityName").innerHTML= data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%" ;
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"
}
checkWeather();