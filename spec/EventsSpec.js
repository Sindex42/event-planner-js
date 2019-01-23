'use strict'
/* global describe, it, expect, EventPlan */

describe('Events', function () {
  let events = new Events
  let oneEvent = 'Event'

  describe('eventArray', function () {
    it('should have an empty array by default', function () {
      expect(events.eventArray.length).toEqual(0)
    })
  })

  describe('#add', function () {
    it('should add an event to the array of events ', function () {
      events.add(oneEvent);
      expect(events.eventArray).toContain('Event')
    })
  })
})
