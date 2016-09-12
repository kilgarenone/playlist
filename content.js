// chrome.extension.sendMessage({
//   "type": "hello",
//   "var1": "variable 1",  //string
//   "var2": true           //boolean
// });


// var s = document.createElement('script');
// // TODO: add "script.js" to web_accessible_resources in manifest.json
// s.src = chrome.extension.getURL('mutation-summary.js');
// s.onload = function() {
//     this.parentNode.removeChild(this);
// };
// (document.head||document.documentElement).appendChild(s);




$('body').on('click', '.sc-button-stream', function() {
	console.log("stream button clicked");
  var sc_href = $(this).parents('div.sound__soundActions').next().find('a.sc-ministats-likes').attr('href'),
      sc_url = sc_href.replace(/(\/likes)/, '');

      chrome.runtime.sendMessage({
                          type: "resolve_sc", 
                          sc_resource: sc_url
      });

});


chrome.runtime.sendMessage({type: "check_url"}, function(response) {
  	switch(response.url) {
        case "beatport":
            beatport();
        break;

        case "soundcloud":
            // soundcloud();
            console.log("content.js received response");
        break;
    }

    return true;
});


var soundcloud = function(){

};




	
  	// });
  // 	if(sc.added.length){
  // 		var stream_btn = $('<button>', {
		// 					class: 'sc-button sc-button-like sc-button-small sc-button-responsive',
		// 					text: 'Stream!'
		// 				});

		// $(".sc-button-group").append(stream_btn);

  	// }
 

// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('button').addEventListener('click', clickHandler);
//   main();
// });

