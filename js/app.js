$('#click').click(function(){
    chrome.tabs.create({url : 'https://youtube.com'})
});

var notif = new Notification( 'Ma notif',{
    icon : "img/icon_128.png",
    body : "Ma notif"
});