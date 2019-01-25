'use strict'
/* global describe, it, expect, EventPlan, EventList */

describe('EventPlan', () => {
  let content = 'test event'
  let date = '16/01/2020'
  let time = '12:01'
  let event1 = new EventPlan(content, date, time)

  describe('content', () => {
    it('should create an event with content', () => {
      expect(event1.content).toEqual('test event')
    })
  })

  describe('date', () => {
    it('should create an event with a date', () => {
      expect(event1.date).toEqual('2020-01-16')
    })

    // it('should throw an error if the user tries to create an event in the past', () => {
    //   expect(() => {
    //     new EventPlan('Event in the past', '1970-01-01', '12:01')
    //   }).toThrowError('Cannot create an event in the past')
    // })
  })

  describe('time', () => {
    it('should create an event with a time', () => {
      expect(event1.time).toEqual('12:01')
    })
  })

  describe('dateTime', () => {
    it('should create an event with a dateTime', () => {
      expect(event1.dateTime).toEqual('202001161201')
    })
  })

  describe('#renderEventPlan', () => {
    it('renders a given event', () => {
      expect(event1.renderEventPlan().innerText).toEqual('test event on 2020-01-16 at 12:01')
    })
  })
})

describe('#reformatDate', () => {
  it('should reformat the date', function () {
    let date = '16/01/2020'
    expect(reformatDate(date)).toEqual('2020-01-16')
  })
})

describe('#removeNonNumeric', () => {
  it('should remove all non numeric characters', function () {
    let string = '2020-01-1612:01'
    expect(removeNonNumeric(string)).toEqual('202001161201')
  })
})
