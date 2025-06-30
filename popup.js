document.addEventListener('DOMContentLoaded', function() {
    const naverMapExtendToggleButton = document.getElementById('naverMapExtendToggleButton');
    const naverMapShrinkToggleButton = document.getElementById('naverMapShrinkToggleButton');

    naverMapExtendToggleButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'extend'
            });
        });
    });

    naverMapShrinkToggleButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'shrink'
            });
        });
    }); 
}); 