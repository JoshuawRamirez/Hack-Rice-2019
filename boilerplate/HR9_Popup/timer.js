// function setAlarm(alarm_val) {
//     chrome.alarms.create("alarm_name", { delayInMinutes: alarm_val })
// }


//     //add kill pages code here
// }

// function setTimer(timer_val) {
//     setTimeout(function() { alert("Hello"); }, timer_val);
// }

// // chrome.alarms.create({ delayInMinutes: 0.1 })
// // chrome.alarms.onAlarm.addListener(function() {
// //     alert("Timer Finished!");
// //     //add kill pages code here
// // });

// window.setAlarm = setAlarm



chrome.runtime.onMessage.addListener(function(message) {
    if (message.minTime) {
        console.log(message)
        chrome.alarms.create({ delayInMinutes: message.minTime / 60000 })
    }
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    alert("Timer Finished!");
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.remove(tabs[0].id)
    });
    //console.log(alarm)
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //     chrome.tabs.remove(tabs[0].id);
    //     //add kill pages code here
});