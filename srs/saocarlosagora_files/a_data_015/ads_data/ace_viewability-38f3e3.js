(function(){
var f="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function h(){h=function(){};f.Symbol||(f.Symbol=k)}var k=function(){var a=0;return function(c){return"jscomp_symbol_"+(c||"")+a++}}();function l(){var a="IntersectionObserver";a=void 0===a?null:a;return new Promise(function(c,b){try{var d=document.createElement("script"),g=!1,e;if(a){var p=function(){window[a]?(void 0,c(null)):g?(e="ScriptUtils::loadScript() timed-out waiting for window['"+a+"'] to be exposed",void 0,b(e)):setTimeout(p,50)};p();setTimeout(function(){g=!0},5E3)}else"object"==typeof d.onload?(d.onload=c,d.onerror=function(){b("ScriptUtils::loadScript() Error loading script : https://playtime.tubemogul.com/ace/prod/polyfill/ace_io_polyfill-f88866.js")}):
c(null);d.src="https://playtime.tubemogul.com/ace/prod/polyfill/ace_io_polyfill-f88866.js";document.getElementsByTagName("head")[0].appendChild(d)}catch(t){b("ScriptUtils::loadScript() : Error caught loading https://playtime.tubemogul.com/ace/prod/polyfill/ace_io_polyfill-f88866.js")}})};h();var m=Symbol("Observer");h();var n=Symbol("Observer");function q(a){if(a!==n)throw"Observer is a singleton: Cannot construct directly. Use 'Observer.instance'";this.intersectionRatio=0}function r(){for(var a=window;a!==window.top;)try{a=a.parent,q.a.intersectionRatio=a.document.href?0:.1}catch(c){return!0}return!1}
q.prototype.b=function(a){this.target=a;void 0;this.a=new window.IntersectionObserver(this.g.bind(this),{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});this.a.observe(this.target)};q.prototype.c=function(){this.a.unobserve(this.target)};q.prototype.g=function(a){var c=this;0==a.length?this.intersectionRatio=0:a.forEach(function(a){c.intersectionRatio=a.intersectionRatio})};q.prototype.f=function(){return this.intersectionRatio};
f.Object.defineProperties(q,{a:{configurable:!0,enumerable:!0,get:function(){this[m]||(this[m]=new q(n));return this[m]}}});var u=window.BEACON_SIZE?window.BEACON_SIZE:9,v=window.BEACON_ZINDEX?window.BEACON_ZINDEX:-9999,w=window.BEACON_OPACITY?window.BEACON_OPACITY:.01;h();var x=Symbol("Beacons");h();var y=Symbol("Beacons");function z(a){if(a!==y)throw"Beacons is a singleton: Cannot construct directly. Use 'Observer.instance'";this.X=((new Date).getTime()+""+Math.floor(1E7*Math.random())).substr(0,16)}
z.prototype.Y=function(a,c){var b=this;this.f=a;this.B=c;this.g=[];this.a=Array(14);this.$=0;this.i=1;this.o=2;this.u=3;this.l=4;this.m=5;this.O=6;this.P=7;this.G=8;this.H=9;this.J=10;this.L=11;this.D=12;this.F=13;A(this,!0);return new Promise(function(a,c){for(var e=[],d=0;d<b.h.length;d++){var g=new B(b.f,d,b.X,b.h[d],b.ba.bind(b));b.g.push(g);e.push(C(g))}Promise.all(e).then(b.S.bind(b)).then(a).catch(c)})};
function A(a,c){c=void 0===c?!1:c;a.R=a.f.getBoundingClientRect();a.b=a.R.width;a.c=a.R.height;var b=Math.sqrt(2),d=a.b/(1+b),g=a.c/(1+b),e=a.b/b;b=a.c/b;a.h=[{name:"CONTROL",left:c?a.b/2:-1E4,top:c?a.b/2:-1E4},{name:"CENTER",left:(a.b-u)/2,top:(a.c-u)/2},{name:"OUTER_TOP_LEFT",left:1,top:1},{name:"OUTER_TOP_RIGHT",left:a.b-u-1,top:1},{name:"OUTER_BOTTOM_LEFT",left:1,top:a.c-u-1},{name:"OUTER_BOTTOM_RIGHT",left:a.b-u-1,top:a.c-u-1},{name:"MIDDLE_TOP_LEFT",left:(a.b-e-u)/2,top:(a.c-b-u)/2},{name:"MIDDLE_TOP_RIGHT",
left:(a.b+e-u)/2,top:(a.c-b-u)/2},{name:"MIDDLE_BOTTOM_LEFT",left:(a.b-e-u)/2,top:(a.c+b-u)/2},{name:"MIDDLE_BOTTOM_RIGHT",left:(a.b+e-u)/2,top:(a.c+b-u)/2},{name:"INNER_TOP_LEFT",left:(a.b-d-u)/2,top:(a.c-g-u)/2},{name:"INNER_TOP_RIGHT",left:(a.b+d-u)/2,top:(a.c-g-u)/2},{name:"INNER_BOTTOM_LEFT",left:(a.b-d-u)/2,top:(a.c+g-u)/2},{name:"INNER_BOTTOM_RIGHT",left:(a.b+d-u)/2,top:(a.c+g-u)/2}]}
z.prototype.S=function(){A(this);for(var a=0;a<this.h.length;a++){var c=this.g[a].s,b=this.h[a];c.style.top=b.top+"px";c.style.left=b.left+"px"}};z.prototype.ba=function(a){switch(a.type){case "ready":this.g[a.index].resolve();this.a[a.index]=a.state;break;case "inview":this.a[a.index]=!0;break;case "outofview":this.a[a.index]=!1}};
z.prototype.aa=function(){var a=0,c=0,b=0,d=0;if(this.a[this.$])return"unmeasurable";for(var g=this.g.length-1,e=1;e<this.a.length;e++)if(this.a[e])switch(a++,e){case this.o:case this.u:case this.l:case this.m:c++;break;case this.O:case this.P:case this.G:case this.H:b++;break;case this.J:case this.L:case this.D:case this.F:d++}if(a===g)b="viewable";else if(100==this.B)b="unviewable";else{a:{d=[[this.o,this.O,this.J,this.i,this.F,this.H,this.m],[this.u,this.P,this.L,this.i,this.D,this.G,this.l]];
for(g=0;2>g;g++){e=d[g];for(var p=c=0;p<e.length;p++)if(a=this.a[e[p]],!0===a&&0==c)c++;else if(!1===a&&1==c)c++;else if(!0===a&&2==c){a=!0;break a}}a=!1}b=a?"unmeasurable":!0===this.a[this.i]&&(!0===this.a[this.o]&&!0===this.a[this.u]||!0===this.a[this.o]&&!0===this.a[this.l]||!0===this.a[this.u]&&!0===this.a[this.m]||!0===this.a[this.l]&&!0===this.a[this.m])||!0===this.a[this.i]&&4==b?"viewable":"unviewable"}return b};z.prototype.Z=function(){this.g.forEach(function(a){clearInterval(a.da);a.s.parentNode.removeChild(a.s)})};
f.Object.defineProperties(z,{a:{configurable:!0,enumerable:!0,get:function(){this[x]||(this[x]=new z(y));return this[x]}}});function B(a,c,b,d,g){this.g=a;this.index=c;this.i="frame_"+c+b;this.a="beaconProcess_"+c+b;this.f=d;this.resolve=null;this.b="number"===typeof window.mozPaintCount;this.c=g;this.s=document.createElement("iframe")}
function C(a){var c="";c=a.b?"parent.window."+a.a+"()":"window.frameCount = 0;var render = function(timestamp){   window.frameCount++;    requestAnimationFrame(render.bind(this));};render();parent.window."+a.a+"()";a.h="<html><head></head><body onload='"+c+"'></body></html>";D(a);return new Promise(function(b){a.resolve=b;a.g.appendChild(a.s);a.s.id=a.i;a.s.style.cssText="position:absolute;border:none;z-index:"+v+";opacity:"+w+";width:"+u+"px;height:"+u+"px;top:"+a.f.top+"px;left:"+a.f.left+"px;";
a.s.contentWindow.document.open().write(a.h);a.s.contentWindow.document.close()})}
function D(a){window[a.a]=function(){var c=a.s.contentWindow,b=a.b?0:4,d=a.b?"mozPaintCount":"frameCount",g=!1,e=!1,p=c[d];a.da=setInterval(function(){var t=c[d];!e&&t-p>b?(e=!0,a.c({type:"inview",index:a.index},"*")):e&&t-p<=b&&(e=!1,a.c({type:"outofview",index:a.index}));p=t;t=(16+Math.round(52*Math.random())).toString(16);c.document.body.style.background=!0===e?"#"+t+"ff"+t:"#ff"+t+t;!1===g&&(a.c({type:"ready",index:a.index,state:e}),g=!0)},200)}};h();var E=Symbol("ViewabilityModel");h();var F=Symbol("ViewabilityModel");function G(a){if(a!==F)throw"ViewabilityModel is a singleton: Cannot construct directly. Use 'ViewabilityModel.instance'";this.ca=25;this.ha=1;this.B=this.V=-1;this.a=G.a.MRC;this.W=""}G.prototype.b=function(a){this.j=a.viewabilityStandard;a.video||(this.j.v=1);this.W=a.vimpPixelBase;this.B=this.j.I;null!==this.j.v&&(this.V=Math.ceil(1E3*this.j.v/this.j.C));return H(this,a.targetElement)};
f.Object.defineProperties(G.prototype,{j:{configurable:!0,enumerable:!0,set:function(a){a&&a in G.a&&(this.a=G.a[a])},get:function(){return this.a}},I:{configurable:!0,enumerable:!0,get:function(){return this.j.I}},N:{configurable:!0,enumerable:!0,get:function(){return this.j.N}},C:{configurable:!0,enumerable:!0,get:function(){return this.j.C}},K:{configurable:!0,enumerable:!0,get:function(){return this.j.K}},v:{configurable:!0,enumerable:!0,get:function(){return this.j.v}},M:{configurable:!0,enumerable:!0,
get:function(){return this.j.M}}});f.Object.defineProperties(G,{b:{configurable:!0,enumerable:!0,get:function(){this[E]||(this[E]=new G(F));return this[E]}},a:{configurable:!0,enumerable:!0,get:function(){return{GROUPM:{I:100,N:!0,C:200,K:!1,v:null,M:50},MRC:{I:50,N:!1,C:200,K:!0,v:2,M:null}}}},f:{configurable:!0,enumerable:!0,get:function(){return"MRC"}},c:{configurable:!0,enumerable:!0,get:function(){return"GROUPM"}}});h();var I=Symbol("ViewabilityControl");h();var J=Symbol("ViewabilityControl");
function K(a){if(a!==J)throw"ViewabilityControl is a singleton: Cannot construct directly. Use 'ViewabilityControl.instance'";this.a="NONE";this.m=NaN;this.L=this.D=0;this.h=this.i=this.o=!1;this.g=0;this.b="err";this.f=this.l=null;window.addEventListener("resize",this.F.bind(this),!1)}function H(a,c){var b=K.a;return new Promise(function(d){b.c=a;b.f=c;L(b).then(function(a){b.a=a;d(null)}).catch(function(){b.a=M.c;d("Unmeasurable")})})}
function L(a){return new Promise(function(c){("function"===typeof window.IntersectionObserver?Promise.resolve():r()?Promise.reject(null):l()).then(c.bind(null,M.b)).catch(function(){var b=N.h;b.ea&&"number"===typeof window.mozPaintCount||b.fa&&"function"===typeof window.requestAnimationFrame?z.a.Y.call(z.a,a.f,a.c.B).then(c.bind(null,M.a)).catch(c.bind(null,M.c)):c.call(null,M.c)})})}K.prototype.F=function(){switch(this.a){case M.a:z.a.S.call(z.a)}};
function O(a){document.fullscreenElement==a.f&&(a.l={T:a.a,U:a.g},a.a=M.f);["webkitbeginfullscreen","webkitendfullscreen","webkitfullscreenchange","mozfullscreenchange","fullscreenchange"].forEach(function(c){a.f.addEventListener(c,function(){document.fullscreenElement==a.f?(a.l={T:a.a,U:a.g},a.a=M.f):(a.a=a.l.T,a.g=a.l.U,a.l=null)})})}
function P(a){var c;if(!(c=document.hidden)){var b=window.getComputedStyle(a.f);c=b.getPropertyValue("visibility");b=b.getPropertyValue("display");c=!("hidden"!==c&&"none"!==b)}if(c)return a.b="f";switch(a.a){case M.f:return a.i=!0,a.h=!1,a.g=100,a.b="t";case M.b:return a.g=Math.round(100*q.a.f.call(q.a)),a.i=a.g>=a.c.B,a.h=!1,a.b=a.i?"t":"f";case M.a:return c=z.a.aa.call(z.a),a.i="viewable"===c,a.h="unmeasurable"===c,a.g=0,a.b=a.i?"t":a.h?"err":"f";case M.c:return a.h=!0,a.b="ifr"}return"err"}
K.prototype.J=function(){var a=P(this);"t"==a?++this.D>=this.c.V&&(this.o||this.u.call(this,this.b)):"f"==a?this.c.j.K&&(this.D=0):++this.L>this.c.ca&&(this.o||this.u.call(this,this.b))};K.prototype.u=function(a){var c=this.c.W;if("t:err:ifr".includes(a)){this.o=!0;Q(this);var b={vwbl:this.b,vver:this.c.ha,vpct:this.g,ifr:N.m!==N.a};b.vwbl=a;for(var d in b)(a=b[d])&&(c+="&"+d+"="+a);(new Image).src=c}else void 0};
K.prototype.G=function(){switch(this.a){case M.b:q.a.b.call(q.a,this.f)}Q(this);this.m=setInterval(this.J.bind(this),this.c.j.C);O(this)};K.prototype.H=function(){window.removeEventListener("resize",this.F);Q(this);switch(this.a){case M.b:q.a.a&&q.a.c.call(q.a);break;case M.a:z.a.Z.call(z.a)}};function Q(a){isNaN(a.m)||(clearInterval(a.m),a.m=NaN)}f.Object.defineProperties(K,{a:{configurable:!0,enumerable:!0,get:function(){this[I]||(this[I]=new K(J));return this[I]}}});function M(){}
f.Object.defineProperties(M,{b:{configurable:!0,enumerable:!0,get:function(){return"INTERSECTION_OBSERVER"}},a:{configurable:!0,enumerable:!0,get:function(){return"IFRAME_BEACONS"}},f:{configurable:!0,enumerable:!0,get:function(){return"FULL_SCREEN_OVERRIDE"}},c:{configurable:!0,enumerable:!0,get:function(){return"NONE"}}});function N(){}
f.Object.defineProperties(N,{b:{configurable:!0,enumerable:!0,get:function(){return"CH"}},f:{configurable:!0,enumerable:!0,get:function(){return"FF"}},l:{configurable:!0,enumerable:!0,get:function(){return"SF"}},g:{configurable:!0,enumerable:!0,get:function(){return"IE"}},i:{configurable:!0,enumerable:!0,get:function(){return"OP"}},c:{configurable:!0,enumerable:!0,get:function(){return"ME"}},a:{configurable:!0,enumerable:!0,get:function(){return"F0"}},o:{configurable:!0,enumerable:!0,get:function(){return"FS"}},
u:{configurable:!0,enumerable:!0,get:function(){return"FX"}},m:{configurable:!0,enumerable:!0,get:function(){try{if(window.top==window)return N.a;if(window.top.document.domain==window.document.domain)return N.o}catch(a){}return N.u}},h:{configurable:!0,enumerable:!0,get:function(){a:{for(var a=[{w:"Edge",A:"Edge.([0-9]+)",name:"MicroSoftEdge",code:"ME"},{w:"Chrome",A:"Chrome.([0-9]+)",name:"chrome",code:"CH"},{ga:navigator.vendor,w:"Apple",A:"(?:Version|Safari).([1-9]?\\d)[^0-9]",name:"safari",code:"SF"},
{w:"Opera",A:"Version.([0-9]+)",name:"opera",code:"OP"},{w:"Firefox",A:"Firefox.([0-9]+)",name:"firefox",code:"FF"},{w:"MSIE|Trident.7",A:"(?:MSIE| rv).([0-9]+)",name:"internet explorer",code:"IE"}],c=0;c<a.length;c++)if((new RegExp(a[c].w)).test(a[c].ga||navigator.userAgent)){var b=new RegExp(".*"+a[c].A+".*");a={name:a[c].name,code:a[c].code};a.version=navigator.userAgent.replace(b,"$1");b=a;break a}b=void 0}b=b||{name:"Unknown",code:"??",version:0};b.ia=b.code===N.b;b.fa=b.code===N.l;b.ea=b.code===
N.f;b.ka=b.code===N.g;b.la=b.code===N.i;b.ja=b.code===N.c;return b}}});window.AceViewability=function(){return{init:G.b.b.bind(G.b),start:K.a.G.bind(K.a),stop:K.a.H.bind(K.a)}};
}).call(this)
