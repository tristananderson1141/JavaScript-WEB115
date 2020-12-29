function calculateArea(myArea) {

    var area = (myArea * myArea) * Math.PI;

    return area;
}

var myRadius = parseFloat(prompt("Enter radius: ", "00"), 10);

alert("A circle with a " + myRadius + " centimeter radius has an area of " 
    + calculateArea(myRadius).toFixed(1) + " square centimeters.");
    