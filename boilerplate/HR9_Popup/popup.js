document.addEventListener('DOMContentLoaded', function() {

    // var sleepButton = document.getElementById('sleepHours');
    // var studyButton = document.getElementById('studyHours');
    // var mealsButton = document.getElementById('mealsEaten');
    var submitAll = document.getElementById('submitAll');
    var studyTimer = document.getElementById('studyTimer');

    //showing total sleep hours
    var sleepStorage = window.localStorage.getItem('sleeptxt') || 0;
    document.getElementById("storageText").innerHTML = sleepStorage;

    //showing total study hours
    var studyStorage = window.localStorage.getItem('studytxt') || 0;
    document.getElementById("studyStorage").innerHTML = studyStorage;

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
        //totalSleep = toString(parseInt(totalSleep) + parseInt(sleeptxt));
        
        // window.localStorage.setItem('sleeptxt', totalSleep);
        //window.localStorage.setItem('studytxt', studytxt);
        window.localStorage.setItem('mealtxt', mealtxt);
        //var currentSleep = 0;
        //var totalSleep = window.localStorage.getItem('sleeptxt');
        var currentSleep = window.localStorage.getItem('sleeptxt') || 0;
        var sum = parseInt(currentSleep) + parseInt(sleeptxt);
        window.localStorage.setItem('sleeptxt', sum.toString());
        document.getElementById("storageText").innerHTML = sum;

        var currentStudy = window.localStorage.getItem('studytxt') || 0;
        var sum2 = parseInt(currentStudy) + parseInt(studytxt);
        window.localStorage.setItem('studytxt', sum2.toString());
        document.getElementById("studyStorage").innerHTML = sum2;

        if (sleeptxt === "" || studytxt === "" || mealtxt === "") {
            alert("Please fill out the entire form")
        } else {
            if (parseFloat(sleeptxt) < 8) {
                var message = "You should try getting some rest :)";
                alert(message);
            } else if ((parseFloat(sleeptxt) >= 8)) {
                alert("Good job on getting enough sleep!!");
            } else {
                alert("Please only enter numbers");
            }
            if (parseFloat(studytxt) >= 5) {
                var message = "Good job, today! But now it's time to take a break! ^_^";
                alert(message);
            } else if (parseFloat(studytxt) < 1) {
                alert("You should maybe get some work done, you'll feel accomplished!");
            } else if (parseFloat(studytxt) >= 1 && parseFloat(studytxt) < 5) {
                alert("Good job on your work-life balance today!!");
            } else {
                alert("Please only enter numbers");
            }
            if (parseFloat(mealtxt) < 3) {
                var message = "Go to the servery, your brain needs fuel!";
                alert(message);
            } else if ((parseFloat(mealtxt) >= 3)) {
                alert("Good job on keeping yourself fed!");
            } else {
                alert("Please only enter numbers");
            }
        }
        //adds sleep data to bottom of pop up
        var node = document.createElement("LI");
        var textnode = document.createTextNode("Hours of Sleep: " + parseFloat(sleeptxt));
        node.appendChild(textnode);
        node.style.margin = '40px';
        if (parseFloat(sleeptxt) < 8) {
            node.style.color = 'gray';
        } else {
            node.style.color = 'gray';
        }
        document.getElementById("data").appendChild(node);

        //adds study data to bottom of pop up
        var node = document.createElement("LI");
        var textnode = document.createTextNode("Hours of Study: " + parseFloat(studytxt));
        node.appendChild(textnode);
        node.style.margin = '40px';
        if (parseFloat(studytxt) >= 1 && parseFloat(studytxt) < 5) {
            node.style.color = 'gray';
        } else {
            node.style.color = 'gray';
        }
        document.getElementById("data").appendChild(node);

        //adds meal data to bottom of pop up
        var node = document.createElement("LI");
        var textnode = document.createTextNode("Meals Eaten: " + parseFloat(mealtxt));
        node.appendChild(textnode);
        node.style.margin = '40px';
        if (parseFloat(mealtxt) === 3) {
            node.style.color = 'gray';
        } else {
            node.style.color = 'gray';
        }
        document.getElementById("data").appendChild(node);

        if(sleeptxt !== "" && studytxt !== "" && mealtxt !== ""){
            document.getElementById("submitAll").style.display = "none";
        }
    }, false);

    studyTimer.addEventListener('click', function() {
        var timerText_hr = document.getElementById('timerText_hr');
        var timerText_min = document.getElementById('timerText_min');
        var timerText_sec = document.getElementById('timerText_sec');

        //startTime = Date.now();
        minTime = (timerText_sec.value / 60) + (timerText_min.value) + (timerText_hr.value * 60);
        //alert(milliTime)
        //alert(minTime)
        window.setAlarm(parseFloat(minTime));
        //setTimeout(function() {
        // currentTime = Date.now() - startTime;
        //timerText_hr = toString(currentTime)
        //currentTime = Date.now() - startTime
        //timerText_sec.value = currentTime
        //alert("Study Timer Done!");
        //}, false);

    }, false);



    //chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
    //chrome.tabs.remove(tabs[0].id)
});