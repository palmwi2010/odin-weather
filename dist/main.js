(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>f});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),s=n(417),c=n.n(s),u=new URL(n(450),n.b),d=new URL(n(217),n.b),l=i()(a()),h=c()(u),m=c()(d);l.push([t.id,`* {\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --banner-text: #4d7c0f;\n    --card-colour: #cffafe;\n}\n\n@font-face {\n    font-family: 'Mud';\n    src: url(${h});\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 150px 1fr 75px;\n}\n\n.nav-banner {\n    background-image: url(${m});\n    height: 100%;\n    display: flex;\n}\n\n#logo {\n    font-size: 48px;\n    text-transform: uppercase;\n    font-weight: 700;\n    text-shadow: 2px 2px black;\n    text-align: center;\n    letter-spacing: 0.4ch;\n    color: white;\n    padding: 16px;\n    border-radius: 30px;\n    background-color: rgba(0,0,0,0.7);\n    width: min-content;\n    margin: auto;\n}\n\n.footer {\n    background-color: black;\n    display: grid;\n    align-items: center;\n}\n\n.footer p {\n    text-align: center;\n    color: white;\n    font-size: 16px;\n}\n\n/* Main styline */\n.main {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10%;\n    padding: 60px 10%;\n}\n\n.input-div, .output-div {\n    background-color: var(--card-colour);\n    border-radius: 40px;\n    padding: 24px;\n    position: relative;\n}\n\n.input-div form {\n    display: flex;\n    flex-direction: column;\n    gap:16px;\n}\n\nh1 {\n    margin-bottom: 20px;\n}\n\n.form-label, .location-descriptor {\n    font-size: 20px;\n}\n\n.location-form {\n    width: min(300px, 90%);\n    border: none;\n    outline: none;\n    padding: 8px 0.8ch;\n    font-size: 16px;\n    border-radius: 10px;\n}\n\n.btn {\n    background-color: #67e8f9;\n    border: none;\n    outline: none;\n    border-radius: 20px;\n    padding: 16px 20px;\n    width: fit-content;\n    font-size: 20px;\n    font-weight: 700;\n}\n\n.btn:hover {\n    background-color: #075985;\n    cursor: pointer;\n    color: white;\n}\n\n.input-img {\n    border-radius: 80px;\n    width: min(90%, 500px);\n    position: absolute;\n    right:20px;\n    bottom: 20px;\n}\n\n.feedback {\n    color: red;\n}\n\n/* Output */ \n.weather-img {\n    width: 300px;\n    flex-shrink: 1;\n}\n\n.weather-main {\n    margin-top: 20px;\n    display: flex;\n}\n\n.weather-left {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n}\n\n.category {\n    display: flex;\n    gap: 24px;\n}\n\n.cat-icon {\n    width: 80px;\n}\n\n.temp, .big {\n    font-size: 60px;\n    font-family: 'Mud';\n    min-width: fit-content;\n    text-wrap: nowrap;\n}`,""]);const f=l},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},217:(t,e,n)=>{t.exports=n.p+"f90218ee59f0442950f7.jpg"},450:(t,e,n)=>{t.exports=n.p+"40a033e5d8984fd076e7.otf"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),c=n.n(s),u=n(56),d=n.n(u),l=n(540),h=n.n(l),m=n(113),f=n.n(m),p=n(365),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=h(),a()(p.A,g),p.A&&p.A.locals&&p.A.locals;const w=n.p+"6f5fd51ee33318de129f.jpg",b=n.p+"e56cf42c953b5009d02d.svg",y=n.p+"ce58faeb3032af3497ba.svg",v=n.p+"1b628b0ec753e3df1e33.svg",x={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function M(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const k={date:M({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:M({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:M({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},C={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function S(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const P={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:S({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:S({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:S({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:S({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:S({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function E(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const N={ordinalNumber:(T={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(T.matchPattern);if(!n)return null;const r=n[0],a=t.match(T.parsePattern);if(!a)return null;let o=T.valueCallback?T.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:E({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:E({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:E({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:E({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:E({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var T;const W={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=x[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:k,formatRelative:(t,e,n,r)=>C[t],localize:P,match:N,options:{weekStartsOn:0,firstWeekContainsDate:1}};let D={};function $(){return D}Math.pow(10,8);const O=6048e5,Y=864e5;function F(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function j(t){const e=F(t);return e.setHours(0,0,0,0),e}function q(t){const e=F(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function H(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function L(t){const e=F(t);return function(t,e){const n=j(t),r=j(e),a=+n-q(n),o=+r-q(r);return Math.round((a-o)/Y)}(e,function(t){const e=F(t),n=H(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function A(t,e){const n=$(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=F(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function z(t){return A(t,{weekStartsOn:1})}function B(t){const e=F(t),n=e.getFullYear(),r=H(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=z(r),o=H(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=z(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function Q(t){const e=F(t),n=+z(e)-+function(t){const e=B(t),n=H(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),z(n)}(e);return Math.round(n/O)+1}function G(t,e){const n=F(t),r=n.getFullYear(),a=$(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=H(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=A(i,e),c=H(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=A(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function X(t,e){const n=F(t),r=+A(n,e)-+function(t,e){const n=$(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=G(t,e),o=H(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),A(o,e)}(n,e);return Math.round(r/O)+1}function I(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const U={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return I("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):I(n+1,2)},d:(t,e)=>I(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>I(t.getHours()%12||12,e.length),H:(t,e)=>I(t.getHours(),e.length),m:(t,e)=>I(t.getMinutes(),e.length),s:(t,e)=>I(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return I(Math.trunc(r*Math.pow(10,n-3)),e.length)}},R={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return U.y(t,e)},Y:function(t,e,n,r){const a=G(t,r),o=a>0?a:1-a;return"YY"===e?I(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):I(o,e.length)},R:function(t,e){return I(B(t),e.length)},u:function(t,e){return I(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return I(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return I(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return U.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return I(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=X(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):I(a,e.length)},I:function(t,e,n){const r=Q(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):I(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):U.d(t,e)},D:function(t,e,n){const r=L(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):I(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return I(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return I(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return I(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return U.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):U.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):I(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):I(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):U.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):U.s(t,e)},S:function(t,e){return U.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return _(r);case"XXXX":case"XX":return V(r);default:return V(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return _(r);case"xxxx":case"xx":return V(r);default:return V(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+J(r,":");default:return"GMT"+V(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+J(r,":");default:return"GMT"+V(r,":")}},t:function(t,e,n){return I(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return I(t.getTime(),e.length)}};function J(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+I(o,2)}function _(t,e){return t%60==0?(t>0?"-":"+")+I(Math.abs(t)/60,2):V(t,e)}function V(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+I(Math.trunc(r/60),2)+e+I(r%60,2)}const K=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Z=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},tt={p:Z,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return K(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",K(r,e)).replace("{{time}}",Z(a,e))}},et=/^D+$/,nt=/^Y+$/,rt=["D","DD","YY","YYYY"];function at(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=F(t);return!isNaN(Number(n))}const ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,it=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,st=/^'([^]*?)'?$/,ct=/''/g,ut=/[a-zA-Z]/;function dt(t){const e=t.match(st);return e?e[1].replace(ct,"'"):t}const lt=t=>{const e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("img"),a=document.createElement("p"),o=document.createElement("p");return e.className="category",r.className="cat-icon",a.className="big",o.className="big-label",r.src=t.src,r.alt=t.alt,r.title=t.title,a.textContent=t.big,o.textContent=t.label,n.appendChild(a),n.appendChild(o),e.appendChild(r),e.appendChild(n),e},ht=function(t){const e=document.createElement("div"),n=document.createElement("h1"),r=document.createElement("p"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("img");if(e.className="output-div",n.className="location-header",r.className="location-descriptor",a.className="weather-main",o.className="weather-left",i.className="weather-img",!t)return e;const s=t.datetime.substring(0,5);var c;n.textContent=`${t.address}`,r.textContent=`Current weather at ${s} ${c=t.date,function(t,e,n){const r=$(),a=n?.locale??r.locale??W,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=F(t);if(!at(s))throw new RangeError("Invalid time value");let c=e.match(it).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,tt[e])(t,a.formatLong):t})).join("").match(ot).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:dt(t)};if(R[e])return{isToken:!0,value:t};if(e.match(ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return nt.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return et.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),rt.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,R[o[0]])(s,o,a.localize,u)})).join("")}(c,"do LLLL")} in ${t.address}`,i.src=`https://basmilius.github.io/weather-icons/production/fill/all/${t.icon}.svg`;const u=function(t){const e=["N","NE","E","SE","S","SW","W","NW"],n=360/e.length;console.log(n);const r=Math.floor((t+22.5)/n);return e[r]?e[r]:"N"}(t.winddir),d={src:b,alt:"Temperature",title:"Temperature",big:`${t.temp}°C`,label:`Feels like: ${t.feelslike}°C`},l={src:y,alt:"Wind",title:"Wind",big:`${t.windspeed} mph`,label:`Direction: ${u}`},h={src:v,alt:"Humidity",title:"Humidity",big:`${t.humidity}%`,label:"Current humidity"};return o.appendChild(lt(d)),o.appendChild(lt(l)),o.appendChild(lt(h)),e.appendChild(n),e.appendChild(r),a.appendChild(o),a.appendChild(i),e.appendChild(a),e},mt=class{constructor(){this.API_KEY="52XZCWBLFZRJCBEUNVBP7BSBH",this.BASE_URL="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",this.keys=["conditions","datetime","temp","feelslike","winddir","windspeed","humidity","icon"]}async getWeather(t){const e=`${this.BASE_URL}${t}?unitGroup=metric&include=current&key=${this.API_KEY}&contentType=json`;try{const t=await fetch(e,{mode:"cors"});if(!t.ok)throw new Error(`HTTP error code ${t.status}`);const n=await t.json();return this.weatherParser(n)}catch(t){return console.log(t),!1}}weatherParser(t){const e=t.currentConditions,n=this.keys.reduce(((t,n)=>(Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]),t)),{});return console.log(t),n.address=t.resolvedAddress,n.date=t.days[0].datetime,n}};new class{constructor(){this.$container=document.body,this.init(),this.$form=this.$container.querySelector("form"),this.$input=this.$container.querySelector(".location-form"),this.$feedback=document.querySelector(".feedback"),this.$output,this.api=new mt,this.api.getWeather("London, US").then((t=>console.log(t)))}init(){this.$container.appendChild(function(){const t=document.createElement("div");t.className="nav-banner";const e=document.createElement("p");return e.id="logo",e.textContent="Weathify",t.appendChild(e),t}());const t=document.createElement("div");t.className="main",t.appendChild(function(){const t=document.createElement("div");t.className="input-div";const e=document.createElement("h1");e.className="main-header",e.textContent="Check the weather in your area!",t.appendChild(e);const n=document.createElement("form"),r=document.createElement("p"),a=document.createElement("input"),o=document.createElement("label"),i=document.createElement("button");r.className="form-label",r.textContent="Please enter a location and hit enter!",a.className="location-form",a.type="text",a.required=!0,o.className="feedback",i.className="btn submit",i.textContent="Submit",n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(i),t.appendChild(n);const s=document.createElement("img");return s.className="input-img",s.alt="Image of weather clouds",s.src=w,t}()),this.$output=ht(),t.appendChild(this.$output),this.$container.appendChild(t),this.$container.appendChild(function(){const t=document.createElement("div");t.className="footer";const e=document.createElement("p");return e.textContent="© palmwi2010 as part of the Odin Project",t.appendChild(e),t}()),document.querySelector("form").onsubmit=this.handleFormSubmit}renderNotFound(){this.$feedback.textContent="Location not found. Please try again"}clearNotFound(){this.$feedback.textContent=""}handleFormSubmit=t=>{t.preventDefault(),this.triggerSearch(this.$input.value)};async triggerSearch(t){const e=this.api.getWeather(t);e.then((t=>{t?(this.$output.innerHTML=ht(t).innerHTML,this.clearNotFound()):this.renderNotFound()})),e.catch((t=>console.log(t)))}}})();