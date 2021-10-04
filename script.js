let formSubmit = document.querySelector('input-group');      
let cityName1 = document.querySelector('.cityName');     
let stateName1 = document.querySelector('.stateName');  
let button = document.querySelector('btn');   
let form = document.querySelector('form');   

function weather(e) {
    e.preventDefault()
    let cityName = document.getElementById("city").value         
    let stateName = document.getElementById("state").value  

    fetch(`https://api.airvisual.com/v2/city?city=${cityName}&state=${stateName}&country=USA&key=cb5e77f5-2ca6-471f-b134-917671ebdbcb`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json){
            console.log(json.data.location.coordinates[0],json.data.location.coordinates[1],json.data.current.weather.tp,json.data.current.weather.hu,json.data.current.weather.ws,json.data.current.weather.wd,json.data.current.weather.pr,json.data.current.weather.ts);
            displayData(json)
        })
        .catch(error => {
            console.log(error);
        })
}

function displayData(json){
    let longitude = json.data.location.coordinates[0];
    let latitude = json.data.location.coordinates[1];
    let temperature = json.data.current.weather.tp;
    let humidity = json.data.current.weather.hu;
    let windSpeed = json.data.current.weather.ws;
    let windDirection = json.data.current.weather.wd;
    let pressure = json.data.current.weather.pr;
    let timeStamp = json.data.current.weather.ts;

    // let para = document.getElementById("longitude")
    // para.innerText = longitude

    // let para1 = document.getElementById("latitude")
    // para1.innerText = latitude
    
    let para2 = document.getElementById("temp")
    para2.innerText = temperature

    let para3 = document.getElementById("humidity")
    para3.innerText = humidity

    let para4 = document.getElementById("windSpeed")
    para4.innerText = windSpeed

    let para5 = document.getElementById("windDirection")
    para5.innerText = windDirection

    let para6 = document.getElementById("pressure")
    para6.innerText = pressure

    // let para7 = document.getElementById("timeStamp")
    // para7.innerText = timeStamp
}

form.addEventListener('submit', weather);