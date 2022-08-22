let def_name="Jakub"

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ def_name });
    console.log('Default name set to %cJakub', `name: ${def_name}`);
  });