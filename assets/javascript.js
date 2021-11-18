var searchBoxEl = document.querySelector("#search-box");
var searchInputEl = document.querySelector("#search-input");

var formSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = searchInputEl.value.trim();

    if (cityName) {
        getCityGeo(cityName);
        searchInputEl.value = "";
    };
    
};



var getCityGeo = function(city) {
    var apiCityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=19ab10c89bb373b51a04dfc25fd32a48"

    fetch(apiCityUrl).then(function(response) {
            response.json().then(function(data) {
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].lat);
                    console.log(data[i].lon);
                    

                    var getCityWeather = function() {
                        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data[i].lat + "&lon=" + data[i].lon + "&exclude=minutely&units=imperial&appid=19ab10c89bb373b51a04dfc25fd32a48")
                            .then(function(response) {
                                response.json().then(function(data) {
                                    console.log(data);
                                    //for (var i = 0; i < data.length; i++) {
                                        console.log(data.current.temp);
                                        console.log(data.current.wind_speed);
                                        console.log(data.current.humidity);
                                        console.log(data.current.uvi);
                                    //}
                                });
                            }); 
                    }; getCityWeather();
                    
                } 

                

                
            });
    });

    

    
        
};



searchBoxEl.addEventListener("submit", formSubmitHandler);
