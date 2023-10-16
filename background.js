chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getVolume') {
      chrome.tabs.get(sender.tab.id, function(tab) {
        sendResponse({ volume: tab.audible ? tab.volume : 1 });
      });
    } else if (request.action === 'setVolume') {
      chrome.tabs.get(sender.tab.id, function(tab) {
        if (tab.audible) {
          chrome.tabs.update(sender.tab.id, { volume: request.volume });
        }
      });
    }
  
    return true;
  });
  