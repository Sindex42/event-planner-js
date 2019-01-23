'use strict'

class EventList {
  constructor () {
    this.events = []
  }

  add (eventPlan) {
    this.events.push(eventPlan);
  }

  renderEventList () {
    let listDiv = document.createElement('div')
    this.events.forEach((eventPlan) => {
      let eventHtml = eventPlan.renderEventPlan()
      listDiv.innerHTML = ''
      listDiv.appendChild(eventHtml)
    })
    return listDiv
  }
}
