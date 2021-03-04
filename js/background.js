
function createSearchResultTab(info, tab, query) {
    if (!query) return;
    var search_api_url = 'https://twitter.com/search?f=live&q=%s';
    chrome.tabs.create({
        url      : search_api_url.replace(/%s/, query),
        selected : true
    });
}

/*
 *  右クリックメニュー作成
 */
chrome.contextMenus.create({
    "title"     :  chrome.i18n.getMessage('selection_menu_title') + '%s' + chrome.i18n.getMessage('suffix'),
    "contexts"  : ["selection"],
    "onclick"   : function(info, tab){
        createSearchResultTab(info, tab, encodeURIComponent(info.selectionText));
    }
});
