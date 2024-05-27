chrome.action.onClicked.addListener((tab) => {
    chrome.storage.sync.get(['savedUrls'], function (result) {
        let savedUrls = result.savedUrls || [];
        savedUrls.push(tab.url);
        chrome.storage.sync.set({ savedUrls: savedUrls }, function () {
            console.log('URL saved:', tab.url);
        });
    });
});
