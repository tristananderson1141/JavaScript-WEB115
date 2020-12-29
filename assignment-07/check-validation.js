function isValidCourseInfo(input) {
    var courseRegExp = /[A-Z]{3}.[0-9]{3}#[0-9]{4}_[a-z]{2}-[0-9]{4}$/;
    return courseRegExp.test(input);
}

function getInputValue() {
    var userInput = document.getElementById("userInput").value;
    
    if (isValidCourseInfo(userInput)) {
        document.getElementById("verdict").innerHTML = "Correct Format";
    }
    else {
        document.getElementById("verdict").innerHTML = "Incorrect Format";
    }
}
