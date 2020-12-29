var tableElement = document.createElement("table");

// Placing tr elements into an array
var rowArray = [];
for (var i = 0; i < 3; i++) {
    rowArray[i] = document.createElement("tr");
}

// Placing td elements into an array
var dataArray = [];
for (var i = 0; i < 9; i++) {
    dataArray[i] = document.createElement("td");
}

// Placing textNode elements into the entry array
var entryArray = [];
entryArray[0] = document.createTextNode("Car");
entryArray[1] = document.createTextNode("Top Speed");
entryArray[2] = document.createTextNode("Price");
entryArray[3] = document.createTextNode("Chevrolet");
entryArray[4] = document.createTextNode("120mph");
entryArray[5] = document.createTextNode("$10,000");
entryArray[6] = document.createTextNode("Pontiac");
entryArray[7] = document.createTextNode("140mph");
entryArray[8] = document.createTextNode("$20,000");

var navigable = document.body;
navigable.appendChild(tableElement);
navigable = navigable.lastChild;

// Looping through each row of the table, tracking the td and 
// entries using variables, incrementing as they are used
var tdTracker = 0;
var entryTracker = 0;
for (var i = 0; i < 3; i++) {
    navigable.append(rowArray[i]);
        navigable = navigable.lastChild;
        navigable.append(dataArray[tdTracker++]);
        navigable.append(dataArray[tdTracker++]);
        navigable.append(dataArray[tdTracker++]);
            navigable = navigable.firstChild;
            navigable.appendChild(entryArray[entryTracker++]);
            navigable = navigable.nextSibling;
            navigable.appendChild(entryArray[entryTracker++]);
            navigable = navigable.nextSibling;
            navigable.appendChild(entryArray[entryTracker++]);
        navigable = navigable.parentNode;
    navigable = navigable.parentNode;
}

// Uses style object to set the font of each td entry
var dataEntries = document.querySelectorAll("td");
var totalEntries = dataEntries.length;
for (var i = 0; i < totalEntries; i++) {
    dataEntries[i].style.fontFamily = "Helvetica";
}

// Uses style object to set the border of each td entry
// to a purple color
for (var i = 0; i < totalEntries; i++) {
    dataEntries[i].style.border = "2px solid purple";
}

// Uses style object to select all table rows, placing them 
// in a list and changing the background color of each individually
var tableHeaderManip = document.querySelectorAll("tr");
tableHeaderManip[0].style.backgroundColor = "red";
tableHeaderManip[1].style.backgroundColor = "powderblue";
tableHeaderManip[2].style.backgroundColor = "powderblue";

var tableManip = document.querySelector("table");
// Centers the table in the page using the setAttribute() method
tableManip.setAttribute("align", "center");

// Sets the outer border of the table to a thick black using the 
// setAttribute() method
tableManip.setAttribute("border", "3px solid black");