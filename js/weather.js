const API_KEY = "a47fdc50c191bd087b224936f404a225";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url).then(response  => response.json())
    .then((data) => {
        const weather = document.querySelector(".header__column:last-child span:first-child");
        const city = document.querySelector(".header__column:last-child span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].description} / ${data.main.temp} ℃`;
    });
}
function onGeoErr() {
    alert("Can't find you. Please Check your status.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);