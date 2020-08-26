//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/mc.aidanbyrnes.net/25565";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#counter').html('Server Offline');
   return false;
 } 
 
  $('#counter').html('Players Online: '+r.players.online+'<br>Version: ' + r.version.name);
});
