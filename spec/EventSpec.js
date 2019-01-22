describe('Event', function () {

  let date = '16/01/2017'
  let time = '00:00:00'
  let event = new Event('test event', date, time)

describe('content', () => {
  it('should create an event with content', function () {
    expect(event.content).toEqual('test event')
  })
})

describe('date', () => {
  it('should create an event with a date', function () {
    expect(event.date).toEqual('16/01/2017')
  })
})

describe('time', () => {
  it('should create an event with a time', function () {
    expect(event.time).toEqual('00:00:00')
  })
})

})
