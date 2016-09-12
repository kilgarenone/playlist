window.onload = function() {
    document.getElementById("button").onclick = function() {
        chrome.extension.sendMessage({ type: "color-divs" });
    };
};


$( "#playBtn" ).on( "click", function(){
  var resource = $(this).data("resource");
  chrome.runtime.sendMessage({
                          type: "audio_info",
                          play_resource: resource
   });
  // var mySound = soundManager.createSound({
  //           id: 'aSound',
  //           url: 'music/Sexyboy.mp3'
  //         });
  // mySound.play();
});

$( "#stopBtn" ).on( "click", function(){
	chrome.runtime.sendMessage({
                          type: "audio_info",
                          play_resource: "stop"
   });
});
// SC.initialize({
//     client_id: "d47c763873f2feb403dac26b62e3a820"
// });