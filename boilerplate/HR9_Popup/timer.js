chrome.alarms.create({ delayInMinutes: 1.0 })
chrome.alarms.onAlarm.addListener(function() {
    alert("Timer Finished!")
});