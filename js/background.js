chrome.tabs.onAttached.addListener(
    function (tab, attachInfo) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab
            },
            files: ["/js/content-script.js"]
        });
    }
);

chrome.tabs.onUpdated.addListener(
    function (tab_id, attachInfo, tab) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab_id
            },
            files: ["/js/content-script.js"]
        });
    }
);

chrome.tabs.onActivated.addListener((info) => {
    chrome.scripting.executeScript({
        target: {
            tabId: info.tabId
        },
        files: ["/js/content-script.js"]
    });
});

chrome.tabs.onCreated.addListener(
    function (tab) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: ["/js/content-script.js"]
        });
    }
)
