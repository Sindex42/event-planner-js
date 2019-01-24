'use strict'
/* global describe, it, expect, EventPlan */

describe('EventList', () => {
  let eventList = new EventList()
  let eventList2 = new EventList()
  let eventList3 = new EventList()
  let eventList4 = new EventList()

  let oneEvent = 'Event'

  let e1 = { dateTime: '3' }
  let e2 = { dateTime: '1' }
  let e3 = { dateTime: '2' }

  let e4 = {
    date: '2050-05-19',
    time: '18:00',
    renderEventPlan: () => { return document.createElement('div') }
  }
  let e5 = { date: '1970-01-01', time: '00:00'}
  let e6 = { date: '2019-01-26', time: '12:00'}

  describe('events', () => {
    it('should have an empty array by default', () => {
      expect(eventList.events.length).toEqual(0)
    })
  })

  describe('#add', () => {
    it('should add an event to the array of events ', () => {
      eventList.add(oneEvent)
      expect(eventList.events).toContain('Event')
    })
  })

  describe('#sortEvents', () => {
    it('should sort events chronologically', () => {
      let result = '[{"dateTime":"1"},{"dateTime":"2"},{"dateTime":"3"}]'

      eventList2.events.push(e1, e2, e3)
      eventList2.sortEvents()

      expect(JSON.stringify(eventList2.events)).toEqual(result)
    })
  })

  describe('#renderEventList', () => {
    it('adds 2 event divs to listDiv', () => {
      eventList3.events.push(e4, e4)

      expect(eventList3.renderEventList().childElementCount).toEqual(2)
    })
  })

  describe('#upcomingEvents', () => {
    it('returns an array of upcoming events', () => {
      eventList4.events.push(e5, e6)

      expect(eventList4.upcomingEvents(1548343357000).length).toEqual(1)
    })
  })
})
