"use strict"

window.onload = () => {
  let button = document.getElementById("button")
  let weatherButton = document.getElementById("weather-button")
  let eventList = new EventList()
  let eventsDiv = document.getElementById("events")
  let deleteButton = document.getElementById("delete-button")

  const display = () => {
    eventsDiv.innerHTML = ""
    let events = eventList.renderEventList()
    eventsDiv.appendChild(events)
  }

  if (localStorage.getItem("Events")) {
    display()
  } else {
    eventsDiv.innerHTML = "No events listed";
  }

  button.onclick = () => {
    let content = document.getElementById("textbox")
    let date = document.getElementById("date")
    let time = document.getElementById("time")

    let eventPlan = new EventPlan(content.value, date.value, time.value)
    eventList.add(eventPlan)
    content.value = date.value = time.value = ""
    display()
  }

  deleteButton.onclick = () => {
    localStorage.removeItem("Events")
    eventList.events = eventList.inStorage()
    eventsDiv.innerHTML = "No events listed";
  }

  // weatherButton.onclick = () => {
  //   let city = document.getElementById("city")

  //   let weatherDescription = weather.METHODNAME('city')

  //   let weatherDiv = document.getElementById("weather")


  //   weatherDiv.innerHTML = weatherDescription
    
}
