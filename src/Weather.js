const getWeather = () => {
  let cityID = 'London', appID = config.APPID
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityID}&APPID=${appID}`
  let request = new XMLHttpRequest()

  request.open('GET', weatherUrl, true)

  request.onload = () => {
    let data = JSON.parse(request.response)
    return data.weather[0].description
  }

  request.send()
}

getWeather()
