function googleNewTab() {
    chrome.tabs.create({'url': 'https://google.com'});
}

function googleNewWindow() {
    chrome.windows.create({'url': 'https://google.com'});
}

document.getElementById("googleButtonNewTab").onclick = googleNewTab;
document.getElementById("googleButtonNewWindow").onclick = googleNewWindow;