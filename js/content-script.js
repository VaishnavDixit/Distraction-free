var rec = document.getElementById('contents');
var rel = document.getElementById('related');
var com = document.getElementById('comments');
var tab = window.location.href;

chrome.storage.sync.get(['recValue', 'relValue', 'comValue'], function (result) {
    if (rec != null) {
        rec.style.display = (result.recValue === true) ? 'none' : 'initial';
    }
    if (rel != null) {
        rel.style.display = (result.relValue === true) ? 'none' : 'initial';
    }
    if (com != null) {
        com.style.display = (result.comValue === true) ? 'none' : 'initial';
    }
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (tab.indexOf("https://www.youtube.com/") === 0) {
        for (let [key, {
                oldValue,
                newValue
        }] of Object.entries(changes)) {
            if (key === 'recValue' && rec != null) {
                rec.style.display = (newValue) ? 'none' : 'initial';
            } else if (key === 'relValue' && rel != null) {
                rel.style.display = (newValue) ? 'none' : 'initial';
            } else if (key === 'comValue' && com != null) {
                com.style.display = (newValue) ? 'none' : 'initial';
            }
        }
    }
});