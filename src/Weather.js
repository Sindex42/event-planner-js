var cityID = 2643743
var appID = config.APPID

var request = new XMLHttpRequest()
request.open('GET', `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${appID}`, true)

request.onload = () => {
  console.log(request.response)
}

request.send()
