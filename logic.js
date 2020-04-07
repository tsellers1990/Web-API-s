var userSearchBtn = $(".btn-outline-success");
var cityNameEl = $("#cityName");
var cityTempEl = $("#cityTemp");
var cityHumidEl = $("#cityHumid");
var citySpeedEl = $("#citySpeed");
var dayOneTitleEl = $("#dayOneTitle");
var dayOneIconEl = $("#dayOneIcon");
var dayOneTempEl = $("#dayOneTemp");
var dayOneHumidEl = $("#dayOneHumid");

var dayTwoTitleEl = $("#dayTwoTitle");
var dayTwoIcTwol = $("#dayTwoIcon");
var dayTwoTempEl = $("#dayTwoTemp");
var dayTwoHumidEl = $("#dayTwoHumid");

var dayThreeTitleEl = $("#dayThreeTitle");
var dayThreeIcThreel = $("#dayThreeIcon");
var dayThreeTempEl = $("#dayThreeTemp");
var dayThreeHumidEl = $("#dayThreeHumid");

var dayFourTitleEl = $("#dayFourTitle");
var dayFourIcFourl = $("#dayFourIcon");
var dayFourTempEl = $("#dayFourTemp");
var dayFourHumidEl = $("#dayFourHumid");

var dayFiveTitleEl = $("#dayFiveTitle");
var dayFiveIcFivel = $("#dayFiveIcon");
var dayFiveTempEl = $("#dayFiveTemp");
var dayFiveHumidEl = $("#dayFiveHumid");


userSearchBtn.on("click", function(){
    var apiKey = 'b8f4c8845c8df673ba17dd1e03cfa704';
    var userSearchTermEl = $(".form-control");
    var queryUrl = `http:api.openweathermap.org/data/2.5/forecast?q=${userSearchTermEl.val()}&appid=${apiKey}&units=imperial`;

    event.preventDefault();

    $.ajax({
        url:queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
        
        var cityNameResponse = response.city.name;
        var cityTempResponse = response.list[0].main.temp;
        var cityHumidResponse = response.list[0].main.humidity;
        var citySpeedResponse = response.list[0].wind.speed;
        
        var dayOneIconResponse = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png"); //```````````````````````````````````````
        var dayOneTitleResponse = response.list[4].dt_txt; 
        var dayOneTempResponse = response.list[4].main.temp;
        var dayOneHumidResponse = response.list[4].main.humidity;

        var dayTwoIconResponse = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[7].weather[0].icon + ".png"); //```````````````````````````````````````
        var dayTwoTitleResponse = response.list[7].dt_txt; 
        var dayTwoTempResponse = response.list[7].main.temp;
        var dayTwoHumidResponse = response.list[7].main.humidity;

        var dayThreeIconResponse = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[10].weather[0].icon + ".png"); //```````````````````````````````````````
        var dayThreeTitleResponse = response.list[10].dt_txt; 
        var dayThreeTempResponse = response.list[10].main.temp;
        var dayThreeHumidResponse = response.list[10].main.humidity;

        var dayFourIconResponse = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[13].weather[0].icon + ".png"); //```````````````````````````````````````
        var dayFourTitleResponse = response.list[13].dt_txt; 
        var dayFourTempResponse = response.list[13].main.temp;
        var dayFourHumidResponse = response.list[13].main.humidity;

        
        var dayFiveIconResponse = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png"); //```````````````````````````````````````
        var dayFiveTitleResponse = response.list[16].dt_txt; 
        var dayFiveTempResponse = response.list[16].main.temp;
        var dayFiveHumidResponse = response.list[16].main.humidity;

        cityNameEl.text(cityNameResponse)
        cityTempEl.text(`Temperature: °${cityTempResponse}`);
        cityHumidEl.text(`Humidity: ${cityHumidResponse}%`);
        citySpeedEl.text(`Wind Speed: ${citySpeedResponse}`);

        
        dayOneTitleEl.text(dayOneTitleResponse)
        dayOneIconEl.append(dayOneIconResponse);
        dayOneTempEl.text(`Temperature: °${dayOneTempResponse}`);
        dayOneHumidEl.text(`Humidity: ${dayOneHumidResponse}`);

        dayTwoTitleEl.text(dayTwoTitleResponse)
        dayTwoIcTwol.append(dayTwoIconResponse);
        dayTwoTempEl.text(`Temperature: °${dayTwoTempResponse}`);
        dayTwoHumidEl.text(`Humidity: ${dayTwoHumidResponse}`);

        dayThreeTitleEl.text(dayThreeTitleResponse)
        dayThreeIcThreel.append(dayThreeIconResponse);
        dayThreeTempEl.text(`Temperature: °${dayThreeTempResponse}`);
        dayThreeHumidEl.text(`Humidity: ${dayThreeHumidResponse}`);

        dayFourTitleEl.text(dayFourTitleResponse)
        dayFourIcFourl.append(dayFourIconResponse);
        dayFourTempEl.text(`Temperature: °${dayFourTempResponse}`);
        dayFourHumidEl.text(`Humidity: ${dayFourHumidResponse}`);

        dayFiveTitleEl.text(dayFiveTitleResponse)
        dayFiveIcFivel.append(dayFiveIconResponse);
        dayFiveTempEl.text(`Temperature: °${dayFiveTempResponse}`);
        dayFiveHumidEl.text(`Humidity: ${dayFiveHumidResponse}`);




    })

})