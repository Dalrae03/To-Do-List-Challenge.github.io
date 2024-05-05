const API_KEY ="dd5d8d79b5ec91042f93317fa9360b32";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //fetch는 promise - 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것. 그래서 then()을 사용해야한다.
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather");
    const city = document.querySelector("#city");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


