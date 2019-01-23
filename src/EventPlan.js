class EventPlan {
  constructor (content, date, time) {
    let today = new Date().toLocaleDateString()

    if (reformatDate(date) < reformatDate(today)) {
      throw new Error('Cannot create an event in the past')
    }

    this.content = content
    this.date = reformatDate(date)
    this.time = time
    this.dateTime = removeNonNumeric(this.date + time)
  }

  convertEventPlan () {
    const p = document.createElement('p')
    p.innerText = `${this.content} on ${this.date} at ${this.time}`
    return p
  }
}

function reformatDate (date) {
  var splitDate = date.split('/')
  var reverseDate = splitDate.reverse()
  var joinDate = reverseDate.join('-')

  return joinDate
}

function removeNonNumeric (string) {
  return string.replace(/[^0-9]/g, "")
}
