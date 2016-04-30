// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //if( request.message === "clicked_browser_action" ) {
        //    //var firstHref = $("a[href^='http']").eq(0).attr("href");
        //    var firstHref = $("a[href^='http']").eq(0).attr("href");
        //
        //    console.log(firstHref);
        //
        //    // This line is new!
        //    //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
        //}
        if( request.message === "get_current_tab_url" ) {
            var url = request.url;
            alert(url);
            console.log(firstHref);
        }
    }
);
