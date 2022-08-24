let def_name="Jakub"
let countDownDate=0

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ def_name });
    chrome.storage.local.set({def:1});
    chrome.storage.local.set({countDownDate});

    console.log('Default name set to %cJakub', `name: ${def_name}`);
  });