const siteInput = document.getElementById("siteInput");
const addSiteButton = document.getElementById("addSite");
const siteList = document.getElementById("siteList");
const startHourInput = document.getElementById("startHour");
const endHourInput = document.getElementById("endHour");
const setTimerButton = document.getElementById("setTimer");

function updateSiteList() {
  chrome.storage.sync.get(["blockedSites"], (data) => {
    const sites = data.blockedSites || [];
    siteList.innerHTML = "";
    sites.forEach((site, index) => {
      const li = document.createElement("li");
      li.textContent = site;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        sites.splice(index, 1);
        chrome.runtime.sendMessage({ type: "updateBlockedSites", sites }, () => {
          updateSiteList();
        });
      });
      li.appendChild(removeButton);
      siteList.appendChild(li);
    });
  });
}

addSiteButton.addEventListener("click", () => {
  const site = siteInput.value.trim();
  if (site) {
    chrome.storage.sync.get(["blockedSites"], (data) => {
      const sites = data.blockedSites || [];
      if (!sites.includes(site)) {
        sites.push(site);
        chrome.runtime.sendMessage({ type: "updateBlockedSites", sites }, () => {
          updateSiteList();
        });
      }
    });
  }
  siteInput.value = "";
});

function loadTimerSettings() {
  chrome.storage.sync.get(["timerSettings"], (data) => {
    const settings = data.timerSettings || { startHour: 9, endHour: 17 };
    startHourInput.value = settings.startHour;
    endHourInput.value = settings.endHour;
  });
}

setTimerButton.addEventListener("click", () => {
  const startHour = parseInt(startHourInput.value, 10);
  const endHour = parseInt(endHourInput.value, 10);

  if (startHour >= 0 && endHour >= 0 && startHour < 24 && endHour < 24 && startHour !== endHour) {
    const timerSettings = { startHour, endHour };
    chrome.runtime.sendMessage({ type: "updateTimer", timerSettings }, () => {
      alert("Timer settings updated!");
    });
  } else {
    alert("Invalid timer settings. Please enter valid hours.");
  }
});

loadTimerSettings();
updateSiteList();
