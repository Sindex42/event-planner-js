'use strict'
/* global describe, it, expect, EventPlan */

describe('EventPlan', function () {
  let content = 'test event'
  let date = '2020-01-16'
  let time = '12:01'
  let event1 = new EventPlan(content, date, time)

  describe('content', () => {
    it('should create an event with content', function () {
      expect(event1.content).toEqual('test event')
    })
  })

  describe('date', () => {
    it('should create an event with a date', function () {
      expect(event1.date).toEqual('2020-01-16')
    })

    it('should throw an error if the user tries to create an event in the past', function () {
      expect(function () {
        new EventPlan('Event in the past', '1970-01-01', '12:01')
      }).toThrowError('Cannot create an event in the past')
    })
  })

  describe('time', () => {
    it('should create an event with a time', function () {
      expect(event1.time).toEqual('12:01')
    })
  })
})
