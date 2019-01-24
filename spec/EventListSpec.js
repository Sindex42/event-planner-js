'use strict'
/* global describe, it, expect, EventPlan */

describe('EventList', () => {
  let eventList = new EventList()
  let eventList2 = new EventList()
  let eventList3 = new EventList()

  let e1 = { dateTime: '3' }
  let e2 = { dateTime: '1' }
  let e3 = { dateTime: '2' }

  let oneEvent = 'Event'

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
    it('add event divs to listDiv', () => {
      eventList3.events.push(e1, e2, e3)
      console.log(eventList3.events)

      expect(eventList3.renderEventList().childElementCount).toEqual(3)
    })
  })
})
