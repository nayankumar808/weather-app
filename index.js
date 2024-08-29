const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "08c705f236mshac284796d8c3a7cp1491e0jsn1d10d20363f4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city) => {
  cityname.innerHTML = city;
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
    .then((Response) => Response.json())
    .then((Response) => {
      cloud_pct.innerHTML = Response.cloud_pct;
      temp.innerHTML = Response.temp;
      feels_like.innerHTML = Response.feels_like;
      // humidity.innerHTML = Response.humidity;
      min_temp.innerHTML = Response.min_temp;
      max_temp.innerHTML = Response.max_temp;
      wind_speed.innerHTML = Response.wind_speed;
      wind_degrees.innerHTML = Response.wind_degrees;
      sunrise.innerHTML = Response.sunrise;
      sunset.innerHTML = Response.sunset;
      console.log(Response);
    })
    .catch((err) => console.log(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);
});
getweather("delhi");

const getweather2 = (city1) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city1,
    options
  )
    .then((Response) => Response.json())
    .then((Response) => {
      cloud_pct1.innerHTML = Response.cloud_pct;
      temp1.innerHTML = Response.temp;
      feels_like1.innerHTML = Response.feels_like;
      humidity1.innerHTML = Response.humidity;
      min_temp1.innerHTML = Response.min_temp;
      max_temp1.innerHTML = Response.max_temp;
      wind_speed1.innerHTML = Response.wind_speed;
      wind_degrees1.innerHTML = Response.wind_degrees;
      sunrise1.innerHTML = Response.sunrise;
      sunset1.innerHTML = Response.sunset;
      console.log(Response);
    })
    .catch((err) => console.log(err));
};
getweather2("patna")
