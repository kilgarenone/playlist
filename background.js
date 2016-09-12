var key = function () {

    var soundcloud_id = "d47c763873f2feb403dac26b62e3a820",
        sc_client_id = "&client_id=" + soundcloud_id,
        sc_resolve_api = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com";

       return {
            get_sc_resolve_api: function () {
                 return sc_resolve_api;
            },
            get_sc_client_id: function () {
                 return sc_client_id;
            }   
       };
}();


soundManager.setup({
        url: 'soundmanager2/swf',
        flashVersion: 9,
        waitForWindowLoad:true,
        onready: function() {
          console.log("sm2 setup done");

        },
        ontimeout: function() {
          // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
        }
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    
    switch(request.type){
      case "check_url":
          var url = sender.tab.url,
           		regex = /(beatport|soundcloud)/,
          		regArray = regex.exec(url),
          		host = regArray[1];
      		
          if(host == "soundcloud"){
            chrome.tabs.executeScript(null, {file: "mutation-summary.js"}, function(){
                chrome.tabs.executeScript(null, {file: "soundcloud_observer.js"});
            });
          }

          sendResponse({url: host});
      break;

      case "resolve_sc":
          var sc_resource = request.sc_resource,
              full_sc_url = key.get_sc_resolve_api() + sc_resource + key.get_sc_client_id();

              console.log(full_sc_url);
              $.get( full_sc_url , getSoundcloudID);
              
          // sendResponse({full_sc_url: full_sc_url});
      break;

      case "audio_info":
          console.log("from playBtn!" + request.play_resource);
          var music = request.play_resource,
              mySound = soundManager.createSound({
                id: 'aSound',
                url: music
              });

          (music == 'stop')? mySound.pause(): mySound.play();
            
      
      break;

    }
});


function getSoundcloudID(scJSON){
  console.log(scJSON);
}


// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     var url = tabs[0].url;
//  //    chrome.runtime.sendMessage({from: "hello"}, function(response) {
//  //  	console.log(response.fromExtension);
// 	// });
// 	console.log(url);
// });






