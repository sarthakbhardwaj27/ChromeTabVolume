document.addEventListener('DOMContentLoaded', function() {
    var volumeSlider = document.getElementById('volumeSlider');
  
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tabId = tabs[0].id;
  
      chrome.tabs.sendMessage(tabId, { action: 'getVolume' }, function(response) {
        if (response && response.volume) {
          volumeSlider.value = response.volume;
        }
      });
  
      volumeSlider.addEventListener('input', function() {
        chrome.tabs.sendMessage(tabId, { action: 'setVolume', volume: volumeSlider.value });
      });
    });
  });
  