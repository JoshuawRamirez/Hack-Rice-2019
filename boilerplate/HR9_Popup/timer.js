function setAlarm(alarm_val) {
    chrome.alarms.create({ delayInMinutes: alarm_val })
    chrome.alarms.onAlarm.addListener(function() {
        alert("Timer Finished!")
    });
}

window.setAlarm = setAlarm