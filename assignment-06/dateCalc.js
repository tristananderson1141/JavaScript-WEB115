var currentDate = new Date();

var dayOfMonth = currentDate.getDate();
var day = currentDate.getDay();
var month = currentDate.getMonth();
var hour = currentDate.getHours();
var minutes = currentDate.getMinutes();

var nameOfDay = "null";
var nameOfMonth = "null";
var amPm = "null";

// Corrects the format of minutes
if (minutes == 0) {
    minutes = "00";
}
else if (minutes > 0 && minutes < 10) {
    minutes = "0" + minutes;
}

// Adjusts hours and AM/PM
if (hour == 12) {
    amPm = "PM";
}
else if (hour == 0) {
    hour = 12;
    amPm = "AM";
}
else if (hour > 12) {
    amPm = "PM";
    hour = hour - 12;
}
else {
    amPm = "AM";
}

// Chooses the appropriate month String
switch (month) {

    case 0:
        nameOfMonth = "January";
        break;
    case 1:
         nameOfMonth = "February";
         break;
    case 2:
        nameOfMonth = "March";
        break;
    case 3:
        nameOfMonth = "April";
        break;
    case 4:
        nameOfMonth = "May";
        break;
    case 5:
        nameOfMonth = "June";
        break;
    case 6:
        nameOfMonth = "July";
        break;
    case 7:
        nameOfMonth = "August";
        break;
    case 8:
        nameOfMonth = "September";
        break;
    case 9:
        nameOfMonth = "October";
        break;
    case 10:
        nameOfMonth = "November";
        break;
    case 11:
        nameOfMonth = "December";
        break;
}

// Chooses the appropriate day of week String
switch (day) {

    case 0:
        nameOfDay = "Sunday";
        break;
    case 1:
        nameOfDay = "Monday";
        break;
    case 2:
        nameOfDay = "Tuesday";
        break;
    case 3:
        nameOfDay = "Wednesday";
        break;
    case 4:
        nameOfDay = "Thursday";
        break;
    case 5:
        nameOfDay = "Friday";
        break;
    case 6:
        nameOfDay = "Saturday";
        break;
}

document.write("<strong><i>It is currently: " + hour + ":" + minutes + " " + amPm +
    " on " + nameOfDay + ", " + nameOfMonth + " " + dayOfMonth + ".</i></strong>");