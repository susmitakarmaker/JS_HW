let today = new Date();

let day = today.getDay();

let days = ["Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"];

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let ampm = hour >= 12 ? "PM" : "AM";

hour = hour % 12;
hour = hour ? hour : 12;

document.getElementById("result").innerHTML =
    "Today is : " + days[day] +
    "<br>Current time is : " +
    hour + " " + ampm + " : " +
    minute + " : " + second;