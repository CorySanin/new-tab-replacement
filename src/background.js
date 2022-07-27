function openTab() {
    chrome.storage.sync.get({
        url: 'chrome://new-tab-page-third-party'
    }, result => chrome.tabs.create({
        url: result.url
    }));
}

chrome.commands.onCommand.addListener(openTab);
chrome.action.onClicked.addListener(openTab);