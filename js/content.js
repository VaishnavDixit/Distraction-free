var rec = document.getElementById("rec_check");
var rel = document.getElementById("rel_check");
var com = document.getElementById("com_check");

var recVal, relVal, comVal;
chrome.storage.sync.get(['recValue', 'relValue', 'comValue'], function (result) {
	rec.checked = result.recValue === null ? false : result.recValue;
	rel.checked = result.relValue === null ? false : result.relValue;
	com.checked = result.comValue === null ? false : result.comValue;
});

rec.addEventListener('change', function () {
	if (rec.checked) {
		recVal = true;
		chrome.storage.sync.set({
			'recValue': true
		});
	} else if (rec.checked === false) {
		recVal = false;
		chrome.storage.sync.set({
			'recValue': false
		});
	}
});

com.addEventListener('change', function () {
	if (com.checked) {
		comVal = true;
		chrome.storage.sync.set({
			'comValue': true
		});
	} else if (com.checked === false) {
		comVal = false;
		chrome.storage.sync.set({
			'comValue': false
		});
	}
});

rel.addEventListener('change', function () {
	if (rel.checked) {
		relVal = true;
		chrome.storage.sync.set({
			'relValue': true
		});
	} else if (rel.checked === false) {
		relVal = false;
		chrome.storage.sync.set({
			'relValue': false
		});
	}
});
