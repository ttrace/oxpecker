require("./oxpecker.css");

var ox_config = require('./oxpecker.config.js');

var endpoint_url = "https://translation.googleapis.com/language/translate/v2?key=" + ox_config.api_key;
var ox_target_language = ox_config.ox_target_language;

//var browser_language = (window.navigator.languages && window.navigator.languages[0]).split("-")[0];

var create_button = require('./translation-button.js');
var ox_translation_button_template = create_button();
var create_translation_anchor = require('./translation-anchor.js');


var append_translator = function append_event( target ){
     var mysource = target.textContent;
     var translation_button = ox_translation_button_template.cloneNode(true);

     var translation_anchor = create_translation_anchor();
     var target_id = translation_anchor.id;

     target.appendChild( translation_anchor );
     target.parentNode.appendChild( translation_button );
     target.classList.add( "ox-flagged" );

     translation_button.addEventListener('click', function call_api(){
          console.log('started');
          var working_button = this;
          $.ajax({
                         type:     "GET",
                    dataType:      "jsonp",
                    url: endpoint_url,
                    data:{
                              q: mysource,
                         target: ox_target_language,
                    }
               }).then(
                    function(json){
//                         console.log( json.data.translations[0].translatedText );
                         $("#"+target_id)[0].innerText = json.data.translations[0].translatedText;
                         $("#"+target_id)[0].classList.add( "completed" );
                         working_button.classList.add( "completed" );
                         working_button.removeEventListener( 'click', call_api, false);
                    },
                    function(){
                         console.log('error');
                    }
               )
     }    
     , false);
}

// initial work
var ox_target_contents_list = $(".status__content").not($(".ox-flagged")).not($(".status.muted .status__content"));
     ox_target_contents_list.each(function(i){
          append_translator( ox_target_contents_list[i] );
     });


// select the target node
var target = $(".columns-area")[0];
 
// observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function( mutation ) {
     if( mutation.addedNodes[0] instanceof HTMLElement && mutation.addedNodes[0].className =="status" ){
          append_translator( mutation.addedNodes[0].querySelector(".status__content") );
     }
  });    
});
 
// configuration of the observer:
var config = { childList: true, subtree: true};
     observer.observe(target, config);
