// content.js
alert(config_domain);
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");
        if( request.message === "checked_url" ) {
            var url = request.url;
            alert(url);
        }
        //if( request.message === "clicked_browser_action" ) {
        //    //var firstHref = $("a[href^='http']").eq(0).attr("href");
        //    var firstHref = $("a[href^='http']").eq(0).attr("href");
        //
        //    console.log(firstHref);
        //
        //    // This line is new!
        //    //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
        //}
    }
);
