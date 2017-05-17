// select the target node
var target = $(".columns-area")[0];
 
// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
     if( mutation.addedNodes[0] instanceof HTMLElement && mutation.addedNodes[0].className =="status" ){
          console.log( mutation.addedNodes[0] );
          var ox_target_content = mutation.addedNodes[0].querySelector(".status__content");;
          var mysource = ox_target_content.textContent;
          var translated = "init";
          
          var ox_translation_button = document.createElement("A");
          ox_translation_button.innerHTML = "文/A";
          ox_translation_button.className = "ox-translate-button";

          var target_id = translation_anchor.id;
          ox_target_content.appendChild(translation_anchor);
          ox_target_content.classList.add("ox-flagged");

          ox_target_content.parentNode.appendChild( ox_translation_button );
          ox_translation_button.addEventListener('click', function(){
               console.log('started');
               $.ajax({
                              type:     "GET",
                         dataType:      "jsonp",
                         url: "https://translation.googleapis.com/language/translate/v2?key=AIzaSyB9YozYluU9AALKOuhUwklTThT8vh8P7Z0",
                         data:{
                                   q: mysource,
                              target: "ja",
                         }
                    }).then(
                         function(json){
                              console.log( json );
     //                         console.log( json.data.translations[0].translatedText );
                              $("#"+target_id).after( json.data.translations[0].translatedText );
                         },
                         function(){
                              console.log('error');
                         }
                    )
          }    
          , false);
     }
  });    
});
 
// configuration of the observer:
var config = { childList: true, subtree: true};
 
// pass in the target node, as well as the observer options
observer.observe(target, config);
