chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("Tab Updated:", changeInfo.status, tab.url);

    if (changeInfo.status === "complete" && tab.url) {
        console.log("Page fully loaded. Attempting to store URL:", tab.url);

        chrome.storage.local.get({ links: [] }, (data) => {
            let links = data.links || [];

            if (!links.includes(tab.url)) {
                links.push(tab.url);
                chrome.storage.local.set({ links }, () => {
                    console.log("Updated Stored Links:", links);
                });
            } else {
                console.log("URL already exists in storage:", tab.url);
            }
        });
    }
});
