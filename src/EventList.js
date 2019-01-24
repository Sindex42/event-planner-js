'use strict'

class EventList {
  constructor () {
    this.events = this.inStorage()
  }
  
  inStorage() {
    if(!localStorage.getItem('Events')){
      return []
    } else {
      return this.inflateEvents(JSON.parse(localStorage.getItem('Events')))
    }
  }

  add (eventPlan) {
    this.events.push(eventPlan);
    this.sortEvents()
    let eventsString = JSON.stringify(this.events)
    localStorage.setItem("Events", eventsString);
  }

  renderEventList () {
    let listDiv = document.createElement('div')
    this.upcomingEvents().forEach((eventPlan) => {
      let eventHtml = eventPlan.renderEventPlan()
      listDiv.appendChild(eventHtml)
    })
    return listDiv
  }

  upcomingEvents (now = Date.parse(new Date)) {
    let upcoming = []
    var now = now

    let inflatedEvents = this.inflateEvents(JSON.parse(localStorage.getItem("Events")))
    inflatedEvents.forEach((eventPlan) => {
      let eventTime = Date.parse(`${eventPlan.date}T${eventPlan.time}`)
      if (eventTime > now) {
        upcoming.push(eventPlan)
      }

    })
    return upcoming
  }

  inflateEvents (jsonObject) {
    let tempArray = [];
    jsonObject.forEach((eventPlan) => {
      var eventPlan = new EventPlan(eventPlan.content, eventPlan.date, eventPlan.time)
      tempArray.push(eventPlan)
    })
    return tempArray;
  }

  sortEvents () {
    this.events.sort((a, b) => a.dateTime - b.dateTime)
  }
}
