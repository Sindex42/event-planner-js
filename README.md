# Event Planner

A single page app to list and keep track of upcoming events. This app was test driven using my own [basic testing framework](https://github.com/Sindex42/joust-testing-framework).

A current version of the app has been deployed on [surge](eventPlanner-ConnorKC.surge.sh).

## Features

- Users can see a list of events with their date and text
- Uses are able to create an event by entering an date and time in a datetime input and text in a text input field, click a submit button and see the event in the list
- Users can only see upcoming events
- Users can see the events in chronological order
- Users can enter the name of a city in a text input field, then click on a button and see the weather forecast for today in that city.
- Users can store the events locally on the browser so they don't disappear every time the page reloads


## Getting Started

1. Clone this repo `git clone git@github.com:Sindex42/event-planner-js`
2. Change directory `cd event-planner-js`


## Running the tests

1. Open the SpecRunner file in your browser `open SpecRunner.html`
2. Open the developer console in your browser, e.g. in Chrome:  
  `ctrl + shift + J` (windows) or 
 `cmd + option + J` (mac)


### Notes on usage and tests

If you run into problems after running the tests and refreshing the page, clear the local storage completely with `localstorage.clear()` in the console.
This is because some of the tests populate the localstorage with mocks that break the render function when they need to be recreated.

Some of the later tests will still fail due to this reason.

This could be fixed by ensuring that localstorage is cleaned before and after every test.

