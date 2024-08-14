# Assignment 2

## Question

Implement a global toast notification system (comprising of success, warning and error notifications) that can be used across multiple pages

## Implementation

- Created a class 'ToastNotification' which initializes a container which creates a div to display the toast messages and appends it to the body.
- Created a 'show' function inside the class which takes in the messge to the diplayed, the type of toast and an optional duration.
- Inside the show function, created a div element and set the message to be displayed, changed the background color depending on the type of toast and appended it to the container.
- The toast message is then removed from the DOM after a set duration.
- Created a new instance of the 'ToastNotification' class on the outside
- Created 3 buttons and added onClick event listeners to them calling the show method in the class with the toast instance.
