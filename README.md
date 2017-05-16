# oxpecker
oxpecker adds translation button on Mastodon with bookmarklet.

## demo for Javascript Birthday!
followingcode runs only [developer page](https://ostatus.taiyolab.com/@t_trace).
I boost father of Javascript, Brendan Eich's toots today (15th April).

copy following code and paste on location of your browser.
```
javascript:(function()%7B(function(c)%7Bvar%20b=%7B%7D;function%20a(e)%7Bif(b%5Be%5D)%7Breturn%20b%5Be%5D.exports%7Dvar%20d=b%5Be%5D=%7Bi:e,l:false,exports:%7B%7D%7D;c%5Be%5D.call(d.exports,d,d.exports,a);d.l=true;return%20d.exports%7Da.m=c;a.c=b;a.i=function(a)%7Breturn%20a%7D;a.d=function(b,c,d)%7Bif(!a.o(b,c))%7BObject.defineProperty(b,c,%7Bconfigurable:false,enumerable:true,get:d%7D)%7D%7D;a.n=function(b)%7Bvar%20c=b%26%26b.__esModule%3Ffunction%20a()%7Breturn%20b%5B'default'%5D%7D:function%20a()%7Breturn%20b%7D;a.d(c,'a',c);return%20c%7D;a.o=function(a,b)%7Breturn%20Object.prototype.hasOwnProperty.call(a,b)%7D;a.p='';return%20a(a.s=2)%7D(%5Bfunction(a,b)%7Ba.exports=%7Bapi_key:'AIzaSyCzYjoqZrHUUUc4A9IKcZdbnaqecDB-9ak',ox_target_language:'ja'%7D%7D,function(a,b)%7Ba.exports=function()%7Bvar%20a=document.createElement('A');a.innerHTML='文/A';a.style.cssText='background-color:%23606984;color:%23393f4f;font-weight:bold;cursor:pointer;line-height:1.25em;padding:0.3em;border-radius:0.5em;margin-left:%2018px;%20float:%20right;%20position:%20relative;%20top:%20-24px;font-size:0.75em';return%20a%7D%7D,function(i,j,d)%7Bvar%20a=d(0);var%20c='https://translation.googleapis.com/language/translate/v2%3Fkey='+a.api_key;var%20g=a.ox_target_language;var%20h=(window.navigator.languages%26%26window.navigator.languages%5B0%5D).split('-')%5B0%5D;var%20b=$('.status__content').not($('.ox-flagged')).not($('.status.muted%20.status__content'));var%20f=d(1);var%20e=f();b.each(function(j)%7Bvar%20a=b%5Bj%5D;var%20h=a.textContent;var%20k='init';var%20f=e.cloneNode(true);var%20d=document.createElement('DIV');d.id='translation_'+Math.round(Math.random()*1e3);var%20i=d.id;a.appendChild(d);a.classList.add('ox-flagged');a.parentNode.appendChild(f);f.addEventListener('click',function()%7Bconsole.log('started');$.ajax(%7Btype:'GET',dataType:'jsonp',url:c,data:%7Bq:h,target:g%7D%7D).then(function(a)%7Bconsole.log(a.data.translations%5B0%5D.translatedText);$('%23'+i).after(a.data.translations%5B0%5D.translatedText)%7D,function()%7Bconsole.log('error')%7D)%7D,false)%7D)%7D%5D))%7D())
```

## Build
Duplicate `oxpecker.config.sample.js` as `oxpecker.config.js` and write Google Translation Key.

```
$ webpack && bookmarkletter bookmark.js
```

 and copy output on your browser.

## Requirement
- Webpack https://www.npmjs.com/package/webpack
- Google Translation API Key
to run this bookmarklet, you need Google Translation API key.
https://cloud.google.com/translate/
- bookmarkletter https://www.npmjs.com/package/bookmarkletter

## known issues
oxpecker lacks many feature, current code is just only for working confirmation.
Developer is going to implement following features.
- language switcher and keeping settings
- auto adding translation button
- supporting another translation API (Bing and Yandex)
- develop easy implemantation on Mastodon instance without bookmarklet.
