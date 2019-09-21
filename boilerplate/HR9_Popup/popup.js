document.addEventListener('DOMContentLoaded', function() {

    // var sleepButton = document.getElementById('sleepHours');
    // var studyButton = document.getElementById('studyHours');
    // var mealsButton = document.getElementById('mealsEaten');
    var submitAll = document.getElementById('submitAll')

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
        if (parseFloat(sleeptxt) < 8) {
            var message = "Go To SLEEP!!! STOP WORKING, Ryan!!! :'(";
            alert(message);
        } else {
            alert("Good job sleeping!!")
        }
        if (parseFloat(studytxt) > 5) {
            var message = "Good job, today! But now it's time to take a break! ^_^";
            alert(message);
        } else {
            //idk about study numbers should we get annoyed if they dont study at all??
            alert("Good job on your work-life balance today!!")
        }
        if (parseFloat(mealtxt) < 3) {
            var message = "You need to eat! Take care of you self and have some yummy munchies! 8)";
            alert(message);
        } else {
            alert("Good job eating!!")
        }
        document.writeln("Data: " + " Sleep Time: " + sleeptxt + " Study Time: \
        " + studytxt + " Meals: " + mealtxt)
    }, false);

}, false);