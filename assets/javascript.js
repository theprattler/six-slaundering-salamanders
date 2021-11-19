var searchBoxEl = document.querySelector("#search-box");
var searchInputEl = document.querySelector("#search-input");

// current weather condition elements
var currentHeadTextEl = document.querySelector("#current-head-text");
var currentCityEl = document.querySelector("#current-city");
var currentTempEl = document.querySelector("#current-temp");
var currentWindEl = document.querySelector("#current-wind");
var currentHumidEl = document.querySelector("#current-humid");
var currentUvEl = document.querySelector("#current-uv");
var currentDateEl = document.querySelector("#current-date");
var currentIconEl = document.querySelector("#current-icon");

// forecast day 1 weather condition elements
var dayOneDateEl = document.querySelector("#day-one-date");
var dayOneIconEl = document.querySelector("#day-one-icon");
var dayOneTempEl = document.querySelector("#day-one-temp");
var dayOneWindEl = document.querySelector("#day-one-wind");
var dayOneHumidEl = document.querySelector("#day-one-humid");

// forecast day 2 weather condition elements
var dayTwoDateEl = document.querySelector("#day-two-date");
var dayTwoIconEl = document.querySelector("#day-two-icon");
var dayTwoTempEl = document.querySelector("#day-two-temp");
var dayTwoWindEl = document.querySelector("#day-two-wind");
var dayTwoHumidEl = document.querySelector("#day-two-humid");

// forecast day 3 weather condition elements
var dayThreeDateEl = document.querySelector("#day-three-date");
var dayThreeIconEl = document.querySelector("#day-three-icon");
var dayThreeTempEl = document.querySelector("#day-three-temp");
var dayThreeWindEl = document.querySelector("#day-three-wind");
var dayThreeHumidEl = document.querySelector("#day-three-humid");

// forecast day 4 weather condition elements
var dayFourDateEl = document.querySelector("#day-four-date");
var dayFourIconEl = document.querySelector("#day-four-icon");
var dayFourTempEl = document.querySelector("#day-four-temp");
var dayFourWindEl = document.querySelector("#day-four-wind");
var dayFourHumidEl = document.querySelector("#day-four-humid");

// forecast day 5 weather condition elements
var dayFiveDateEl = document.querySelector("#day-five-date");
var dayFiveIconEl = document.querySelector("#day-five-icon");
var dayFiveTempEl = document.querySelector("#day-five-temp");
var dayFiveWindEl = document.querySelector("#day-five-wind");
var dayFiveHumidEl = document.querySelector("#day-five-humid");

var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = searchInputEl.value.trim();

    if (cityName) {
        getCityGeo(cityName);
        searchInputEl.value = "";
    };
    
};

// entire function to pull from weather api
var getCityGeo = function(city) {
    // get lat and lon coordinants for city entered in input field
    var apiCityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=19ab10c89bb373b51a04dfc25fd32a48"
    fetch(apiCityUrl).then(function(response) {
        response.json().then(function(data) {
            for (var i = 0; i < data.length; i++) {     

                // use lat and lon coordinants to pull relevant weather info
                var getCityWeather = function() {
                    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data[i].lat + "&lon=" + data[i].lon + "&exclude=minutely&units=imperial&appid=19ab10c89bb373b51a04dfc25fd32a48")
                        .then(function(response) {
                            response.json().then(function(data) {
                                console.log(data);
                                    
                                // current weather conditions                                
                                currentHeadTextEl.textContent = "Currently in " + city + ":";
                                var currentTemp = Math.floor(data.current.temp);
                                currentTempEl.textContent = "Temperature: " + currentTemp + " F";
                                var currentWindSpeed = data.current.wind_speed;
                                currentWindEl.textContent = "Wind: " + currentWindSpeed + " mph";
                                var currentHumid = data.current.humidity;
                                currentHumidEl.textContent = "Humidity: " + currentHumid + "%";
                                var currentUv = data.current.uvi;
                                currentUvEl.textContent = "UV Index: " + currentUv;
                                var currentDate = new Date((data.current.dt) * 1000);
                                currentDateEl.textContent = (currentDate.toLocaleDateString());
                                var currentIcon = data.current.weather[0].icon;
                                var currentIconUrl = "http://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
                                currentIconEl.setAttribute("src", currentIconUrl);

                                // weather forecast for day 1
                                var dayOneDate = new Date((data.daily[1].dt) * 1000);
                                dayOneDateEl.textContent = (dayOneDate.toLocaleDateString());
                                var dayOneIcon = data.daily[1].weather[0].icon;
                                var dayOneIconUrl = "http://openweathermap.org/img/wn/" + dayOneIcon + "@2x.png";
                                dayOneIconEl.setAttribute("src", dayOneIconUrl);
                                var dayOneTempMax = Math.floor(data.daily[1].temp.max);
                                var dayOneTempMin = Math.floor(data.daily[1].temp.min);
                                dayOneTempEl.textContent = "Temp: " + dayOneTempMax + "/" + dayOneTempMin + " F";
                                var dayOneWind = data.daily[1].wind_speed;
                                dayOneWindEl.textContent = "Wind: " + dayOneWind + " mph";
                                var dayOneHumid = data.daily[1].humidity;
                                dayOneHumidEl.textContent = "Humidity: " + dayOneHumid + "%";

                                // weather forecast for day 2 
                                var dayTwoDate = new Date((data.daily[2].dt) * 1000);
                                dayTwoDateEl.textContent = (dayTwoDate.toLocaleDateString());
                                var dayTwoIcon = data.daily[2].weather[0].icon;
                                var dayTwoIconUrl = "http://openweathermap.org/img/wn/" + dayTwoIcon + "@2x.png";
                                dayTwoIconEl.setAttribute("src", dayTwoIconUrl);                               
                                var dayTwoTempMax = Math.floor(data.daily[2].temp.max);
                                var dayTwoTempMin = Math.floor(data.daily[2].temp.min);
                                dayTwoTempEl.textContent = "Temp: " + dayTwoTempMax + "/" + dayTwoTempMin + " F";
                                var dayTwoWind = data.daily[2].wind_speed;
                                dayTwoWindEl.textContent = "Wind: " + dayTwoWind + " mph";
                                var dayTwoHumid = data.daily[2].humidity;
                                dayTwoHumidEl.textContent = "Humidity: " + dayTwoHumid + "%";

                                // weather forecast for day 3 
                                var dayThreeDate = new Date((data.daily[3].dt) * 1000);
                                dayThreeDateEl.textContent = (dayThreeDate.toLocaleDateString());
                                var dayThreeIcon = data.daily[3].weather[0].icon;
                                var dayThreeIconUrl = "http://openweathermap.org/img/wn/" + dayThreeIcon + "@2x.png";
                                dayThreeIconEl.setAttribute("src", dayThreeIconUrl);                             
                                var dayThreeTempMax = Math.floor(data.daily[3].temp.max);
                                var dayThreeTempMin = Math.floor(data.daily[3].temp.min);
                                dayThreeTempEl.textContent = "Temp: " + dayThreeTempMax + "/" + dayThreeTempMin + " F";
                                var dayThreeWind = data.daily[3].wind_speed;
                                dayThreeWindEl.textContent = "Wind: " + dayThreeWind + " mph";
                                var dayThreeHumid = data.daily[3].humidity;
                                dayThreeHumidEl.textContent = "Humidity: " + dayThreeHumid + "%";

                                // weather forecast for day 4 
                                var dayFourDate = new Date((data.daily[4].dt) * 1000);
                                dayFourDateEl.textContent = (dayFourDate.toLocaleDateString());
                                var dayFourIcon = data.daily[4].weather[0].icon;
                                var dayFourIconUrl = "http://openweathermap.org/img/wn/" + dayFourIcon + "@2x.png";
                                dayFourIconEl.setAttribute("src", dayFourIconUrl);                              
                                var dayFourTempMax = Math.floor(data.daily[4].temp.max);
                                var dayFourTempMin = Math.floor(data.daily[4].temp.min);
                                dayFourTempEl.textContent = "Temp: " + dayFourTempMax + "/" + dayFourTempMin + " F";
                                var dayFourWind = data.daily[4].wind_speed;
                                dayFourWindEl.textContent = "Wind: " + dayFourWind + " mph";
                                var dayFourHumid = data.daily[4].humidity;
                                dayFourHumidEl.textContent = "Humidity: " + dayFourHumid + "%";

                                // weather forecast for day 5 
                                var dayFiveDate = new Date((data.daily[5].dt) * 1000);
                                dayFiveDateEl.textContent = (dayFiveDate.toLocaleDateString());
                                var dayFiveIcon = data.daily[5].weather[0].icon;
                                var dayFiveIconUrl = "http://openweathermap.org/img/wn/" + dayFiveIcon + "@2x.png";
                                dayFiveIconEl.setAttribute("src", dayFiveIconUrl);                               
                                var dayFiveTempMax = Math.floor(data.daily[5].temp.max);
                                var dayFiveTempMin = Math.floor(data.daily[5].temp.min);
                                dayFiveTempEl.textContent = "Temp: " + dayFiveTempMax + "/" + dayFiveTempMin + " F";
                                var dayFiveWind = data.daily[5].wind_speed;
                                dayFiveWindEl.textContent = "Wind: " + dayFiveWind + " mph";
                                var dayFiveHumid = data.daily[5].humidity;
                                dayFiveHumidEl.textContent = "Humidity: " + dayFiveHumid + "%";
                                    
                            });
                        }); 
                }; getCityWeather();
            } 
        });
    });
};

searchBoxEl.addEventListener("submit", formSubmitHandler);
