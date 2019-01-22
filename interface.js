
function initialize() {

  var button = document.getElementById("button");
  var eventsDiv = document.getElementById("events");
  var content = document.getElementById("textbox");
  var date = document.getElementById("date");
  var time = document.getElementById("time");


  button.addEventListener("click", function() {
    let event = new EventPlan(content.value,date.value,time.value);
    eventsDiv.appendChild(event.convertEventPlan());
    content.value = date.value = time.value = "";
  });

}

 document.addEventListener("DOMContentLoaded", initialize);
