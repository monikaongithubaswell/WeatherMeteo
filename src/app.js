function refreshWeather(response) {
  let tempElement = document.querySelector("#temp-value");
  let temperature = response.data.temperature.current;
  tempElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#app-city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "221ba606t5adabe4e4f1018c33o36dff";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
