let blockedSites = [];
let timerSettings = { startHour: 9, endHour: 17 }; // Default: 9 AM to 5 PM

chrome.storage.sync.get(["blockedSites", "timerSettings"], (data) => {
  if (data.blockedSites) blockedSites = data.blockedSites;
  if (data.timerSettings) timerSettings = data.timerSettings;
});

function isWithinTimer() {
  const now = new Date();
  const currentHour = now.getHours();
  return currentHour >= timerSettings.startHour && currentHour < timerSettings.endHour;
}

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (isWithinTimer()) {
      const url = new URL(details.url);
      if (blockedSites.includes(url.hostname)) {
        return { cancel: true };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "updateBlockedSites") {
    blockedSites = message.sites;
    chrome.storage.sync.set({ blockedSites });
    sendResponse({ success: true });
  }
  if (message.type === "updateTimer") {
    timerSettings = message.timerSettings;
    chrome.storage.sync.set({ timerSettings });
    sendResponse({ success: true });
  }
});
