var counter = function(){
    var count = 0;
       
    return function (){
      return (count += 10);  
    };
};

var observer = new MutationSummary({
    callback: theNextPageLoaded,
    queries: [
        { element: "div.sound__footer"},
        { element: "li.soundList__item" }
    ]
});


function theNextPageLoaded(summaries) {
	var count = counter();

      if (count() == 10){
          summaries[0].added.forEach(function(newEl) {
          $(newEl).find('div.sc-button-group').first().append("<button class='sc-button-stream sc-button sc-button-like sc-button-small sc-button-responsive'>Stream</button>");
          });
      }
      else{
          summaries[1].added.forEach(function(newEl) {
          $(newEl).find('div.sc-button-group').first().append("<button class='sc-button-stream sc-button sc-button-like sc-button-small sc-button-responsive'>Stream</button>");
          });
      }

} 