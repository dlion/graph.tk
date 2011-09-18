/*!
 * jQuery JavaScript Library v1.6.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu May 12 15:04:36 2011 -0400
 */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!cj[a]){var b=f("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)}cj[a]=d}return cj[a]}function cu(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function ct(){cq=b}function cs(){setTimeout(ct,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bF.test(a)?d(a,e):b_(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bD(a,b,c){var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return e;f.each(d,function(){c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0});return e}function bn(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bm(a){f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)}function bl(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bk(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bj(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bi(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bh(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(S.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function W(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function O(a,b){return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")}function N(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function L(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function F(){return!0}function E(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function H(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(H,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:C,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!y){y=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&H()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):G[A.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===b||B.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:E?function(a){return a==null?"":E.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(F)return F.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=D.call(arguments,2),g=function(){return a.apply(c,f.concat(D.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){G["[object "+b+"]"]=b.toLowerCase()}),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){c.removeEventListener("DOMContentLoaded",z,!1),e.ready()}:c.attachEvent&&(z=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;try{delete a.test}catch(s){j.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function b(){j.noCloneEvent=!1,a.detachEvent("onclick",b)}),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{marginRight:0}).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);if(a.attachEvent)for(q in{submit:1,change:1,focusin:1})p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]=="function"),j[q+"Bubbles"]=r;return j}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]:i}},removeData:function(b,c,d){if(!!f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}if(d){delete h[i][e];if(!l(h[i]))return}var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.addClass(a.call(this,b,c.attr("class")||""))});if(a&&typeof a=="string"){var b=(a||"").split(o);for(var c=0,d=this.length;c<d;c++){var e=this[c];if(e.nodeType===1)if(!e.className)e.className=a;else{var g=" "+e.className+" ",h=e.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);e.className=f.trim(h)}}}return this},removeClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a=="string"||a===b){var c=(a||"").split(o);for(var d=0,e=this.length;d<e;d++){var g=this[d];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(n," ");for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){var d=f(this);d.toggleClass(a.call(this,c,d.attr("class"),b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;return(e.value||"").replace(p,"")}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j)return i.get(a,c);h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);c=i&&f.propFix[c]||c,h=f.propHooks[c];return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return a[f.propFix[c]||c]?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));return c}},f.attrHooks.value={get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return a.value},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){return a.replace(C,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=E;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=E);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem
)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,O(a.origType,a.selector),f.extend({},a,{handler:N,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,O(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=F;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=F;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=F,this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};var G=function(a){var b=a.relatedTarget;a.type=a.data;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&f.event.handle.apply(this,arguments)}catch(d){}},H=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?H:G,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?H:G)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var I,J=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},K=function(c){var d=c.target,e,g;if(!!z.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=J(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:K,beforedeactivate:K,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",J(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return z.test(this.nodeName)}},I=f.event.special.change.filters,I.focus=I.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var M={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||E,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+O(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(X(this,a,!1),"not",a)},filter:function(a){return this.pushStack(X(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=U.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=T.call(arguments);P.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;if(typeof a=="string"&&!bc.test(a)&&(f.support.leadingWhitespace||!Z.test(a))&&!bg[(_.exec(a)||["",""])[1].toLowerCase()]){a=a.replace($,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bn)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bj(a,d),e=bk(a),g=bk(d);for(h=0;e[h];++h)bj(e[h],g[h])}if(b){bi(a,d);if(c){e=bk(a),g=bk(d);for(h=0;e[h];++h)bi(e[h],g[h])}}return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||
b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bb.test(k))k=b.createTextNode(k);else{k=k.replace($,"<$1></$2>");var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){return b.toUpperCase()};f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bq,bC)}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){e=bD(a,b,d)});if(e<=0){e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));if(e!=null)return e===""||e==="auto"?"0px":e}if(e<0||e==null){e=a.style[b];return e===""||e==="auto"?"0px":e}return typeof e=="string"?e:e+"px"}},set:function(a,b){if(!bs.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bo.test(g)?g.replace(bo,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){var d,e,g;c=c.replace(br,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;try{bW=e.href}catch(bY){bW=c.createElement("a"),bW.href="",bW=bW.href}bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bT)return bT.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bG,"\r\n")}}):{name:b.name,value:c.replace(bG,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bW,isLocal:bK.test(bX[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bZ(bU),ajaxTransport:bZ(bV),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?ca(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}if(a===304)c="notmodified",o=!0;else try{r=cb(d,w),c="success",o=!0}catch(z){c="parsererror",u=z}}else{u=c;if(!c||a)c="error",a<0&&(a=0)}v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bX[1]&&r[2]==bX[2]&&(r[3]||(r[1]==="http:"?80:443))==(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bR,"$1_="+x);d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bV,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){status<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}var d=this,e=f.fx,g;this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){co&&(cr(g),e.tick())},cr(g)):co=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){return this[0]?parseFloat(f.css(this[0],d,"padding")):null},f.fn["outer"+c]=function(a){return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);/*! 
 *  Math JavaScript Library v2.0.0
 *  https://github.com/aantthony/javascript-cas
 *  
 *  Copyright 2011 Anthony Foster. All rights reserved.
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*

(function (window, undefined) {
*/
	window.f = {};
	function O(n, v){
		f[v]=f[v]?f[v]+1:1;
	}
	"use strict";
	_M = window.M;

	Array.prototype.toString=null; // Trigger errors for debugging.

Array.prototype.setType=function(type){
	this.type=type;
	return this;
};
Array.prototype.clone=function(){
	return Array.prototype.slice.apply(this).setType(this.type);
};



function I(){
	return this.constructor(this);
}
function _false(){
	return false;
}
function _true(){
	return true;
}
Number.prototype.eval=
Number.prototype.simplify=
String.prototype.eval=
String.prototype.simplify=
Boolean.prototype.simplify=
Boolean.prototype.toLatex=
Number.prototype.clone=
Boolean.prototype.clone=
String.prototype.clone=
I;
Number.prototype.requiresParentheses=
String.prototype.requiresParentheses=
Boolean.prototype.requiresParentheses=
_false;// Or should it be true for strings, parens = ", and "
Number.prototype.impliedBy=
String.prototype.impliedBy=
Boolean.prototype.impliedBy=
_true;
//Information for the shunting parser to use:
var languages = {};	
var language = "javascript+math";
var left,right;
var L = left = 0;
var R = right = 1;
/*
 Language spec columns in order of _increasing precedence_:
 * operator string representation(s). These are different operators, but share all properties.
 * Associativity
 * Operand count (Must be a fixed number) 
 * (TODO??) commute group? - or should this be derived?
 * (TODO?) associative? commutative?  - Should be calculated?
 * (TODO?) Identity?
*/


languages[language] = [
	[";"],			/*L / R makes no difference???!??!? */
	[","],
	[["=","+=","-=","*=","/=","%=","&=","^=","|="],R],
	[["?",":"],R,2],
	[["∨"]],
	[["&&"]],
	[["|"]],
	[["^"]],//XOR
	[["&"]],
	[["==","≠","!==","==="]],
	[["<","<=",">",">="],L],
	[[">>","<<"]],
	["±",R,2],
	[["+","-"]],
	[["∫","∑"],R,1],
	[["*","%"]],
	[["@+","@-","@±"],R,1], //unary plus/minus
	[["¬"],L,1],
	["∘",R,2],
	[["/"]],
	[["^"]],//e**x
	["!",L,1],
	[["~"],R,1], //bitwise negation
	[["++","++",".","->"],L,1],
	[["::"]],
	[["_"],L,2],
	["var",R,1],
	["break",R,0],
	["throw",R,1],
	["'",L,1],
	["√",R,1],
	["#",R,1],	/*anonymous function*/
];



var operators={};

var op_precedence=0;
function op(v,assoc,arg_c){
	//Register an operator
	var memsave=[assoc,op_precedence++,arg_c];
	if(typeof v==="object") {
		for(var i=0;i<v.length;i++){
			operators[v[i]]=memsave;
		}
	}else{
		operators[v]=memsave;
	}
}

languages[language||"jsMath"].forEach(function(o) {
	op(o[0],o[1]||L,(o[2]===undefined)?2:o[2]);
});


function precedence(v){
	if(!operators[v]){
		throw("Precedence of "+v+" not known!");
	}
	return operators[v][1];
}

function postfix(o){
	var op=operators[o];
	return op[0]==0 && op[2]==1;
}
function unary(o){
	var unary_secondarys=["+","-","±"];
	return (unary_secondarys.indexOf(o)!=-1)?("@"+o):false;
}



function inverse(o,b,d,side){
	var SideError = "Side must be specified for noncommutative operations!";
	console.log("b=",b);
	b=b.clone();
	d=d.clone();
	// d (old) = [A, B], where b = A if L, and b = B if R.
	switch(o){
		case "+":
			return [d, b].setType("-");
		case "-":
			if(side===L){
				// d = b - ?
				// ? = b - d
				return [b, d].setType("-");
			}else if(side===R){
				// d = ? - b
				// ? = d + b
				return [d, b].setType("+");
			}else{
				throw(SideError);
			}
		case "/":
			if(side===L){
				// d = b / ?
				// d * ? = b / ? * ?
				// ? = (1/d) b
				
				//TODO: THIS ASSUMES A*B = B*A
				// ? = b/d
				if(d===0){
					return false; //DIVISION BY ZERO
				}
				return [b, d].setType("/");
			}else if(side===R){
				// d = ? / b
				// d * b = ?
				return [d, b].setType("*");
			}else{
				throw(SideError);
			}
		case "*":
			// d = b * ?
			// 1/b * d = ?
			
			//TODO: THIS ASSUMES A*B = B*A
			// ? = d / b
			if(b===0){
				return false;
			}
			return [d, b].setType("/");
		case "^":
			if(side===L){
				// d = b ^ ?
				// d = e ^ (? * log b)
				// log(d) = ? * log b
				// log(d) / log(b) = ?
				//Log should really be an operator
				return [["log",d].setType("∘"), ["log",b].setType("∘")].setType("/");
			}else if(side===R){
				// d = ? ^ b
				// d ^ (1/b) = ?^(b/b)
				// d ^ (1/b) = ?
				if(b===0){
					return false;
				}
				return [d, [1, b].setType("/")].setType("^");
			}else{
				throw(SideError);
			}
		default:
			return;
	}
	
	/*
	//Commutative operators:
	var os={
		"+":"-",
		"*":"/",
		"^":{"L":["^","/"], "R":["log", ]},
		"-":{"L": "-", "R":"+"},
		"/":{"L": "/", "R":"*"},
		"&&":["∨","¬","&&","$0"],
		
		"∘":["∘","/"],//TODO: NEEDS DEBUG CHECK: check this junk
		"matrix multiplication":I
	};
	if(os[o]){
		var c=b.clone();
		var op = os[o];
		if(typeof op==="object" && !op.length){
			if(side===R){
				op = op.R;
			}else if(side===L){
				op = op.L;
			}else{
				throw("Side must be specified for non-commutative operations.");
			}
		}
		if(typeof op==="object"){
			for (var i = op.length - 1; i > 0; i--){
				c=[identity(op[i]),c].setType(op[i]);
				if(!c.valid()){
					return false;
				}
			};	
		}
		c=[undefined,c].setType(os[o]);
		
		if(!c.valid()){
			return false;
		}
		
		return c;
		
		
	}*/
	
}



function identity(o){
	var os={
		"+":0,
		"*":1,
		"^":0,
		
		"/":1, //Implied by inverse?()
		"-":0,
		"&&":true,
		"∨":false,
		
		"%":Infinity, //Bounds of real numbers
		"^":1,
		"matrix multiplication":I
		
		
	};
	if(os[o]!==undefined){
		return os[o];
	}
	return undefined;
}



//Commute?
function commutative(o){
	return ["*","+","="].indexOf(o)!=-1;
}
window.commutative=commutative;
//Is the operator o left-distributive over operator p?
function distributive(o, p){
	var os={
		"*":["+","-",",",/*,"∨" messy*/],
		"/":["+","-"],
		"^":["*"],
		"cross-product":"+",
		"matrix-multiplication":"+",
		"set-union":"intersect",
		"∨":"&&",
		"conjugtion":["disjunction", "exclusive disjunction"],
		"max":"min",
		"gcd":"lcm",
		"D":["+","-",","],
		"+":["max","min",","]
	};
	
	
	//TODO: (if better/faster): use fact (?) that (* distributes over '+' (which distributes over ',')) => (* distributes over ',')
	// This doesn't hold for the binomial theorem.
	if(os[o]){
		if(os[o]===p || (os[o].indexOf && os[o].indexOf(p)!=-1)){
			return true;
		}
	}
	return false;
}




//n-ary operators: Good for factorising?? For converting +(1 +(2 3)) to +(1 2 3)
function associative(o){
	var able=["*","+","=","∘"];
	//Is this a good idea????
	if(able.indexOf(o)!=-1){
		return true;
	}
	return false;
}




Array.prototype.requiresParentheses=function(o){
	return precedence(o)>precedence(this.type) || 
	(o=="^" && this.type==="^");
};
Number.prototype.requiresParentheses=function(o){
	if(o==="^" && Number(this)<0){
		return true;
	}
	return false;
};
String.prototype.requiresParentheses=
Boolean.prototype.requiresParentheses=
_false;// Or should it be true for strings, parens = ", and "
/*
TODO:
 fix:
	' sin(x)' => ∘s∘i∘n∘(x)


*/

var msg={
	"latexParse":"Unable to parse LaTeX string",
	"parenMismatch":"There are mismatched parentheses"
};

var parse = (function (language) {
	O(1, "parse - build");
	//Begin parse building space.
	//This context will be accessible to parse()
	var types = {
		number: 1,
		operator: 2,
		paren: 3,
		variable: 4
	};
	
	var names = ["none","num","op","paren","var"];

	

	//Operator characters
	//TODO: calculate programmatically
	
	var ochars=":>-.+~!^%/*<=&|?,;±∘'∫∑∫√¬_$";
	
	//TODO: Allow 1e+2 format
	var nummustbe="1234567890.";
	var parenmustbe="([{}\"])";
	var varcannotbe=ochars+parenmustbe+nummustbe;
	var match=[0,
		function(e){
			return !isNaN(e);
		},
		function(e){
			if(operators[e]){
				return true;
			}
			return false;
			//return ochars.indexOf(e)!==-1;
		},
		function(e){
			return e.length === 1 && parenmustbe.indexOf(e)!=-1;
		},
		function(e){
			//Assumtions: It will only be ONE character ahead of a valid var.
			
			/*
			Not desired, it could get messy. Always use \\varname instead.
			if(M.global[e]!==undefined){
				return true;
			}
			*/
			
			if(e.length === 1 || e[0]==="\\"){
				
				//Given: It will only be ONE character ahead of a valid var.
				
				return varcannotbe.indexOf(e[e.length-1])==-1;
			}
			return false;
		}
	];
	//TODO: rewrite this in a way that can split variables also
	function split_operators(t){
		if(operators[t]){
			return [t];
		}
		for (var i = t.length - 1; i > 0; i--){
			var a = t.substring(0,i);
			if(operators[a]){
				return [a].concat(split_operators(t.substring(i)));
			}
		}
		throw("Expression '"+t+"' did not contain any operator prefix codes.");
	}
	
	//TODO: this should be secondary_unary
	
	//parse:
	return function (s){
		O(1, "parse");
		var current_type=0;
		s=s.trim();//Fixes a bug of parsing " ..."
		var i=0,len=s.length;
		var current_token=s[0];
		current_type=4;
		for(var t=1;t<4;t++){
			if(match[t](current_token)){
				current_type=t;
				break;
			}
		}
		
		//Stack of tokens for the shunting yard algorithm
		var stack=[];
		//Stack of tokens for RPN notation. ('evaluated' to a tree representation)
		var rpn_stack=[];
		
		//The evelauation part of the shunting yard algorithm inside out.
		function next_rpn(token){
			O(1, "next_rpn");
			// While there are input tokens left

			// Read the next token from input.
			//console.log("rpn: ",token);
			// If the token is a value
			if(token.t===types.number || token.t===types.variable){
				// Push it onto the stack.
				//console.log("push: ",token.v, " onto: rpn_stack = ",rpn_stack.clone());
				rpn_stack.push(token.v);
			}
			// Otherwise, 
			else{
				//the token is an operator (operator here includes both operators, and functions).
				// It is known a priori that the operator takes n arguments.
				var n=operators[token.v][2];
				// If there are fewer than n values on the stack
				if(rpn_stack.length<n){
					// (Error) The user has not input sufficient values in the expression.
					throw(new SyntaxError("The "+token.v+" operator requires exactly "+n+" operands, whereas only "+rpn_stack.length+" "+(rpn_stack.length===1?"was":"were")+" supplied."));
				// Else,
				}else{
					// Pop the top n values from the stack.
					var values=rpn_stack.splice(-n);
					// Evaluate the operator, with the values as arguments.
					//var evaled=("("+values[0]+token.v+values[1]+")");
					values.type=token.v;
					// Push the returned results, if any, back onto the stack.
					//console.log("values: ",values.clone());
					rpn_stack.push(values);
				}
			}
		}
		
		//Shunting yard algorithm inside out.
		
		//Because the algorithm reads one token at a time, we can just
		//give it the token as soon as we get that token (from the tokenizer/parser), and
		//instead of pushing to a temporary array, just call next_token(token).
		//The same applies to the RPN evaluator (above)
		function next_token(token){
			if (token.t === types.variable) {
				//'Keyword' search: eg. break, if. Stuff like that.
				if (operators[token.v]) {
					token.t = types.operator;
				} else if(token.v==="false"){
					token.v=false;
				} else if(token.v==="true"){
					token.v=true;
				} else if(token.v==="Infinity"){
					token.v=Infinity;
				}
			}
			//console.log("token: ", token.v, names[token.t]);
			//Comments from http://en.wikipedia.org/wiki/Shunting-yard_algorithm
			// Read a token.
			// If the token is a number, then add it to the output queue.
			if(token.t==types.number || token.t==types.variable){
				if(token.t==types.number){
					token.v=Number(token.v);
				}
				next_rpn(token);
			}
			// If the token is a function token, then push it onto the stack.
			if(token.t===types.func){
				stack.push(token);
			}
			
			// If the token is a function argument separator (e.g., a comma):
			if(token.t===types.comma){
				// Until the token at the top of the stack is a left parenthesis,
				while(stack[stack.length-1].v!="("){

					// If no left parentheses are encountered,
					if(!stack.length){
						// either the separator was misplaced or parentheses were mismatched.
						throw("either the separator was misplaced or parentheses were mismatched.")
					}
					// pop operators off the stack onto the output queue.
					next_rpn(stack.pop());
				}

			}
			// If the token is an operator
			if(token.t===types.operator){
				//, o1, then:
				var o1=token;
				var o1precedence=precedence(o1.v);
				//var o1associative=associativity(o1.v);
				var o1associative=operators[o1.v][0];
				// ("o2" is assumed to exist)
				var o2;
				// while
				while(

					//there is an operator token, o2, at the top of the stack
					(stack.length && (o2 = stack[stack.length-1]).t===types.operator)
					//and
					&&
				// either
				 (
					(
						//o1 is left-associative
						o1associative==left
						//and
						&&
						//its precedence is
						o1precedence
						//less than or equal to
						<=
						//that of o2,
						precedence(o2.v)
					)
				//or
				||
					(
						//o1 is right-associative
						o1associative!=left

						//and
						&&

						//its precedence is
						o1precedence

						//less than
						<

						//that of o2
						precedence(o2.v)
						)

					 )

				){
					// pop o2 off the stack, onto the output queue;
					next_rpn(stack.pop());
				}

				// push o1 onto the stack.
				stack.push(o1);
			}
			// If the token is a left parenthesis,
			if(token.v == "("){
				//then push it onto the stack.
				stack.push(token);
			}
			// If the token is a right parenthesis:
			if(token.v == ")"){
				// Until the token at the top of the stack is a left parenthesis,
				while(stack[stack.length-1].v!="("){

					// If the stack runs out without finding a left parenthesis, then
					if(!stack.length){
						//there are mismatched parentheses.
						throw(new SyntaxError(msg.parenMismatch));
					}
					// pop operators off the stack onto the output queue.
					next_rpn(stack.pop());
				}

				// Pop the left parenthesis from the stack, but not onto the output queue.
				if(stack.pop().v!="("){
					throw("Pop the left parenthesis from the stack: Not found!")
				}

				// If the token at the top of the stack is a function token, pop it onto the output queue.
				if(stack.length && stack[stack.length-1].t===types.func){
					next_rpn(stack.pop);
				}
			}

		};
		var op_last=true;
		
		function next_tokens(token) {
			//console.log("lot: ", token.v);
			var tokens=[];
			var v=token.v;
			if(token.t===types.variable){
				v=v.replace(/\\/g,"");
			}
			if(token.t===types.paren){
				v=v.replace(/[ \n\t]+/g, "");
			}
			var _tokens=
			v
			.split((token.t===types.paren)?"":/[ \n\t]+/);
			if(token.t===types.operator){
				_tokens
				.forEach(function(t) {
					if(t.length){
						tokens=tokens.concat(split_operators(t));
					}
				});
			}else{
				tokens=_tokens;
			}
			
			tokens
			.forEach(function (t) {
				if(t.length) {
					if(token.t!=types.paren){
						if(!op_last && token.t!=types.operator){
							next_token({v:"∘",t:types.operator});
							//throw("No operator before "+t);
						}
						if(token.t==types.operator && !postfix(t)){
							if(op_last && op_last!=")" && unary(t)){
								t=unary(t);
							}
							op_last=true;
						}else{
							op_last=false;
						}
					}else{
						if(t=="(" && (op_last==false||op_last==")")){
							next_token({v:"∘",t:types.operator});
							op_last=t;
						}else if(t=="("){
							op_last=t;
						}else if(t==")"){
							
							op_last=t;
						}
					}
					next_token({v:t,t:token.t});
				}
			});
		}
		//Tokenize:
		while(i<len) {
			i++;
			var c;
			if(!(i < len)){
				//Reached the end; use whatever is in the current_token buffer.
				next_tokens({v: current_token, t: current_type});
				current_token = "";
				break;
			}else if ((c=s[i]) === " " || c === "\t" || c === "\n") {
				//whitespace is not removed yet.
				//(It is required for some tokens, e.g. strings, and seperator string tokens)
				current_token += c;
			} else if (match[current_type](current_token + c)) {
				//The next character fits onto the current_token
				current_token += c;
			}else{
				//console.log("change detected at "+s[i]);
				
				//A new token type was reached, push the old one:
				next_tokens({v:current_token,t:current_type});
				
				//move on
				if(current_type === types.operator || current_type === types.paren){
					//console.log("just finished op: ",current_token.s, names[current_type]);
					//console.log("now @ "+c);
					//Just finished an operator.
					//send operator: Wait no, don't send it.
					current_type = 4;
					for(var t = 1; t < 4; t++){
						if(match[t](c)){
							current_type=t;
							break;
						}
					}
					//console.log("just found out that ",c.s," is a "+names[current_type]);


				} else {
					if (match[types.operator](c)) {
					//We've got an operator!

						current_type = types.operator;
						//DO NOT SEND OPERATOR TOKEN YET.

					}else if (match[types.paren](c)) {
						current_type = types.paren;

					} else {
						//Let's assume multiplication
						next_tokens({v:"∘",t:types.operator});
						current_type = types.variable;
						//console.warn("Operator was expected between ", current_token, " and ", c, "( ∘ assumed)");
					}
				}
				current_token=c;
			}
		}
		/*
		if(current_token.length){
			//Unsure what should be happening here.
			console.warn("final token: ",current_token);
		}
		*/


	//Shunting yard algorithm:
	// (The final part that does not read tokens)
	
	// When there are no more tokens to read:

		// While there are still operator tokens in the stack:
		while(stack.length){
			var the_operator;
			// If the operator token on the top of the stack is a parenthesis, then
			if((the_operator=stack.pop()).t===types.paren){
				//there are mismatched parentheses.
				throw("there are mismatched parentheses.");

			}
			//Pop the operator onto the output queue.
			next_rpn(the_operator);

		}
		if(rpn_stack.length!==1){
			console.warn("Stack not the right size! ", rpn_stack);
			//who gives?
			
			return rpn_stack;
		}
		return rpn_stack[0];
		//eturn output.map(function(o){return o.v}).join(" ");
	}

})(language);
//The main javascript-cas object: window.M:
var M = function (expression, context) {
	return p(expression, context);
};
function p(expression, context){
	//TODO?: Apply context?
	return parse(expression);
}
M.Context = function(){
	
};



//BEGIN MATH


Array.prototype.valid=function(){
	if(this.type==="/" && this[1]===0){
		return false;
	}
	return true;
};


Array.prototype.eval=function(){
	return this.simplify();
};
Array.prototype.Function=function(x){
	
	//DANGER!!!!!!!!!!!
	if(x===undefined){
		return new Function("return "+this.toString());
	}
	return new Function(x,"return "+this.toString());
}






M.toString=function(){
	//Yes, this is necessary
	return "function M() {\n    [awesome code]\n}";
};
M.toString.toString=function(){
	return "function toString() {\n    [native code]\n}";
};

M.toString.toString.toString=M.toString.toString;
window.M = M;

M.Context.prototype=Object.create(Math);
M.Context.prototype.D=function(x, wrt){
	wrt=wrt||"x";
	return x.differentiate(wrt,1);
};
M.Context.prototype.D.symbolic=true;

M.Context.prototype.reset=function(){
	for(var i in this){
		if(this.hasOwnProperty(i)){
			delete this[i];
		}
	}
	return this;
};

var exp = Math.exp,
	log = Math.log;

//Riemann zeta function
function zeta(x) {
    if (x === 0) {
        return -0.5;
    } else if (x == 1) {
        return Infinity;
    } else if (x == 2) {
        return pi * pi / 6;
    } else if (x == 4) {
        return pi * pi * pi * pi / 90;
    } else if (x < 1) {
        return Infinity;
    }
    var sum = 4.4 * pow(x, -5.1);
    for (var npw = 1; npw < 10; npw++) {
        sum += pow(npw, -x);
    }
    return sum;
}

function gammln(xx) {
    var j;
    var x,tmp,y,ser;
    var cof=[57.1562356658629235,-59.5979603554754912,14.1360979747417471,-0.491913816097620199,0.339946499848118887e-4,0.465236289270485756e-4,-0.983744753048795646e-4,0.158088703224912494e-3,-0.210264441724104883e-3,0.217439618115212643e-3,-0.164318106536763890e-3,0.844182239838527433e-4,-0.261908384015814087e-4,0.368991826595316234e-5];
    if (xx <= 0){
        throw("bad arg in gammln");
    }
    y=x=xx;
    tmp = x+5.24218750000000000;
    tmp = (x+0.5)*log(tmp)-tmp;
    ser = 0.999999999999997092;
    for (j=0;j<14;j++){
        ser += cof[j]/++y;
    }
    return tmp+log(2.5066282746310005*ser/x);
}
function Gamma(x){
    if(x==0){
        return Infinity;
    }
    if(x<0){
        return -pi/(x*sin(pi*x)*Gamma(-x));
    }
    return exp(gammln(x));
}

function factorial(ff) {
    if (ff === 0 || ff == 1) {
        return 1;
    } else if (ff > 0 && ff == ~~ff && ff < 15) {
        var s = 1;
        for (var nns = 1; nns <= ff; nns++) {
            s *= nns;
        }
        return~~s;
    } else if (ff != (~~ff) || ff < 0) {
        return Gamma(ff + 1);
    }
}


M.Context.prototype.factorial = function(x){
	return factorial(x);
};
//M.Context.prototype.factorial.symbolic = true;


M.Context.prototype.Gamma = function(x){
	return Gamma(x);
}
//M.Context.prototype.Gamma.symbolic = true;

//Like jquery noConflict
M.noConflict = function() {
	window.M=_M;
	return M;
};

M.Context.prototype.Infinity=Infinity;

M.Context.prototype.NaN=NaN;



M.global = new M.Context();

M.__proto__=M.global;function Set(discrete){
	var t = [];
	this.discrete = t;
	if(typeof discrete == "object" && discrete.forEach){
		discrete.forEach(function(b) {
			if(t.indexOf(b)==-1){
				t.push(b);
			}
		});
	}
};
Set.prototype.union=function(x){
	var t=this.discrete;
	x.discrete.forEach(function(b) {
		if(t.indexOf(b)==-1){
			t.push(b);
		}
	});
};
Set.prototype.forEach=function(x){
	this.discrete.forEach(x);
};
var EmptySet=new Set();
String.prototype.root=function(x){
	if(String(this)===x){
		return new Set([0]);
	}
	return EmptySet;
};
Boolean.prototype.root=
Number.prototype.root=function(){
	return EmptySet;
};
function indep(){
	//Linearly independent
	return false;
}
//inverse(o,b,d,side);

Array.prototype.root=function(x){
	if(x===undefined){
		console.warn("Variable not specified (Assume x)");
		x="x";
	}
	var domain = undefined;
	//Danger: assumes field
	if(this.type==="*"){
		var roots=new Set();
		this.forEach(function(f){
			//union
			roots.union(f.root(x));
		});
		return roots;
	}else if(false && this.type==="+" && indep(this[0],this[1])){
		//THIS IS WRONG. I want it to solve x^2 + y^2 = 0 types. (x^2 AND y^2 have to be zero)
		var roots=[];//new Set();
		this.forEach(function(f){
			roots.intersect(f.root(x));
		});
	}
	var lhs = this;
	var rhs = 0;
	var temp = 0;
	
	//FACTORISE!!!
	
	
	
	//OTHERWISE: (?? what condition)
	
	//TODO: this is a really slow algoritm. A tree path for the one and only x should be found first, instead of calculating it every single time!
	if(lhs.vars("x").length===1){
		while(lhs!==x){
			//console.log(lhs.clone(),"=",rhs.clone());
			
			var op = lhs.type;
			if(lhs[0].vars("x").length){
				
				// f(x) . B = k
				// f(x) . B / B= k / B
				//Danger: assumes right associativity
				//Right inverse of B:
				var side = L;
				rhs = inverse(op,lhs[1-side],rhs, side);
				if(rhs===undefined){
					throw("Could not solve");
				}
				lhs=lhs[side];
			}else if(lhs[1].vars("x").length){
				// A . f(x) = k
				// A^-1 . A . f(x) = A^-1 k
				// f(x) = A^-1 k
				//left inverse of A
				//Danger: assumes left associativity
				var side = R;
				rhs = inverse(op,lhs[1-side],rhs, side);
				if(rhs===undefined){
					throw("Could not solve");
				}
				lhs=lhs[side];
			}else{
				throw("The "+x+" variable is missing now!!!!")
			}
			
			
			
			if(temp++>40){
				throw("infinite loop!");
				break;
			}
		}
		return new Set([rhs])/*.simplify()*/; //TODO: may not be one value
	}else{
		throw("I don't know how to solve those");
	}
	
};
Array.prototype.inverse=function(y,x){
	//multivalued (as always)
	return this.apply("-",x).root(y);
};
Array.prototype.solve=function(x){
	function findValueThatIsZeroWhenItIsSatisfied(){
		//TODO: be more careful here!
		//Assumes this.type = "="
		return this[0].apply("-", this[1]);
		
	}
	if(this.type===";"){
		alert("solve set");
	}else if(this.type==="="){
		//make RHS = 0
		return findValueThatIsZeroWhenItIsSatisfied.apply(this).inverse(0);
	}
};M.Context.prototype.learn=function(x){
	if(x===truth){
		alert("Base fact already known.");
	}
	//Should learn(x) assume logical consistency of x and this
	var handle=" vars: x,y,z";
	var vars = new Set(x.vars());
	var self=this;
	vars.forEach(function(v) {
		if(self[v]){
			throw("Already defined! (TODO: intersect it)");
		}else{
			//Should I solve for it now? Or when required?
			self[v]=true;
		}
	});
	return handle;
};
M.Context.prototype.delete=function(var_name_or_handle){
	if(typeof var_name_or_handle === "object"){
		//handle
	}else{
		delete this[var_name_or_handle];
	}
};

Array.prototype.vars = function(x){
	var v = [];
	this.map(function(e) {
		v.push.apply(v,e.vars(x));
	});
	return v;
};
String.prototype.vars=function(x){
	var t = String(this);
	if(x===undefined || x===t){
		return [t];
	}
	return [];
};
Number.prototype.vars=
Boolean.prototype.vars=
function(){
	return [];
};var truth=[1,1].setType("=");
Array.prototype.impliedBy=function(context){
	if(this===truth){
		return true;
	}
	if(this.type===";"){
		for (var i = this.length - 1; i >= 0; i--){
			if(!this[i].impliedBy(context)){
				return false;
			}
		}
		return true;
	}
	
	if(this.type==="="){
		return false;
	}
	//Sub-statements? Too slow?
	
		for (var i = this.length - 1; i >= 0; i--){
			if(!this[i].impliedBy(context)){
				return false;
			}
		}
		return true;
};
//TODO: this is a bit messy. Maybe make it in the global, 
// and that way if it can be determined if it was/is consistent.
M.assumptions=true;
M.getAssumptions=function(){
	var x=M.assumptions;
	M.assumptions=true;
	return x;
	
};

M.assume=function(x){
	M.assumptions=M.assumptions.apply("&&", x);
};M.latex={
	"stringify":function(){},
	"parse":function(s){
		O(1, "Latex.parse");
		// O(n * k), n=string length, k = amount of '\frac's
		//Currently only parses \frac
		var i,l=s.length
		//indexOf is BAD!!! It is fine only when we only have one type of \expr
		while((i = s.indexOf("\\begin"))!=-1){
			var n = s.indexOf("}", i+7);
			
			var type=s.substring(i+7,n);
			
			var end_string="\\end{"+type+"}";
			
			var b = s.indexOf(end_string, n);
			var x = s.substring(n+1,b);
			switch(type){
			case "matrix":
				
				x=x.replace(/\\\:/g, ",").replace(/\\\\/g, ";");
				s=s.split("");
				
				//s.splice(b,b+end_string.length);
				
				s[i]="[";
				s.splice(b, end_string.length-1);
				s[b]="]";
				s.splice(n+1,b-n-1,x);
				s.splice(i+1,n+1-i-1);
				s=s.join("");
				break;
			default:
				throw(new SyntaxError("Latex \\begin{"+type+"} block not understood."))
			}
		}
		while((i = s.indexOf("\\text"))!=-1){
			var n = s.indexOf("}", i+6);
			var text=s.substring(i+6,n);
			
			s=s.split("");
			
			s.splice(i,n-i+1,"\\"+text);
			s=s.join("");
		}
		while((i = s.indexOf("\\frac"))!=-1){
			var n,good=false;
			var deep=0;
			for(n = i+5;n<l;n++){
				if(s[n]=="{"){
					deep++;
				} else if(s[n]=="}"){	
					deep--;
					if(!deep){
						good=true;
						break;
					}
				}
			}
			if(!good){
				throw(new SyntaxError(msg.latexParse));
			}
			good=false;
			
			if(s[n+1]!="{"){
				throw(new SyntaxError("Unexpected '"+s[n+1]+"' between \\frac operands"));
			}
			
			var i2=n+1;
			var n2;
			for(n2 = i2;n2<l ;n2++){
				if(s[n2]=="{"){
					deep++;
				} else if(s[n2]=="}"){
					
					deep--;
					if(!deep){
						good=true;
						break;
					}else{
						
					}
				}
			}
			if(!good){
				throw(new SyntaxError(msg.latexParse));
			}
			console.log(s);
			s=s.split("");
			
			//TODO: bad idea. maybe fix requiresParen...
			s[i+5]="((";
			s[n]=")";
			s[i2]="(";
			s[n2]="))";
			s.splice(i2,0,"/");
			s.splice(i,5);
			s=s.join("");
			
		}
		var latexexprs = {
			"cdot":"*",
			"vee":"∨",
			"wedge":"&&",
			"neg":"¬",
			"left":"",
			"right":"",
			"pm":"±",
			"circ":"∘",
			"sqrt":"√",
			"div":"/",
			
			'gt':">",
			"left|":"\\abs(",
			"right|":")",
			"times":"*",
			":":"",
			"left(":"(",
			"right)":")",
			"left[":"[",
			"right]":"]",
			'ge':">=",
			'lt':"<",
			'le':"<=",
			"infty":"∞",
			"sim":"~",
			"frac":"",
			"backslash":"\\",
			"alpha":"α",
			"beta":"β",
			'gamma':"γ",
			'delta':"δ",
			'zeta':"ζ",
			'eta':"η",
			'theta':"θ",
			'iota':"ι",
			'kappa':"κ",
			'mu':"μ",
			'nu':"ν",
			'xi':"ξ",
			'omicron':"ο",
			'rho':"ρ",
			'sigma':"σ",
			'tau':"τ",
			'upsilon':"υ",
			'chi':"χ",
			'psi':"ψ",
			'omega':"ω",
			'phi':"ϕ",
			"phiv":"φ",
			"varphi":"φ",
			"epsilon":"ϵ",
			"epsiv":"ε",
			"varepsilon":"ε",
			"sigmaf":"ς",
			"sigmav":"ς",
			"gammad":"ϝ",
			"Gammad":"ϝ",
			"digamma":"ϝ",
			"kappav":"ϰ",
			"varkappa":"ϰ",
			"piv":"ϖ",
			"varpi":"ϖ",
			"rhov":"ϱ",
			"varrho":"ϱ",
			"thetav":"ϑ",
			"vartheta":"ϑ",
			"pi":"π",
			"lambda":"λ",
			'Gamma':"Γ",
			'Delta':"Δ",
			'Theta':"Θ",
			'Lambda':"Λ",
			'Xi':"Ξ",
			'Pi':"Π",
			'Sigma':"Σ",
			'Upsilon':"Υ",
			'Phi':"Φ",
			'Psi':"Ψ",
			'Omega':"Ω",
			"perp":"⊥",
			",":" ",
			"nabla":"∇",
			"forall":"∀",
			"sum":"∑",
			"summation":"∑",
			"prod":"∏",
			"product":"∏",
			"coprod":"∐",
			"coproduct":"∐",
			"int":"∫",
			"integral":"∫"
			
		};
		s=s.replace(/\\([a-z]+)/g,function(u,x){
			var s=latexexprs[x];
			return " "+ ((s!=undefined)?s:("\\"+x));
		});
		
		
		//Naughty:
		s=s.replace(/[\[\{]/g,"(");
		s=s.replace(/[\]\}]/g,")");
		
		return s;
	}
};
//Differentiate a simplified function:
//TODO: make this differentiate any function. At the moment it will only work for simplified ones, due to the fact that
// the "," is still binary, but simplify()s to n-ary.
Array.prototype.differentiate=function(x, n){
	//Nth deriviative with respect to x
	if(n<=-1){
		return this.integrate(x, -n);
	}else if(n==0){
		return this;
	}
	if(n>1){
		return this.differentiate(x, n-1).differentiate(x, n);
	}else{
		if(distributive("D", this.type)){
			return this.map(function(t){
				return t.differentiate(x, n);
			}).setType(this.type).simplify();
		}
		switch(this.type){
			case "*":
				var da=this[0].differentiate(x,n);
				var db=this[1].differentiate(x,n);
				return this[0]
				.apply("*", db)
				.apply("+",
					this[1]
					.apply("*", da)
				);
			case "/":
				var da=this[0].differentiate(x,n);
				var db=this[1].differentiate(x,n);
				return this[1]
				.apply("*", da)
				.apply("-",
					this[0]
					.apply("*", db)
				)
				.apply("/",
					this[1]
					.apply("^",2)
				)
			case "^":
				var da=this[0].differentiate(x,n);
				var db=this[1].differentiate(x,n);
				return this[0]
				.apply("^",
					this[1].apply("-",1)
				)
				.apply("*",
					this[1]
					.apply("*",
						da
					)
					.apply("+",
						this[0]
						.apply("*",
							"log"
							.apply("∘",
								this[0]
							)
						)
						.apply("*",
							db
						)
					)
				);
			case "!":
				return this[0]
				.differentiate(x,n)
				.apply("*",
					"Gamma"
					.apply("∘",
						this[0]
						.apply("+",
							1
						)
					)
				)
				.apply("*",
					"digamma"
					.apply("∘",
						this[0]
						.apply("+",
							1
						)
					)
				);
			case "√":
				return this[0]
				.differentiate(x,n)
				.apply("/",
					this[0]
					.apply("√")
					.apply("*",
						2
					)
				);
			case "@-":
			case "@+":
			case "@±":
				return this[0].differentiate(x,n).apply(this.type);
			case "∘":
				return this[1]
				.differentiate(x,n)
				.apply("*",
					//this[0]
					//.differentiate(x,n)/*TODO: function by name*/
					[this[0]].setType("#").differentiate()
					//"cos"
					.apply("∘",
						this[1]
					)
				);
			default:
				return ["D",this].setType("∘");
				throw("Cannot differeniate expressions using the '"+this.type+"' operator");
				break;
			
		}
	}
};

String.prototype.differentiate=function(x,n){
	if(n<=-1){
		return this.integrate(x, -n);
	}else if(n==0){
		return String(this);
	}
	if(String(this)==x){
		return (n==1)?1:0;
	}
	return 0;
};
Number.prototype.differentiate=function(x,n){
	if(n<=-1){
		return this.integrate(x, -n);
	}else if(n==0){
		return Number(this);
	}
	
	if(this==Infinity || this==-Infinity){
		return undefined;
	}
	return 0;
}
Array.prototype.simplify=function(){
	
	//Rules:
	// simplify ∘ simplify ≠ simpify
	
	// Algorithm:
	// O(2^n???)
	O("?", "simplify");
	if(this.length===1){
		var a = this[0].simplify();
		
		return a.apply(this.type);
	} else if(this.length===2){
		var a = this[0].simplify();
		var b = this[1].simplify();
		//In place?
		return a.apply(this.type, b);
	}
};Array.prototype.sub=function(a,b){
	var c=[].setType(this.type);
	if(this.type==="#" && this[1]!=a){
		//TODO: checl this
		return this.clone();
	}else{
		var i,l=this.length;
		for(i=0;i<l;i++){
			c.push(this[i].sub(a,b));
		}
	}
	//TODO: WARNING - DOES NOT SIMPLIFY.
	return c;
};
String.prototype.sub=function(a,b){
	var t = String(this);
	if(t===a){
		return b;
	}
	return t;
};
Number.prototype.sub=I;

Array.prototype.apply=function(o, x, __commuted__){
	//console.log("Apply ",o,x," to ",this,this.type);
	if(o==="∘" && this.type==="_"){
		//TODO: check if it is symbolic.
		return M.global[this[0]](x, this[1]);
	}
	if(o==="∘" && this.type==="#"){
		return this[0]
		.sub("x", x)
	}
	if(o === "," && this.type === ","){
		return this.concat([x]).setType(this.type);
	} else if(o === ";" && this.type === ";"){
		return this.concat([x]).setType(this.type);
	} else if(o === ";" && this.type === ","){
		
		//TODO: BUG, assumes ; only has two operands.
		M.assume([(x.type==",")?1:0,1].setType("="));
		return [this,x].setType(";");
	}
	if(x!==undefined && identity(o)===x){
		//console.log("identity");
		return this;
	}
	if(x!==undefined && inverse(o,x,NaN,R)===false){
		//console.log("identity - inverse");
		return x;
	}
	//Distributive law:
	if(this.type === "," && x.type === ","){
		// Vector-Vector operations:
		if(o === "*" || o === "+" || o === "-"){
			for (var i = x.length - 1; i >= 0; i--){
				this[i]=this[i].apply(o,x[i]);
			}
		}else{
			throw("Vector-vector operator: "+ o + "not understood");
		}
		if(o === "*"){
			var sum=0;
			for (var i = this.length - 1; i >= 0; i--){
				sum=sum.apply("+",this[i]);
			}
			return sum;
		}
		return this;
	}else if(distributive(o,this.type)){
		
		//console.log("attempting to apply distributve to multiply "+this.toLatex()+" by "+x.toLatex());
		for (var i = this.length - 1; i >= 0; i--){
			
			//console.log(" - multiply ("+o+") the "+this[i].toString()+" factor by "+x);
			this[i]=this[i].apply(o,x);
			//console.log(" X multiply ("+o+") the "+this[i].toString()+" factor by "+x);
			
		}
		return this;
	}
	//DEBUG, the only logical order I can think of
	//is linking numbers, but thats kinda crap.
	if(x!==undefined && typeof x==="number" || typeof x==="boolean"){ //!isNaN(x))
	
	//Associative law:
	if(this.type == o && associative(o)){
		//It can apply itself to ONE and only one
		//of the sub exprs of a.
		var found=false;
		//TODO Which one/order though?
		//TODO: this.length??? OLD CODE??? It should only be 2 except for vectors
		for (var i = this.length - 1; i >= 0; i--){
			if(typeof this[i] == "number" || typeof this[i]=="boolean"){
				this[i]=this[i].apply(o,x);
				found=true;
				break;
			}
		}
		if(found){
			return this;
		}
	}
	}
	
	
	//Somtimes commuting will be useless. It is also annoying!
	if(!__commuted__ && this.type==="*") {
		if(o==="/" && x.type === "/"){
			return x.reverse().apply("*",this);
		}
	}
	if(x===undefined){
		return [this].setType(o);
	}
	return [this,x].setType(o);
};
String.prototype.apply=function(o, b, __commuted__){
	
	var t=String(this);
	if(operators[o][2]==1){
		return [t].setType(o);
	}
	
	/*hack for without doing string conversion*/
	var ident=identity(o);
	if(ident===b){
		return t;
	}else if(ident===true && typeof b==="number" && b){
		return t;
	}else if(ident===false && typeof b==="number" && !b){
		return t;
	}
	
	if(inverse(o,b,NaN,R)===false){
		return b;
	}
	if(!__commuted__ && ((typeof b)!="string") && commutative(o)){
		//console.log("commute "+o, b, t);
		return b.clone().apply(o, t, true);
	}
	//Global functions:
	if(o==="∘" && M.global[t]){
		if(M.global[t].symbolic){
			return M.global[t](b);
		}
		if(typeof b === "number" || typeof b === "boolean"){
			return M.global[t](b);
		}
		
	}
	return [t, b].setType(o);
}


Number.prototype.apply=function(o, b, __commuted__){
	
	if(o==="∘"){
		//∘ commutes with scalars
		if(__commuted__){
			return [b, Number(this)].setType("*");
		}else{
			return b.clone().apply("*", Number(this), true);
		}
	}
	
	
	var a = Number(this);
	//TODO Identity and inverse can be combined if the left operand is included in
	// the calculation?
	if(b){
		var ident=identity(o);
		if(ident===b){
			return a;
		}else if(ident===true && this){
			return b;
		}else if(ident===false && !this){
			return b;
		}
	}
	
	if(b===undefined || (typeof b==="number" || typeof b==="boolean")){ // !isNaN(b)
		switch(o){
			case "+":
				return a+b;
			case "@+":
				return a;
			case "@-":
				return -a;
			case "*":
				return a*b;
			case "/":
				if(b===0){
					throw("Division by zero is not defined.");
				}
				return a/b;
			case "-":
				return a-b;
			case "√":
				//TODO: make sure ^(1/2) and this are equiv.
				if(a<0){
					return Math.pow(-a,0.5).apply("*","i");
				}
				return Math.pow(a, 0.5);
			case "^":
				return Math.pow(a,b);
			case "===":
				return a===b;
			case "==":
				return a==b;
			case "≠":
				return a!=b;
			case ">":
				return a>b;
			case "<":
				return a<b;
			case ">=":
				return a>=b;
			case "<=":
				return a<=b;
			case "&":
				return a&b;
			case "^":
				return a^b;
			case "∨":
				return a||b;
			case "|":
				return a|b;
			case "%":
				return a%b;
			case "&&":
				return a&&b;
			case "∘":
				//assume multiplication
				return a*b;
			case "¬":
				return !a;
			case "~":
				return ~a;
			case "±":
				return [a+b,a-b].setType(",");
			case "@±":
				return [a,-a].setType(",");
			case ";":
			case ",":
				//TODO: fix this
				if(b.type === o){
					return b.push(a);
				}
				return [a,b].setType(o);
			case "!":
				return M.Context.prototype.factorial(a);
			case "=":
				if(a==b){
					return truth;
				}
				window.a=a;
				window.b=b;
				throw(new Error("The statement is always false: "+a+" ≠ "+b))
				throw(new ReferenceError("Left side of assignment is not a reference."))
			default:
				if(b===undefined){
					return [a].setType(o);
				}
				return [a,b].setType(o);
				//TODO: maybe this should be thrown
				throw("Operator '"+o+"' is not yet numerically implemented.");	
		}
	}
	
	if(commutative(o)){
		//console.log(Number(this),"commute "+o, b);
		if(identity(o)==Number(this)){
			return b;
		}
		if(__commuted__){
			return [b, Number(this)].setType(o);
		}else{
			return b.clone().apply(o, Number(this), true);
		}
	}
	//Messy hack: null factor law:
	if(a===0 && o=="/"){
		M.assume([b,0].setType("≠"));
		return 0;
		return [["δ",b].setType("∘")].setType("@±");
	}
	return [Number(this), b].setType(o);
};

Boolean.prototype.apply=Number.prototype.apply;

var latexVars="Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Phi|Psi|Omega|lLambda|lambda|delta|sigma|sum".split("|");


var latexFuncs="log|exp|asinh|acosh|atanh|sinh|sech|cosh|coth|tanh|sin|cos|tan|cot|sec|exp|log".split("|");


function latexExprForOperator(o){
	var os={
		"*":"\\cdot ",
		"∨":"\\vee ",
		"&&":"\\wedge ",
		"±":"\\pm ",
		"∘":"\\circ "
	};
	return os[o]||o;
}


Array.prototype.toLatex=function(__matrix__){
	//Infix
	if(this.length>=2){
		if(this.type==="/"){
			
			return "\\frac{"+this[0].toLatex()+"}{"+this[1].toLatex()+"}";
		} else if(this.type==="^" || this.type ==="_"){
			
			var a = this[0].toLatex();
			if(this[0].requiresParentheses(this.type)){
				a="\\left("+a+"\\right)";
			}
			return a+this.type+"{"+this[1].toLatex()+"}";
		} else if(this.type==="∘"){
			var a = this[0].toLatex();
			
			if(latexFuncs.indexOf(a)!==-1){
				a="\\"+a;
			}else if(this[0].requiresParentheses(this.type)){
				a="\\left("+a+"\\right)";
			}
			
			return a+"\\left("+this[1].toLatex()+"\\right)";
		} else if(this.type==="," && __matrix__){
			var self=this;
			return this.map(function(t){
				var a = t.toLatex();
				if(t.requiresParentheses(self.type)){
					a="\\left("+a+"\\right)";
				}
				return a;
			}).join(latexExprForOperator("\\:"));
		} else if(this.type===";" && false){
			
			var self=this;
			return "\\begin{matrix}"+this.map(function(t){
				var a = t.toLatex(true);
				if(t.requiresParentheses(self.type)){
					a="\\left("+a+"\\right)";
				}
				return a;
			}).join("\\\\")+"\\end{matrix}";
			
		} else {
			var self=this;
			return this.map(function(t){
				var a = t.toLatex();
				if(t.requiresParentheses(self.type)){
					a="\\left("+a+"\\right)";
				}
				return a;
			}).join(latexExprForOperator(this.type));
		}
	}
	//Postfix/Prefix Unary operators
	if(this.length==1){
		var a = this[0].toLatex();
		if(this[0].requiresParentheses(this.type)){
			a="\\left("+a+"\\right)";
		}
		if(this.type[0]=="@"){
			//Prefix
			return this.type.substring(1)+a;
		} else if(this.type==="√"){
			return "\\sqrt{"+this[0].toLatex()+"}";
		}
		if(postfix(this.type)){
			return a+this.type;
		}
		return this.type+a;
	}
	
	//Prefix
	if(false && this.length==2){
		return this[0].toLatex()+this.type+this[1].toLatex();
	}
	
};
Number.prototype.toLatex=function(){
	if(Number(this)===Infinity){
		return "\\infty";
	}
	return this.toString().replace(/e([\+\-])([\d\.]+)/,"\\cdot 10^{$2}");
};

String.prototype.toLatex=function(){
	var s = String(this);
	if((s.length>1) || (latexVars.indexOf(s)!=-1)){
		return "\\"+s;
	}
	return s;
};
Number.prototype.toStrings=function(){
	return this.toString().replace(/e([\+\-])([\d\.]+)/,"\\cdot 10^{$2}");
};

var _Array_prototype_toString=Array.prototype.toString;
Array.prototype.toStrings=function(){
	if(!this.type){
		return _Array_prototype_toString.apply(this,arguments);
	}
	//Infix
	if(this.length>=2){
		var self=this;
		return this.map(function(t){
			var a = t.toStrings();
			if(t.requiresParentheses(self.type)){
				a="("+a+")";
			}
			return a;
		}).join(this.type);
	}
	//Postfix
	if(this.length==1){
		return this[0].toStrings()+this.type;
	}
	
	//Prefix
	if(false && this.length==2){
		return this[0].toStrings()+this.type+this[1].toStrings();
	}
};

Boolean.prototype.toStrings=Boolean.prototype.toString;
String.prototype.toStrings=String.prototype.toString;

/*
})(
	function(){
		if(typeof window === 'undefined'){
			return exports;
		}
		return window;
	}()
);

*/// glMatrix v0.9.5
glMatrixArrayType=typeof Float32Array!="undefined"?Float32Array:typeof WebGLFloatArray!="undefined"?WebGLFloatArray:Array;var vec3={};vec3.create=function(a){var b=new glMatrixArrayType(3);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2]}return b};vec3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};vec3.add=function(a,b,c){if(!c||a==c){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];return a}c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};
vec3.subtract=function(a,b,c){if(!c||a==c){a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];return a}c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};vec3.negate=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};vec3.scale=function(a,b,c){if(!c||a==c){a[0]*=b;a[1]*=b;a[2]*=b;return a}c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
vec3.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(g==1){b[0]=c;b[1]=d;b[2]=e;return b}}else{b[0]=0;b[1]=0;b[2]=0;return b}g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};vec3.cross=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var g=b[0],f=b[1];b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};vec3.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
vec3.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b){c[0]=0;c[1]=0;c[2]=0;return c}b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};vec3.lerp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};vec3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var mat3={};
mat3.create=function(a){var b=new glMatrixArrayType(9);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9]}return b};mat3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};mat3.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
mat3.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};mat3.toMat4=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};var mat4={};mat4.create=function(a){var b=new glMatrixArrayType(16);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15]}return b};
mat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};mat4.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
mat4.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
mat4.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],o=a[11],m=a[12],n=a[13],p=a[14];a=a[15];return m*k*h*e-j*n*h*e-m*f*l*e+g*n*l*e+j*f*p*e-g*k*p*e-m*k*d*i+j*n*d*i+m*c*l*i-b*n*l*i-j*c*p*i+b*k*p*i+m*f*d*o-g*n*d*o-m*c*h*o+b*n*h*o+g*c*p*o-b*f*p*o-j*f*d*a+g*k*d*a+j*c*h*a-b*k*h*a-g*c*l*a+b*f*l*a};
mat4.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],o=a[10],m=a[11],n=a[12],p=a[13],r=a[14],s=a[15],A=c*h-d*f,B=c*i-e*f,t=c*j-g*f,u=d*i-e*h,v=d*j-g*h,w=e*j-g*i,x=k*p-l*n,y=k*r-o*n,z=k*s-m*n,C=l*r-o*p,D=l*s-m*p,E=o*s-m*r,q=1/(A*E-B*D+t*C+u*z-v*y+w*x);b[0]=(h*E-i*D+j*C)*q;b[1]=(-d*E+e*D-g*C)*q;b[2]=(p*w-r*v+s*u)*q;b[3]=(-l*w+o*v-m*u)*q;b[4]=(-f*E+i*z-j*y)*q;b[5]=(c*E-e*z+g*y)*q;b[6]=(-n*w+r*t-s*B)*q;b[7]=(k*w-o*t+m*B)*q;b[8]=(f*D-h*z+j*x)*q;
b[9]=(-c*D+d*z-g*x)*q;b[10]=(n*v-p*t+s*A)*q;b[11]=(-k*v+l*t-m*A)*q;b[12]=(-f*C+h*y-i*x)*q;b[13]=(c*C-d*y+e*x)*q;b[14]=(-n*u+p*B-r*A)*q;b[15]=(k*u-l*B+o*A)*q;return b};mat4.toRotationMat=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat4.toMat3=function(a,b){b||(b=mat3.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};mat4.toInverseMat3=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],i=a[8],j=a[9],k=a[10],l=k*f-h*j,o=-k*g+h*i,m=j*g-f*i,n=c*l+d*o+e*m;if(!n)return null;n=1/n;b||(b=mat3.create());b[0]=l*n;b[1]=(-k*d+e*j)*n;b[2]=(h*d-e*f)*n;b[3]=o*n;b[4]=(k*c-e*i)*n;b[5]=(-h*c+e*g)*n;b[6]=m*n;b[7]=(-j*c+d*i)*n;b[8]=(f*c-d*g)*n;return b};
mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],o=a[9],m=a[10],n=a[11],p=a[12],r=a[13],s=a[14];a=a[15];var A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14];b=b[15];c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*i+t*o+u*r;c[2]=A*g+B*j+t*m+u*s;c[3]=A*f+B*k+t*n+u*a;c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*i+x*o+y*r;c[6]=v*g+w*j+x*m+y*s;c[7]=v*f+w*k+x*n+y*a;c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*i+D*o+E*r;c[10]=z*
g+C*j+D*m+E*s;c[11]=z*f+C*k+D*n+E*a;c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*i+G*o+b*r;c[14]=q*g+F*j+G*m+b*s;c[15]=q*f+F*k+G*n+b*a;return c};mat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
mat4.multiplyVec4=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};
mat4.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[12]=a[0]*d+a[4]*e+a[8]*b+a[12];a[13]=a[1]*d+a[5]*e+a[9]*b+a[13];a[14]=a[2]*d+a[6]*e+a[10]*b+a[14];a[15]=a[3]*d+a[7]*e+a[11]*b+a[15];return a}var g=a[0],f=a[1],h=a[2],i=a[3],j=a[4],k=a[5],l=a[6],o=a[7],m=a[8],n=a[9],p=a[10],r=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=i;c[4]=j;c[5]=k;c[6]=l;c[7]=o;c[8]=m;c[9]=n;c[10]=p;c[11]=r;c[12]=g*d+j*e+m*b+a[12];c[13]=f*d+k*e+n*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=i*d+o*e+r*b+a[15];return c};
mat4.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[0]*=d;a[1]*=d;a[2]*=d;a[3]*=d;a[4]*=e;a[5]*=e;a[6]*=e;a[7]*=e;a[8]*=b;a[9]*=b;a[10]*=b;a[11]*=b;return a}c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
mat4.rotate=function(a,b,c,d){var e=c[0],g=c[1];c=c[2];var f=Math.sqrt(e*e+g*g+c*c);if(!f)return null;if(f!=1){f=1/f;e*=f;g*=f;c*=f}var h=Math.sin(b),i=Math.cos(b),j=1-i;b=a[0];f=a[1];var k=a[2],l=a[3],o=a[4],m=a[5],n=a[6],p=a[7],r=a[8],s=a[9],A=a[10],B=a[11],t=e*e*j+i,u=g*e*j+c*h,v=c*e*j-g*h,w=e*g*j-c*h,x=g*g*j+i,y=c*g*j+e*h,z=e*c*j+g*h;e=g*c*j-e*h;g=c*c*j+i;if(d){if(a!=d){d[12]=a[12];d[13]=a[13];d[14]=a[14];d[15]=a[15]}}else d=a;d[0]=b*t+o*u+r*v;d[1]=f*t+m*u+s*v;d[2]=k*t+n*u+A*v;d[3]=l*t+p*u+B*
v;d[4]=b*w+o*x+r*y;d[5]=f*w+m*x+s*y;d[6]=k*w+n*x+A*y;d[7]=l*w+p*x+B*y;d[8]=b*z+o*e+r*g;d[9]=f*z+m*e+s*g;d[10]=k*z+n*e+A*g;d[11]=l*z+p*e+B*g;return d};mat4.rotateX=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],g=a[5],f=a[6],h=a[7],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[4]=e*b+i*d;c[5]=g*b+j*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+i*b;c[9]=g*-d+j*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c};
mat4.rotateY=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*-d;c[1]=g*b+j*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+i*b;c[9]=g*d+j*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c};
mat4.rotateZ=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7];if(c){if(a!=c){c[8]=a[8];c[9]=a[9];c[10]=a[10];c[11]=a[11];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*d;c[1]=g*b+j*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+i*b;c[5]=g*-d+j*b;c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c};
mat4.frustum=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=e*2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=e*2/i;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/i;f[10]=-(g+e)/j;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/j;f[15]=0;return f};mat4.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b=a*b;return mat4.frustum(-b,b,-a,a,c,d,e)};
mat4.ortho=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/i;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/j;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/i;f[14]=-(g+e)/j;f[15]=1;return f};
mat4.lookAt=function(a,b,c,d){d||(d=mat4.create());var e=a[0],g=a[1];a=a[2];var f=c[0],h=c[1],i=c[2];c=b[1];var j=b[2];if(e==b[0]&&g==c&&a==j)return mat4.identity(d);var k,l,o,m;c=e-b[0];j=g-b[1];b=a-b[2];m=1/Math.sqrt(c*c+j*j+b*b);c*=m;j*=m;b*=m;k=h*b-i*j;i=i*c-f*b;f=f*j-h*c;if(m=Math.sqrt(k*k+i*i+f*f)){m=1/m;k*=m;i*=m;f*=m}else f=i=k=0;h=j*f-b*i;l=b*k-c*f;o=c*i-j*k;if(m=Math.sqrt(h*h+l*l+o*o)){m=1/m;h*=m;l*=m;o*=m}else o=l=h=0;d[0]=k;d[1]=h;d[2]=c;d[3]=0;d[4]=i;d[5]=l;d[6]=j;d[7]=0;d[8]=f;d[9]=
o;d[10]=b;d[11]=0;d[12]=-(k*e+i*g+f*a);d[13]=-(h*e+l*g+o*a);d[14]=-(c*e+j*g+b*a);d[15]=1;return d};mat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};quat4={};quat4.create=function(a){var b=new glMatrixArrayType(4);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3]}return b};quat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
quat4.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b){a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return a}b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};quat4.inverse=function(a,b){if(!b||a==b){a[0]*=1;a[1]*=1;a[2]*=1;return a}b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};quat4.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
quat4.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(f==0){b[0]=0;b[1]=0;b[2]=0;b[3]=0;return b}f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};quat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=b[0],h=b[1],i=b[2];b=b[3];c[0]=d*b+a*f+e*i-g*h;c[1]=e*b+a*h+g*f-d*i;c[2]=g*b+a*i+d*h-e*f;c[3]=a*b-d*f-e*h-g*i;return c};
quat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=a[0];var f=a[1],h=a[2];a=a[3];var i=a*d+f*g-h*e,j=a*e+h*d-b*g,k=a*g+b*e-f*d;d=-b*d-f*e-h*g;c[0]=i*a+d*-b+j*-h-k*-f;c[1]=j*a+d*-f+k*-b-i*-h;c[2]=k*a+d*-h+i*-f-j*-b;return c};quat4.toMat3=function(a,b){b||(b=mat3.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=k+g;b[4]=1-(j+e);b[5]=d-f;b[6]=c-h;b[7]=d+f;b[8]=1-(j+l);return b};
quat4.toMat4=function(a,b){b||(b=mat4.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=0;b[4]=k+g;b[5]=1-(j+e);b[6]=d-f;b[7]=0;b[8]=c-h;b[9]=d+f;b[10]=1-(j+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};quat4.slerp=function(a,b,c,d){d||(d=a);var e=c;if(a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]<0)e=-1*c;d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
quat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};
/**
 * Copyleft 2010-2011 Jay and Han (laughinghan@gmail.com)
 *   under the GNU Lesser General Public License
 *     http://www.gnu.org/licenses/lgpl.html
 * Project Website: http://mathquill.com
 */(function(){function g(){}function h(){}function i(a,b,c){this.init(a,[b],[c||(a&&a.length>1?a.slice(1):a)])}function j(){}function k(b,c,d){if(!arguments.length)return;var e=this;e.parent=b,e.prev=c||0,e.next=d||0,e.jQinit(e.fold(a(),function(a,b){return b.jQ.add(a)}))}function l(c,e,f,g){function n(){m=b;var a=i.selection?"$"+i.selection.latex()+"$":"";l.val(a);if(a)if(l[0].select)l[0].select();else if(document.selection){var c=l[0].createTextRange();c.expand("textedit"),c.select()}}function q(b){return i.seek(a(b.target),b.pageX,b.pageY),(i.prev!==o.prev||i.parent!==o.parent)&&i.selectFrom(o),!1}function r(a){return delete a.target,q(a)}function s(d){o=b,i.blink=p,i.selection||(g?i.show():j.detach()),c.unbind("mousemove",q),a(document).unbind("mousemove",r).unbind("mouseup",s)}function u(){l.focus()}function v(){var a=l.val();a.slice(0,1)==="$"&&a.slice(-1)==="$"?a=a.slice(1,-1):a="\\text{"+a+"}",i.writeLatex(a).show(),l.val("")}function y(){if(x)return;var a=l.val();if(a){l.val("");for(var c=0;c<a.length;c+=1)i.parent.textInput(a.charAt(c))}else(i.selection||m!==b)&&n()}var h=c.contents().detach();f||c.addClass("mathquill-rendered-math"),e.jQ=c.data(d,{block:e,revert:function(){c.empty().unbind(".mathquill").removeClass("mathquill-rendered-math mathquill-editable mathquill-textbox").append(h)}});var i=e.cursor=new Y(e);e.renderLatex(h.text());var j=e.textarea=a('<span class="textarea"><textarea></textarea></span>'),l=j.children(),m;e.selectionChanged=function(){m===b&&(m=setTimeout(n))},c.bind("selectstart.mathquill",function(a){a.target!==l[0]&&a.preventDefault(),a.stopPropagation()});var o,p=i.blink;c.bind("mousedown.mathquill",function(b){i.blink=a.noop,i.seek(a(b.target),b.pageX,b.pageY),o=new k(i.parent,i.prev,i.next),g||c.prepend(j),c.mousemove(q),a(document).mousemove(r).mouseup(s),b.stopPropagation()});if(!g){c.bind("cut paste",!1).bind("copy",n).prepend('<span class="selectable">$'+e.latex()+"$</span>"),l.blur(function(){i.clearSelection(),setTimeout(t)});function t(){j.detach()}return}c.prepend(j),c.addClass("mathquill-editable"),f&&c.addClass("mathquill-textbox"),l.focus(function(a){i.parent||i.appendTo(e),i.parent.jQ.addClass("hasCursor"),i.selection?(i.selection.jQ.removeClass("blur"),setTimeout(e.selectionChanged)):i.show(),a.stopPropagation()}).blur(function(a){i.hide().parent.blur(),i.selection&&i.selection.jQ.addClass("blur"),a.stopPropagation()}),c.bind("focus.mathquill blur.mathquill",function(a){l.trigger(a)}).bind("mousedown.mathquill",function(){setTimeout(u)}).bind("click.mathquill",u).blur(),c.bind("cut",function(a){n(),i.selection&&setTimeout(function(){i.deleteSelection(),i.redraw()}),a.stopPropagation()}).bind("copy",function(a){n(),x=!0,a.stopPropagation()}).bind("paste",function(a){x=!0,setTimeout(v),a.stopPropagation()});var w={},x=!1;c.bind("keydown.mathquill",function(a){w.evt=a,w.happened=!0,i.parent.keydown(a)===!1&&a.preventDefault()}).bind("keypress.mathquill",function(a){w.happened?w.happened=!1:i.parent.keydown(w.evt),m!==b&&clearTimeout(m),(i.selection||m!==b)&&l.val(""),x=!1,setTimeout(y)})}function m(){}function n(a){this.init("$"),this.firstChild.cursor=a,this.firstChild.textInput=function(b){if(this.skipTextInput)return;b!=="$"||a.parent!==this?a.write(b):this.isEmpty()?a.insertAfter(this.parent).backspace().insertNew(new S("\\$","$")).show():a.next?a.prev?a.write(b):a.insertBefore(this.parent):a.insertAfter(this.parent)}}function o(){}function x(a,b){return b.prototype=a.prototype,b}function y(a){var b=Array.prototype.slice.call(arguments,1);return x(a,function(){a.apply(this,Array.prototype.concat.apply(b,arguments))})}function z(a,c,d){this.init(a,[c],b,d)}function A(a,b,c,d){this.init(a,[b],[c],d)}function B(a){this.init("\\frac",b,b,a),this.jQ.append('<span style="display:inline-block;width:0">&nbsp;</span>')}function C(){B.apply(this,arguments)}function D(a){this.init("\\sqrt",b,b,a)}function E(a){D.call(this,a),this.jQ=this.firstChild.jQ.detach().add(this.jQ)}function F(a,b,c,d,e){this.init("\\left"+c,['<span class="block"><span class="paren">'+a+'</span><span class="block"></span><span class="paren">'+b+"</span></span>"],[a,b],e),this.end="\\right"+d}function G(a,b,c,d,e){F.apply(this,arguments)}function H(a,b,c){F.call(this,a,b,a,b,c)}function I(a,b,c){G.call(this,a,b,a,b,c)}function J(a){H.call(this,"|","|",a)}function K(a){a instanceof k?this.replacedText=a.remove().jQ.text():typeof a=="string"&&(this.replacedText=a),this.init()}function L(){}function M(a,b){function d(){K.apply(this,arguments)}return c=d.prototype=new K,c.cmd=a,c.html_template=[b],d}function N(a){this.init("\\"),a&&(this.replacedFragment=a.detach(),this.isEmpty=function(){return!1})}function O(c){this.init("\\binom",b,b,c),this.jQ.wrapInner('<span class="array"></span>'),this.blockjQ=this.jQ.children(),this.bracketjQs=a('<span class="paren">(</span>').prependTo(this.jQ).add(a('<span class="paren">)</span>').appendTo(this.jQ))}function P(){O.apply(this,arguments)}function Q(a){this.init("\\vector",b,b,a)}function R(a,b){i.call(this,a,"<var>"+(b||a)+"</var>")}function S(a,b){i.call(this,a,"<span>"+(b||a)+"</span>")}function T(a,b){i.call(this,a,'<span class="nonSymbola">'+(b||a)+"</span>")}function U(a,b,c){i.call(this,a,'<span class="binary-operator">'+b+"</span>",c)}function V(a,b){S.apply(this,arguments)}function W(a,b){i.call(this,a,"<big>"+b+"</big>")}function X(a,b){i.call(this,"\\"+b+" ","<span>"+b+"</span>")}function Y(b){this.parent=this.root=b;var c=this.jQ=this._jQ=a('<span class="cursor"></span>');this.blink=function(){c.toggleClass("blink")}}function Z(a,b,c){k.apply(this,arguments)}var a=jQuery,b,c,d="[[mathquill internal data]]",e=Math.min,f=Math.max;c=g.prototype,c.prev=0,c.next=0,c.parent=0,c.firstChild=0,c.lastChild=0,c.eachChild=function(a){for(var b=this.firstChild;b;b=b.next)if(a.call(this,b)===!1)break;return this},c.foldChildren=function(a,b){return this.eachChild(function(c){a=b.call(this,a,c)}),a},c.keydown=function(a){return this.parent.keydown(a)},c.textInput=function(a){return this.parent.textInput(a)},c=h.prototype=new g,c.init=function(b,c,e,f){var g=this;b&&(g.cmd=b),c&&(g.html_template=c),e&&(g.text_template=e),g.jQ=a(g.html_template[0]).data(d,{cmd:g}),g.initBlocks(f)},c.initBlocks=function(b){var c=this;if(c.html_template.length===1){c.firstChild=c.lastChild=c.jQ.data(d).block=b&&b.blockify()||new j,c.firstChild.parent=c,c.firstChild.jQ=c.jQ.append(c.firstChild.jQ);return}var e,f,g=c.html_template.length;this.firstChild=e=f=b&&b.blockify()||new j,e.parent=c,e.jQ=a(c.html_template[1]).data(d,{block:e}).append(e.jQ).appendTo(c.jQ),e.blur();for(var h=2;h<g;h+=1)e=new j,e.parent=c,e.prev=f,f.next=e,f=e,e.jQ=a(c.html_template[h]).data(d,{block:e}).appendTo(c.jQ),e.blur();c.lastChild=e},c.latex=function(){return this.foldChildren(this.cmd,function(a,b){return a+"{"+(b.latex()||" ")+"}"})},c.text_template=[""],c.text=function(){var a=0;return this.foldChildren(this.text_template[a],function(b,c){a+=1;var d=c.text();return b&&this.text_template[a]==="("&&d[0]==="("&&d.slice(-1)===")"?b+d.slice(1,-1)+this.text_template[a]:b+c.text()+(this.text_template[a]||"")})},c.insertAt=function(a){var b=this;b.parent=a.parent,b.next=a.next,b.prev=a.prev,a.prev?a.prev.next=b:a.parent.firstChild=b,a.next?a.next.prev=b:a.parent.lastChild=b,a.prev=b,b.jQ.insertBefore(a.jQ),b.respace(),b.next&&b.next.respace(),b.prev&&b.prev.respace(),b.placeCursor(a),a.redraw()},c.respace=a.noop,c.placeCursor=function(a){a.appendTo(this.foldChildren(this.firstChild,function(a,b){return a.isEmpty()?a:b}))},c.isEmpty=function(){return this.foldChildren(!0,function(a,b){return a&&b.isEmpty()})},c.remove=function(){var a=this,b=a.prev,c=a.next,d=a.parent;return b?b.next=c:d.firstChild=c,c?c.prev=b:d.lastChild=b,a.jQ.remove(),a},c=i.prototype=new h,c.initBlocks=a.noop,c.latex=function(){return this.cmd},c.text=function(){return this.text_template},c.placeCursor=a.noop,c.isEmpty=function(){return!0},c=j.prototype=new g,c.latex=function(){return this.foldChildren("",function(a,b){return a+b.latex()})},c.text=function(){return this.firstChild===this.lastChild?this.firstChild.text():this.foldChildren("(",function(a,b){return a+b.text()})+")"},c.isEmpty=function(){return this.firstChild===0&&this.lastChild===0},c.focus=function(){return this.jQ.addClass("hasCursor"),this.isEmpty()&&this.jQ.removeClass("empty"),this},c.blur=function(){return this.jQ.removeClass("hasCursor"),this.isEmpty()&&this.jQ.addClass("empty"),this},c=k.prototype,c.remove=h.prototype.remove,c.jQinit=function(a){this.jQ=a},c.each=function(a){for(var b=this.prev.next||this.parent.firstChild;b!==this.next;b=b.next)if(a.call(this,b)===!1)break;return this},c.fold=function(a,b){return this.each(function(c){a=b.call(this,a,c)}),a},c.latex=function(){return this.fold("",function(a,b){return a+b.latex()})},c.blockify=function(){var a=this,b=a.prev,c=a.next,d=a.parent,e=new j,f=e.firstChild=b.next||d.firstChild,g=e.lastChild=c.prev||d.lastChild;return b?b.next=c:d.firstChild=c,c?c.prev=b:d.lastChild=b,f.prev=a.prev=0,g.next=a.next=0,a.parent=e,a.each(function(a){a.parent=e}),e.jQ=a.jQ,e},c=m.prototype=new j,c.latex=function(){return j.prototype.latex.call(this).replace(/(\\[a-z]+) (?![a-z])/ig,"$1")},c.text=function(){return this.foldChildren("",function(a,b){return a+b.text()})},c.renderLatex=function(a){this.jQ.children().slice(1).remove(),this.firstChild=this.lastChild=0,this.cursor.appendTo(this).writeLatex(a),this.blur()},c.keydown=function(a){a.ctrlKey=a.ctrlKey||a.metaKey;switch(a.originalEvent&&a.originalEvent.keyIdentifier||a.which){case 8:case"Backspace":case"U+0008":if(a.ctrlKey)while(this.cursor.prev||this.cursor.selection)this.cursor.backspace();else this.cursor.backspace();break;case 27:case"Esc":case"U+001B":case 9:case"Tab":case"U+0009":if(a.ctrlKey)break;var b=this.cursor.parent;if(a.shiftKey){if(b===this.cursor.root)return this.skipTextInput=!0;b.prev?this.cursor.appendTo(b.prev):this.cursor.insertBefore(b.parent)}else{if(b===this.cursor.root)return this.skipTextInput=!0;b.next?this.cursor.prependTo(b.next):this.cursor.insertAfter(b.parent)}this.cursor.clearSelection();break;case 13:case"Enter":break;case 35:case"End":if(a.shiftKey)while(this.cursor.next||a.ctrlKey&&this.cursor.parent!==this)this.cursor.selectRight();else this.cursor.clearSelection().appendTo(a.ctrlKey?this:this.cursor.parent);break;case 36:case"Home":if(a.shiftKey)while(this.cursor.prev||a.ctrlKey&&this.cursor.parent!==this)this.cursor.selectLeft();else this.cursor.clearSelection().prependTo(a.ctrlKey?this:this.cursor.parent);break;case 37:case"Left":if(a.ctrlKey)break;a.shiftKey?this.cursor.selectLeft():this.cursor.moveLeft();break;case 38:case"Up":if(a.ctrlKey)break;if(a.shiftKey)if(this.cursor.prev)while(this.cursor.prev)this.cursor.selectLeft();else this.cursor.selectLeft();else this.cursor.parent.prev?this.cursor.clearSelection().appendTo(this.cursor.parent.prev):this.cursor.prev?this.cursor.clearSelection().prependTo(this.cursor.parent):this.cursor.parent!==this&&this.cursor.clearSelection().insertBefore(this.cursor.parent.parent);break;case 39:case"Right":if(a.ctrlKey)break;a.shiftKey?this.cursor.selectRight():this.cursor.moveRight();break;case 40:case"Down":if(a.ctrlKey)break;if(a.shiftKey)if(this.cursor.next)while(this.cursor.next)this.cursor.selectRight();else this.cursor.selectRight();else this.cursor.parent.next?this.cursor.clearSelection().prependTo(this.cursor.parent.next):this.cursor.next?this.cursor.clearSelection().appendTo(this.cursor.parent):this.cursor.parent!==this&&this.cursor.clearSelection().insertAfter(this.cursor.parent.parent);break;case 46:case"Del":case"U+007F":if(a.ctrlKey)while(this.cursor.next||this.cursor.selection)this.cursor.deleteForward();else this.cursor.deleteForward();break;case 65:case"A":case"U+0041":if(a.ctrlKey&&!a.shiftKey&&!a.altKey){if(this!==this.cursor.root)return this.parent.keydown(a);this.cursor.clearSelection().appendTo(this);while(this.cursor.prev)this.cursor.selectLeft();break};default:return this.skipTextInput=!1,!0}return this.skipTextInput=!0,!1},c.textInput=function(a){this.skipTextInput||this.cursor.write(a)},c=n.prototype=new h,c.html_template=['<span class="mathquill-rendered-math"></span>'],c.initBlocks=function(){this.firstChild=this.lastChild=this.jQ.data(d).block=new m,this.firstChild.parent=this,this.firstChild.jQ=this.jQ},c.latex=function(){return"$"+this.firstChild.latex()+"$"},c=o.prototype=new j,c.renderLatex=function(a){var b=this,c=b.cursor;b.jQ.children().slice(1).remove(),b.firstChild=b.lastChild=0,c.show().appendTo(b),a=a.match(/(?:\\\$|[^$])+|\$(?:\\\$|[^$])*\$|\$(?:\\\$|[^$])*$/g)||"";for(var d=0;d<a.length;d+=1){var e=a[d];if(e[0]==="$"){e[-1+e.length]==="$"&&e[-2+e.length]!=="\\"?e=e.slice(1,-1):e=e.slice(1);var f=new n(c);c.insertNew(f),f.firstChild.renderLatex(e),c.show().insertAfter(f)}else for(var g=0;g<e.length;g+=1)this.cursor.insertNew(new S(e[g]))}},c.keydown=m.prototype.keydown,c.textInput=function(a){if(this.skipTextInput)return;this.cursor.deleteSelection(),a==="$"?this.cursor.insertNew(new n(this.cursor)):this.cursor.insertNew(new S(a))};var p={},q={},r,s=document.createElement("div"),t=s.style,u={transform:1,WebkitTransform:1,MozTransform:1,OTransform:1,msTransform:1},v;for(var w in u)if(w in t){v=w;break}v?r=function(a,b,c){a.css(v,"scale("+b+","+c+")")}:"filter"in t?r=function(a,b,c){a.css("filter","progid:DXImageTransform.Microsoft.Matrix(M11="+b+",M22="+c+",SizingMethod='auto expand')")}:r=function(a,b,c){a.css("fontSize",c+"em")},x(h,z),q.mathrm=y(z,"\\mathrm",'<span class="roman font"></span>'),q.mathit=y(z,"\\mathit",'<i class="font"></i>'),q.mathbf=y(z,"\\mathbf",'<b class="font"></b>'),q.mathsf=y(z,"\\mathsf",'<span class="sans-serif font"></span>'),q.mathtt=y(z,"\\mathtt",'<span class="monospace font"></span>'),q.underline=y(z,"\\underline",'<span class="underline"></span>'),q.overline=q.bar=y(z,"\\overline",'<span class="overline"></span>'),c=A.prototype=new h,c.latex=function(){var a=this.firstChild.latex();return a.length===1?this.cmd+a:this.cmd+"{"+(a||" ")+"}"},c.redraw=function(){this.respace(),this.next&&this.next.respace(),this.prev&&this.prev.respace()},c.respace=function(){this.prev.cmd==="\\int "||this.prev instanceof A&&this.prev.cmd!=this.cmd&&this.prev.prev&&this.prev.prev.cmd==="\\int "?this.limit||(this.limit=!0,this.jQ.addClass("limit")):this.limit&&(this.limit=!1,this.jQ.removeClass("limit"));if(this.respaced=this.prev instanceof A&&this.prev.cmd!=this.cmd&&!this.prev.respaced){var a=+this.jQ.css("fontSize").slice(0,-2),b=this.prev.jQ.outerWidth();thisWidth=this.jQ.outerWidth(),this.jQ.css({left:(this.limit&&this.cmd==="_"?-0.25:0)-b/a+"em",marginRight:.1-e(thisWidth,b)/a+"em"})}else this.limit&&this.cmd==="_"?this.jQ.css({left:"-.25em",marginRight:""}):this.jQ.css({left:"",marginRight:""});return this},q.subscript=q._=x(A,function(a){A.call(this,"_","<sub></sub>","_",a)}),q.superscript=q.supscript=q["^"]=x(A,function(a){A.call(this,"^","<sup></sup>","**",a)}),c=B.prototype=new h,c.html_template=['<span class="fraction"></span>','<span class="numerator"></span>','<span class="denominator"></span>'],c.text_template=["(","/",")"],q.frac=q.dfrac=q.cfrac=q.fraction=B,c=C.prototype=new B,c.placeCursor=function(a){if(this.firstChild.isEmpty()){var b=this.prev;while(b&&!(b instanceof U||b instanceof K||b instanceof W))b=b.prev;b instanceof W&&b.next instanceof A&&(b=b.next,b.next instanceof A&&b.next.cmd!=b.cmd&&(b=b.next));if(b!==this.prev){var c=(new k(this.parent,b,this)).blockify();c.jQ=this.firstChild.jQ.empty().removeClass("empty").append(c.jQ).data(d,{block:c}),c.next=this.lastChild,c.parent=this,this.firstChild=this.lastChild.prev=c}}a.appendTo(this.lastChild)},q.over=p["/"]=C,c=D.prototype=new h,c.html_template=['<span class="block"><span class="sqrt-prefix">&radic;</span></span>','<span class="sqrt-stem"></span>'],c.text_template=["sqrt(",")"],c.redraw=function(){var a=this.lastChild.jQ;r(a.prev(),1,a.innerHeight()/+a.css("fontSize").slice(0,-2)-.1)},q.sqrt=q["√"]=D,c=E.prototype=new D,c.html_template=['<span class="block"><span class="sqrt-prefix">&radic;</span></span>','<sup class="nthroot"></sup>','<span class="sqrt-stem"></span>'],c.text_template=["sqrt[","](",")"],c.latex=function(){return"\\sqrt["+this.firstChild.latex()+"]{"+this.lastChild.latex()+"}"},q.nthroot=E,c=F.prototype=new h,c.initBlocks=function(a){this.firstChild=this.lastChild=a&&a.blockify()||new j,this.firstChild.parent=this,this.firstChild.jQ=this.jQ.children(":eq(1)").data(d,{block:this.firstChild}).append(this.firstChild.jQ);var b=this.blockjQ=this.firstChild.jQ;this.bracketjQs=b.prev().add(b.next())},c.latex=function(){return this.cmd+this.firstChild.latex()+this.end},c.redraw=function(){var a=this.blockjQ.outerHeight()/+this.blockjQ.css("fontSize").slice(0,-2);r(this.bracketjQs,e(1+.2*(a-1),1.2),1.05*a)},q.lbrace=p["{"]=x(F,function(a){F.call(this,"{","}","\\{","\\}",a)}),q.langle=q.lang=x(F,function(a){F.call(this,"&lang;","&rang;","\\langle ","\\rangle ",a)}),c=G.prototype=new F,c.placeCursor=function(a){!this.next&&this.parent.parent&&this.parent.parent.end===this.end&&this.firstChild.isEmpty()?a.backspace().insertAfter(this.parent.parent):this.firstChild.blur()},q.rbrace=p["}"]=x(G,function(a){G.call(this,"{","}","\\{","\\}",a)}),q.rangle=q.rang=x(G,function(a){G.call(this,"&lang;","&rang;","\\langle ","\\rangle ",a)}),H.prototype=F.prototype,q.lparen=p["("]=x(H,function(a){H.call(this,"(",")",a)}),q.lbrack=q.lbracket=p["["]=x(H,function(a){H.call(this,"[","]",a)}),I.prototype=G.prototype,q.rparen=p[")"]=x(I,function(a){I.call(this,"(",")",a)}),q.rbrack=q.rbracket=p["]"]=x(I,function(a){I.call(this,"[","]",a)}),c=J.prototype=new H,c.placeCursor=function(a){!this.next&&this.parent.parent&&this.parent.parent.end===this.end&&this.firstChild.isEmpty()?a.backspace().insertAfter(this.parent.parent):a.appendTo(this.firstChild)},q.lpipe=q.rpipe=p["|"]=J,c=K.prototype=new h,c.cmd="\\text",c.html_template=['<span class="text"></span>'],c.text_template=['"','"'],c.initBlocks=function(){this.firstChild=this.lastChild=this.jQ.data(d).block=new L,this.firstChild.parent=this,this.firstChild.jQ=this.jQ.append(this.firstChild.jQ)},c.placeCursor=function(a){(this.cursor=a).appendTo(this.firstChild);if(this.replacedText)for(var b=0;b<this.replacedText.length;b+=1)this.write(this.replacedText.charAt(b))},c.write=function(a){this.cursor.insertNew(new S(a))},c.keydown=function(a){return!this.cursor.selection&&(a.which===8&&!this.cursor.prev||a.which===46&&!this.cursor.next)?(this.isEmpty()&&this.cursor.insertAfter(this),!1):this.parent.keydown(a)},c.textInput=function(a){this.cursor.deleteSelection();if(a!=="$")this.write(a);else if(this.isEmpty())this.cursor.insertAfter(this).backspace().insertNew(new S("\\$","$"));else if(!this.cursor.next)this.cursor.insertAfter(this);else if(!this.cursor.prev)this.cursor.insertBefore(this);else{var b=new K(new k(this.firstChild,this.cursor.prev));b.placeCursor=function(a){this.prev=0,delete this.placeCursor,this.placeCursor(a)},b.firstChild.focus=function(){return this},this.cursor.insertAfter(this).insertNew(b),b.prev=this,this.cursor.insertBefore(b),delete b.firstChild.focus}},c=L.prototype=new j,c.blur=function(){this.jQ.removeClass("hasCursor");if(this.isEmpty()){var a=this.parent,b=a.cursor;b.parent===this?this.jQ.addClass("empty"):(b.hide(),a.remove(),b.next===a?b.next=a.next:b.prev===a&&(b.prev=a.prev),b.show().redraw())}return this},c.focus=function(){j.prototype.focus.call(this);var a=this.parent;if(a.next.cmd===a.cmd){var b=this,c=a.cursor,d=a.next.firstChild;d.eachChild(function(a){a.parent=b,a.jQ.appendTo(b.jQ)}),this.lastChild?this.lastChild.next=d.firstChild:this.firstChild=d.firstChild,d.firstChild.prev=this.lastChild,this.lastChild=d.lastChild,d.parent.remove(),c.prev?c.insertAfter(c.prev):c.prependTo(this),c.redraw()}else if(a.prev.cmd===a.cmd){var c=a.cursor;c.prev?a.prev.firstChild.focus():c.appendTo(a.prev.firstChild)}return this},p.$=q.text=q.textnormal=q.textrm=q.textup=q.textmd=K,q.em=q.italic=q.italics=q.emph=q.textit=q.textsl=M("\\textit",'<i class="text"></i>'),q.strong=q.bold=q.textbf=M("\\textbf",'<b class="text"></b>'),q.sf=q.textsf=M("\\textsf",'<span class="sans-serif text"></span>'),q.tt=q.texttt=M("\\texttt",'<span class="monospace text"></span>'),q.textsc=M("\\textsc",'<span style="font-variant:small-caps" class="text"></span>'),q.uppercase=M("\\uppercase",'<span style="text-transform:uppercase" class="text"></span>'),q.lowercase=M("\\lowercase",'<span style="text-transform:lowercase" class="text"></span>'),c=N.prototype=new h,c.html_template=['<span class="latex-command-input">\\</span>'],c.text_template=["\\"],c.placeCursor=function(b){this.cursor=b.appendTo(this.firstChild),this.replacedFragment&&(this.jQ=this.jQ.add(this.replacedFragment.jQ.addClass("blur").bind("mousedown mousemove",function(b){return a(b.target=this.nextSibling).trigger(b),!1}).insertBefore(this.jQ)))},c.latex=function(){return"\\"+this.firstChild.latex()+" "},c.keydown=function(a){return a.which===9||a.which===13?(this.renderCommand(),!1):this.parent.keydown(a)},c.textInput=function(a){if(a.match(/[a-z]/i)){this.cursor.deleteSelection(),this.cursor.insertNew(new S(a));return}this.renderCommand();if(a===" "||a==="\\"&&this.firstChild.isEmpty())return;this.cursor.parent.textInput(a)},c.renderCommand=function(){this.jQ=this.jQ.last(),this.remove(),this.next?this.cursor.insertBefore(this.next):this.cursor.appendTo(this.parent);var a=this.firstChild.latex(),b;if(a)if(b=q[a])b=new b(this.replacedFragment,a);else{b=new K(a),b.firstChild.focus=function(){return delete this.focus,this},this.cursor.insertNew(b).insertAfter(b),this.replacedFragment&&this.replacedFragment.remove();return}else b=new S("\\backslash ","\\");this.cursor.insertNew(b),b instanceof i&&this.replacedFragment&&this.replacedFragment.remove()},p["\\"]=N,c=O.prototype=new h,c.html_template=['<span class="block"></span>',"<span></span>","<span></span>"],c.text_template=["choose(",",",")"],c.redraw=F.prototype.redraw,q.binom=q.binomial=O,c=P.prototype=new O,c.placeCursor=C.prototype.placeCursor,q.choose=P,c=Q.prototype=new h,c.html_template=['<span class="array"></span>',"<span></span>"],c.latex=function(){return"\\begin{matrix}"+this.foldChildren([],function(a,b){return a.push(b.latex()),a}).join("\\\\")+"\\end{matrix}"},c.text=function(){return"["+this.foldChildren([],function(a,b){return a.push(b.text()),a}).join()+"]"},c.placeCursor=function(a){this.cursor=a.appendTo(this.firstChild)},c.keydown=function(b){var c=this.cursor.parent;if(c.parent===this){if(b.which===13){var e=new j;return e.parent=this,e.jQ=a("<span></span>").data(d,{block:e}).insertAfter(c.jQ),c.next?c.next.prev=e:this.lastChild=e,e.next=c.next,c.next=e,e.prev=c,this.cursor.appendTo(e).redraw(),!1}if(b.which===9&&!b.shiftKey&&!c.next){if(c.isEmpty())return c.prev?(this.cursor.insertAfter(this),delete c.prev.next,this.lastChild=c.prev,c.jQ.remove(),this.cursor.redraw(),!1):this.parent.keydown(b);var e=new j;return e.parent=this,e.jQ=a("<span></span>").data(d,{block:e}).appendTo(this.jQ),this.lastChild=e,c.next=e,e.prev=c,this.cursor.appendTo(e).redraw(),!1}if(b.which===8){if(c.isEmpty())return c.prev?(this.cursor.appendTo(c.prev),c.prev.next=c.next):(this.cursor.insertBefore(this),this.firstChild=c.next),c.next?c.next.prev=c.prev:this.lastChild=c.prev,c.jQ.remove(),this.isEmpty()?this.cursor.deleteForward():this.cursor.redraw(),!1;if(!this.cursor.prev)return!1}}return this.parent.keydown(b)},q.vector=Q,q.editable=x(n,function(){this.init("\\editable"),l(this.jQ,this.firstChild,!1,!0);var a;this.placeCursor=function(b){a=b.appendTo(this.firstChild)},this.firstChild.blur=function(){if(a.prev!==this.parent)return;delete this.blur,this.cursor.appendTo(this),j.prototype.blur.call(this)},this.latex=function(){return this.firstChild.latex()},this.text=function(){return this.firstChild.text()}}),q.f=y(i,"f",'<var class="florin">&fnof;</var>'),c=R.prototype=new i,c.text=function(){var a=this.cmd;return this.prev&&!(this.prev instanceof R)&&!(this.prev instanceof U)&&(a="*"+a),this.next&&!(this.next instanceof U)&&this.next.cmd!=="^"&&(a+="*"),a},S.prototype=i.prototype,p[" "]=y(S,"\\:"," "),q.prime=p["'"]=y(S,"'","&prime;"),T.prototype=i.prototype,q["@"]=T,q["&"]=y(T,"\\&","&"),q["%"]=y(T,"\\%","%"),q.alpha=q.beta=q.gamma=q.delta=q.zeta=q.eta=q.theta=q.iota=q.kappa=q.mu=q.nu=q.xi=q.rho=q.sigma=q.tau=q.chi=q.psi=q.omega=x(i,function(a,b){R.call(this,"\\"+b+" ","&"+b+";")}),q.phi=y(R,"\\phi ","&#981;"),q.phiv=q.varphi=y(R,"\\varphi ","&phi;"),q.epsilon=y(R,"\\epsilon ","&#1013;"),q.epsiv=q.varepsilon=y(R,"\\varepsilon ","&epsilon;"),q.piv=q.varpi=y(R,"\\varpi ","&piv;"),q.sigmaf=q.sigmav=q.varsigma=y(R,"\\varsigma ","&sigmaf;"),q.thetav=q.vartheta=q.thetasym=y(R,"\\vartheta ","&thetasym;"),q.upsilon=q.upsi=y(R,"\\upsilon ","&upsilon;"),q.gammad=q.Gammad=q.digamma=y(R,"\\digamma ","&#989;"),q.kappav=q.varkappa=y(R,"\\varkappa ","&#1008;"),q.rhov=q.varrho=y(R,"\\varrho ","&#1009;"),q.pi=q["π"]=y(T,"\\pi ","&pi;"),q.lambda=y(T,"\\lambda ","&lambda;"),q.Upsilon=q.Upsi=q.upsih=q.Upsih=y(i,"\\Upsilon ",'<var style="font-family: serif">&upsih;</var>'),q.Gamma=q.Delta=q.Theta=q.Lambda=q.Xi=q.Pi=q.Sigma=q.Phi=q.Psi=q.Omega=q.forall=x(i,function(a,b){S.call(this,"\\"+b+" ","&"+b+";")}),U.prototype=new i,c=V.prototype=new U,c.respace=function(){return this.prev?this.prev instanceof U&&this.next&&!(this.next instanceof U)?this.jQ[0].className="unary-operator":this.jQ[0].className="binary-operator":this.jQ[0].className="",this},q["+"]=y(V,"+"),q["-"]=y(V,"-","&minus;"),q.pm=q.plusmn=q.plusminus=y(V,"\\pm ","&plusmn;"),q.mp=q.mnplus=q.minusplus=y(V,"\\mp ","&#8723;"),p["*"]=q.sdot=q.cdot=y(U,"\\cdot ","&middot;"),q["="]=y(U,"=","="),q["<"]=y(U,"<","&lt;"),q[">"]=y(U,">","&gt;"),q.notin=q.sim=q.cong=q.equiv=q.oplus=q.otimes=x(U,function(a,b){U.call(this,"\\"+b+" ","&"+b+";")}),q.times=x(U,function(a,b){U.call(this,"\\times ","&times;","[x]")}),q.div=q.divide=q.divides=y(U,"\\div ","&divide;","[/]"),q.ne=q.neq=y(U,"\\ne ","&ne;"),q.ast=q.star=q.loast=q.lowast=y(U,"\\ast ","&lowast;"),q.therefor=q.therefore=y(U,"\\therefore ","&there4;"),q.cuz=q.because=y(U,"\\because ","&#8757;"),q.prop=q.propto=y(U,"\\propto ","&prop;"),q.asymp=q.approx=y(U,"\\approx ","&asymp;"),q.lt=y(U,"<","&lt;"),q.gt=y(U,">","&gt;"),q.le=q.leq=y(U,"\\le ","&le;"),q.ge=q.geq=y(U,"\\ge ","&ge;"),q.isin=q["in"]=y(U,"\\in ","&isin;"),q.ni=q.contains=y(U,"\\ni ","&ni;"),q.notni=q.niton=q.notcontains=q.doesnotcontain=y(U,"\\not\\ni ","&#8716;"),q.sub=q.subset=y(U,"\\subset ","&sub;"),q.sup=q.supset=q.superset=y(U,"\\supset ","&sup;"),q.nsub=q.notsub=q.nsubset=q.notsubset=y(U,"\\not\\subset ","&#8836;"),q.nsup=q.notsup=q.nsupset=q.notsupset=q.nsuperset=q.notsuperset=y(U,"\\not\\supset ","&#8837;"),q.sube=q.subeq=q.subsete=q.subseteq=y(U,"\\subseteq ","&sube;"),q.supe=q.supeq=q.supsete=q.supseteq=q.supersete=q.superseteq=y(U,"\\supseteq ","&supe;"),q.nsube=q.nsubeq=q.notsube=q.notsubeq=q.nsubsete=q.nsubseteq=q.notsubsete=q.notsubseteq=y(U,"\\not\\subseteq ","&#8840;"),q.nsupe=q.nsupeq=q.notsupe=q.notsupeq=q.nsupsete=q.nsupseteq=q.notsupsete=q.notsupseteq=q.nsupersete=q.nsuperseteq=q.notsupersete=q.notsuperseteq=y(U,"\\not\\supseteq ","&#8841;"),W.prototype=new i,q.sum=q.summation=y(W,"\\sum ","&sum;"),q.prod=q.product=y(W,"\\prod ","&prod;"),q.coprod=q.coproduct=y(W,"\\coprod ","&#8720;"),q.int=q.integral=q["∫"]=y(W,"\\int ","&int;"),q.N=q.naturals=q.Naturals=y(S,"\\mathbb{N}","&#8469;"),q.P=q.primes=q.Primes=q.projective=q.Projective=q.probability=q.Probability=y(S,"\\mathbb{P}","&#8473;"),q.Z=q.integers=q.Integers=y(S,"\\mathbb{Z}","&#8484;"),q.Q=q.rationals=q.Rationals=y(S,"\\mathbb{Q}","&#8474;"),q.R=q.reals=q.Reals=y(S,"\\mathbb{R}","&#8477;"),q.C=q.complex=q.Complex=q.complexes=q.Complexes=q.complexplane=q.Complexplane=q.ComplexPlane=y(S,"\\mathbb{C}","&#8450;"),q.H=q.Hamiltonian=q.quaternions=q.Quaternions=y(S,"\\mathbb{H}","&#8461;"),q.quad=q.emsp=y(S,"\\quad ","    "),q.qquad=y(S,"\\qquad ","        "),q.diamond=y(S,"\\diamond ","&#9671;"),q.bigtriangleup=y(S,"\\bigtriangleup ","&#9651;"),q.ominus=y(S,"\\ominus ","&#8854;"),q.uplus=y(S,"\\uplus ","&#8846;"),q.bigtriangledown=y(S,"\\bigtriangledown ","&#9661;"),q.sqcap=y(S,"\\sqcap ","&#8851;"),q.triangleleft=y(S,"\\triangleleft ","&#8882;"),q.sqcup=y(S,"\\sqcup ","&#8852;"),q.triangleright=y(S,"\\triangleright ","&#8883;"),q.odot=y(S,"\\odot ","&#8857;"),q.bigcirc=y(S,"\\bigcirc ","&#9711;"),q.dagger=y(S,"\\dagger ","&#0134;"),q.ddagger=y(S,"\\ddagger ","&#135;"),q.wr=y(S,"\\wr ","&#8768;"),q.amalg=y(S,"\\amalg ","&#8720;"),q.models=y(S,"\\models ","&#8872;"),q.prec=y(S,"\\prec ","&#8826;"),q.succ=y(S,"\\succ ","&#8827;"),q.preceq=y(S,"\\preceq ","&#8828;"),q.succeq=y(S,"\\succeq ","&#8829;"),q.simeq=y(S,"\\simeq ","&#8771;"),q.mid=y(S,"\\mid ","&#8739;"),q.ll=y(S,"\\ll ","&#8810;"),q.gg=y(S,"\\gg ","&#8811;"),q.parallel=y(S,"\\parallel ","&#8741;"),q.bowtie=y(S,"\\bowtie ","&#8904;"),q.sqsubset=y(S,"\\sqsubset ","&#8847;"),q.sqsupset=y(S,"\\sqsupset ","&#8848;"),q.smile=y(S,"\\smile ","&#8995;"),q.sqsubseteq=y(S,"\\sqsubseteq ","&#8849;"),q.sqsupseteq=y(S,"\\sqsupseteq ","&#8850;"),q.doteq=y(S,"\\doteq ","&#8784;"),q.frown=y(S,"\\frown ","&#8994;"),q.vdash=y(S,"\\vdash ","&#8870;"),q.dashv=y(S,"\\dashv ","&#8867;"),q.longleftarrow=y(S,"\\longleftarrow ","&#8592;"),q.longrightarrow=y(S,"\\longrightarrow ","&#8594;"),q.Longleftarrow=y(S,"\\Longleftarrow ","&#8656;"),q.Longrightarrow=y(S,"\\Longrightarrow ","&#8658;"),q.longleftrightarrow=y(S,"\\longleftrightarrow ","&#8596;"),q.updownarrow=y(S,"\\updownarrow ","&#8597;"),q.Longleftrightarrow=y(S,"\\Longleftrightarrow ","&#8660;"),q.Updownarrow=y(S,"\\Updownarrow ","&#8661;"),q.mapsto=y(S,"\\mapsto ","&#8614;"),q.nearrow=y(S,"\\nearrow ","&#8599;"),q.hookleftarrow=y(S,"\\hookleftarrow ","&#8617;"),q.hookrightarrow=y(S,"\\hookrightarrow ","&#8618;"),q.searrow=y(S,"\\searrow ","&#8600;"),q.leftharpoonup=y(S,"\\leftharpoonup ","&#8636;"),q.rightharpoonup=y(S,"\\rightharpoonup ","&#8640;"),q.swarrow=y(S,"\\swarrow ","&#8601;"),q.leftharpoondown=y(S,"\\leftharpoondown ","&#8637;"),q.rightharpoondown=y(S,"\\rightharpoondown ","&#8641;"),q.nwarrow=y(S,"\\nwarrow ","&#8598;"),q.ldots=y(S,"\\ldots ","&#8230;"),q.cdots=y(S,"\\cdots ","&#8943;"),q.vdots=y(S,"\\vdots ","&#8942;"),q.ddots=y(S,"\\ddots ","&#8944;"),q.surd=y(S,"\\surd ","&#8730;"),q.triangle=y(S,"\\triangle ","&#9653;"),q.ell=y(S,"\\ell ","&#8467;"),q.top=y(S,"\\top ","&#8868;"),q.flat=y(S,"\\flat ","&#9837;"),q.natural=y(S,"\\natural ","&#9838;"),q.sharp=y(S,"\\sharp ","&#9839;"),q.wp=y(S,"\\wp ","&#8472;"),q.bot=y(S,"\\bot ","&#8869;"),q.clubsuit=y(S,"\\clubsuit ","&#9827;"),q.diamondsuit=y(S,"\\diamondsuit ","&#9826;"),q.heartsuit=y(S,"\\heartsuit ","&#9825;"),q.spadesuit=y(S,"\\spadesuit ","&#9824;"),q.oint=y(S,"\\oint ","&#8750;"),q.bigcap=y(S,"\\bigcap ","&#8745;"),q.bigcup=y(S,"\\bigcup ","&#8746;"),q.bigsqcup=y(S,"\\bigsqcup ","&#8852;"),q.bigvee=y(S,"\\bigvee ","&#8744;"),q.bigwedge=y(S,"\\bigwedge ","&#8743;"),q.bigodot=y(S,"\\bigodot ","&#8857;"),q.bigotimes=y(S,"\\bigotimes ","&#8855;"),q.bigoplus=y(S,"\\bigoplus ","&#8853;"),q.biguplus=y(S,"\\biguplus ","&#8846;"),q.lfloor=y(S,"\\lfloor ","&#8970;"),q.rfloor=y(S,"\\rfloor ","&#8971;"),q.lceil=y(S,"\\lceil ","&#8968;"),q.rceil=y(S,"\\rceil ","&#8969;"),q.slash=y(S,"\\slash ","&#47;"),q.opencurlybrace=y(S,"\\opencurlybrace ","&#123;"),q.closecurlybrace=y(S,"\\closecurlybrace ","&#125;"),q.caret=y(S,"\\caret ","^"),q.underscore=y(S,"\\underscore ","_"),q.backslash=y(S,"\\backslash ","\\"),q.vert=y(S,"|"),q.perp=q.perpendicular=y(S,"\\perp ","&perp;"),q.nabla=q.del=y(S,"\\nabla ","&nabla;"),q.hbar=y(S,"\\hbar ","&#8463;"),q.AA=q.Angstrom=q.angstrom=y(S,"\\text\\AA ","&#8491;"),q.ring=q.circ=q.circle=y(S,"\\circ ","&#8728;"),q.bull=q.bullet=y(S,"\\bullet ","&bull;"),q.setminus=q.smallsetminus=y(S,"\\setminus ","&#8726;"),q.not=q.neg=y(S,"\\neg ","&not;"),q.dots=q.ellip=q.hellip=q.ellipsis=q.hellipsis=y(S,"\\dots ","&hellip;"),q.converges=q.darr=q.dnarr=q.dnarrow=q.downarrow=y(S,"\\downarrow ","&darr;"),q.dArr=q.dnArr=q.dnArrow=q.Downarrow=y(S,"\\Downarrow ","&dArr;"),q.diverges=q.uarr=q.uparrow=y(S,"\\uparrow ","&uarr;"),q.uArr=q.Uparrow=y(S,"\\Uparrow ","&uArr;"),q.to=y(U,"\\to ","&rarr;"),q.rarr=q.rightarrow=y(S,"\\rightarrow ","&rarr;"),q.implies=y(U,"\\Rightarrow ","&rArr;"),q.rArr=q.Rightarrow=y(S,"\\Rightarrow ","&rArr;"),q.gets=y(U,"\\gets ","&larr;"),q.larr=q.leftarrow=y(S
,"\\leftarrow ","&larr;"),q.impliedby=y(U,"\\Leftarrow ","&lArr;"),q.lArr=q.Leftarrow=y(S,"\\Leftarrow ","&lArr;"),q.harr=q.lrarr=q.leftrightarrow=y(S,"\\leftrightarrow ","&harr;"),q.iff=y(U,"\\Leftrightarrow ","&hArr;"),q.hArr=q.lrArr=q.Leftrightarrow=y(S,"\\Leftrightarrow ","&hArr;"),q.Re=q.Real=q.real=y(S,"\\Re ","&real;"),q.Im=q.imag=q.image=q.imagin=q.imaginary=q.Imaginary=y(S,"\\Im ","&image;"),q.part=q.partial=y(S,"\\partial ","&part;"),q.inf=q.infin=q.infty=q.infinity=y(S,"\\infty ","&infin;"),q.alef=q.alefsym=q.aleph=q.alephsym=y(S,"\\aleph ","&alefsym;"),q.xist=q.xists=q.exist=q.exists=y(S,"\\exists ","&exist;"),q.and=q.land=q.wedge=y(S,"\\wedge ","&and;"),q.or=q.lor=q.vee=y(S,"\\vee ","&or;"),q.o=q.O=q.empty=q.emptyset=q.oslash=q.Oslash=q.nothing=q.varnothing=y(U,"\\varnothing ","&empty;"),q.cup=q.union=y(S,"\\cup ","&cup;"),q.cap=q.intersect=q.intersection=y(S,"\\cap ","&cap;"),q.deg=q.degree=y(S,"^\\circ ","&deg;"),q.ang=q.angle=y(S,"\\angle ","&ang;"),c=X.prototype=new i,c.respace=function(){this.jQ[0].className=this.next instanceof A||this.next instanceof F?"":"non-italicized-function"},q.ln=q.lg=q.log=q.span=q.proj=q.det=q.dim=q.min=q.max=q.mod=q.lcm=q.gcd=q.gcf=q.hcf=q.lim=X,function(){var a=["sin","cos","tan","sec","cosec","csc","cotan","cot"];for(var b in a)q[a[b]]=q[a[b]+"h"]=q["a"+a[b]]=q["arc"+a[b]]=q["a"+a[b]+"h"]=q["arc"+a[b]+"h"]=X}(),c=Y.prototype,c.prev=0,c.next=0,c.parent=0,c.show=function(){return this.jQ=this._jQ.removeClass("blink"),"intervalId"in this?clearInterval(this.intervalId):(this.next?this.selection&&this.selection.prev===this.prev?this.jQ.insertBefore(this.selection.jQ):this.jQ.insertBefore(this.next.jQ.first()):this.jQ.appendTo(this.parent.jQ),this.parent.focus()),this.intervalId=setInterval(this.blink,500),this},c.hide=function(){return"intervalId"in this&&clearInterval(this.intervalId),delete this.intervalId,this.jQ.detach(),this.jQ=a(),this},c.redraw=function(){for(var a=this.parent;a;a=a.parent)a.redraw&&a.redraw()},c.insertAt=function(a,b,c){var d=this.parent;this.parent=a,this.prev=b,this.next=c,d.blur()},c.insertBefore=function(a){return this.insertAt(a.parent,a.prev,a),this.parent.jQ.addClass("hasCursor"),this.jQ.insertBefore(a.jQ.first()),this},c.insertAfter=function(a){return this.insertAt(a.parent,a,a.next),this.parent.jQ.addClass("hasCursor"),this.jQ.insertAfter(a.jQ.last()),this},c.prependTo=function(a){return this.insertAt(a,0,a.firstChild),a.textarea?this.jQ.insertAfter(a.textarea):this.jQ.prependTo(a.jQ),a.focus(),this},c.appendTo=function(a){return this.insertAt(a,a.lastChild,0),this.jQ.appendTo(a.jQ),a.focus(),this},c.hopLeft=function(){return this.jQ.insertBefore(this.prev.jQ.first()),this.next=this.prev,this.prev=this.prev.prev,this},c.hopRight=function(){return this.jQ.insertAfter(this.next.jQ.last()),this.prev=this.next,this.next=this.next.next,this},c.moveLeft=function(){return this.selection?this.insertBefore(this.selection.prev.next||this.parent.firstChild).clearSelection():this.prev?this.prev.lastChild?this.appendTo(this.prev.lastChild):this.hopLeft():this.parent.prev?this.appendTo(this.parent.prev):this.parent!==this.root&&this.insertBefore(this.parent.parent),this.show()},c.moveRight=function(){return this.selection?this.insertAfter(this.selection.next.prev||this.parent.lastChild).clearSelection():this.next?this.next.firstChild?this.prependTo(this.next.firstChild):this.hopRight():this.parent.next?this.prependTo(this.parent.next):this.parent!==this.root&&this.insertAfter(this.parent.parent),this.show()},c.seek=function(a,b,c){var e=this.clearSelection();if(a.hasClass("empty"))return e.prependTo(a.data(d).block),e;var f=a.data(d);if(f){if(f.cmd&&!f.block)return a.outerWidth()>2*(b-a.offset().left)?e.insertBefore(f.cmd):e.insertAfter(f.cmd),e}else a=a.parent(),f=a.data(d),f||(f={block:e.root});f.cmd?e.insertAfter(f.cmd):e.appendTo(f.block);var g=e.jQ.offset().left-b,h;do e.moveLeft(),h=g,g=e.jQ.offset().left-b;while(g>0&&(e.prev||e.parent!==e.root));return-g>h&&e.moveRight(),e},c.writeLatex=function(a){return this.deleteSelection(),a=a&&a.match(/\\text\{([^}]|\\\})*\}|\\[a-z]*|[^\s]/ig)||0,function c(d){while(a.length){var e=a.shift();if(!e||e==="}")return;var f;if(e.slice(0,6)==="\\text{"){f=new K(e.slice(6,-1)),d.insertNew(f).insertAfter(f);continue}if(e==="\\left"||e==="\\right"){e=a.shift(),e==="\\"&&(e=a.shift()),d.insertCh(e),f=d.prev||d.parent.parent;if(d.prev)return;a.unshift("{")}else if(/^\\[a-z]+$/i.test(e)){e=e.slice(1);var f=q[e];if(f)d.insertNew(f=new f(b,e));else{f=new K(e),d.insertNew(f).insertAfter(f);continue}}else e.match(/[a-eg-zA-Z]/)?f=new R(e):(f=q[e])?f=new f:f=new S(e),d.insertNew(f);f.eachChild(function(b){d.appendTo(b);var e=a.shift();if(!e)return!1;e==="{"?c(d):d.insertCh(e)}),d.insertAfter(f)}}(this),this.hide()},c.write=function(a){return this.show().insertCh(a)},c.insertCh=function(a){this.selection&&(this.prev=this.selection.prev,this.next=this.selection.next);var b;return a.match(/^[a-eg-zA-Z]$/)?b=new R(a):(b=p[a]||q[a])?b=new b(this.selection,a):b=new S(a),this.selection&&(b instanceof i&&this.selection.remove(),delete this.selection),this.insertNew(b)},c.insertNew=function(a){return a.insertAt(this),this},c.unwrapGramp=function(){var a=this.parent.parent,b=a.parent,c=a.prev,d=this;a.eachChild(function(d){if(d.isEmpty())return;d.eachChild(function(c){c.parent=b,c.jQ.insertBefore(a.jQ.first())}),d.firstChild.prev=c,c?c.next=d.firstChild:b.firstChild=d.firstChild,c=d.lastChild}),c.next=a.next,a.next?a.next.prev=c:b.lastChild=c;if(!this.next)if(this.prev)this.next=this.prev.next;else while(!this.next){this.parent=this.parent.next;if(this.parent)this.next=this.parent.firstChild;else{this.next=a.next,this.parent=b;break}}this.next?this.insertBefore(this.next):this.appendTo(b),a.jQ.remove(),a.prev&&a.prev.respace(),a.next&&a.next.respace()},c.backspace=function(){if(!this.deleteSelection())if(this.prev)this.prev.isEmpty()?this.prev=this.prev.remove().prev:this.selectLeft();else if(this.parent!==this.root){if(this.parent.parent.isEmpty())return this.insertAfter(this.parent.parent).backspace();this.unwrapGramp()}return this.prev&&this.prev.respace(),this.next&&this.next.respace(),this.redraw(),this},c.deleteForward=function(){if(!this.deleteSelection())if(this.next)this.next.isEmpty()?this.next=this.next.remove().next:this.selectRight();else if(this.parent!==this.root){if(this.parent.parent.isEmpty())return this.insertBefore(this.parent.parent).deleteForward();this.unwrapGramp()}return this.prev&&this.prev.respace(),this.next&&this.next.respace(),this.redraw(),this},c.selectFrom=function(a){var b=this,c=a;d:for(;;){for(var e=this;e!==b.parent.parent;e=e.parent.parent)if(e.parent===c.parent){g=e,h=c;break d}for(var f=a;f!==c.parent.parent;f=f.parent.parent)if(b.parent===f.parent){g=b,h=f;break d}b.parent.parent&&(b=b.parent.parent),c.parent.parent&&(c=c.parent.parent)}var g,h,i;if(g.next!==h){for(var j=g;j;j=j.next)if(j===h.prev){i=!0;break}i||(i=h,h=g,g=i)}this.hide().selection=new Z(g.parent,g.prev,h.next),this.insertAfter(h.next.prev||h.parent.lastChild),this.root.selectionChanged()},c.selectLeft=function(){if(this.selection)if(this.selection.prev===this.prev)this.prev?(this.hopLeft().next.jQ.prependTo(this.selection.jQ),this.selection.prev=this.prev):this.parent!==this.root&&this.insertBefore(this.parent.parent).selection.levelUp();else{this.prev.jQ.insertAfter(this.selection.jQ),this.hopLeft().selection.next=this.next;if(this.selection.prev===this.prev){this.deleteSelection();return}}else{if(this.prev)this.hopLeft();else if(this.parent!==this.root)this.insertBefore(this.parent.parent);else return;this.hide().selection=new Z(this.parent,this.prev,this.next.next)}this.root.selectionChanged()},c.selectRight=function(){if(this.selection)if(this.selection.next===this.next)this.next?(this.hopRight().prev.jQ.appendTo(this.selection.jQ),this.selection.next=this.next):this.parent!==this.root&&this.insertAfter(this.parent.parent).selection.levelUp();else{this.next.jQ.insertBefore(this.selection.jQ),this.hopRight().selection.prev=this.prev;if(this.selection.next===this.next){this.deleteSelection();return}}else{if(this.next)this.hopRight();else if(this.parent!==this.root)this.insertAfter(this.parent.parent);else return;this.hide().selection=new Z(this.parent,this.prev.prev,this.next)}this.root.selectionChanged()},c.clearSelection=function(){return this.show().selection&&(this.selection.clear(),delete this.selection,this.root.selectionChanged()),this},c.deleteSelection=function(){return this.show().selection?(this.prev=this.selection.prev,this.next=this.selection.next,this.selection.remove(),delete this.selection,this.root.selectionChanged(),!0):!1},c=Z.prototype=new k,c.jQinit=function(a){this.jQ=a.wrapAll('<span class="selection"></span>').parent()},c.levelUp=function(){return this.clear().jQinit(this.parent.parent.jQ),this.prev=this.parent.parent.prev,this.next=this.parent.parent.next,this.parent=this.parent.parent.parent,this},c.clear=function(){return this.jQ.replaceWith(this.jQ.children()),this},c.blockify=function(){return this.jQ.replaceWith(this.jQ=this.jQ.children()),k.prototype.blockify.call(this)},c.detach=function(){var a=k.prototype.blockify.call(this);return this.blockify=function(){return this.jQ.replaceWith(a.jQ=this.jQ=this.jQ.children()),a},this},a.fn.mathquill=function(b,c){switch(b){case"redraw":return this.find(":not(:has(:first))").each(function(){var b=a(this).data(d);b&&(b.cmd||b.block)&&Y.prototype.redraw.call(b.cmd||b.block)}),this;case"revert":return this.each(function(){var b=a(this).data(d);b&&b.revert&&b.revert()});case"latex":if(arguments.length>1)return this.each(function(){var b=a(this).data(d);b&&b.block&&b.block.renderLatex&&b.block.renderLatex(c)});var e=this.data(d);return e&&e.block&&e.block.latex();case"text":var e=this.data(d);return e&&e.block&&e.block.text();case"html":return this.html().replace(/ ?hasCursor|hasCursor /,"").replace(/ class=(""|(?= |>))/g,"").replace(/<span class="?cursor( blink)?"?><\/span>/i,"").replace(/<span class="?textarea"?><textarea><\/textarea><\/span>/i,"");case"write":if(arguments.length>1)return this.each(function(){var b=a(this).data(d),e=b&&b.block,f=e&&e.cursor;f&&(f.writeLatex(c),e.blur())});default:var f=b==="textbox",g=f||b==="editable",h=f?o:m;return this.each(function(){l(a(this),new h,f,g)})}},a(function(){a(".mathquill-editable:not(.mathquill-rendered-math)").mathquill("editable"),a(".mathquill-textbox:not(.mathquill-rendered-math)").mathquill("textbox"),a(".mathquill-embedded-latex").mathquill()})})()


var shaders =  {"shader-fs.fragment":"#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform vec4 uColor;\nvoid main(void) {\n    gl_FragColor = vec4(0.7, 0.7, 0.7, 1.0);\n\tgl_FragColor = uColor;\n}\n","shader-vs.vertex":"attribute vec3 aVertexPosition;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}"} ;


/*! 
 *  Graph.tk v3.0.0
 *  https://github.com/aantthony/graph.tk (Source code)
 *  
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


//(function (window, undefined) {
	"use strict";

(function() {
	var already = {};
	for(i in window){
		already[i]=true;
	}
	window.__defineGetter__("globals",function() {
		var obj = [];
		var i;
		for(i in window){
			if(already[i] !== true){
				obj.push(i);
			}
		}
		return obj;
	});
}());
	var gl;

	window.requestAnimFrame = (function() {
	  return window.requestAnimationFrame ||
	         window.webkitRequestAnimationFrame ||
	         window.mozRequestAnimationFrame ||
	         window.oRequestAnimationFrame ||
	         window.msRequestAnimationFrame ||
	         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
	           window.setTimeout(callback, 1000/60);
	         };
	})();
	    function initGL(canvas) {
	        try {
	            gl = canvas.getContext("webgl", {antialias: true});
				if (gl === null) {
					gl = canvas.getContext('experimental-webgl', {antialias: true});
				}
				if (gl === null) {
					throw("Fail");
				}
	            gl.viewportWidth = canvas.width;
	            gl.viewportHeight = canvas.height;
	        } catch (e) {
	        }
	        if (!gl) {
	            alert("Could not initialise WebGL, sorry :-(");
	        }
	    }


	    function getShader(gl, id) {
		
			var str=shaders[id];
			
	        var shader;
	        if (/\.fragment$/.test(id)) {
	            shader = gl.createShader(gl.FRAGMENT_SHADER);
	        } else if (/\.vertex$/.test(id)) {
	            shader = gl.createShader(gl.VERTEX_SHADER);
	        } else {
		
				console.log(id);
	            return null;
	        }
	        gl.shaderSource(shader, str);
	        gl.compileShader(shader);

	        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	            alert(gl.getShaderInfoLog(shader));
	            return null;
	        }

	        return shader;
	    }


	    var shaderProgram;

	    function initShaders() {
	        var fragmentShader = getShader(gl, "shader-fs.fragment");
	        var vertexShader = getShader(gl, "shader-vs.vertex");
			shaders=null;
	        shaderProgram = gl.createProgram();
	        gl.attachShader(shaderProgram, vertexShader);
	        gl.attachShader(shaderProgram, fragmentShader);
	        gl.linkProgram(shaderProgram);

	        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
	            alert("Could not initialise shaders");
	        }

	        gl.useProgram(shaderProgram);

	        shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
	        gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

	        shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
	        shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
			shaderProgram.colorUniform = gl.getUniformLocation(shaderProgram, "uColor");
	    }


	    var mvMatrix = mat4.create();
	    var pMatrix = mat4.create();

	    function setMatrixUniforms() {
	        gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
	        gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
	    }
		function color(r,g,b,a){
	        gl.uniform4f(shaderProgram.colorUniform, r,g,b,a);
		}


	    var triangleVertexPositionBuffer;
	    var squareVertexPositionBuffer;
		var minorGridVertexPositionBuffer;
	    function initBuffers() {
	        triangleVertexPositionBuffer = gl.createBuffer();
	        gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
			var lt =0.01;
	        var vertices = [
	             -5.0, -lt,  0.0,
		         -5.0,  lt,  0.0,
		          5.0, -lt,  0.0,
				  5.0,  lt,  0.0,
				
				  5.0, lt*15.0,  0.0,
				  5.3, 0.0,  0.0,
				 5.0, -lt*15.0,  0.0,
				
				
				 5.0, -lt*15.0,  0.0,
				 -lt,  -5.0,  0.0,
				
				 -lt,  -5.0,  0.0,
			      lt, -5.0,  0.0,
			     -lt,  5.0,  0.0,
			      lt, 5.0,  0.0,
			      
				  lt*15.0, 5.0,  0.0,
				  0.0, 5.3,  0.0,
				 -lt*15.0, 5.0,  0.0,
			

	        ];
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	        triangleVertexPositionBuffer.itemSize = 3;
	        triangleVertexPositionBuffer.numItems = vertices.length/3;

	        squareVertexPositionBuffer = gl.createBuffer();
	        minorGridVertexPositionBuffer = gl.createBuffer();
	        gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
	        vertices = [];
			var minorGrid = [];
			var x;
			var i = 0.25;
			var limt = 5.0/i;
			for(x=-limt;x<=limt;x++){
				if(x==0.0){
				}else if(x%4==0){
					vertices.push(-5,x*i,0);
					vertices.push(+5,x*i,0);
				}else{
					minorGrid.push(-5,x*i,0);
					minorGrid.push(+5,x*i,0);
				}
			}
			for(x=-limt;x<=limt;x++){
				if(x==0.0){
				}else if(x%4==0){
					vertices.push(x*i,-5,0);
					vertices.push(x*i,+5,0);
				}else{
					minorGrid.push(x*i,-5,0);
					minorGrid.push(x*i,+5,0);
				}
			}
			
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	        squareVertexPositionBuffer.itemSize = 3;
	        squareVertexPositionBuffer.numItems = vertices.length/3;
	
	        gl.bindBuffer(gl.ARRAY_BUFFER, minorGridVertexPositionBuffer);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(minorGrid), gl.STATIC_DRAW);
	        minorGridVertexPositionBuffer.itemSize = 3;
	        minorGridVertexPositionBuffer.numItems = minorGrid.length/3;
	    }
function printMatrix(x){
	var len = ~~Math.sqrt(x.length);
	var str=[];
	var i;
	for(i=0;i<x.length;i++){
		if(i%len==0){
			str.push("\n");
		}
		if(x[i]>=0){
			str.push(" ");
		}
		str.push(" "+x[i].toFixed(4));
		
	}
	return str.join("");
}
	var cam_lat_now=0.0;
	var cam_long_now=0.0;
	var animating=false;
	    function drawScene() {
	        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


	        mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);
	        mat4.identity(mvMatrix);
			mat4.translate(mvMatrix, [0, 0.0, -10.0]);
			
			if(animating){
				cam_lat_now+=0.3*(cam_lat-t);
				cam_long_now+=0.3*(cam_lat-t);
			}else{
				cam_lat_now=cam_lat;
				cam_long_now=cam_long;
			}
	        mat4.rotate(mvMatrix, cam_lat, [-1.0, 0.0, 0.0]);
	        mat4.rotate(mvMatrix, cam_long, [0.0, 0.0, 1.0]);
	
	
			gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
			gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
			color(0.0,0.0,0.0,1.0);
			setMatrixUniforms();
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, triangleVertexPositionBuffer.numItems);


			
			gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
			gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
			color(0.6,0.6,0.6,1.0);
			setMatrixUniforms();
			gl.drawArrays(gl.LINES, 0, squareVertexPositionBuffer.numItems);


			
			gl.bindBuffer(gl.ARRAY_BUFFER, minorGridVertexPositionBuffer);
			gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, minorGridVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
			color(0.85,0.85,0.85,1.0);
			setMatrixUniforms();
			gl.drawArrays(gl.LINES, 0, minorGridVertexPositionBuffer.numItems);


	
			

	    }
		function tick(){
			requestAnimFrame(tick);
	        drawScene();
		}
	
	    function webGLStart(canvas) {
	        initGL(canvas);
	        initShaders();
	        initBuffers();

	        gl.clearColor(1.0, 1.0, 1.0, 1.0);
	        gl.enable(gl.DEPTH_TEST);

			drawScene();
	    }
		
	var cam_lat=0;	
	var cam_long=0;
	$(function() {
	document.body.removeChild(document.getElementById("loading"));
	var html = {
		canvas: document.createElement("canvas"),
		graphs: document.createElement("ul"),
	};
	
	html.canvas.width=window.innerWidth;
	html.canvas.height=window.innerHeight;
	function resize(){
		html.canvas.width=window.innerWidth  || document.body.clientWidth;
		html.canvas.height=window.innerHeight|| document.body.clientHeight || 120;//120 for iframe default
		drawScene();
	}
	
	document.body.appendChild(html.canvas);
	
	var equations = document.createElement("div");
	var buttons = document.createElement("div");
	equations.className="overlay";
	equations.id="funcs";
	
	buttons.className="buttons";
	function button(value, title, callback){
		var b = document.createElement("input");
		b.type="button";
		b.value=value;
		b.title=title;
		b.onclick=callback;
		buttons.appendChild(b);
		return button;
	}
	button("+");
	button(">_");
	button(".png");
	var help_button = document.createElement("a");
	help_button.target="_blank";
	help_button.className="help_button";
	help_button.title="Help Page";
	help_button.href="about/";
	buttons.appendChild(help_button);
	equations.appendChild(html.graphs);
	equations.appendChild(buttons);
	document.body.appendChild(equations);
	(function() {
		var drag_start_x, drag_start_y;
		var radians_per_pixel_x = 0.01,
			radians_per_pixel_y = -0.01;
		var drag_start_cam_long,
			drag_start_cam_lat;
		
		html.canvas.addEventListener("mousemove", function(e) {
			if(drag_start_x!==undefined){
				cam_long = drag_start_cam_long+radians_per_pixel_x*(e.x-drag_start_x);
				cam_lat = drag_start_cam_lat+radians_per_pixel_y*(e.y-drag_start_y);
				drawScene();
				
			}
		});
		html.canvas.addEventListener("mousedown", function(e) {
			drag_start_x=e.x;
			drag_start_y=e.y;
			drag_start_cam_long=cam_long;
			drag_start_cam_lat=cam_lat;
			if(!D3){
				html.canvas.style.cursor = "url(css/grabbing.gif), grabbing";
			}
			
		});
		html.canvas.addEventListener("mouseup", function(e){
			drag_start_x=drag_start_y=undefined;
			html.canvas.style.cursor="";
		});
		
	}());
	webGLStart(html.canvas);
})/*
})(
	function(){
		if(typeof window === 'undefined'){
			return exports;
		}
		return window;
	}()
);
*/
