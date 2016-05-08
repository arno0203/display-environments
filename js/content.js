// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "change_color" ) {
            alert(request.color);
            $("body").css("background-color", request.color);
            $("body").append('<div id="environnemnt" style="background-color:red; height:10px">PMMMMM</div>');
            $("body").add("div").css("background", request.color);


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
//
//chrome.extension.sendMessage({text:"getStuff"},function(reponse){
//    //This is where the stuff you want from the background page will be
//    if(reponse.type == "test")
//        alert("Test received");
//});


