chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ gluoVisitAllowed: false });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab && tab.url) {
        chrome.storage.local.get('gluoVisitAllowed', (result) => {
            if (!tab.url.includes('gluo.xyz') && !tab.url.includes('gluo.xyz')) return;

            const gluoVisitAllowed = gluoVisitAllowed || false;

            if (!gluoVisitAllowed) {
                chrome.tabs.update(tabId, { url: chrome.runtime.getURL('warning.html') });
            }
        });
    }
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    chrome.tabs.query({ url: '*://*.gluo.xyz/*' }, (tabs) => {
        if (tabs.length === 0) {
            chrome.storage.local.set({ gluoVisitAllowed: false });
        }
    });
});
