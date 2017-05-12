javascript:
var api_key = "YOUR_API_KEY";
var endpoint_url = "https://translation.googleapis.com/language/translate/v2?key=" + api_key;

$(".status__content").each(function(i){
     var mysource = $(".status__content")[i].textContent;
     var translated = "init";
     var target_status = $(".status__content")[i];

     var translation_anchor = document.createElement("DIV");
     translation_anchor.id = "translation_" + i;
     $(".status__content")[i].appendChild(translation_anchor);

     var btn = document.createElement("A");
     btn.innerHTML = "🇯🇵";
     btn.style.cssText = "margin-left: 18px;float:right;position:relative;top:-20px;";
      $(".status")[i].appendChild(btn);
     btn.addEventListener('click', 
          function(){
          console.log('started');
          $.ajax({
                    type:"GET",
                    dataType: "jsonp",
                    url: endpoint_url,
                    data:{
                         q: mysource,
                         target: 'ja',
                    }
               }).then(
                    function(json){
                         console.log( json.data.translations[0].translatedText );
                         $("#translation_"+i).after( json.data.translations[0].translatedText );
                    },
                    function(){
                         console.log('error');
                    }
               )
     }    
     , false);
});