let now = new Date();

let h2 = document.querySelector("h2");
let day = now.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let date = now.getDate();
let month = now.getMonth();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
h2.innerHTML = `${days[day]}, ${date} ${months[month]} ${year}, ${hours}:${minutes}`;
console.log(hours + ":" + minutes);
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#citySearch");
  console.log(searchInput.value);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 22;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
