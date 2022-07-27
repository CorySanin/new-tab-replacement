function saveOptions() {
    let url = document.getElementById('tab-url').value;
    chrome.storage.sync.set({
        url
    }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function openShortcutsPage() {
    chrome.tabs.create({
        url: 'chrome://extensions/shortcuts'
    });
}

function loadOptions() {
    chrome.storage.sync.get({
        url: 'chrome://new-tab-page-third-party'
    }, result => document.getElementById('tab-url').value = result.url);
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('keybinds').addEventListener('click', openShortcutsPage);