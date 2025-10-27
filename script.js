//declaring API key
const apikey="23caf88f12c4851f72c392bdd20c0b06"
const searchBtn=document.getElementById("searchBtn")
const cityInput=document.getElementById("cityInput")
const weatherDisplay=document.getElementById("weatherDisplay")



searchBtn.addEventListener("click",()=>{
    const city=cityInput.value.trim()
    if(city === ""){
        alert("please enter a city name")
        return;
    }
    getWeather(city)
})
//fetching weather data
async function getWeather(city) {
    try{
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
       const response=await fetch(url)
       //handling invalid cities
       if(!response.ok){
        throw new Error("City not found")
       }
       //converting raw data into usable javascript objects
       const data=await response.json()

       //didspaying the weather data
       weatherDisplay.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>`;
      // Handling errors
    }catch (error){
        weatherDisplay.innerHTML=`<p style="color:red;"">${error.message}</p>`;
    }

}