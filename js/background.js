
function createSearchResultTab(info, tab, query) {
    if (!query) return;
    var search_api_url = 'https://twitter.com/search/realtime?q=%s';
    chrome.tabs.create({
        url      : search_api_url.replace(/%s/, query),
        selected : true
    });
}

/*
 *  右クリックメニュー作成
 */
var menus = {
    'selection' : chrome.contextMenus.create({
        "title"     : '選択文字をツイッター検索',
        "contexts"  : ["selection"],
        "onclick"   : function(info, tab){
            createSearchResultTab(info, tab, encodeURIComponent(info.selectionText));
        }
    })
};
