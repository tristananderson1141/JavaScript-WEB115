var userAge = parseFloat(prompt("Enter your age: ", "00"));

if (userAge > 5 && userAge < 21) {
    window.location="http://www.disney.com/";
}
else if(userAge >= 21 && userAge < 95) {
    window.location="http://www.espn.com/";
}
else {
    alert("User age is invalid, please refresh page to try again.");
}