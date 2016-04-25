$(document).ready(function(){
  var config = new Object();
  config.dev = [];
  config.test = [];
  config.recette = [];
  config.prod = [];
  localStorage.setItem("config", config);
  console.log(config);
  var toto = localStorage.getItem("config");
  console.log(toto);
});
$('#click').click(function(){
    //chrome.tabs.create({url : 'https://youtube.com'})
    var valeur=localStorage.getItem("enable");  //récupérer la valeur
    var cpt = 0;
    if(valeur){
        cpt = parseInt(valeur);
    }
    $('#cpt').html(cpt);

    localStorage.setItem("enable",cpt+1);  //donner une nouvelle valeur

    console.log(cpt);
    console.log(cpt+1);
});

//var notif = new Notification( 'Ma notif',{
//    icon : "img/icon_128.png",
//    body : "Ma notif"
//});



