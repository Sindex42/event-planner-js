'use strict'

window.onload = () => {
  let button = document.getElementById('button')
  let eventsDiv = document.getElementById('events')
  let deleteButton = document.getElementById('delete-button')
  let weatherButton = document.getElementById('weather-button')
  let weatherDiv = document.getElementById('weather')
  let city = document.getElementById('city')

  let eventList = new EventList()
  let appID = config.APPID

  const display = () => {
    eventsDiv.innerHTML = ''
    let events = eventList.renderEventList()
    eventsDiv.appendChild(events)
  }

  if (localStorage.getItem('Events')) {
    display()
  } else {
    eventsDiv.innerHTML = 'No events listed'
  }

  button.onclick = () => {
    let content = document.getElementById('textbox')
    let date = document.getElementById('date')
    let time = document.getElementById('time')

    let eventPlan = new EventPlan(content.value, date.value, time.value)
    eventList.add(eventPlan)
    content.value = date.value = time.value = ''
    display()
  }

  deleteButton.onclick = () => {
    localStorage.clear()
    eventList.events = eventList.inStorage()
    eventsDiv.innerHTML = 'No events listed'
  }

  weatherButton.onclick = () => {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=${appID}`
    let request = new XMLHttpRequest()

    request.open('GET', weatherUrl, true)
    request.onload = () => {
      let data = JSON.parse(request.response)
      weatherDiv.innerText = `The weather in ${city.value} will be: ${data.weather[0].description}`
    }
    request.send()
  }
}
