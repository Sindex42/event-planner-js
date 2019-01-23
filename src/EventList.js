class EventList {
  constructor () {
    this.eventArray = []
  }

  add (eventPlan) {
    this.eventArray.push(eventPlan);
  }

  renderEventList () {
    var div = document.createElement('div')
    var arrayLength = this.eventArray.length
    this.eventArray.sort((a, b) => (a.dateTime > b.dateTime) ? 1 : -1)

    // for (let i = 0; i < arrayLength; i++) {
    //
    // }
  }
}
