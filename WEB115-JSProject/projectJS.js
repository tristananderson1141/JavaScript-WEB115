function emailValidator(emailInput) {
    var emailRegExp = /^(([^<>()\[\]\\.,;:@"\x00-\x20\x7F]|\\.)+|("""([^\x0A\x0D"\\]|\\\\)+"""))@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;

    return emailRegExp.test(emailInput);
}

function checkEmail() {
    var email = document.getElementById("userMail").value;
    alert(email);
    if (emailValidator(email)) {
        alert("E-mail address is valid!");
    }
    else {
        alert("E-mail address is invalid, please correct");
    }
}

function result() {
    name = document.getElementById("userName").value;
    city = document.getElementById("userCity").value;
    state = document.getElementById("userState").value;
    zip = document.getElementById("userZip").value;

    locationFormat = (city + ", " + state + " " + zip);

    phone = document.getElementById("userPhone").value;
    mail = document.getElementById("userMail").value;
    linkedIn = document.getElementById("userLinked").value;
    portfolio = document.getElementById("userPortfolio").value;
    social = document.getElementById("userSocial").value;

    volunteerWork = document.getElementById("userVolunteer").value;
    workEthic = document.getElementById("userEthic").value;
    speaking = document.getElementById("userSpeak").value;
    writing = document.getElementById("userWriting").value;

    eduBackground = document.getElementById("userEdu").value;

    degrees = document.getElementById("userDegree").value;
    degreeList = degrees.split(',');

    certificates = document.getElementById("userCerts").value;
    certList = certificates.split(',');

    programLang = document.getElementById("userCoding").value;
    programList = programLang.split(',');
    prefLang = document.getElementById("userBestLang").value;

    job1Desc = document.getElementById("job1Desc").value;
    job1Start = document.getElementById("startDate1").value;
    job1End = document.getElementById("endDate1").value;
    job2Desc = document.getElementById("job2Desc").value;
    job2Start = document.getElementById("startDate2").value;
    job2End = document.getElementById("endDate2").value;
    job3Desc = document.getElementById("job3Desc").value;
    job3Start = document.getElementById("startDate3").value;
    job3End = document.getElementById("endDate3").value;
    references = document.getElementById("userRef").value;
    refList = references.split(';');

    myText = ("<html>\n<head>\n<link rel=stylesheet href=resumeStyle.css>\n<title>Tristan Anderson Resume</title>\n</head>\n<body>\n");
    myText += ("<h1>" + name + "</h1><ul id=\"infoList\"><li>" + locationFormat + "</li><li>" + phone + "</li><li>" + mail + "</li>");
    myText += ("<li>" + linkedIn + "</li><li>" + portfolio + "</li><li> @" + social + "</li></ul>");
    myText += ("<h2>Personal Skillset</h2><p><ul id=\"persSkills\"><li>" + volunteerWork + "</li><li>" + workEthic + "</li><li>Public Speaking: " 
                + speaking + "</li><li>" + writing + "</li></ul></p>");
    myText += (`<h2>Educational Background</h2><p>${eduBackground}</p>`);

    myText += ("<p><strong>Degree(s):</strong></p><ul id=\"infoList\">");
    for (var i = 0; i < degreeList.length; i++) {
        myText += ("<li>" + degreeList[i] + "</li>");
    }
    myText += ("</ul>");
    myText += ("<p><strong>Certification(s):</strong></p><ul id=\"infoList\">");
    for (var i = 0; i < certList.length; i++) {
        myText += ("<li>" + certList[i] + "</li>");
    }
    myText += ("</ul>");

    myText += ("<h2>Programming Skillset</h2><p><strong>Languages:</strong></p><ul id=\"infoList\">");
    for (var i = 0; i < programList.length; i++) {
        myText += ("<li>" + programList[i] + "</li>");
    }
    myText += ("</ul>");

    myText += ("<p><strong>Preferred Language: </strong>" + prefLang + "</p>");
    myText += ("<h2>Work History</h2>");
    myText += ("<p><strong>Job 1:</strong></p>");
    myText += ("<ul><li>Start: " + job1Start + "</li><li>End: " + job1End + "</li><li>Description: " + job1Desc + "</li></ul>");
    myText += ("<p><strong>Job 2:</strong></p>");
    myText += ("<ul><li>Start: " + job2Start + "</li><li>End: " + job2End + "</li><li>Description: " + job2Desc + "</li></ul>");
    myText += ("<p><strong>Job 3:</strong></p>");
    myText += ("<ul><li>Start: " + job3Start + "</li><li>End: " + job3End + "</li><li>Description: " + job3Desc + "</li></ul>");
    myText += ("<p><strong>References: </strong></p><ul id=\"infoList\">");
    for (var i = 0; i < refList.length; i++) {
        myText += ("<li>" + refList[i] + "</li>");
    }
    myText += ("</ul>");
    myText += ("</body>\n</html>");

    resumeResult = window.open('about:blank','myPop','width=1000,height=700,left=200,top=200');
    resumeResult.document.write(myText);
}

function receiveResume() {
    var email = document.getElementById("userMail").value;
    if (emailValidator(email)) {
        result();
    }
    else {
        alert("Invalid Email");
    }
}