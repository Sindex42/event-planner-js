'use strict'
/* global describe, it, expect, EventPlan */

describe('Events', function () {
  let events = new Events

  describe('eventArray', function () {
    it('should have an empty array by default', function () {
      expect(events.eventArray.length).toEqual(0)
    })
  })
})
