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
    listDiv.innerHTML = ''
    console.log(listDiv)
    this.events.forEach((eventPlan) => {
      console.log(listDiv)
      let eventHtml = eventPlan.renderEventPlan()
      listDiv.appendChild(eventHtml)
    })
    console.log(listDiv)
    return listDiv
  }

  sortEvents () {
    this.events.sort((a, b) => (a.dateTime > b.dateTime) ? 1 : -1)
  }
}
