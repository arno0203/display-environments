// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "open_new_tab" ) {
        chrome.tabs.create({"url": request.url});
      }
    }
);
//$(document).ready(function ()
//{
//  //setInterval(function () {alert('Page d\'arrière plan en marche');},10000);
//  var config = {dev: [], test: [], recette: [], production: []}
//
//  localStorage.setItem("config", JSON.stringify(config));
//  console.log(config);
//  var toto = localStorage.getItem("config");
//  console.log(toto);
//
//  $('#newBtn').click(function (fenetre, tab)
//  {
//    console.log('newTab');
//  });
//
//});
//$('#click').click(function ()
//{
//  //chrome.tabs.create({url : 'https://youtube.com'})
//  var valeur = JSON.parse(localStorage.getItem("enable"));  //récupérer la valeur
//  var cpt = 0;
//  if (valeur)
//  {
//    cpt = parseInt(valeur);
//  }
//  $('#cpt').html(cpt);
//
//  localStorage.setItem("enable", cpt + 1);  //donner une nouvelle valeur
//
//  console.log(cpt);
//  console.log(cpt + 1);
//  console.log(JSON.parse(localStorage.getItem("config")));
//
//});
//
//var notif = new Notification('Ma notif', {
//  icon: "img/icon_128.png",
//  body: "Ma notif"
//});
//
//
//
//
//
