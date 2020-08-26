//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/mc.aidanbyrnes.net/25565";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#counter').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  } 
  $('#counter').html('Players Online: '+r.players.online);
});
