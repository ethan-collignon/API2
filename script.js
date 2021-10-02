// let formSubmit = document.querySelector('form');       Copied from api1
// let searchMe = document.querySelector('.pokeName')      Needs edited

// function weather(e) {
    // e.preventDefault()
    let cityName = document.getElementById("city").value         
    let stateName = document.getElementById("state").value           //string int works. Although, it brakes when adding this and line above
    fetch(`https://api.airvisual.com/v2/city?city=${cityName}&state=${stateName}&country=USA&key=cb5e77f5-2ca6-471f-b134-917671ebdbcb`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json){
            console.log(json.data);
        
        
        })
        .catch(error => {
            console.log(error);
        })
// }

// function displayData(data) {
//     console.log(heightJson);                           
//     let para = document.getElementById("height")
//      para.innerText = heightJson

// }


formSubmit.addEventListener('submit', weather);