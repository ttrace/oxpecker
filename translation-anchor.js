module.exports = function(){
     var translation_anchor = document.createElement("DIV");
          translation_anchor.className = "ox-translation-anchor";
          translation_anchor.id = "translation_" + Math.round( Math.random()*1000 );
     return translation_anchor;
     }
