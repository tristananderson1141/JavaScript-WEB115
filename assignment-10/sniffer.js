function getBrowserName() {

    var uaOfBrowser = navigator.userAgent;

    if (uaOfBrowser.indexOf("MSIE") >= 0) {
        return "MSIE";
    }
    else if (uaOfBrowser.indexOf("Firefox") >= 0) {
        return "Firefox";
    }
    else if (uaOfBrowser.indexOf("Chrome") >= 0) {
        return "Chrome";
    }
    else if (uaOfBrowser.indexOf("Safari") >= 0) {
        return "Safari";
    }
    else if(uaOfBrowser.indexOf("Opera") >= 0) {
        return "Opera";
    }
    else {
        return "UNKNOWN";
    }
}

function getBrowserVersion() {

    var uaResult = navigator.userAgent;
    var browser = getBrowserName();
    var findIndex = uaResult.indexOf(browser) + browser.length + 1;
    var version = parseFloat(uaResult.substring(findIndex, findIndex + 3));

    return version;
}

var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var browserWidth = window.innerWidth;
var browserHeight = window.innerHeight;

var displayInfo = "You are using version " + browserVersion + " of the " + browserName
                    + " browser to view this page in a browser whos inner window that is "
                    + browserWidth + " pixels wide and " + browserHeight + " pixels tall.";


document.getElementById("browserInfo").innerHTML = displayInfo;
