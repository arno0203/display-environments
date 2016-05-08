// background.js
var config_domain = {
    dev: {
        domain: ['dev.dollois.com', 'stackoverflow.com'],
        color: '#CED8F6'
    },
    test: {
        domain: ['test.dollois.com', 'www.google.fr'],
        color: '#A9F5A9'
    },
    recette: {
        domain: ['recette.dollois.com', 'www.facebook.com'],
        color: '#F5D0A9'
    },
    production: {
        domain: ['www.dollois.com','regex101.com'],
        color: '#FA5858'
    }
};


// Called when the user clicks on the browser action.
/*chrome.browserAction.onClicked.addListener(function (tab) {
 // Send a message to the active tab
 chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
 var activeTab = tabs[0];
 chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
 });
 });*/
chrome.tabs.onActivated.addListener(function (activeInfo) {
    //alert('EEEEE');
    var tab = chrome.tabs.get(activeInfo.tabId, function (tab) {
        var current_url = tab.url;
        checked_url(current_url, activeInfo.tabId);

    });
});

function checked_url (url, tabId){
    jQuery.each(config_domain, function(environment, properties) {
        var current_environment = null;
        var list_domain = properties.domain;
        var domain_match = false;
        list_domain.forEach(function (domain) {
            var result = url.match(/^(http(s)?:\/\/)?(([a-zA-Z0-9]|\.)*)(\/?)(.*)/);
            if(result[3] == domain){
                domain_match = true;
                current_environment = environment;

            }
        });
        if(domain_match){
            //chrome.tabs.sendMessage(tabId, {"message": "change_color", "color" : properties.color});
            var code = [
                'var para = document.createElement("p");',
                'var t = document.createTextNode("Vous êtes sur un environnement de '+current_environment+'");',
                'para.appendChild(t);',
                'var para1 = document.createElement("p");',
                'var t = document.createTextNode("[fermer]");',
                'para.appendChild(t);',
                'var d = document.createElement("div");',
                'd.setAttribute("style", "'
                + 'background-color: '+properties.color+';'
                + 'width: 100%; '
                + 'height: 30px; '
                + 'position: fixed; '
                + 'top: 0px; '
                + 'left: 0px; '
                + 'z-index: 9999; '
                + '");',
                'd.appendChild(para);',
                'document.body.appendChild(d);'
            ].join("\n");

            /* Inject the code into the current tab */
            chrome.tabs.executeScript(tabId, { code: code });
        }

    });
}



// This block is new!
//chrome.runtime.onMessage.addListener(
//    function (request, sender, sendResponse) {
//        if (request.message === "open_new_tab") {
//            chrome.tabs.create({"url": request.url});
//        }
//    }
//);
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
