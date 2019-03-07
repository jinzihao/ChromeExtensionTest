function googleNewTab() {
    chrome.tabs.create({'url': 'https://google.com'});
}

function googleNewWindow() {
    chrome.windows.create({'url': 'https://google.com'});
}

function updateThumbupCounter() {
    chrome.storage.sync.get(['thumbupCount'], function(result) {
        document.getElementById("counter").innerHTML = result.thumbupCount;
    });
}

function thumbup() {
    chrome.storage.sync.get(['thumbupCount'], function(result) {
        document.getElementById("counter").innerHTML = result.thumbupCount + 1;
        chrome.storage.sync.set({'thumbupCount': result.thumbupCount + 1});
    });
}

document.getElementById("googleButtonNewTab").onclick = googleNewTab;
document.getElementById("googleButtonNewWindow").onclick = googleNewWindow;
document.getElementById("thumbup").onclick = thumbup;

updateThumbupCounter();
