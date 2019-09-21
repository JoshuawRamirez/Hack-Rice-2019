function setAlarm(alarm_val) {
    chrome.alarms.create({ delayInMinutes: alarm_val })
    chrome.alarms.onAlarm.addListener(function() {
        alert("Timer Finished!")
            //add kill pages code here
    });
}

window.setAlarm = setAlarm