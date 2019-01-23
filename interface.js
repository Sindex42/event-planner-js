'use strict'

window.onload = () => {
  let button = document.getElementById('button')
  let eventList = new EventList()

  button.addEventListener('click', () => {
    let content = document.getElementById('textbox')
    let date = document.getElementById('date')
    let time = document.getElementById('time')

    let eventPlan = new EventPlan(content.value, date.value, time.value)
    eventList.add(eventPlan)
    content.value = date.value = time.value = ''

    display()
  })

  const display = () => {
    let eventsDiv = document.getElementById('events')
    let events = eventList.renderEventList()
    console.log(events)
    eventsDiv.appendChild(events)
  }
}
