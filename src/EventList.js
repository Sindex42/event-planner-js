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
    this.upcomingEvents().forEach((eventPlan) => {
    // this.events.forEach((eventPlan) => {
      let eventHtml = eventPlan.renderEventPlan()
      listDiv.appendChild(eventHtml)
    })
    return listDiv
  }

  upcomingEvents (now = Date.parse(new Date)) {
    let upcoming = []
    let now = Date.parse(new Date)

    this.events.forEach((eventPlan) => {
      let eventTime = Date.parse(`${eventPlan.date}T${eventPlan.time}`)
      if (eventTime > now) {
        upcoming.push(eventPlan)
      }

    })
    return upcoming
  }

  sortEvents () {
    this.events.sort((a, b) => a.dateTime - b.dateTime)
  }
}
