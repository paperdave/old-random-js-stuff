(function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,b.Input=a()}})(function(){function a(a){var b=a?"Pressed":"Released";return function(c){if(!(c.ctrlKey&&c.shiftKey&&"i"===c.key.toLowerCase())&&!(c.ctrlKey&&"r"===c.key.toLowerCase())){c.preventDefault();var d=c.code.startsWith("Key")?c.code.slice(-1).toLowerCase():c.code;f[d]=a,f[d+b]=a,g.add(d+b),1<c.key.length&&c.code.startsWith(c.key)&&(f[c.key]=a,f[c.key+b]=a,g.add(c.key+b))}}}function b(a){var b=a?"Pressed":"Released";return function(c){var d=h[c.button];d&&(i[d]=a,i[d+b]=!0,j.add(d+b))}}function c(){g.forEach(function(a){return f[a]=void 0}),g.clear(),j.forEach(function(a){return i[a]=void 0}),j.clear(),i.scrollX=0,i.scrollY=0}function d(){e.keyboard=f={},e.mouse=i={x:i.x,y:i.y,scrollX:0,scrollY:0}}var e={},f={};e.keyboard=f;var g=new Set;window.addEventListener("keydown",a(!0)),window.addEventListener("keyup",a(void 0));var h={0:"left",2:"right",1:"middle",3:"back",4:"forward"},i={x:0,y:0};e.mouse=i;var j=new Set;window.addEventListener("mousemove",function(a){i.x=a.x,i.y=a.y});var k={0:1/53,1:17.666/53,2:800/53};return window.addEventListener("mousedown",b(!0)),window.addEventListener("mouseup",b(void 0)),window.addEventListener("wheel",function(a){a.preventDefault();var b=k[a.deltaMode];i.scrollX+=a.deltaX*b,i.scrollY+=a.deltaY*b},{passive:!1}),window.addEventListener("contextmenu",function(a){return a.preventDefault()}),e.updateInputManager=c,window.addEventListener("blur",d),d(),e});
