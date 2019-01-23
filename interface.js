window.onload = () => {
  let button = document.getElementById('button')

  button.addEventListener('click', () => {
    let content = document.getElementById('textbox')
    let date = document.getElementById('date')
    let time = document.getElementById('time')
    let eventsDiv = document.getElementById('events')

    let event = new EventPlan(content.value, date.value, time.value)

    eventsDiv.appendChild(event.renderEventPlan())
    content.value = date.value = time.value = ''

    display()
  })

  const display = () => {

  }
}
