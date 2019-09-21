var testvar = 3


document.addEventListener('DOMContentLoaded', function() {

    // var sleepButton = document.getElementById('sleepHours');
    // var studyButton = document.getElementById('studyHours');
    // var mealsButton = document.getElementById('mealsEaten');
    var submitAll = document.getElementById('submitAll')
        //change html text to submit all!!

    var date = new Date()
    var time = date.getTime()

    // sleepButton.addEventListener('click', function() {
    //     window.open('https://hack.rice.edu/');
    // }, false);

    // studyButton.addEventListener('click', function() {
    //     window.open('https://hack.rice.edu/');
    // }, false);

    // mealsButton.addEventListener('click', function() {
    //     window.open('https://hack.rice.edu/');
    // }, false);

    submitAll.addEventListener('click', function() {
        var sleeptxt = document.getElementById("sleepText").value;
        var studytxt = document.getElementById("studyText").value;
        var mealtxt = document.getElementById("mealText").value;
        testvar += 1;
        alert(testvar);
        if (sleeptxt === "" || studytxt === "" || mealtxt === "") {
            alert("Please fill out the entire form")
        } else {
            if (parseFloat(sleeptxt) < 8) {
                var message = "Go To SLEEP!!! STOP WORKING, Ryan!!! :'(";
                alert(message);
            } else if ((parseFloat(sleeptxt) >= 8)) {
                alert("Good job sleeping!!");
            } else {
                alert("Please only enter numbers");
            }
            if (parseFloat(studytxt) >= 5) {
                var message = "Good job, today! But now it's time to take a break! ^_^";
                alert(message);
            } else if (parseFloat(studytxt) < 1) {
                alert("Make sure you get you work done!");
            } else if (parseFloat(studytxt) >= 1 && parseFloat(studytxt) < 5) {
                alert("Good job on your work-life balance today!!");
            } else {
                alert("Please only enter numbers");
            }
            if (parseFloat(mealtxt) < 3) {
                var message = "You need to eat! Take care of you self and have some yummy munchies! 8)";
                alert(message);
            } else if ((parseFloat(mealtxt) >= 3)) {
                alert("Good job eating!!");
            } else {
                alert("Please only enter numbers");
            }
        }
        document.writeln("Data: " + " Sleep Time: " + sleeptxt + " Study Time: \
        " + studytxt + " Meals: " + mealtxt)
    }, false);

}, false);