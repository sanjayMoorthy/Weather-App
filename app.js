let input = document.querySelector(".input")
let searchButton = document.querySelector(".search")
let showContent = document.querySelector(".locations")
let details = document.querySelector(".details")
let error = document.querySelector(".err")

window.addEventListener("DOMContentLoaded", () => checkWeather())
searchButton.addEventListener("click", () =>  checkWeather())

input.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        checkWeather()
    }
})


function checkWeather() {

    let serachCity = input.value
    let link = serachCity == "" ? 'https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=816366c90cdddb7e620a6932c7df52ff' : `https://api.openweathermap.org/data/2.5/weather?q=${serachCity}&appid=816366c90cdddb7e620a6932c7df52ff`
    fetch(link)
        .then(res => res.json())
        .then(data => {
            let city = data.name
            let weatherImage = data.weather[0].icon
            let datas = Math.round(data.main.temp - 273.15)
            let district = `<h3 class = "head">${city}</h3><p class ="temprature" >${datas}°c</p><img src="http://openweathermap.org/img/w/${weatherImage}.png" class ="cloud" >`
            showContent.innerHTML = district

            let description = data.weather[0].description
            let windSpeed = data.wind.speed
            content = `<h3 class ="des">${description}</h3><h3 class="wind" >${windSpeed} KM-PH</h3>`
            details.innerHTML = content

        })
        .catch(err => console.log(err))
}


