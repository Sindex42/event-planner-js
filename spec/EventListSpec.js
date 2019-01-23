'use strict'
/* global describe, it, expect, EventPlan */

describe('EventList', () => {
  let eventList = new EventList()
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
})
