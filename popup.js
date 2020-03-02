// all the individual buttons should trigger the same script but sending a differnet parameter.
// TODO: implement DRY

function injectTheScriptPDF() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'var button_type = "PDF";'
        }, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: 'content_script.js'});
        });
    });
}

function injectTheScriptSupplement() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'var button_type = "Supplement";'
        }, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: 'content_script.js'});
        });
    });
}

function injectTheScriptDownload() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'var button_type = "Download";'
        }, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: 'content_script.js'});
        });
    });
}

function injectTheScriptVideo() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'var button_type = "Video";'
        }, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: 'content_script.js'});
        });
    });
}

function injectTheScriptEPUB() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'var button_type = "EPUB";'
        }, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: 'content_script.js'});
        });
    });
}

function injectTheScriptMOBI() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'var button_type = "MOBI";'
        }, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: 'content_script.js'});
        });
    });
}

function injectTheScriptZIP() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'var button_type = "ZIP";'
        }, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: 'content_script.js'});
        });
    });
}

document.getElementById('clickactivityPDF').addEventListener('click', injectTheScriptPDF);
document.getElementById('clickactivitySupplement').addEventListener('click', injectTheScriptSupplement);
document.getElementById('clickactivityDownload').addEventListener('click', injectTheScriptDownload);
document.getElementById('clickactivityVideo').addEventListener('click', injectTheScriptVideo);
document.getElementById('clickactivityEPUB').addEventListener('click', injectTheScriptEPUB);
document.getElementById('clickactivityMOBI').addEventListener('click', injectTheScriptMOBI);
document.getElementById('clickactivityZIP').addEventListener('click', injectTheScriptZIP);
