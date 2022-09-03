function createSearchResultTab(query) {
    if (!query) return;

    var entry = `https://twitter.com/search?f=live&q=${query}`
    chrome.tabs.create({
        url: entry,
        selected: true
    });
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "search_tiwtter",
        title: chrome.i18n.getMessage('selection_menu_title') + '%s' + chrome.i18n.getMessage('suffix'),
        contexts: ["selection"],
    });
});

chrome.contextMenus.onClicked.addListener(info => {
    createSearchResultTab(encodeURIComponent(info.selectionText));
})