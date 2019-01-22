class EventPlanner {
  constructor (content, date, time) {
    let today = new Date().toLocaleDateString()

    if (reformatDate(date) < reformatDate(today)) {
      throw new Error('Cannot create an event in the past')
    }

    this.content = content
    this.date = date
    this.time = time
  }

}

function reformatDate (date) {
  var splitDate = date.split('/')
  var reverseDate = splitDate.reverse()
  var joinDate = reverseDate.join('-')

  return joinDate
}
