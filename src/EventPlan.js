'use strict'

class EventPlan {
  constructor (content, date, time) {
    let today = new Date().toLocaleDateString()

    this.content = content
    this.date = reformatDate(date)
    this.time = time
    this.dateTime = removeNonNumeric(this.date + time)
  }

  renderEventPlan () {
    let div = document.createElement('div')
    div.innerText = `${this.content} on ${this.date} at ${this.time}`
    return div
  }
}

const reformatDate = (date) => {
  let splitDate = date.split('/')
  let reverseDate = splitDate.reverse()
  let joinDate = reverseDate.join('-')

  return joinDate
}

const removeNonNumeric = (string) => {
  return string.replace(/[^0-9]/g, '')
}
