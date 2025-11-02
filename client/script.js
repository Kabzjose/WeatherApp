
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
  try {
    const response = await fetch(`http://localhost:5000/api/weather?city=${city}`);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    weatherDisplay.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    weatherDisplay.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}


