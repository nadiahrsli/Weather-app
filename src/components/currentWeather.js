const { useState } = require("react");
const { WiThermometer, WiStrongWind, WiHumidity } = require("react-icons/wi");

function CurrentWeather() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState(null);
  console.log(data);

  let dataMarkup = null;

  if (data !== null) {
    const date = new Date();
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;

    const timezone = data.timezone;
    const tz = utc + 1000 * timezone;
    const nd = new Date(tz);
    const ndf = nd.toLocaleTimeString();

    let day = nd.toLocaleString("en-US", { weekday: "long" });
    let month = nd.toLocaleString("en-US", { month: "long" });
    let dates = nd.toLocaleString("en-US", { day: "numeric" });
    let year = nd.toLocaleString("en-US", { year: "numeric" });

    dataMarkup = (
      <div class="box">
        <header class="info-header">
          <h2>
            Current Weather in {city}, {country}
          </h2>
          <h3 class="date">
            {day} {month} {dates} {year}
          </h3>
          <h3 class="time">{ndf}</h3>
        </header>
        <div class="weather-container"></div>
        <div class="weather-icon">
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            crossorigin="true"
          />
        </div>
        <div class="info">
          <p class="temp">{data.main.temp}°</p>
          <p class="description">{data.weather[0].description}</p>
          <hr />
          <p class="minmax">
            <WiThermometer /> {data.main.temp_min}°-{data.main.temp_max}°
          </p>
          <p class="humidity">
            <WiHumidity /> {data.main.humidity}%
          </p>
          <p class="wind">
            <WiStrongWind /> {data.wind.speed} km/hr
          </p>
        </div>
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function updateCountry(event) {
    setCountry(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = process.env.WEATHER_API_KEY;
    let baseURL = process.env.WEATHER_API_URL;
    // What is required? - "q" and "appid"
    // What is optional? - "units" to metric
    // User input - countryName & stateCode
    let queryString = `?q=${city},${country}&appid=${apiKey}&units=metric`;
    fetch(baseURL + queryString, { method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data);
      });
  }

  return (
    <div>
      <form onSubmit={search} class="search">
        <p>Search Weather:</p>
        <input
          type="text"
          placeholder="City Name"
          value={city}
          onChange={updateCity}
        />
        <input
          type="text"
          placeholder="Country Name"
          value={country}
          onChange={updateCountry}
        />
        <input type="submit" value="Search" class="btn" />
      </form>
      {dataMarkup}
    </div>
  );
}

module.exports = CurrentWeather;
