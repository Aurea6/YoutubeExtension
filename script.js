function openGluo {
    chrome.storage.local.set({ gluoVisitAllowed: true }, () => {
        return window.location.href = 'https://www.gluo.xyz';
    });
}

document.getElementById('openGluo').addEventListener('click', openGluo);

function closeTab() {
    return window.close();
}

document.getElementById('closeTab').addEventListener('click', closeTab);
