// let formSubmit = document.querySelector('form');       Copied from api1
// let searchMe = document.querySelector('.pokeName')      Needs edited

// function weather(e) {
    // e.preventDefault()
    // let cityName = document.getElementById("city").value         
    // let stateName = document.getElementById("state").value   //string int works. Although, it brakes when adding this and line above

    let cityName = "Indianapolis"
    let stateName = "Indiana"
    fetch(`https://api.airvisual.com/v2/city?city=${cityName}&state=${stateName}&country=USA&key=cb5e77f5-2ca6-471f-b134-917671ebdbcb`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json){
            console.log(json.data.location.coordinates,json.data.current.weather.tp,json.data.current.weather.hu,json.data.current.weather.ws,json.data.current.weather.wd,json.data.current.weather.pr,json.data.current.weather.ts);

            let coordinates = json.data.location.coordinates;
            let temperature = json.data.current.weather.tp;
            let humidity = json.data.current.weather.hu;
            let windSpeed = json.data.current.weather.ws;
            let windDirection = json.data.current.weather.wd;
            let pressure = json.data.current.weather.pr;
            let timeStamp = json.data.current.weather.ts;

            displayData(coordinates,temperature,humidity,windSpeed,windDirection,pressure,timeStamp)
        })
        .catch(error => {
            console.log(error);
        })
// }

function displayData(){
//  document.getElementById('coordinates').innerHTML = coordinates;

 coordinates = document.getElementById("coordinates").innerHTML

    // let para = document.getElementById("coordinates")
    // para.innerText = 
}

displayData()

// formSubmit.addEventListener('submit', weather);