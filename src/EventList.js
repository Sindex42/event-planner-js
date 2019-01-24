'use strict'

class EventList {
  constructor () {
    this.events = []
  }

  add (eventPlan) {
    this.events.push(eventPlan);
    this.sortEvents()
  }

  renderEventList () {
    let listDiv = document.createElement('div')
    this.events.forEach((eventPlan) => {
      let eventHtml = eventPlan.renderEventPlan()
      listDiv.appendChild(eventHtml)
    })
    return listDiv
  }

  sortEvents () {
    this.events.sort((a, b) => (a.dateTime > b.dateTime) ? 1 : -1)
  }
}
