/* This file was auto-generated using RapydScript */
(function(){
JSON = (JSON || {
  
});
if ((!JSON.stringify)) {
  
	JSON.stringify = function(obj) {
		var t = typeof (obj);
		if (t != "object" || obj === null) {
			// simple data type
			if (t == "string")
				obj = '"' + obj + '"';
			if (t == "function")
				return; // return undefined
			else
				return String(obj);
		} else {
			// recurse array or object
			var n, v, json = []
			var arr = (obj && obj.constructor == Array);
			for (n in obj) {
				v = obj[n];
				t = typeof (v);
				if (t != "function" && t != "undefined") {
					if (t == "string")
						v = '"' + v + '"';
					else if ((t == "object" || t == "function") && v !== null)
						v = JSON.stringify(v);
					json.push((arr ? "" : '"' + n + '":') + String(v));
				}
			}
			return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	};
	
}

str = JSON.stringify;
len = function(item) {
  return item.length;
};

range = function(a, b, step) {
  var A;
  A = [];
  if ((typeof(b) === "undefined")) {
    b = a;
    a = 0;
  }

  A[0] = a;
  step = (step || 1);
  if ((step > 0)) {
    while (((a + step) < b)) {
      a += step;
      A[A.length] = a;
    }

  } else {
    while (((a + step) > b)) {
      a += step;
      A[A.length] = a;
    }

  }

  return A;
};

enumerate = function(item) {
  var A;
  A = [];
  for (var i = 0; i < item.length; i++){A[A.length] = [i, item[i]];}
  return A;
};

reversed = function(arr) {
  var temp;
  temp = [];
  for (var i = arr.length - 1; i >= 0; i--) {temp.push(arr[i]);}
  return temp;
};

print = function() {
  var args, output;
  args = [].slice.call(arguments, 0);
  output = str(args);
  console.log(output.substr(1, (output.length - 2)));
};


isinstance = function(item, cls) {
	var cls_item, isnumber;
	if (cls instanceof Array) {
		var _$tmp13_data = _$rapyd$_iter(cls);
		var _$tmp14_len = _$tmp13_data.length;
		for (var _$tmp15_index = 0; _$tmp15_index < _$tmp14_len; _$tmp15_index++) {
			cls_item = _$tmp13_data[_$tmp15_index];

			if (isinstance(item, cls_item)) {
				return true;
			}

		}

		return false;
	}

	if ((cls === list)) {
		cls = Array;
	} else if ((cls === dict)) {
		cls = Object;
	} else if ((cls === str)) {
		cls = String;
	} else {
		return item instanceof cls;
	}

	return (item.constructor === cls.prototype.constructor);
};
_$rapyd$_iter = function(iter_object) {
	var key_list;
	if (((iter_object.callee && (typeof iter_object['length'] != "undefined")) || isinstance(iter_object, list))) {
		return iter_object;
	}

	key_list = [];
	for (var key in iter_object)
	key_list.append(key);
	return key_list;
};
Function.prototype.bind = (function(owner) {
	var bound, func;
	func = this;
	bound = function() {
		return func.apply(owner, arguments);
	};

	return bound;
});

ValueError = function(message) {
  this.name = "ValueError";
  this.message = message;
};

ValueError.prototype = new Error();
ValueError.prototype.constructor = ValueError;
String.prototype.strip = String.prototype.trim;
String.prototype.lstrip = String.prototype.trimLeft;
String.prototype.rstrip = String.prototype.trimRight;
String.prototype.join = (function(iterable) {
  return iterable.join(this);
});
String.prototype.zfill = (function(size) {
  var s;
  s = this;
  while ((s.length < size)) {
    s = ("0" + s);
  }

  return s;
});
list = function(iterable) {
  var i, result;
  if (typeof iterable === "undefined") {iterable = []};
  result = [];
  var _$tmp1_data = _$rapyd$_iter(iterable);
  var _$tmp2_len = _$tmp1_data.length;
  for (var _$tmp3_index = 0; _$tmp3_index < _$tmp2_len; _$tmp3_index++) {
    i = _$tmp1_data[_$tmp3_index];

    result.append(i);
  }

  return result;
};

Array.prototype.append = Array.prototype.push;
Array.prototype.find = Array.prototype.indexOf;
Array.prototype.index = (function(index) {
  var val;
  val = this.find(index);
  if ((val == (-1))) {
    throw new ValueError((str(index) + " is not in list"));
  }

  return val;
});
Array.prototype.insert = (function(index, item) {
  this.splice(index, 0, item);
});
Array.prototype.pop = (function(index) {
  if ((!arguments.length)) {
    index = (this.length - 1);
  }

  return this.splice(index, 1)[0];
});
Array.prototype.extend = (function(array2) {
  this.push.apply(this, array2);
});
Array.prototype.remove = (function(item) {
  var index;
  index = this.find(item);
  this.splice(index, 1);
});
Array.prototype.copy = (function() {
  return this.slice(0);
});
if ((!Array.prototype.map)) {
  
	Array.prototype.map = function(callback, thisArg) {
		var T, A, k;
		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if ({}.toString.call(callback) != "[object Function]") {
			throw new TypeError(callback + " is not a function");
		}
		if (thisArg) {
			T = thisArg;
		}
		A = new Array(len);
		for (var k = 0; k < len; k++) {
			var kValue, mappedValue;
			if (k in O) {
				kValue = O[k];
				mappedValue = callback.call(T, kValue);
				A[k] = mappedValue;
			}
		}
		return A;
	};
	
}

map = function(oper, arr) {
  return arr.map(oper);
};

if ((!Array.prototype.filter)) {
  
	Array.prototype.filter = function(filterfun, thisArg) {
		"use strict";
		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if ({}.toString.call(filterfun) != "[object Function]") {
			throw new TypeError(filterfun + " is not a function");
		}
		if (thisArg) {
			T = thisArg;
		}
		var A = [];
		var thisp = arguments[1];
		for (var k = 0; k < len; k++) {
			if (k in O) {
				var val = O[k]; // in case fun mutates this
				if (filterfun.call(T, val))
					A.push(val);
			}
		}
		return A;
	};
	
}

filter = function(oper, arr) {
  return arr.filter(oper);
};

dict = function(iterable) {
  var key, result;
  result = {
    
  };
  var _$tmp4_data = _$rapyd$_iter(iterable);
  var _$tmp5_len = _$tmp4_data.length;
  for (var _$tmp6_index = 0; _$tmp6_index < _$tmp5_len; _$tmp6_index++) {
    key = _$tmp4_data[_$tmp6_index];

    result[key] = iterable[key];
  }

  return result;
};

if ((typeof(Object.getOwnPropertyNames) !== "function")) {
  dict.keys = (function(hash) {
    var keys;
    keys = [];
    
		for (var x in hash) {
			// A for in will iterate over members on the prototype
			// chain as well, but Object.getOwnPropertyNames returns
			// only those directly on the object, so use hasOwnProperty.
			if (hash.hasOwnProperty(x)) {
				keys.push(x);
			}
		}
		
    return keys;
  });
} else {
  dict.keys = (function(hash) {
    return Object.getOwnPropertyNames(hash);
  });
}

dict.values = (function(hash) {
  var key, vals;
  vals = [];
  var _$tmp7_data = _$rapyd$_iter(dict.keys(hash));
  var _$tmp8_len = _$tmp7_data.length;
  for (var _$tmp9_index = 0; _$tmp9_index < _$tmp8_len; _$tmp9_index++) {
    key = _$tmp7_data[_$tmp9_index];

    vals.append(hash[key]);
  }

  return vals;
});
dict.items = (function(hash) {
  var items, key;
  items = [];
  var _$tmp10_data = _$rapyd$_iter(dict.keys(hash));
  var _$tmp11_len = _$tmp10_data.length;
  for (var _$tmp12_index = 0; _$tmp12_index < _$tmp11_len; _$tmp12_index++) {
    key = _$tmp10_data[_$tmp12_index];

    items.append([key, hash[key]]);
  }

  return items;
});
dict.copy = dict;
dict.clear = (function(hash) {
  var key;
  var _$tmp13_data = _$rapyd$_iter(dict.keys(hash));
  var _$tmp14_len = _$tmp13_data.length;
  for (var _$tmp15_index = 0; _$tmp15_index < _$tmp14_len; _$tmp15_index++) {
    key = _$tmp13_data[_$tmp15_index];

    delete hash[key];
  }

});
/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin, CloudMade
*/
(function(t,e,i){var n,o;typeof exports!=i+""?n=exports:(o=t.L,n={},n.noConflict=function(){return t.L=o,this},t.L=n),n.version="0.5",n.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),limitExecByInterval:function(t,e,n){var o,s;return function a(){var r=arguments;return o?(s=!0,i):(o=!0,setTimeout(function(){o=!1,s&&(a.apply(n,r),s=!1)},e),t.apply(n,r),i)}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},splitWords:function(t){return t.replace(/^\s+|\s+$/g,"").split(/\s+/)},setOptions:function(t,e){return t.options=n.extend({},t.options,e),t.options},getParamString:function(t,e){var i=[];for(var n in t)t.hasOwnProperty(n)&&i.push(n+"="+t[n]);return(e&&-1!==e.indexOf("?")?"&":"?")+i.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,i){var n=e[i];if(!e.hasOwnProperty(i))throw Error("No value provided for variable "+t);return n})},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;o.length>i&&!n;i++)n=t[o[i]+e];return n}function o(e){var i=+new Date,n=Math.max(0,16-(i-s));return s=i+n,t.setTimeout(e,n)}var s=0,a=t.requestAnimationFrame||e("RequestAnimationFrame")||o,r=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};n.Util.requestAnimFrame=function(e,s,r,h){return e=n.bind(e,s),r&&a===o?(e(),i):a.call(t,e,h)},n.Util.cancelAnimFrame=function(e){e&&r.call(t,e)}}(),n.extend=n.Util.extend,n.bind=n.Util.bind,n.stamp=n.Util.stamp,n.setOptions=n.Util.setOptions,n.Class=function(){},n.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var o=new i;o.constructor=e,e.prototype=o;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(n.extend(e,t.statics),delete t.statics),t.includes&&(n.Util.extend.apply(null,[o].concat(t.includes)),delete t.includes),t.options&&o.options&&(t.options=n.extend({},o.options,t.options)),n.extend(o,t),o._initHooks=[];var a=this;return o.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=o._initHooks.length;e>t;t++)o._initHooks[t].call(this)}},e},n.Class.include=function(t){n.extend(this.prototype,t)},n.Class.mergeOptions=function(t){n.extend(this.prototype.options,t)},n.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";n.Mixin={},n.Mixin.Events={addEventListener:function(t,e,i){var o,a,r,h=this[s]=this[s]||{};if("object"==typeof t){for(o in t)t.hasOwnProperty(o)&&this.addEventListener(o,t[o],e);return this}for(t=n.Util.splitWords(t),a=0,r=t.length;r>a;a++)h[t[a]]=h[t[a]]||[],h[t[a]].push({action:e,context:i||this});return this},hasEventListeners:function(t){return s in this&&t in this[s]&&this[s][t].length>0},removeEventListener:function(t,e,i){var o,a,r,h,l,u=this[s];if("object"==typeof t){for(o in t)t.hasOwnProperty(o)&&this.removeEventListener(o,t[o],e);return this}for(t=n.Util.splitWords(t),a=0,r=t.length;r>a;a++)if(this.hasEventListeners(t[a]))for(h=u[t[a]],l=h.length-1;l>=0;l--)e&&h[l].action!==e||i&&h[l].context!==i||h.splice(l,1);return this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;for(var i=n.extend({type:t,target:this},e),o=this[s][t].slice(),a=0,r=o.length;r>a;a++)o[a].action.call(o[a].context||this,i);return this}},n.Mixin.Events.on=n.Mixin.Events.addEventListener,n.Mixin.Events.off=n.Mixin.Events.removeEventListener,n.Mixin.Events.fire=n.Mixin.Events.fireEvent,function(){var o=!!t.ActiveXObject,s=o&&!t.XMLHttpRequest,a=o&&!e.querySelector,r=navigator.userAgent.toLowerCase(),h=-1!==r.indexOf("webkit"),l=-1!==r.indexOf("chrome"),u=-1!==r.indexOf("android"),c=-1!==r.search("android [23]"),_=typeof orientation!=i+"",d=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints,p="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,m=e.documentElement,f=o&&"transition"in m.style,g="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix,v="MozPerspective"in m.style,y="OTransition"in m.style,L=!t.L_DISABLE_3D&&(f||g||v||y),P=!t.L_NO_TOUCH&&function(){var t="ontouchstart";if(d||t in m)return!0;var i=e.createElement("div"),n=!1;return i.setAttribute?(i.setAttribute(t,"return;"),"function"==typeof i[t]&&(n=!0),i.removeAttribute(t),i=null,n):!1}();n.Browser={ie:o,ie6:s,ie7:a,webkit:h,android:u,android23:c,chrome:l,ie3d:f,webkit3d:g,gecko3d:v,opera3d:y,any3d:L,mobile:_,mobileWebkit:_&&h,mobileWebkit3d:_&&g,mobileOpera:_&&t.opera,touch:P,msTouch:d,retina:p}}(),n.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},n.Point.prototype={clone:function(){return new n.Point(this.x,this.y)},add:function(t){return this.clone()._add(n.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(n.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=n.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t.x===this.x&&t.y===this.y},toString:function(){return"Point("+n.Util.formatNum(this.x)+", "+n.Util.formatNum(this.y)+")"}},n.point=function(t,e,i){return t instanceof n.Point?t:n.Util.isArray(t)?new n.Point(t[0],t[1]):isNaN(t)?t:new n.Point(t,e,i)},n.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},n.Bounds.prototype={extend:function(t){return t=n.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new n.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new n.Point(this.min.x,this.max.y)},getTopRight:function(){return new n.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof n.Point?n.point(t):n.bounds(t),t instanceof n.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=n.bounds(t);var e=this.min,i=this.max,o=t.min,s=t.max,a=s.x>=e.x&&o.x<=i.x,r=s.y>=e.y&&o.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},n.bounds=function(t,e){return!t||t instanceof n.Bounds?t:new n.Bounds(t,e)},n.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},n.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new n.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},n.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,o=0,s=0,a=t,r=e.body,h=n.Browser.ie7;do{if(o+=a.offsetTop||0,s+=a.offsetLeft||0,o+=parseInt(n.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(n.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=n.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){o+=r.scrollTop||0,s+=r.scrollLeft||0;break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;o-=a.scrollTop||0,s-=a.scrollLeft||0,n.DomUtil.documentIsLtr()||!n.Browser.webkit&&!h||(s+=a.scrollWidth-a.clientWidth,h&&"hidden"!==n.DomUtil.getStyle(a,"overflow-y")&&"hidden"!==n.DomUtil.getStyle(a,"overflow")&&(s+=17)),a=a.parentNode}while(a);return new n.Point(s,o)},documentIsLtr:function(){return n.DomUtil._docIsLtrCached||(n.DomUtil._docIsLtrCached=!0,n.DomUtil._docIsLtr="ltr"===n.DomUtil.getStyle(e.body,"direction")),n.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},disableTextSelection:function(){e.selection&&e.selection.empty&&e.selection.empty(),this._onselectstart||(this._onselectstart=e.onselectstart||null,e.onselectstart=n.Util.falseFn)},enableTextSelection:function(){e.onselectstart===n.Util.falseFn&&(e.onselectstart=this._onselectstart,this._onselectstart=null)},hasClass:function(t,e){return t.className.length>0&&RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},addClass:function(t,e){n.DomUtil.hasClass(t,e)||(t.className+=(t.className?" ":"")+e)},removeClass:function(t,e){function i(t,i){return i===e?"":t}t.className=t.className.replace(/(\S+)\s*/g,i).replace(/(^\s+|\s+$)/,"")},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;t.length>n;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=n.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",o=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+o},getScaleString:function(t,e){var i=n.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),o=" scale("+t+") ";return i+o},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&n.Browser.any3d?(t.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(e),n.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden")):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},n.DomUtil.TRANSFORM=n.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),n.DomUtil.TRANSITION=n.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),n.DomUtil.TRANSITION_END="webkitTransition"===n.DomUtil.TRANSITION||"OTransition"===n.DomUtil.TRANSITION?n.DomUtil.TRANSITION+"End":"transitionend",n.LatLng=function(t,e){var i=parseFloat(t),n=parseFloat(e);if(isNaN(i)||isNaN(n))throw Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=i,this.lng=n},n.extend(n.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),n.LatLng.prototype={equals:function(t){if(!t)return!1;t=n.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return n.LatLng.MAX_MARGIN>=e},toString:function(t){return"LatLng("+n.Util.formatNum(this.lat,t)+", "+n.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=n.latLng(t);var e=6378137,i=n.LatLng.DEG_TO_RAD,o=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(o/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new n.LatLng(this.lat,i)}},n.latLng=function(t,e){return t instanceof n.LatLng?t:n.Util.isArray(t)?new n.LatLng(t[0],t[1]):isNaN(t)?t:new n.LatLng(t,e)},n.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},n.LatLngBounds.prototype={extend:function(t){return t="number"==typeof t[0]||"string"==typeof t[0]||t instanceof n.LatLng?n.latLng(t):n.latLngBounds(t),t instanceof n.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new n.LatLng(t.lat,t.lng),this._northEast=new n.LatLng(t.lat,t.lng)):t instanceof n.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var e=this._southWest,i=this._northEast,o=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new n.LatLngBounds(new n.LatLng(e.lat-o,e.lng-s),new n.LatLng(i.lat+o,i.lng+s))},getCenter:function(){return new n.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new n.LatLng(this._northEast.lat,this._southWest.lng)},getSouthEast:function(){return new n.LatLng(this._southWest.lat,this._northEast.lng)},contains:function(t){t="number"==typeof t[0]||t instanceof n.LatLng?n.latLng(t):n.latLngBounds(t);var e,i,o=this._southWest,s=this._northEast;return t instanceof n.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=o.lat&&i.lat<=s.lat&&e.lng>=o.lng&&i.lng<=s.lng},intersects:function(t){t=n.latLngBounds(t);var e=this._southWest,i=this._northEast,o=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&o.lat<=i.lat,r=s.lng>=e.lng&&o.lng<=i.lng;return a&&r},toBBoxString:function(){var t=this._southWest,e=this._northEast;return[t.lng,t.lat,e.lng,e.lat].join(",")},equals:function(t){return t?(t=n.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},n.latLngBounds=function(t,e){return!t||t instanceof n.LatLngBounds?t:new n.LatLngBounds(t,e)},n.Projection={},n.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=n.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,o=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=o*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new n.Point(s,a)},unproject:function(t){var e=n.LatLng.RAD_TO_DEG,i=t.x*e,o=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new n.LatLng(o,i)}},n.Projection.LonLat={project:function(t){return new n.Point(t.lng,t.lat)},unproject:function(t){return new n.LatLng(t.y,t.x)}},n.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)}},n.CRS.Simple=n.extend({},n.CRS,{projection:n.Projection.LonLat,transformation:new n.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),n.CRS.EPSG3857=n.extend({},n.CRS,{code:"EPSG:3857",projection:n.Projection.SphericalMercator,transformation:new n.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),n.CRS.EPSG900913=n.extend({},n.CRS.EPSG3857,{code:"EPSG:900913"}),n.CRS.EPSG4326=n.extend({},n.CRS,{code:"EPSG:4326",projection:n.Projection.LonLat,transformation:new n.Transformation(1/360,.5,-1/360,.5)}),n.Map=n.Class.extend({includes:n.Mixin.Events,options:{crs:n.CRS.EPSG3857,fadeAnimation:n.DomUtil.TRANSITION&&!n.Browser.android23,trackResize:!0,markerZoomAnimation:n.DomUtil.TRANSITION&&n.Browser.any3d},initialize:function(t,e){e=n.setOptions(this,e),this._initContainer(t),this._initLayout(),this.callInitHooks(),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(n.latLng(e.center),e.zoom,!0),this._initLayers(e.layers)},setView:function(t,e){return this._resetView(n.latLng(t),this._limitZoom(e)),this},setZoom:function(t){return this.setView(this.getCenter(),t)},zoomIn:function(t){return this.setZoom(this._zoom+(t||1))},zoomOut:function(t){return this.setZoom(this._zoom-(t||1))},fitBounds:function(t){var e=this.getBoundsZoom(t);return this.setView(n.latLngBounds(t).getCenter(),e)},fitWorld:function(){var t=new n.LatLng(-60,-170),e=new n.LatLng(85,179);return this.fitBounds(new n.LatLngBounds(t,e))},panTo:function(t){return this.setView(t,this._zoom)},panBy:function(t){return this.fire("movestart"),this._rawPanBy(n.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){if(t=n.latLngBounds(t),this.options.maxBounds=t,!t)return this._boundsMinZoom=null,this;var e=this.getBoundsZoom(t,!0);return this._boundsMinZoom=e,this._loaded&&(e>this._zoom?this.setView(t.getCenter(),e):this.panInsideBounds(t)),this},panInsideBounds:function(t){t=n.latLngBounds(t);var e=this.getBounds(),i=this.project(e.getSouthWest()),o=this.project(e.getNorthEast()),s=this.project(t.getSouthWest()),a=this.project(t.getNorthEast()),r=0,h=0;return o.y<a.y&&(h=a.y-o.y),o.x>a.x&&(r=a.x-o.x),i.y>s.y&&(h=s.y-i.y),i.x<s.x&&(r=s.x-i.x),this.panBy(new n.Point(r,h,!0))},addLayer:function(t){var e=n.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&n.TileLayer&&t instanceof n.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this.whenReady(function(){t.onAdd(this),this.fire("layeradd",{layer:t})},this),this)},removeLayer:function(t){var e=n.stamp(t);if(this._layers[e])return t.onRemove(this),delete this._layers[e],this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&n.TileLayer&&t instanceof n.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this.fire("layerremove",{layer:t})},hasLayer:function(t){var e=n.stamp(t);return this._layers.hasOwnProperty(e)},invalidateSize:function(t){var e=this.getSize();if(this._sizeChanged=!0,this.options.maxBounds&&this.setMaxBounds(this.options.maxBounds),!this._loaded)return this;var i=e._subtract(this.getSize())._divideBy(2)._round();return t===!0?this.panBy(i):(this._rawPanBy(i),this.fire("move"),clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(n.bind(this.fire,this,"moveend"),200)),this},addHandler:function(t,e){return e?(this[t]=new e(this),this.options[t]&&this[t].enable(),this):i},getCenter:function(){return this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new n.LatLngBounds(e,i)},getMinZoom:function(){var t=this.options.minZoom||0,e=this._layersMinZoom||0,i=this._boundsMinZoom||0;return Math.max(t,e,i)},getMaxZoom:function(){var t=this.options.maxZoom===i?1/0:this.options.maxZoom,e=this._layersMaxZoom===i?1/0:this._layersMaxZoom;return Math.min(t,e)},getBoundsZoom:function(t,e){t=n.latLngBounds(t);var i,o,s,a=this.getSize(),r=this.options.minZoom||0,h=this.getMaxZoom(),l=t.getNorthEast(),u=t.getSouthWest(),c=!0;e&&r--;do r++,o=this.project(l,r),s=this.project(u,r),i=new n.Point(Math.abs(o.x-s.x),Math.abs(s.y-o.y)),c=e?i.x<a.x||i.y<a.y:i.x<=a.x&&i.y<=a.y;while(c&&h>=r);return c&&e?null:e?r:r-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new n.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new n.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(n.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(n.point(t),e)},layerPointToLatLng:function(t){var e=n.point(t).add(this._initialTopLeftPoint);return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(n.latLng(t))._round();return e._subtract(this._initialTopLeftPoint)},containerPointToLayerPoint:function(t){return n.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return n.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(n.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(n.latLng(t)))},mouseEventToContainerPoint:function(t){return n.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=n.DomUtil.get(t);if(e._leaflet)throw Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;n.DomUtil.addClass(t,"leaflet-container"),n.Browser.touch&&n.DomUtil.addClass(t,"leaflet-touch"),this.options.fadeAnimation&&n.DomUtil.addClass(t,"leaflet-fade-anim");var e=n.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(n.DomUtil.addClass(t.markerPane,e),n.DomUtil.addClass(t.shadowPane,e),n.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return n.DomUtil.create("div",t,e||this._panes.objectsPane)},_initLayers:function(t){t=t?n.Util.isArray(t)?t:[t]:[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0;var e,i;for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,o){var s=this._zoom!==e;o||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):n.DomUtil.setPosition(this._mapPane,new n.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!i}),this.fire("move"),(s||o)&&this.fire("zoomend"),this.fire("moveend",{hard:!i}),a&&this.fire("load")},_rawPanBy:function(t){n.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_updateZoomLevels:function(){var t,e=1/0,n=-1/0;for(t in this._zoomBoundLayers)if(this._zoomBoundLayers.hasOwnProperty(t)){var o=this._zoomBoundLayers[t];isNaN(o.options.minZoom)||(e=Math.min(e,o.options.minZoom)),isNaN(o.options.maxZoom)||(n=Math.max(n,o.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e)},_initEvents:function(){if(n.DomEvent){n.DomEvent.on(this._container,"click",this._onMouseClick,this);var e,i,o=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(e=0,i=o.length;i>e;e++)n.DomEvent.on(this._container,o[e],this._fireMouseEvent,this);this.options.trackResize&&n.DomEvent.on(t,"resize",this._onResize,this)}},_onResize:function(){n.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=n.Util.requestAnimFrame(this.invalidateSize,this,!1,this._container)},_onMouseClick:function(t){!this._loaded||this.dragging&&this.dragging.moved()||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&n.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),o=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(o);this.fire(e,{latlng:s,layerPoint:o,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this._tileBg&&(clearTimeout(this._clearTileBgTimer),this._clearTileBgTimer=setTimeout(n.bind(this._clearTileBg,this),500))},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_getMapPanePos:function(){return n.DomUtil.getPosition(this._mapPane)},_getTopLeftPoint:function(){if(!this._loaded)throw Error("Set map center and zoom first.");return this._initialTopLeftPoint.subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),n.map=function(t,e){return new n.Map(t,e)},n.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.3142,R_MAJOR:6378137,project:function(t){var e=n.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,o=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,h=o*e,l=a/s,u=Math.sqrt(1-l*l),c=u*Math.sin(h);c=Math.pow((1-c)/(1+c),.5*u);var _=Math.tan(.5*(.5*Math.PI-h))/c;return h=-a*Math.log(_),new n.Point(r,h)},unproject:function(t){for(var e,i=n.LatLng.RAD_TO_DEG,o=this.R_MAJOR,s=this.R_MINOR,a=t.x*i/o,r=s/o,h=Math.sqrt(1-r*r),l=Math.exp(-t.y/s),u=Math.PI/2-2*Math.atan(l),c=15,_=1e-7,d=c,p=.1;Math.abs(p)>_&&--d>0;)e=h*Math.sin(u),p=Math.PI/2-2*Math.atan(l*Math.pow((1-e)/(1+e),.5*h))-u,u+=p;return new n.LatLng(u*i,a)}},n.CRS.EPSG3395=n.extend({},n.CRS,{code:"EPSG:3395",projection:n.Projection.Mercator,transformation:function(){var t=n.Projection.Mercator,e=t.R_MAJOR,i=t.R_MINOR;return new n.Transformation(.5/(Math.PI*e),.5,-.5/(Math.PI*i),.5)}()}),n.TileLayer=n.Class.extend({includes:n.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:n.Browser.mobile,updateWhenIdle:n.Browser.mobile},initialize:function(t,e){e=n.setOptions(this,e),e.detectRetina&&n.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._initContainer(),this._createTileProto(),t.on({viewreset:this._resetCallback,moveend:this._update},this),this.options.updateWhenIdle||(this._limitedUpdate=n.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._resetCallback,moveend:this._update},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._map._panes.tilePane.empty=!1,this._reset(!0),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-1/0);for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){n.DomUtil.setOpacity(this._container,this.options.opacity);var t,e=this._tiles;if(n.Browser.webkit)for(t in e)e.hasOwnProperty(t)&&(e[t].style.webkitTransform+=" translate(0,0)")},_initContainer:function(){var t=this._map._panes.tilePane;(!this._container||t.empty)&&(this._container=n.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),t.appendChild(this._container),1>this.options.opacity&&this._updateOpacity())},_resetCallback:function(t){this._reset(t.hard)},_reset:function(t){var e=this._tiles;for(var i in e)e.hasOwnProperty(i)&&this.fire("tileunload",{tile:e[i]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),t&&this._container&&(this._container.innerHTML=""),this._initContainer()},_update:function(){if(this._map){var t=this._map.getPixelBounds(),e=this._map.getZoom(),i=this.options.tileSize;if(!(e>this.options.maxZoom||this.options.minZoom>e)){var o=new n.Point(Math.floor(t.min.x/i),Math.floor(t.min.y/i)),s=new n.Point(Math.floor(t.max.x/i),Math.floor(t.max.y/i)),a=new n.Bounds(o,s);this._addTilesFromCenterOut(a),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(a)}}},_addTilesFromCenterOut:function(t){var i,o,s,a=[],r=t.getCenter();for(i=t.min.y;t.max.y>=i;i++)for(o=t.min.x;t.max.x>=o;o++)s=new n.Point(o,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,o=0;h>o;o++)this._addTile(a[o],l);this._container.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;if(!this.options.continuousWorld){var e=this._getWrapTileNum();if(this.options.noWrap&&(0>t.x||t.x>=e)||0>t.y||t.y>=e)return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)this._tiles.hasOwnProperty(o)&&(e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(t.min.x>i||i>t.max.x||t.min.y>n||n>t.max.y)&&this._removeTile(o))},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(n.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._container&&this._container.removeChild(e),n.Browser.android||(e.src=n.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),o=this._getTile();n.DomUtil.setPosition(o,i,n.Browser.chrome||n.Browser.android23),this._tiles[t.x+":"+t.y]=o,this._loadTile(o,t),o.parentNode!==this._container&&e.appendChild(o)
},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+t.zoomOffset},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this.options.tileSize;return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return this._adjustTilePoint(t),n.Util.template(this._url,n.extend({s:this._getSubdomain(t),z:this._getZoomForUrl(),x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){return Math.pow(2,this._getZoomForUrl())},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e+e)%e),this.options.tms&&(t.y=e-t.y-1)},_getSubdomain:function(t){var e=(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_createTileProto:function(){var t=this._tileImg=n.DomUtil.create("img","leaflet-tile");t.style.width=t.style.height=this.options.tileSize+"px",t.galleryimg="no"},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=this._tileImg.cloneNode(!1);return t.onselectstart=t.onmousemove=n.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,t.src=this.getTileUrl(e)},_tileLoaded:function(){this._tilesToLoad--,this._tilesToLoad||this.fire("load")},_tileOnLoad:function(){var t=this._layer;this.src!==n.Util.emptyImageUrl&&(n.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),n.tileLayer=function(t,e){return new n.TileLayer(t,e)},n.TileLayer.WMS=n.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(t,e){this._url=t;var i=n.extend({},this.defaultWmsParams);i.width=i.height=e.detectRetina&&n.Browser.retina?2*this.options.tileSize:this.options.tileSize;for(var o in e)this.options.hasOwnProperty(o)||(i[o]=e[o]);this.wmsParams=i,n.setOptions(this,e)},onAdd:function(t){var e=parseFloat(this.wmsParams.version)>=1.3?"crs":"srs";this.wmsParams[e]=t.options.crs.code,n.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t,e){this._adjustTilePoint(t);var i=this._map,o=i.options.crs,s=this.options.tileSize,a=t.multiplyBy(s),r=a.add(new n.Point(s,s)),h=o.project(i.unproject(a,e)),l=o.project(i.unproject(r,e)),u=[h.x,l.y,l.x,h.y].join(","),c=n.Util.template(this._url,{s:this._getSubdomain(t)});return c+n.Util.getParamString(this.wmsParams,c)+"&bbox="+u},setParams:function(t,e){return n.extend(this.wmsParams,t),e||this.redraw(),this}}),n.tileLayer.wms=function(t,e){return new n.TileLayer.WMS(t,e)},n.TileLayer.Canvas=n.TileLayer.extend({options:{async:!1},initialize:function(t){n.setOptions(this,t)},redraw:function(){var t=this._tiles;for(var e in t)t.hasOwnProperty(e)&&this._redrawTile(t[e])},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTileProto:function(){var t=this._canvasProto=n.DomUtil.create("canvas","leaflet-tile");t.width=t.height=this.options.tileSize},_createTile:function(){var t=this._canvasProto.cloneNode(!1);return t.onselectstart=t.onmousemove=n.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),n.tileLayer.canvas=function(t){return new n.TileLayer.Canvas(t)},n.ImageOverlay=n.Class.extend({includes:n.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t,this._bounds=n.latLngBounds(e),n.setOptions(this,i)},onAdd:function(t){this._map=t,this._image||this._initImage(),t._panes.overlayPane.appendChild(this._image),t.on("viewreset",this._reset,this),t.options.zoomAnimation&&n.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image),t.off("viewreset",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var t=this._map._panes.overlayPane;return this._image&&t.insertBefore(this._image,t.firstChild),this},_initImage:function(){this._image=n.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&n.Browser.any3d?n.DomUtil.addClass(this._image,"leaflet-zoom-animated"):n.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),n.extend(this._image,{galleryimg:"no",onselectstart:n.Util.falseFn,onmousemove:n.Util.falseFn,onload:n.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,o=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),h=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/o)));i.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(l)+" scale("+o+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);n.DomUtil.setPosition(t,e),t.style.width=i.x+"px",t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){n.DomUtil.setOpacity(this._image,this.options.opacity)}}),n.imageOverlay=function(t,e,i){return new n.ImageOverlay(t,e,i)},n.Icon=n.Class.extend({options:{className:""},initialize:function(t){n.setOptions(this,t)},createIcon:function(){return this._createIcon("icon")},createShadow:function(){return this._createIcon("shadow")},_createIcon:function(t){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw Error("iconUrl not set in Icon options (see the docs).");return null}var i=this._createImg(e);return this._setIconStyles(i,t),i},_setIconStyles:function(t,e){var i,o=this.options,s=n.point(o[e+"Size"]);i="shadow"===e?n.point(o.shadowAnchor||o.iconAnchor):n.point(o.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+o.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t){var i;return n.Browser.ie6?(i=e.createElement("div"),i.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+t+'")'):(i=e.createElement("img"),i.src=t),i},_getIconUrl:function(t){return n.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),n.icon=function(t){return new n.Icon(t)},n.Icon.Default=n.Icon.extend({options:{iconSize:new n.Point(25,41),iconAnchor:new n.Point(12,41),popupAnchor:new n.Point(1,-34),shadowSize:new n.Point(41,41)},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];n.Browser.retina&&"icon"===t&&(t+="@2x");var i=n.Icon.Default.imagePath;if(!i)throw Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),n.Icon.Default.imagePath=function(){var t,i,n,o,s=e.getElementsByTagName("script"),a=/\/?leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=s.length;i>t;t++)if(n=s[t].src,o=n.match(a))return n.split(a)[0]+"/images"}(),n.Marker=n.Class.extend({includes:n.Mixin.Events,options:{icon:new n.Icon.Default,title:"",clickable:!0,draggable:!1,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){n.setOptions(this,e),this._latlng=n.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._removeIcon(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=n.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this._map&&this._removeIcon(),this.options.icon=t,this._map&&(this._initIcon(),this.update()),this},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,o=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=!1;this._icon||(this._icon=t.icon.createIcon(),t.title&&(this._icon.title=t.title),this._initInteraction(),s=1>this.options.opacity,n.DomUtil.addClass(this._icon,o),t.riseOnHover&&n.DomEvent.on(this._icon,"mouseover",this._bringToFront,this).on(this._icon,"mouseout",this._resetZIndex,this)),this._shadow||(this._shadow=t.icon.createShadow(),this._shadow&&(n.DomUtil.addClass(this._shadow,o),s=1>this.options.opacity)),s&&this._updateOpacity();var a=this._map._panes;a.markerPane.appendChild(this._icon),this._shadow&&a.shadowPane.appendChild(this._shadow)},_removeIcon:function(){var t=this._map._panes;this.options.riseOnHover&&n.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),t.markerPane.removeChild(this._icon),this._shadow&&t.shadowPane.removeChild(this._shadow),this._icon=this._shadow=null},_setPos:function(t){n.DomUtil.setPosition(this._icon,t),this._shadow&&n.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];n.DomUtil.addClass(t,"leaflet-clickable"),n.DomEvent.on(t,"click",this._onMouseClick,this);for(var i=0;e.length>i;i++)n.DomEvent.on(t,e[i],this._fireMouseEvent,this);n.Handler.MarkerDrag&&(this.dragging=new n.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&n.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&n.DomEvent.preventDefault(t),"mousedown"!==t.type&&n.DomEvent.stopPropagation(t)},setOpacity:function(t){this.options.opacity=t,this._map&&this._updateOpacity()},_updateOpacity:function(){n.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&n.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),n.marker=function(t,e){return new n.Marker(t,e)},n.DivIcon=n.Icon.extend({options:{iconSize:new n.Point(12,12),className:"leaflet-div-icon"},createIcon:function(){var t=e.createElement("div"),i=this.options;return i.html&&(t.innerHTML=i.html),i.bgPos&&(t.style.backgroundPosition=-i.bgPos.x+"px "+-i.bgPos.y+"px"),this._setIconStyles(t,"icon"),t},createShadow:function(){return null}}),n.divIcon=function(t){return new n.DivIcon(t)},n.Map.mergeOptions({closePopupOnClick:!0}),n.Popup=n.Class.extend({includes:n.Mixin.Events,options:{minWidth:50,maxWidth:300,maxHeight:null,autoPan:!0,closeButton:!0,offset:new n.Point(0,6),autoPanPadding:new n.Point(5,5),className:"",zoomAnimation:!0},initialize:function(t,e){n.setOptions(this,t),this._source=e,this._animated=n.Browser.any3d&&this.options.zoomAnimation},onAdd:function(t){this._map=t,this._container||this._initLayout(),this._updateContent();var e=t.options.fadeAnimation;e&&n.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on("viewreset",this._updatePosition,this),this._animated&&t.on("zoomanim",this._zoomAnimation,this),t.options.closePopupOnClick&&t.on("preclick",this._close,this),this._update(),e&&n.DomUtil.setOpacity(this._container,1)},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),n.Util.falseFn(this._container.offsetWidth),t.off({viewreset:this._updatePosition,preclick:this._close,zoomanim:this._zoomAnimation},this),t.options.fadeAnimation&&n.DomUtil.setOpacity(this._container,0),this._map=null},setLatLng:function(t){return this._latlng=n.latLng(t),this._update(),this},setContent:function(t){return this._content=t,this._update(),this},_close:function(){var t=this._map;t&&(t._popup=null,t.removeLayer(this).fire("popupclose",{popup:this}))},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),o=this._container=n.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=n.DomUtil.create("a",e+"-close-button",o),t.href="#close",t.innerHTML="&#215;",n.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=n.DomUtil.create("div",e+"-content-wrapper",o);n.DomEvent.disableClickPropagation(s),this._contentNode=n.DomUtil.create("div",e+"-content",s),n.DomEvent.on(this._contentNode,"mousewheel",n.DomEvent.stopPropagation),this._tipContainer=n.DomUtil.create("div",e+"-tip-container",o),this._tip=n.DomUtil.create("div",e+"-tip",this._tipContainer)},_update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var o=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&o>s?(e.height=s+"px",n.DomUtil.addClass(t,a)):n.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=this.options.offset;e&&n.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);n.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,o=new n.Point(this._containerLeft,-e-this._containerBottom);this._animated&&o._add(n.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(o),a=this.options.autoPanPadding,r=t.getSize(),h=0,l=0;0>s.x&&(h=s.x-a.x),s.x+i>r.x&&(h=s.x+i-r.x+a.x),0>s.y&&(l=s.y-a.y),s.y+e>r.y&&(l=s.y+e-r.y+a.y),(h||l)&&t.panBy(new n.Point(h,l))}},_onCloseButtonClick:function(t){this._close(),n.DomEvent.stop(t)}}),n.popup=function(t,e){return new n.Popup(t,e)},n.Marker.include({openPopup:function(){return this._popup&&this._map&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},bindPopup:function(t,e){var i=n.point(this.options.icon.options.popupAnchor)||new n.Point(0,0);return i=i.add(n.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=n.extend({offset:i},e),this._popup||this.on("click",this.openPopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popup=new n.Popup(e,this).setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.openPopup).off("remove",this.closePopup).off("move",this._movePopup)),this},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),n.Map.include({openPopup:function(t){return this.closePopup(),this._popup=t,this.addLayer(t).fire("popupopen",{popup:this._popup})},closePopup:function(){return this._popup&&this._popup._close(),this}}),n.LayerGroup=n.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=n.stamp(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=n.stamp(t);return delete this._layers[e],this._map&&this._map.removeLayer(t),this},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)this._layers.hasOwnProperty(e)&&(i=this._layers[e],i[t]&&i[t].apply(i,n));return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)this._layers.hasOwnProperty(i)&&t.call(e,this._layers[i])},setZIndex:function(t){return this.invoke("setZIndex",t)}}),n.layerGroup=function(t){return new n.LayerGroup(t)},n.FeatureGroup=n.LayerGroup.extend({includes:n.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu"},addLayer:function(t){return this._layers[n.stamp(t)]?this:(t.on(n.FeatureGroup.EVENTS,this._propagateEvent,this),n.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return t.off(n.FeatureGroup.EVENTS,this._propagateEvent,this),n.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new n.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof n.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t.layer=t.target,t.target=this,this.fire(t.type,t)}}),n.featureGroup=function(t){return new n.FeatureGroup(t)},n.Path=n.Class.extend({includes:[n.Mixin.Events],statics:{CLIP_PADDING:n.Browser.mobile?Math.max(0,Math.min(.5,(1280/Math.max(t.innerWidth,t.innerHeight)-1)/2)):.5},options:{stroke:!0,color:"#0033ff",dashArray:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){n.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,n.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return n.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),n.Map.include({_updatePathViewport:function(){var t=n.Path.CLIP_PADDING,e=this.getSize(),i=n.DomUtil.getPosition(this._mapPane),o=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=o.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new n.Bounds(o,s)}}),n.Path.SVG_NS="http://www.w3.org/2000/svg",n.Browser.svg=!(!e.createElementNS||!e.createElementNS(n.Path.SVG_NS,"svg").createSVGRect),n.Path=n.Path.extend({statics:{SVG:n.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(n.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray")):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(n.Browser.svg||!n.Browser.vml)&&this._path.setAttribute("class","leaflet-clickable"),n.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;t.length>e;e++)n.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),o=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(o);this.fire(t.type,{latlng:s,layerPoint:o,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&n.DomEvent.preventDefault(t),"mousemove"!==t.type&&n.DomEvent.stopPropagation(t)}}}),n.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=n.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&n.Browser.any3d?(this._pathRoot.setAttribute("class"," leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):this._pathRoot.setAttribute("class"," leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,o=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;n.Browser.mobileWebkit&&r.removeChild(a),n.DomUtil.setPosition(a,e),a.setAttribute("width",o),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,o,s].join(" ")),n.Browser.mobileWebkit&&r.appendChild(a)}}}),n.Path.include({bindPopup:function(t,e){return(!this._popup||e)&&(this._popup=new n.Popup(e,this)),this._popup.setContent(t),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),n.Browser.vml=!n.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(n){return!1}}(),n.Path=n.Browser.svg||!n.Browser.vml?n.Path:n.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");n.DomUtil.addClass(t,"leaflet-vml-shape"),this.options.clickable&&n.DomUtil.addClass(t,"leaflet-clickable"),t.coordsize="1 1",this._path=this._createElement("path"),t.appendChild(this._path),this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke,n.filled=i.fill,i.stroke?(t||(t=this._stroke=this._createElement("stroke"),t.endcap="round",n.appendChild(t)),t.weight=i.weight+"px",t.color=i.color,t.opacity=i.opacity,t.dashStyle=i.dashArray?i.dashArray instanceof Array?i.dashArray.join(" "):i.dashArray.replace(/ *, */g," "):""):t&&(n.removeChild(t),this._stroke=null),i.fill?(e||(e=this._fill=this._createElement("fill"),n.appendChild(e)),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(n.removeChild(e),this._fill=null)},_updatePath:function(){var t=this._container.style;t.display="none",this._path.v=this.getPathString()+" ",t.display=""}}),n.Map.include(n.Browser.svg||!n.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container",this._panes.overlayPane.appendChild(t),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),n.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),n.Path=n.Path.SVG&&!t.L_PREFER_CANVAS||!n.Browser.canvas?n.Path:n.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return n.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&this._map.off("click",this._onClick,this),this._requestUpdate(),this._map=null},_requestUpdate:function(){this._map&&!n.Path._updateRequest&&(n.Path._updateRequest=n.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){n.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color)},_drawPath:function(){var t,e,i,o,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,o=this._parts[t].length;o>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof n.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill()),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&this._map.on("click",this._onClick,this)},_onClick:function(t){this._containsPoint(t.layerPoint)&&this.fire("click",{latlng:t.latlng,layerPoint:t.layerPoint,containerPoint:t.containerPoint,originalEvent:t})}}),n.Map.include(n.Path.SVG&&!t.L_PREFER_CANVAS||!n.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),o=this._pathRoot;n.DomUtil.setPosition(o,e),o.width=i.x,o.height=i.y,o.getContext("2d").translate(-e.x,-e.y)}}}),n.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,o,s){var a=e.x-t.x,r=e.y-t.y,h=s.min,l=s.max;return 8&o?new n.Point(t.x+a*(l.y-t.y)/r,l.y):4&o?new n.Point(t.x+a*(h.y-t.y)/r,h.y):2&o?new n.Point(l.x,t.y+r*(l.x-t.x)/a):1&o?new n.Point(h.x,t.y+r*(h.x-t.x)/a):i},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,o){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,o?h*h+l*l:new n.Point(a,r)}},n.Polyline=n.Path.extend({initialize:function(t,e){n.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(n.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,o=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];
var _=n.LineUtil._sqClosestPointOnSegment(t,e,i,!0);o>_&&(o=_,a=n.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(o)),a},getBounds:function(){var t,e,i=new n.LatLngBounds,o=this.getLatLngs();for(t=0,e=o.length;e>t;t++)i.extend(o[t]);return i},_convertLatLngs:function(t){var e,i;for(e=0,i=t.length;i>e;e++){if(n.Util.isArray(t[e])&&"number"!=typeof t[e][0])return;t[e]=n.latLng(t[e])}return t},_initEvents:function(){n.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=n.Path.VML,o=0,s=t.length,a="";s>o;o++)e=t[o],i&&e._round(),a+=(o?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,o,s=this._originalPoints,a=s.length;if(this.options.noClip)return this._parts=[s],i;this._parts=[];var r=this._parts,h=this._map._pathViewport,l=n.LineUtil;for(t=0,e=0;a-1>t;t++)o=l.clipSegment(s[t],s[t+1],h,t),o&&(r[e]=r[e]||[],r[e].push(o[0]),(o[1]!==s[t+1]||t===a-2)&&(r[e].push(o[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=n.LineUtil,i=0,o=t.length;o>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),n.Path.prototype._updatePath.call(this))}}),n.polyline=function(t,e){return new n.Polyline(t,e)},n.PolyUtil={},n.PolyUtil.clipPolygon=function(t,e){var i,o,s,a,r,h,l,u,c,_=[1,4,2,8],d=n.LineUtil;for(o=0,l=t.length;l>o;o++)t[o]._code=d._getBitCode(t[o],e);for(a=0;4>a;a++){for(u=_[a],i=[],o=0,l=t.length,s=l-1;l>o;s=o++)r=t[o],h=t[s],r._code&u?h._code&u||(c=d._getEdgeIntersection(h,r,u,e),c._code=d._getBitCode(c,e),i.push(c)):(h._code&u&&(c=d._getEdgeIntersection(h,r,u,e),c._code=d._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},n.Polygon=n.Polyline.extend({options:{fill:!0},initialize:function(t,e){n.Polyline.prototype.initialize.call(this,t,e),t&&n.Util.isArray(t[0])&&"number"!=typeof t[0][0]&&(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1))},projectLatlngs:function(){if(n.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,o;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,o=this._holes[t].length;o>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,o=this._parts.length;o>i;i++){var s=n.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=n.Polyline.prototype._getPathPartStr.call(this,t);return e+(n.Browser.svg?"z":"x")}}),n.polygon=function(t,e){return new n.Polygon(t,e)},function(){function t(t){return n.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this}})}n.MultiPolyline=t(n.Polyline),n.MultiPolygon=t(n.Polygon),n.multiPolyline=function(t,e){return new n.MultiPolyline(t,e)},n.multiPolygon=function(t,e){return new n.MultiPolygon(t,e)}}(),n.Rectangle=n.Polygon.extend({initialize:function(t,e){n.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=n.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),n.rectangle=function(t,e){return new n.Rectangle(t,e)},n.Circle=n.Path.extend({initialize:function(t,e,i){n.Path.prototype.initialize.call(this,i),this._latlng=n.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=n.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=new n.LatLng(this._latlng.lat,this._latlng.lng-t),i=this._map.latLngToLayerPoint(e);this._point=this._map.latLngToLayerPoint(this._latlng),this._radius=Math.max(Math.round(this._point.x-i.x),1)},getBounds:function(){var t=this._getLngRadius(),e=360*(this._mRadius/40075017),i=this._latlng,o=new n.LatLng(i.lat-e,i.lng-t),s=new n.LatLng(i.lat+e,i.lng+t);return new n.LatLngBounds(o,s)},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":n.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,"+23592600)},getRadius:function(){return this._mRadius},_getLatRadius:function(){return 360*(this._mRadius/40075017)},_getLngRadius:function(){return this._getLatRadius()/Math.cos(n.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),n.circle=function(t,e,i){return new n.Circle(t,e,i)},n.CircleMarker=n.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){n.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){n.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setRadius:function(t){return this._radius=t,this.redraw()}}),n.circleMarker=function(t,e){return new n.CircleMarker(t,e)},n.Polyline.include(n.Path.CANVAS?{_containsPoint:function(t,e){var i,o,s,a,r,h,l,u=this.options.weight/2;for(n.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],o=0,r=l.length,s=r-1;r>o;s=o++)if((e||0!==o)&&(h=n.LineUtil.pointToSegmentDistance(t,l[s],l[o]),u>=h))return!0;return!1}}:{}),n.Polygon.include(n.Path.CANVAS?{_containsPoint:function(t){var e,i,o,s,a,r,h,l,u=!1;if(n.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],o=e[r],i.y>t.y!=o.y>t.y&&t.x<(o.x-i.x)*(t.y-i.y)/(o.y-i.y)+i.x&&(u=!u);return u}}:{}),n.Circle.include(n.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),n.GeoJSON=n.FeatureGroup.extend({initialize:function(t,e){n.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,o=n.Util.isArray(t)?t:t.features;if(o){for(e=0,i=o.length;i>e;e++)(o[e].geometries||o[e].geometry)&&this.addData(o[e]);return this}var s=this.options;if(!s.filter||s.filter(t)){var a=n.GeoJSON.geometryToLayer(t,s.pointToLayer);return a.feature=t,a.defaultOptions=a.options,this.resetStyle(a),s.onEachFeature&&s.onEachFeature(t,a),this.addLayer(a)}},resetStyle:function(t){var e=this.options.style;e&&(n.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),n.extend(n.GeoJSON,{geometryToLayer:function(t,e){var i,o,s,a,r,h="Feature"===t.type?t.geometry:t,l=h.coordinates,u=[];switch(h.type){case"Point":return i=this.coordsToLatLng(l),e?e(t,i):new n.Marker(i);case"MultiPoint":for(s=0,a=l.length;a>s;s++)i=this.coordsToLatLng(l[s]),r=e?e(t,i):new n.Marker(i),u.push(r);return new n.FeatureGroup(u);case"LineString":return o=this.coordsToLatLngs(l),new n.Polyline(o);case"Polygon":return o=this.coordsToLatLngs(l,1),new n.Polygon(o);case"MultiLineString":return o=this.coordsToLatLngs(l,1),new n.MultiPolyline(o);case"MultiPolygon":return o=this.coordsToLatLngs(l,2),new n.MultiPolygon(o);case"GeometryCollection":for(s=0,a=h.geometries.length;a>s;s++)r=this.geometryToLayer({geometry:h.geometries[s],type:"Feature",properties:t.properties},e),u.push(r);return new n.FeatureGroup(u);default:throw Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t,e){var i=parseFloat(t[e?0:1]),o=parseFloat(t[e?1:0]);return new n.LatLng(i,o)},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):this.coordsToLatLng(t[o],i),a.push(n);return a}}),n.geoJson=function(t,e){return new n.GeoJSON(t,e)},n.DomEvent={addListener:function(t,e,o,s){var a,r,h,l=n.stamp(o),u="_leaflet_"+e+l;return t[u]?this:(a=function(e){return o.call(s||t,e||n.DomEvent._getEvent())},n.Browser.msTouch&&0===e.indexOf("touch")?this.addMsTouchListener(t,e,a,l):(n.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,a,l),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",a,!1),t.addEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?(r=a,h="mouseenter"===e?"mouseover":"mouseout",a=function(e){return n.DomEvent._checkMouse(t,e)?r(e):i},t.addEventListener(h,a,!1)):t.addEventListener(e,a,!1):"attachEvent"in t&&t.attachEvent("on"+e,a),t[u]=a,this))},removeListener:function(t,e,i){var o=n.stamp(i),s="_leaflet_"+e+o,a=t[s];if(a)return n.Browser.msTouch&&0===e.indexOf("touch")?this.removeMsTouchListener(t,e,o):n.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,o):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,this},disableClickPropagation:function(t){for(var e=n.DomEvent.stopPropagation,i=n.Draggable.START.length-1;i>=0;i--)n.DomEvent.addListener(t,n.Draggable.START[i],e);return n.DomEvent.addListener(t,"click",e).addListener(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return n.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,i){var o=e.body,s=e.documentElement,a=t.pageX?t.pageX:t.clientX+o.scrollLeft+s.scrollLeft,r=t.pageY?t.pageY:t.clientY+o.scrollTop+s.scrollTop,h=new n.Point(a,r);return i?h._subtract(n.DomUtil.getViewportOffset(i)):h},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e}},n.DomEvent.on=n.DomEvent.addListener,n.DomEvent.off=n.DomEvent.removeListener,n.Draggable=n.Class.extend({includes:n.Mixin.Events,statics:{START:n.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",MSPointerDown:"touchmove"},TAP_TOLERANCE:15},initialize:function(t,e,i){this._element=t,this._dragStartTarget=e||t,this._longPress=i&&!n.Browser.msTouch},enable:function(){if(!this._enabled){for(var t=n.Draggable.START.length-1;t>=0;t--)n.DomEvent.on(this._dragStartTarget,n.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=n.Draggable.START.length-1;t>=0;t--)n.DomEvent.off(this._dragStartTarget,n.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(!(!n.Browser.touch&&t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(n.DomEvent.preventDefault(t),n.DomEvent.stopPropagation(t),n.Draggable._disabled))){if(this._simulateClick=!0,t.touches&&t.touches.length>1)return this._simulateClick=!1,clearTimeout(this._longPressTimeout),i;var o=t.touches&&1===t.touches.length?t.touches[0]:t,s=o.target;n.Browser.touch&&"a"===s.tagName.toLowerCase()&&n.DomUtil.addClass(s,"leaflet-active"),this._moved=!1,this._moving||(this._startPoint=new n.Point(o.clientX,o.clientY),this._startPos=this._newPos=n.DomUtil.getPosition(this._element),t.touches&&1===t.touches.length&&n.Browser.touch&&this._longPress&&(this._longPressTimeout=setTimeout(n.bind(function(){var t=this._newPos&&this._newPos.distanceTo(this._startPos)||0;n.Draggable.TAP_TOLERANCE>t&&(this._simulateClick=!1,this._onUp(),this._simulateEvent("contextmenu",o))},this),1e3)),n.DomEvent.on(e,n.Draggable.MOVE[t.type],this._onMove,this),n.DomEvent.on(e,n.Draggable.END[t.type],this._onUp,this))}},_onMove:function(t){if(!(t.touches&&t.touches.length>1)){var e=t.touches&&1===t.touches.length?t.touches[0]:t,i=new n.Point(e.clientX,e.clientY),o=i.subtract(this._startPoint);(o.x||o.y)&&(n.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=n.DomUtil.getPosition(this._element).subtract(o),n.Browser.touch||(n.DomUtil.disableTextSelection(),this._setMovingCursor())),this._newPos=this._startPos.add(o),this._moving=!0,n.Util.cancelAnimFrame(this._animRequest),this._animRequest=n.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget))}},_updatePosition:function(){this.fire("predrag"),n.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(t){var i;if(clearTimeout(this._longPressTimeout),this._simulateClick&&t.changedTouches){var o=t.changedTouches[0],s=o.target,a=this._newPos&&this._newPos.distanceTo(this._startPos)||0;"a"===s.tagName.toLowerCase()&&n.DomUtil.removeClass(s,"leaflet-active"),n.Draggable.TAP_TOLERANCE>a&&(i=o)}n.Browser.touch||(n.DomUtil.enableTextSelection(),this._restoreCursor());for(var r in n.Draggable.MOVE)n.Draggable.MOVE.hasOwnProperty(r)&&(n.DomEvent.off(e,n.Draggable.MOVE[r],this._onMove),n.DomEvent.off(e,n.Draggable.END[r],this._onUp));this._moved&&(n.Util.cancelAnimFrame(this._animRequest),this.fire("dragend")),this._moving=!1,i&&(this._moved=!1,this._simulateEvent("click",i))},_setMovingCursor:function(){n.DomUtil.addClass(e.body,"leaflet-dragging")},_restoreCursor:function(){n.DomUtil.removeClass(e.body,"leaflet-dragging")},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),n.Handler=n.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),n.Map.mergeOptions({dragging:!0,inertia:!n.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:n.Browser.touch?32:18,easeLinearity:.25,longPress:!0,worldCopyJump:!1}),n.Map.Drag=n.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new n.Draggable(t._mapPane,t._container,t.options.longPress),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint(new n.LatLng(0,0));this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project(new n.LatLng(0,180)).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(){var t=this._map,e=t.options,i=+new Date-this._lastTime,o=!e.inertia||i>e.inertiaThreshold||!this._positions[0];if(o)t.fire("moveend");else{var s=this._lastPos.subtract(this._positions[0]),a=(this._lastTime+i-this._times[0])/1e3,r=e.easeLinearity,h=s.multiplyBy(r/a),l=h.distanceTo(new n.Point(0,0)),u=Math.min(e.inertiaMaxSpeed,l),c=h.multiplyBy(u/l),_=u/(e.inertiaDeceleration*r),d=c.multiplyBy(-_/2).round();n.Util.requestAnimFrame(function(){t.panBy(d,_,r)})}t.fire("dragend"),e.maxBounds&&n.Util.requestAnimFrame(this._panInsideMaxBounds,t,!0,t._container)},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)}}),n.Map.addInitHook("addHandler","dragging",n.Map.Drag),n.Map.mergeOptions({doubleClickZoom:!0}),n.Map.DoubleClickZoom=n.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick)},_onDoubleClick:function(t){this.setView(t.latlng,this._zoom+1)}}),n.Map.addInitHook("addHandler","doubleClickZoom",n.Map.DoubleClickZoom),n.Map.mergeOptions({scrollWheelZoom:!0}),n.Map.ScrollWheelZoom=n.Handler.extend({addHooks:function(){n.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){n.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll)},_onWheelScroll:function(t){var e=n.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(n.bind(this._performZoom,this),i),n.DomEvent.preventDefault(t),n.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();if(e=e>0?Math.ceil(e):Math.round(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e){var n=i+e,o=this._getCenterForScrollWheelZoom(n);t.setView(o,n)}},_getCenterForScrollWheelZoom:function(t){var e=this._map,i=e.getZoomScale(t),n=e.getSize()._divideBy(2),o=this._lastMousePos._subtract(n)._multiplyBy(1-1/i),s=e._getTopLeftPoint()._add(n)._add(o);return e.unproject(s)}}),n.Map.addInitHook("addHandler","scrollWheelZoom",n.Map.ScrollWheelZoom),n.extend(n.DomEvent,{_touchstart:n.Browser.msTouch?"MSPointerDown":"touchstart",_touchend:n.Browser.msTouch?"MSPointerUp":"touchend",addDoubleTapListener:function(t,i,o){function s(t){var e;if(n.Browser.msTouch?(p.push(t.pointerId),e=p.length):e=t.touches.length,!(e>1)){var i=Date.now(),o=i-(r||i);h=t.touches?t.touches[0]:t,l=o>0&&u>=o,r=i}}function a(t){if(n.Browser.msTouch){var e=p.indexOf(t.pointerId);if(-1===e)return;p.splice(e,1)}if(l){if(n.Browser.msTouch){var o,s={};for(var a in h)o=h[a],s[a]="function"==typeof o?o.bind(h):o;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",_=this._touchstart,d=this._touchend,p=[];t[c+_+o]=s,t[c+d+o]=a;var m=n.Browser.msTouch?e.documentElement:t;return t.addEventListener(_,s,!1),m.addEventListener(d,a,!1),n.Browser.msTouch&&m.addEventListener("MSPointerCancel",a,!1),this},removeDoubleTapListener:function(t,i){var o="_leaflet_";return t.removeEventListener(this._touchstart,t[o+this._touchstart+i],!1),(n.Browser.msTouch?e.documentElement:t).removeEventListener(this._touchend,t[o+this._touchend+i],!1),n.Browser.msTouch&&e.documentElement.removeEventListener("MSPointerCancel",t[o+this._touchend+i],!1),this}}),n.extend(n.DomEvent,{_msTouches:[],_msDocumentListener:!1,addMsTouchListener:function(t,e,i,n){switch(e){case"touchstart":return this.addMsTouchListenerStart(t,e,i,n);case"touchend":return this.addMsTouchListenerEnd(t,e,i,n);case"touchmove":return this.addMsTouchListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addMsTouchListenerStart:function(t,i,n,o){var s="_leaflet_",a=this._msTouches,r=function(t){for(var e=!1,i=0;a.length>i;i++)if(a[i].pointerId===t.pointerId){e=!0;break}e||a.push(t),t.touches=a.slice(),t.changedTouches=[t],n(t)};if(t[s+"touchstart"+o]=r,t.addEventListener("MSPointerDown",r,!1),!this._msDocumentListener){var h=function(t){for(var e=0;a.length>e;e++)if(a[e].pointerId===t.pointerId){a.splice(e,1);break}};e.documentElement.addEventListener("MSPointerUp",h,!1),e.documentElement.addEventListener("MSPointerCancel",h,!1),this._msDocumentListener=!0}return this},addMsTouchListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE||0!==t.buttons){for(var e=0;a.length>e;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._msTouches;return t[s+"touchmove"+n]=o,t.addEventListener("MSPointerMove",o,!1),this},addMsTouchListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._msTouches,a=function(t){for(var e=0;s.length>e;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener("MSPointerUp",a,!1),t.addEventListener("MSPointerCancel",a,!1),this},removeMsTouchListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener("MSPointerDown",o,!1);break;case"touchmove":t.removeEventListener("MSPointerMove",o,!1);break;case"touchend":t.removeEventListener("MSPointerUp",o,!1),t.removeEventListener("MSPointerCancel",o,!1)}return this}}),n.Map.mergeOptions({touchZoom:n.Browser.touch&&!n.Browser.android23}),n.Map.TouchZoom=n.Handler.extend({addHooks:function(){n.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){n.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var o=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=o.add(s)._divideBy(2),this._startDist=o.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),n.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),n.DomEvent.preventDefault(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length){var e=this._map,i=e.mouseEventToLayerPoint(t.touches[0]),o=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(o)/this._startDist,this._delta=i._add(o)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(this._moved||(n.DomUtil.addClass(e._mapPane,"leaflet-zoom-anim leaflet-touching"),e.fire("movestart").fire("zoomstart")._prepareTileBg(),this._moved=!0),n.Util.cancelAnimFrame(this._animRequest),this._animRequest=n.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),n.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e);t.fire("zoomanim",{center:i,zoom:t.getScaleZoom(this._scale)}),t._tileBg.style[n.DomUtil.TRANSFORM]=n.DomUtil.getTranslateString(this._delta)+" "+n.DomUtil.getScaleString(this._scale,this._startCenter)},_onTouchEnd:function(){if(this._moved&&this._zooming){var t=this._map;this._zooming=!1,n.DomUtil.removeClass(t._mapPane,"leaflet-touching"),n.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),o=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r);t.fire("zoomanim",{center:o,zoom:h}),t._runAnimation(o,h,t.getZoomScale(h)/this._scale,i,!0)}},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),n.Map.addInitHook("addHandler","touchZoom",n.Map.TouchZoom),n.Map.mergeOptions({boxZoom:!0}),n.Map.BoxZoom=n.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane},addHooks:function(){n.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){n.DomEvent.off(this._container,"mousedown",this._onMouseDown)},_onMouseDown:function(t){return!t.shiftKey||1!==t.which&&1!==t.button?!1:(n.DomUtil.disableTextSelection(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),this._box=n.DomUtil.create("div","leaflet-zoom-box",this._pane),n.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",n.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).preventDefault(t),this._map.fire("boxzoomstart"),i)},_onMouseMove:function(t){var e=this._startLayerPoint,i=this._box,o=this._map.mouseEventToLayerPoint(t),s=o.subtract(e),a=new n.Point(Math.min(o.x,e.x),Math.min(o.y,e.y));n.DomUtil.setPosition(i,a),i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_onMouseUp:function(t){this._pane.removeChild(this._box),this._container.style.cursor="",n.DomUtil.enableTextSelection(),n.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp);var i=this._map,o=i.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(o)){var s=new n.LatLngBounds(i.layerPointToLatLng(this._startLayerPoint),i.layerPointToLatLng(o));i.fitBounds(s),i.fire("boxzoomend",{boxZoomBounds:s})}}}),n.Map.addInitHook("addHandler","boxZoom",n.Map.BoxZoom),n.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),n.Map.Keyboard=n.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),n.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;n.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){this._focused||this._map._container.focus()},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){n.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){n.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(this._panKeys.hasOwnProperty(e))i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds);else{if(!this._zoomKeys.hasOwnProperty(e))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}n.DomEvent.stop(t)}}),n.Map.addInitHook("addHandler","keyboard",n.Map.Keyboard),n.Handler.MarkerDrag=n.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new n.Draggable(t,t).on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this)),this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=n.DomUtil.getPosition(t._icon),o=t._map.layerPointToLatLng(i);e&&n.DomUtil.setPosition(e,i),t._latlng=o,t.fire("move",{latlng:o}).fire("drag")},_onDragEnd:function(){this._marker.fire("moveend").fire("dragend")}}),n.Handler.PolyEdit=n.Handler.extend({options:{icon:new n.DivIcon({iconSize:new n.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"})},initialize:function(t,e){this._poly=t,n.setOptions(this,e)},addHooks:function(){this._poly._map&&(this._markerGroup||this._initMarkers(),this._poly._map.addLayer(this._markerGroup))},removeHooks:function(){this._poly._map&&(this._poly._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers)},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new n.LayerGroup),this._markers=[];var t,e,i,o,s=this._poly._latlngs;for(t=0,i=s.length;i>t;t++)o=this._createMarker(s[t],t),o.on("click",this._onMarkerClick,this),this._markers.push(o);var a,r;for(t=0,e=i-1;i>t;e=t++)(0!==t||n.Polygon&&this._poly instanceof n.Polygon)&&(a=this._markers[e],r=this._markers[t],this._createMiddleMarker(a,r),this._updatePrevNext(a,r))},_createMarker:function(t,e){var i=new n.Marker(t,{draggable:!0,icon:this.options.icon});return i._origLatLng=t,i._index=e,i.on("drag",this._onMarkerDrag,this),i.on("dragend",this._fireEdit,this),this._markerGroup.addLayer(i),i},_fireEdit:function(){this._poly.fire("edit")},_onMarkerDrag:function(t){var e=t.target;n.extend(e._origLatLng,e._latlng),e._middleLeft&&e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev,e)),e._middleRight&&e._middleRight.setLatLng(this._getMiddleLatLng(e,e._next)),this._poly.redraw()},_onMarkerClick:function(t){if(!(3>this._poly._latlngs.length)){var e=t.target,i=e._index;this._markerGroup.removeLayer(e),this._markers.splice(i,1),this._poly.spliceLatLngs(i,1),this._updateIndexes(i,-1),this._updatePrevNext(e._prev,e._next),e._middleLeft&&this._markerGroup.removeLayer(e._middleLeft),e._middleRight&&this._markerGroup.removeLayer(e._middleRight),e._prev&&e._next?this._createMiddleMarker(e._prev,e._next):e._prev?e._next||(e._prev._middleRight=null):e._next._middleLeft=null,this._poly.fire("edit")}},_updateIndexes:function(t,e){this._markerGroup.eachLayer(function(i){i._index>t&&(i._index+=e)})},_createMiddleMarker:function(t,e){var i,n,o,s=this._getMiddleLatLng(t,e),a=this._createMarker(s);a.setOpacity(.6),t._middleRight=e._middleLeft=a,n=function(){var n=e._index;a._index=n,a.off("click",i).on("click",this._onMarkerClick,this),s.lat=a.getLatLng().lat,s.lng=a.getLatLng().lng,this._poly.spliceLatLngs(n,0,s),this._markers.splice(n,0,a),a.setOpacity(1),this._updateIndexes(n,1),e._index++,this._updatePrevNext(t,a),this._updatePrevNext(a,e)},o=function(){a.off("dragstart",n,this),a.off("dragend",o,this),this._createMiddleMarker(t,a),this._createMiddleMarker(a,e)},i=function(){n.call(this),o.call(this),this._poly.fire("edit")},a.on("click",i,this).on("dragstart",n,this).on("dragend",o,this),this._markerGroup.addLayer(a)},_updatePrevNext:function(t,e){t&&(t._next=e),e&&(e._prev=t)},_getMiddleLatLng:function(t,e){var i=this._poly._map,n=i.latLngToLayerPoint(t.getLatLng()),o=i.latLngToLayerPoint(e.getLatLng());return i.layerPointToLatLng(n._add(o)._divideBy(2))}}),n.Polyline.addInitHook(function(){n.Handler.PolyEdit&&(this.editing=new n.Handler.PolyEdit(this),this.options.editable&&this.editing.enable()),this.on("add",function(){this.editing&&this.editing.enabled()&&this.editing.addHooks()}),this.on("remove",function(){this.editing&&this.editing.enabled()&&this.editing.removeHooks()})}),n.Control=n.Class.extend({options:{position:"topright"},initialize:function(t){n.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this
},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),o=t._controlCorners[i];return n.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?o.insertBefore(e,o.firstChild):o.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this}}),n.control=function(t){return new n.Control(t)},n.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=n.DomUtil.create("div",a,o)}var e=this._controlCorners={},i="leaflet-",o=this._controlContainer=n.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")}}),n.Control.Zoom=n.Control.extend({options:{position:"topleft"},onAdd:function(t){var e="leaflet-control-zoom",i="leaflet-bar",o=i+"-part",s=n.DomUtil.create("div",e+" "+i);return this._map=t,this._zoomInButton=this._createButton("+","Zoom in",e+"-in "+o+" "+o+"-top",s,this._zoomIn,this),this._zoomOutButton=this._createButton("-","Zoom out",e+"-out "+o+" "+o+"-bottom",s,this._zoomOut,this),t.on("zoomend",this._updateDisabled,this),s},onRemove:function(t){t.off("zoomend",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,o,s,a){var r=n.DomUtil.create("a",i,o);r.innerHTML=t,r.href="#",r.title=e;var h=n.DomEvent.stopPropagation;return n.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",n.DomEvent.preventDefault).on(r,"click",s,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-control-zoom-disabled";n.DomUtil.removeClass(this._zoomInButton,e),n.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&n.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&n.DomUtil.addClass(this._zoomInButton,e)}}),n.Map.mergeOptions({zoomControl:!0}),n.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new n.Control.Zoom,this.addControl(this.zoomControl))}),n.control.zoom=function(t){return new n.Control.Zoom(t)},n.Control.Attribution=n.Control.extend({options:{position:"bottomright",prefix:'Powered by <a href="http://leafletjs.com">Leaflet</a>'},initialize:function(t){n.setOptions(this,t),this._attributions={}},onAdd:function(t){return this._container=n.DomUtil.create("div","leaflet-control-attribution"),n.DomEvent.disableClickPropagation(this._container),t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):i},removeAttribution:function(t){return t?(this._attributions[t]--,this._update(),this):i},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions.hasOwnProperty(e)&&this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" &#8212; ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),n.Map.mergeOptions({attributionControl:!0}),n.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new n.Control.Attribution).addTo(this))}),n.control.attribution=function(t){return new n.Control.Attribution(t)},n.Control.Scale=n.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=n.DomUtil.create("div",e),o=this.options;return this._addScales(o,e,i),t.on(o.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=n.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=n.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),n.control.scale=function(t){return new n.Control.Scale(t)},n.Control.Layers=n.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){n.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var o in t)t.hasOwnProperty(o)&&this._addLayer(t[o],o);for(o in e)e.hasOwnProperty(o)&&this._addLayer(e[o],o,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange).off("layerremove",this._onLayerChange)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=n.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=n.DomUtil.create("div",t);n.Browser.touch?n.DomEvent.on(e,"click",n.DomEvent.stopPropagation):(n.DomEvent.disableClickPropagation(e),n.DomEvent.on(e,"mousewheel",n.DomEvent.stopPropagation));var i=this._form=n.DomUtil.create("form",t+"-list");if(this.options.collapsed){n.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var o=this._layersLink=n.DomUtil.create("a",t+"-toggle",e);o.href="#",o.title="Layers",n.Browser.touch?n.DomEvent.on(o,"click",n.DomEvent.stopPropagation).on(o,"click",n.DomEvent.preventDefault).on(o,"click",this._expand,this):n.DomEvent.on(o,"focus",this._expand,this),this._map.on("movestart",this._collapse,this)}else this._expand();this._baseLayersList=n.DomUtil.create("div",t+"-base",i),this._separator=n.DomUtil.create("div",t+"-separator",i),this._overlaysList=n.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var o=n.stamp(t);this._layers[o]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t=!1,e=!1;for(var i in this._layers)if(this._layers.hasOwnProperty(i)){var n=this._layers[i];this._addItem(n),e=e||n.overlay,t=t||!n.overlay}this._separator.style.display=e&&t?"":"none"}},_onLayerChange:function(t){var e=n.stamp(t.layer);this._layers[e]&&!this._handlingClick&&this._update()},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,o=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=n.stamp(t.layer),n.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,o.appendChild(i),o.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(o),o},_onInputClick:function(){var t,e,i,n,o=this._form.getElementsByTagName("input"),s=o.length;for(this._handlingClick=!0,t=0;s>t;t++)e=o[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?(this._map.addLayer(i.layer),i.overlay||(n=i.layer)):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);n&&(this._map.setZoom(this._map.getZoom()),this._map.fire("baselayerchange",{layer:n})),this._handlingClick=!1},_expand:function(){n.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),n.control.layers=function(t,e,i){return new n.Control.Layers(t,e,i)},n.PosAnimation=n.Class.extend({includes:n.Mixin.Events,run:function(t,e,i,o){this.stop(),this._el=t,this._inProgress=!0,this.fire("start"),t.style[n.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(o||.5)+",1)",n.DomEvent.on(t,n.DomUtil.TRANSITION_END,this._onTransitionEnd,this),n.DomUtil.setPosition(t,e),n.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(n.bind(this.fire,this,"step"),50)},stop:function(){this._inProgress&&(n.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),n.Util.falseFn(this._el.offsetWidth))},_transformRe:/(-?[\d\.]+), (-?[\d\.]+)\)/,_getPos:function(){var e,i,o,s=this._el,a=t.getComputedStyle(s);return n.Browser.any3d?(o=a[n.DomUtil.TRANSFORM].match(this._transformRe),e=parseFloat(o[1]),i=parseFloat(o[2])):(e=parseFloat(a.left),i=parseFloat(a.top)),new n.Point(e,i,!0)},_onTransitionEnd:function(){n.DomEvent.off(this._el,n.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[n.DomUtil.TRANSITION]="",clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),n.Map.include({setView:function(t,e,i){e=this._limitZoom(e);var n=this._zoom!==e;if(this._loaded&&!i&&this._layers){this._panAnim&&this._panAnim.stop();var o=n?this._zoomToIfClose&&this._zoomToIfClose(t,e):this._panByIfClose(t);if(o)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e,i){if(t=n.point(t),!t.x&&!t.y)return this;this._panAnim||(this._panAnim=new n.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),this.fire("movestart"),n.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var o=n.DomUtil.getPosition(this._mapPane).subtract(t)._round();return this._panAnim.run(this._mapPane,o,e||.25,i),this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){n.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_panByIfClose:function(t){var e=this._getCenterOffset(t)._floor();return this._offsetIsWithinView(e)?(this.panBy(e),!0):!1},_offsetIsWithinView:function(t,e){var i=e||1,n=this.getSize();return Math.abs(t.x)<=n.x*i&&Math.abs(t.y)<=n.y*i}}),n.PosAnimation=n.DomUtil.TRANSITION?n.PosAnimation:n.PosAnimation.extend({run:function(t,e,i,o){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(o||.5,.2),this._startPos=n.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=n.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));n.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){n.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),n.Map.mergeOptions({zoomAnimation:n.DomUtil.TRANSITION&&!n.Browser.android23&&!n.Browser.mobileOpera}),n.DomUtil.TRANSITION&&n.Map.addInitHook(function(){n.DomEvent.on(this._mapPane,n.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),n.Map.include(n.DomUtil.TRANSITION?{_zoomToIfClose:function(t,e){if(this._animatingZoom)return!0;if(!this.options.zoomAnimation)return!1;var i=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/i);if(!this._offsetIsWithinView(o,1))return!1;n.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this.fire("movestart").fire("zoomstart"),this.fire("zoomanim",{center:t,zoom:e});var s=this._getCenterLayerPoint().add(o);return this._prepareTileBg(),this._runAnimation(t,e,i,s),!0},_catchTransitionEnd:function(){this._animatingZoom&&this._onZoomTransitionEnd()},_runAnimation:function(t,e,i,o,s){this._animateToCenter=t,this._animateToZoom=e,this._animatingZoom=!0,n.Draggable&&(n.Draggable._disabled=!0);var a=n.DomUtil.TRANSFORM,r=this._tileBg;clearTimeout(this._clearTileBgTimer),n.Util.falseFn(r.offsetWidth);var h=n.DomUtil.getScaleString(i,o),l=r.style[a];r.style[a]=s?l+" "+h:h+" "+l},_prepareTileBg:function(){var t=this._tilePane,e=this._tileBg;if(e&&this._getLoadedTilesPercentage(e)>.5&&.5>this._getLoadedTilesPercentage(t))return t.style.visibility="hidden",t.empty=!0,this._stopLoadingImages(t),i;e||(e=this._tileBg=this._createPane("leaflet-tile-pane",this._mapPane),e.style.zIndex=1),e.style[n.DomUtil.TRANSFORM]="",e.style.visibility="hidden",e.empty=!0,t.empty=!1,this._tilePane=this._panes.tilePane=e;var o=this._tileBg=t;n.DomUtil.addClass(o,"leaflet-zoom-animated"),this._stopLoadingImages(o)},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,o,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)o=s[e],o.complete||(o.onload=n.Util.falseFn,o.onerror=n.Util.falseFn,o.src=n.Util.emptyImageUrl,o.parentNode.removeChild(o))},_onZoomTransitionEnd:function(){this._restoreTileFront(),n.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),n.Util.falseFn(this._tileBg.offsetWidth),this._animatingZoom=!1,this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),n.Draggable&&(n.Draggable._disabled=!1)},_restoreTileFront:function(){this._tilePane.innerHTML="",this._tilePane.style.visibility="",this._tilePane.style.zIndex=2,this._tileBg.style.zIndex=1},_clearTileBg:function(){this._animatingZoom||this.touchZoom._zooming||(this._tileBg.innerHTML="")}}:{}),n.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locationOptions=n.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=n.bind(this._handleGeolocationResponse,this),i=n.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locationOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=180*t.coords.accuracy/4e7,i=2*e,o=t.coords.latitude,s=t.coords.longitude,a=new n.LatLng(o,s),r=new n.LatLng(o-e,s-i),h=new n.LatLng(o+e,s+i),l=new n.LatLngBounds(r,h),u=this._locationOptions;if(u.setView){var c=Math.min(this.getBoundsZoom(l),u.maxZoom);this.setView(a,c)}this.fire("locationfound",{latlng:a,bounds:l,accuracy:t.coords.accuracy})}})})(this,document);(function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define(e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),d=i.substring(0,i.indexOf("Animation")).toLowerCase(),u=d&&"-"+d+"-"||"";if(!e[a]){r.insertRule("@"+u+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;if(o[i]!==undefined)return i;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function d(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}var u={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function p(t){if(typeof this=="undefined")return new p(t);this.opts=l(t||{},p.defaults,u)}p.defaults={};l(p.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=d(t);a=d(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var u=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){u++;for(var t=0;t<n.lines;t++){c=Math.max(1-(u+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function d(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(d("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,d(e.color,"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function c(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");p.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),d;function u(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:i.color,opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(d=1;d<=i.lines;d++)u(d,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(d=1;d<=i.lines;d++)u(d);return n(e,l)};p.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var h=f(o("group"),{behavior:"url(#default#VML)"});if(!a(h,"transform")&&h.adj)c();else i=a(h,"animation");return p});L.SpinMapMixin = {
    spin: function (state) {
        var state = !!state;
        if (state) {
            // start spinning !
            if (!this._spinner) {
                this._spinner = new Spinner().spin(this._container);
                this._spinning = 0;
            }
            this._spinning++;
        }
        else {
            this._spinning--;
            if (this._spinning <= 0) {
                // end spinning !
                if (this._spinner) {
                    this._spinner.stop();
                    this._spinner = null;
                }
            }
        }
    }
};

L.Map.include(L.SpinMapMixin);

L.Map.addInitHook(function () {
    this.on('layeradd', function (e) {
        // If added layer is currently loading, spin !
        if (e.layer.loading) this.spin(true);
        e.layer.on('data:loading', function () { this.spin(true) }, this);
        e.layer.on('data:loaded',  function () { this.spin(false) }, this);
    }, this);
    this.on('layerremove', function (e) {
        // Clean-up
        if (e.layer.loading) this.spin(false);
        e.layer.off('data:loaded');
        e.layer.off('data:loading');
    }, this);
});

/*
 Copyright (c) 2012, Smartrak, David Leaver
 Leaflet.markercluster is an open-source JavaScript library for Marker Clustering on leaflet powered maps.
 https://github.com/danzel/Leaflet.markercluster
*/
(function(e,t){L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animateAddingMarkers:!1,spiderfyDistanceMultiplier:1,polygonOptions:{}},initialize:function(e){L.Util.setOptions(this,e),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),L.FeatureGroup.prototype.initialize.call(this,[]),this._inZoomAnimation=0,this._needsClustering=[],this._currentShownBounds=null},addLayer:function(e){if(e instanceof L.LayerGroup){var t=[];for(var n in e._layers)e._layers.hasOwnProperty(n)&&t.push(e._layers[n]);return this.addLayers(t)}if(!this._map)return this._needsClustering.push(e),this;if(this.hasLayer(e))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(e,this._maxZoom);var r=e,i=this._map.getZoom();if(e.__parent)while(r.__parent._zoom>=i)r=r.__parent;return this._currentShownBounds.contains(r.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(e,r):this._animationAddLayerNonAnimated(e,r)),this},removeLayer:function(e){return this._map?e.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(e)),this._removeLayer(e,!0),e._icon&&(L.FeatureGroup.prototype.removeLayer.call(this,e),e.setOpacity(1)),this):this:(this._arraySplice(this._needsClustering,e),this)},addLayers:function(e){var t,n,r;if(!this._map)return this._needsClustering=this._needsClustering.concat(e),this;for(t=0,n=e.length;t<n;t++){r=e[t];if(this.hasLayer(r))continue;this._addLayer(r,this._maxZoom);if(r.__parent&&r.__parent.getChildCount()===2){var i=r.__parent.getAllChildMarkers(),s=i[0]===r?i[1]:i[0];L.FeatureGroup.prototype.removeLayer.call(this,s)}}for(t in this._layers)this._layers.hasOwnProperty(t)&&(r=this._layers[t],r instanceof L.MarkerCluster&&r._iconNeedsUpdate&&r._updateIcon());return this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},removeLayers:function(e){var t,n,r;if(!this._map){for(t=0,n=e.length;t<n;t++)this._arraySplice(this._needsClustering,e[t]);return this}for(t=0,n=e.length;t<n;t++){r=e[t];if(!r.__parent)continue;this._removeLayer(r,!0,!0),r._icon&&(L.FeatureGroup.prototype.removeLayer.call(this,r),r.setOpacity(1))}this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds);for(t in this._layers)this._layers.hasOwnProperty(t)&&(r=this._layers[t],r instanceof L.MarkerCluster&&r._updateIcon());return this},clearLayers:function(){this._map||(this._needsClustering=[],delete this._gridClusters,delete this._gridUnclustered),this._unspiderfy&&this._unspiderfy();for(var e in this._layers)this._layers.hasOwnProperty(e)&&L.FeatureGroup.prototype.removeLayer.call(this,this._layers[e]);return this.eachLayer(function(e){delete e.__parent}),this._map&&this._generateInitialClusters(),this},getBounds:function(){var e=new L.LatLngBounds;if(this._topClusterLevel)e.extend(this._topClusterLevel._bounds);else for(var t=this._needsClustering.length-1;t>=0;t--)e.extend(this._needsClustering[t].getLatLng());return e},eachLayer:function(e,t){var n=this._needsClustering.slice(),r;this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(n);for(r=n.length-1;r>=0;r--)e.call(t,n[r])},hasLayer:function(e){if(this._needsClustering.length>0){var t=this._needsClustering;for(var n=t.length-1;n>=0;n--)if(t[n]===e)return!0}return!!e.__parent&&e.__parent._group===this},zoomToShowLayer:function(e,t){var n=function(){if((e._icon||e.__parent._icon)&&!this._inZoomAnimation){this._map.off("moveend",n,this),this.off("animationend",n,this);if(e._icon)t();else if(e.__parent._icon){var r=function(){this.off("spiderfied",r,this),t()};this.on("spiderfied",r,this),e.__parent.spiderfy()}}};e._icon?t():e.__parent._zoom<this._map.getZoom()?(this._map.on("moveend",n,this),e._icon||this._map.panTo(e.getLatLng())):(this._map.on("moveend",n,this),this.on("animationend",n,this),this._map.setView(e.getLatLng(),e.__parent._zoom+1),e.__parent.zoomToBounds())},onAdd:function(e){this._map=e,this._gridClusters||this._generateInitialClusters();for(var t=0,n=this._needsClustering.length;t<n;t++){var r=this._needsClustering[t];if(r.__parent)continue;this._addLayer(r,this._maxZoom)}this._needsClustering=[],this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),this._zoom=this._map.getZoom(),this._currentShownBounds=this._getExpandedVisibleBounds(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)},onRemove:function(e){this._map.off("zoomend",this._zoomEnd,this),this._map.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove();for(var t in this._layers)this._layers.hasOwnProperty(t)&&L.FeatureGroup.prototype.removeLayer.call(this,this._layers[t]);this._map=null},_arraySplice:function(e,t){for(var n=e.length-1;n>=0;n--)if(e[n]===t){e.splice(n,1);return}},_removeLayer:function(e,t,n){var r=this._gridClusters,i=this._gridUnclustered,s=this._map;if(t)for(var o=this._maxZoom;o>=0;o--)if(!i[o].removeObject(e,s.project(e.getLatLng(),o)))break;var u=e.__parent,a=u._markers,f;this._arraySplice(a,e);while(u){u._childCount--;if(u._zoom<0)break;t&&u._childCount<=1?(f=u._markers[0]===e?u._markers[1]:u._markers[0],r[u._zoom].removeObject(u,s.project(u._cLatLng,u._zoom)),i[u._zoom].addObject(f,s.project(f.getLatLng(),u._zoom)),this._arraySplice(u.__parent._childClusters,u),u.__parent._markers.push(f),f.__parent=u.__parent,u._icon&&(L.FeatureGroup.prototype.removeLayer.call(this,u),n||L.FeatureGroup.prototype.addLayer.call(this,f))):(u._recalculateBounds(),(!n||!u._icon)&&u._updateIcon()),u=u.__parent}delete e.__parent},_propagateEvent:function(e){e.target instanceof L.MarkerCluster&&(e.type="cluster"+e.type),L.FeatureGroup.prototype._propagateEvent.call(this,e)},_defaultIconCreateFunction:function(e){var t=e.getChildCount(),n=" marker-cluster-";return t<10?n+="small":t<100?n+="medium":n+="large",new L.DivIcon({html:"<div><span>"+t+"</span></div>",className:"marker-cluster"+n,iconSize:new L.Point(40,40)})},_bindEvents:function(){var e=null,t=this._map,n=this.options.spiderfyOnMaxZoom,r=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick;(n||i)&&this.on("clusterclick",function(e){t.getMaxZoom()===t.getZoom()?n&&e.layer.spiderfy():i&&e.layer.zoomToBounds()},this),r&&(this.on("clustermouseover",function(n){if(this._inZoomAnimation)return;e&&t.removeLayer(e),n.layer.getChildCount()>2&&n.layer!==this._spiderfied&&(e=new L.Polygon(n.layer.getConvexHull(),this.options.polygonOptions),t.addLayer(e))},this),this.on("clustermouseout",function(){e&&(t.removeLayer(e),e=null)},this),t.on("zoomend",function(){e&&(t.removeLayer(e),e=null)},this),t.on("layerremove",function(n){e&&n.layer===this&&(t.removeLayer(e),e=null)},this))},_unbindEvents:function(){var e=this.options.spiderfyOnMaxZoom,t=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick,r=this._map;(e||n)&&this.off("clusterclick",null,this),t&&(this.off("clustermouseover",null,this),this.off("clustermouseout",null,this),r.off("zoomend",null,this),r.off("layerremove",null,this))},_zoomEnd:function(){if(!this._map)return;this._mergeSplitClusters(),this._zoom=this._map._zoom,this._currentShownBounds=this._getExpandedVisibleBounds()},_moveEnd:function(){if(this._inZoomAnimation)return;var e=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,e),this._currentShownBounds=e;return},_generateInitialClusters:function(){var e=this._map.getMaxZoom(),t=this.options.maxClusterRadius;this.options.disableClusteringAtZoom&&(e=this.options.disableClusteringAtZoom-1),this._maxZoom=e,this._gridClusters={},this._gridUnclustered={};for(var n=e;n>=0;n--)this._gridClusters[n]=new L.DistanceGrid(t),this._gridUnclustered[n]=new L.DistanceGrid(t);this._topClusterLevel=new L.MarkerCluster(this,-1)},_addLayer:function(e,t){var n=this._gridClusters,r=this._gridUnclustered,i,s;this.options.singleMarkerMode&&(e.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[e]}}));for(;t>=0;t--){i=this._map.project(e.getLatLng(),t);var o=n[t].getNearObject(i);if(o){o._addChild(e),e.__parent=o;return}o=r[t].getNearObject(i);if(o){var u=o.__parent;u&&this._removeLayer(o,!1);var a=new L.MarkerCluster(this,t,o,e);n[t].addObject(a,this._map.project(a._cLatLng,t)),o.__parent=a,e.__parent=a;var f=a;for(s=t-1;s>u._zoom;s--)f=new L.MarkerCluster(this,s,f),n[s].addObject(f,this._map.project(o.getLatLng(),s));u._addChild(f);for(s=t;s>=0;s--)if(!r[s].removeObject(o,this._map.project(o.getLatLng(),s)))break;return}r[t].addObject(e,i)}this._topClusterLevel._addChild(e),e.__parent=this._topClusterLevel;return},_mergeSplitClusters:function(){this._zoom<this._map._zoom?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,this._map._zoom)):this._zoom>this._map._zoom?(this._animationStart(),this._animationZoomOut(this._zoom,this._map._zoom)):this._moveEnd()},_getExpandedVisibleBounds:function(){if(!this.options.removeOutsideVisibleBounds)return this.getBounds();var e=this._map,t=e.getBounds(),n=t._southWest,r=t._northEast,i=L.Browser.mobile?0:Math.abs(n.lat-r.lat),s=L.Browser.mobile?0:Math.abs(n.lng-r.lng);return new L.LatLngBounds(new L.LatLng(n.lat-i,n.lng-s,!0),new L.LatLng(r.lat+i,r.lng+s,!0))},_animationAddLayerNonAnimated:function(e,t){if(t===e)L.FeatureGroup.prototype.addLayer.call(this,e);else if(t._childCount===2){t._addToMap();var n=t.getAllChildMarkers();L.FeatureGroup.prototype.removeLayer.call(this,n[0]),L.FeatureGroup.prototype.removeLayer.call(this,n[1])}else t._updateIcon()}}),L.MarkerClusterGroup.include(L.DomUtil.TRANSITION?{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_animationZoomIn:function(e,t){var n=this,r=this._getExpandedVisibleBounds(),i;this._topClusterLevel._recursively(r,e,0,function(s){var o=s._latlng,u=s._markers,a;s._isSingleParent()&&e+1===t?(L.FeatureGroup.prototype.removeLayer.call(n,s),s._recursivelyAddChildrenToMap(null,t,r)):(s.setOpacity(0),s._recursivelyAddChildrenToMap(o,t,r));for(i=u.length-1;i>=0;i--)a=u[i],r.contains(a._latlng)||L.FeatureGroup.prototype.removeLayer.call(n,a)}),this._forceLayout();var s,o;n._topClusterLevel._recursivelyBecomeVisible(r,t);for(s in n._layers)n._layers.hasOwnProperty(s)&&(o=n._layers[s],!(o instanceof L.MarkerCluster)&&o._icon&&o.setOpacity(1));n._topClusterLevel._recursively(r,e,t,function(e){e._recursivelyRestoreChildPositions(t)}),setTimeout(function(){n._topClusterLevel._recursively(r,e,0,function(e){L.FeatureGroup.prototype.removeLayer.call(n,e),e.setOpacity(1)}),n._animationEnd()},200)},_animationZoomOut:function(e,t){this._animationZoomOutSingle(this._topClusterLevel,e-1,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,e,this._getExpandedVisibleBounds())},_animationZoomOutSingle:function(e,t,n){var r=this._getExpandedVisibleBounds();e._recursivelyAnimateChildrenInAndAddSelfToMap(r,t+1,n);var i=this;this._forceLayout(),e._recursivelyBecomeVisible(r,n),setTimeout(function(){if(e._childCount===1){var s=e._markers[0];s.setLatLng(s.getLatLng()),s.setOpacity(1);return}e._recursively(r,n,0,function(e){e._recursivelyRemoveChildrenFromMap(r,t+1)}),i._animationEnd()},200)},_animationAddLayer:function(e,t){var n=this;L.FeatureGroup.prototype.addLayer.call(this,e),t!==e&&(t._childCount>2?(t._updateIcon(),this._forceLayout(),this._animationStart(),e._setPos(this._map.latLngToLayerPoint(t.getLatLng())),e.setOpacity(0),setTimeout(function(){L.FeatureGroup.prototype.removeLayer.call(n,e),e.setOpacity(1),n._animationEnd()},200)):(this._forceLayout(),n._animationStart(),n._animationZoomOutSingle(t,this._map.getMaxZoom(),this._map.getZoom())))},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}:{_animationStart:function(){},_animationZoomIn:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds())},_animationZoomOut:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds())},_animationAddLayer:function(e,t){this._animationAddLayerNonAnimated(e,t)}}),L.MarkerCluster=L.Marker.extend({initialize:function(e,t,n,r){L.Marker.prototype.initialize.call(this,n?n._cLatLng||n.getLatLng():new L.LatLng(0,0),{icon:this}),this._group=e,this._zoom=t,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._bounds=new L.LatLngBounds,n&&this._addChild(n),r&&this._addChild(r)},getAllChildMarkers:function(e){e=e||[];for(var t=this._childClusters.length-1;t>=0;t--)this._childClusters[t].getAllChildMarkers(e);for(var n=this._markers.length-1;n>=0;n--)e.push(this._markers[n]);return e},getChildCount:function(){return this._childCount},zoomToBounds:function(){this._group._map.fitBounds(this._bounds)},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(e,t){this._iconNeedsUpdate=!0,this._expandBounds(e),e instanceof L.MarkerCluster?(t||(this._childClusters.push(e),e.__parent=this),this._childCount+=e._childCount):(t||this._markers.push(e),this._childCount++),this.__parent&&this.__parent._addChild(e,!0)},_expandBounds:function(e){var t,n=e._wLatLng||e._latlng;e instanceof L.MarkerCluster?(this._bounds.extend(e._bounds),t=e._childCount):(this._bounds.extend(n),t=1),this._cLatLng||(this._cLatLng=e._cLatLng||n);var r=this._childCount+t;this._wLatLng?(this._wLatLng.lat=(n.lat*t+this._wLatLng.lat*this._childCount)/r,this._wLatLng.lng=(n.lng*t+this._wLatLng.lng*this._childCount)/r):this._latlng=this._wLatLng=new L.LatLng(n.lat,n.lng)},_addToMap:function(e){e&&(this._backupLatlng=this._latlng,this.setLatLng(e)),L.FeatureGroup.prototype.addLayer.call(this._group,this)},_recursivelyAnimateChildrenIn:function(e,t,n){this._recursively(e,0,n-1,function(e){var n=e._markers,r,i;for(r=n.length-1;r>=0;r--)i=n[r],i._icon&&(i._setPos(t),i.setOpacity(0))},function(e){var n=e._childClusters,r,i;for(r=n.length-1;r>=0;r--)i=n[r],i._icon&&(i._setPos(t),i.setOpacity(0))})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(e,t,n){this._recursively(e,n,0,function(r){r._recursivelyAnimateChildrenIn(e,r._group._map.latLngToLayerPoint(r.getLatLng()).round(),t),r._isSingleParent()&&t-1===n?(r.setOpacity(1),r._recursivelyRemoveChildrenFromMap(e,t)):r.setOpacity(0),r._addToMap()})},_recursivelyBecomeVisible:function(e,t){this._recursively(e,0,t,null,function(e){e.setOpacity(1)})},_recursivelyAddChildrenToMap:function(e,t,n){this._recursively(n,-1,t,function(r){if(t===r._zoom)return;for(var i=r._markers.length-1;i>=0;i--){var s=r._markers[i];if(!n.contains(s._latlng))continue;e&&(s._backupLatlng=s.getLatLng(),s.setLatLng(e),s.setOpacity(0)),L.FeatureGroup.prototype.addLayer.call(r._group,s)}},function(t){t._addToMap(e)})},_recursivelyRestoreChildPositions:function(e){for(var t=this._markers.length-1;t>=0;t--){var n=this._markers[t];n._backupLatlng&&(n.setLatLng(n._backupLatlng),delete n._backupLatlng)}if(e-1===this._zoom)for(var r=this._childClusters.length-1;r>=0;r--)this._childClusters[r]._restorePosition();else for(var i=this._childClusters.length-1;i>=0;i--)this._childClusters[i]._recursivelyRestoreChildPositions(e)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(e,t,n){var r,i;this._recursively(e,-1,t-1,function(e){for(i=e._markers.length-1;i>=0;i--){r=e._markers[i];if(!n||!n.contains(r._latlng))L.FeatureGroup.prototype.removeLayer.call(e._group,r),r.setOpacity(1)}},function(e){for(i=e._childClusters.length-1;i>=0;i--){r=e._childClusters[i];if(!n||!n.contains(r._latlng))L.FeatureGroup.prototype.removeLayer.call(e._group,r),r.setOpacity(1)}})},_recursively:function(e,t,n,r,i){var s=this._childClusters,o=this._zoom,u,a;if(t>o)for(u=s.length-1;u>=0;u--)a=s[u],e.intersects(a._bounds)&&a._recursively(e,t,n,r,i);else{r&&r(this),i&&this._zoom===n&&i(this);if(n>o)for(u=s.length-1;u>=0;u--)a=s[u],e.intersects(a._bounds)&&a._recursively(e,t,n,r,i)}},_recalculateBounds:function(){var e=this._markers,t=this._childClusters,n;this._bounds=new L.LatLngBounds,delete this._wLatLng;for(n=e.length-1;n>=0;n--)this._expandBounds(e[n]);for(n=t.length-1;n>=0;n--)this._expandBounds(t[n])},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}}),L.DistanceGrid=function(e){this._cellSize=e,this._sqCellSize=e*e,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(e,t){var n=this._getCoord(t.x),r=this._getCoord(t.y),i=this._grid,s=i[r]=i[r]||{},o=s[n]=s[n]||[],u=L.Util.stamp(e);this._objectPoint[u]=t,o.push(e)},updateObject:function(e,t){this.removeObject(e),this.addObject(e,t)},removeObject:function(e,t){var n=this._getCoord(t.x),r=this._getCoord(t.y),i=this._grid,s=i[r]=i[r]||{},o=s[n]=s[n]||[],u,a;delete this._objectPoint[L.Util.stamp(e)];for(u=0,a=o.length;u<a;u++)if(o[u]===e)return o.splice(u,1),a===1&&delete s[n],!0},eachObject:function(e,t){var n,r,i,s,o,u,a,f=this._grid;for(n in f)if(f.hasOwnProperty(n)){o=f[n];for(r in o)if(o.hasOwnProperty(r)){u=o[r];for(i=0,s=u.length;i<s;i++)a=e.call(t,u[i]),a&&(i--,s--)}}},getNearObject:function(e){var t=this._getCoord(e.x),n=this._getCoord(e.y),r,i,s,o,u,a,f,l,c=this._objectPoint,h=this._sqCellSize,p=null;for(r=n-1;r<=n+1;r++){o=this._grid[r];if(o)for(i=t-1;i<=t+1;i++){u=o[i];if(u)for(s=0,a=u.length;s<a;s++)f=u[s],l=this._sqDist(c[L.Util.stamp(f)],e),l<h&&(h=l,p=f)}}return p},_getCoord:function(e){return Math.floor(e/this._cellSize)},_sqDist:function(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}},function(){L.QuickHull={getDistant:function(e,t){var n=t[1].lat-t[0].lat,r=t[0].lng-t[1].lng;return r*(e.lat-t[0].lat)+n*(e.lng-t[0].lng)},findMostDistantPointFromBaseLine:function(e,t){var n=0,r=null,i=[],s,o,u;for(s=t.length-1;s>=0;s--){o=t[s],u=this.getDistant(o,e);if(!(u>0))continue;i.push(o),u>n&&(n=u,r=o)}return{maxPoint:r,newPoints:i}},buildConvexHull:function(e,t){var n=[],r=this.findMostDistantPointFromBaseLine(e,t);return r.maxPoint?(n=n.concat(this.buildConvexHull([e[0],r.maxPoint],r.newPoints)),n=n.concat(this.buildConvexHull([r.maxPoint,e[1]],r.newPoints)),n):[e]},getConvexHull:function(e){var t=!1,n=!1,r=null,i=null,s;for(s=e.length-1;s>=0;s--){var o=e[s];if(t===!1||o.lat>t)r=o,t=o.lat;if(n===!1||o.lat<n)i=o,n=o.lat}var u=[].concat(this.buildConvexHull([i,r],e),this.buildConvexHull([r,i],e));return u}}}(),L.MarkerCluster.include({getConvexHull:function(){var e=this.getAllChildMarkers(),t=[],n=[],r,i,s;for(s=e.length-1;s>=0;s--)i=e[s].getLatLng(),t.push(i);r=L.QuickHull.getConvexHull(t);for(s=r.length-1;s>=0;s--)n.push(r[s][0]);return n}}),L.MarkerCluster.include({_2PI:Math.PI*2,_circleFootSeparation:25,_circleStartAngle:Math.PI/6,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied===this||this._group._inZoomAnimation)return;var e=this.getAllChildMarkers(),t=this._group,n=t._map,r=n.latLngToLayerPoint(this._latlng),i;this._group._unspiderfy(),this._group._spiderfied=this,e.length>=this._circleSpiralSwitchover?i=this._generatePointsSpiral(e.length,r):(r.y+=10,i=this._generatePointsCircle(e.length,r)),this._animationSpiderfy(e,i)},unspiderfy:function(e){if(this._group._inZoomAnimation)return;this._animationUnspiderfy(e),this._group._spiderfied=null},_generatePointsCircle:function(e,t){var n=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+e),r=n/this._2PI,i=this._2PI/e,s=[],o,u;s.length=e;for(o=e-1;o>=0;o--)u=this._circleStartAngle+o*i,s[o]=(new L.Point(t.x+r*Math.cos(u),t.y+r*Math.sin(u)))._round();return s},_generatePointsSpiral:function(e,t){var n=this._group.options.spiderfyDistanceMultiplier*this._spiralLengthStart,r=this._group.options.spiderfyDistanceMultiplier*this._spiralFootSeparation,i=this._group.options.spiderfyDistanceMultiplier*this._spiralLengthFactor,s=0,o=[],u;o.length=e;for(u=e-1;u>=0;u--)s+=r/n+u*5e-4,o[u]=(new L.Point(t.x+n*Math.cos(s),t.y+n*Math.sin(s)))._round(),n+=this._2PI*i/s;return o}}),L.MarkerCluster.include(L.DomUtil.TRANSITION?{SVG_ANIMATION:function(){return(document.createElementNS("http://www.w3.org/2000/svg","animate")+"").indexOf("SVGAnimate")>-1}(),_animationSpiderfy:function(e,t){var n=this,r=this._group,i=r._map,s=i.latLngToLayerPoint(this._latlng),o,u,a,f;for(o=e.length-1;o>=0;o--)u=e[o],u.setZIndexOffset(1e6),u.setOpacity(0),L.FeatureGroup.prototype.addLayer.call(r,u),u._setPos(s);r._forceLayout(),r._animationStart();var l=L.Path.SVG?0:.3,c=L.Path.SVG_NS;for(o=e.length-1;o>=0;o--){f=i.layerPointToLatLng(t[o]),u=e[o],u._preSpiderfyLatlng=u._latlng,u.setLatLng(f),u.setOpacity(1),a=new L.Polyline([n._latlng,f],{weight:1.5,color:"#222",opacity:l}),i.addLayer(a),u._spiderLeg=a;if(!L.Path.SVG||!this.SVG_ANIMATION)continue;var h=a._path.getTotalLength();a._path.setAttribute("stroke-dasharray",h+","+h);var p=document.createElementNS(c,"animate");p.setAttribute("attributeName","stroke-dashoffset"),p.setAttribute("begin","indefinite"),p.setAttribute("from",h),p.setAttribute("to",0),p.setAttribute("dur",.25),a._path.appendChild(p),p.beginElement(),p=document.createElementNS(c,"animate"),p.setAttribute("attributeName","stroke-opacity"),p.setAttribute("attributeName","stroke-opacity"),p.setAttribute("begin","indefinite"),p.setAttribute("from",0),p.setAttribute("to",.5),p.setAttribute("dur",.25),a._path.appendChild(p),p.beginElement()}n.setOpacity(.3);if(L.Path.SVG){this._group._forceLayout();for(o=e.length-1;o>=0;o--)u=e[o]._spiderLeg,u.options.opacity=.5,u._path.setAttribute("stroke-opacity",.5)}setTimeout(function(){r._animationEnd(),r.fire("spiderfied")},200)},_animationUnspiderfy:function(e){var t=this._group,n=t._map,r=e?n._latLngToNewLayerPoint(this._latlng,e.zoom,e.center):n.latLngToLayerPoint(this._latlng),i=this.getAllChildMarkers(),s=L.Path.SVG&&this.SVG_ANIMATION,o,u,a;t._animationStart(),this.setOpacity(1);for(u=i.length-1;u>=0;u--){o=i[u];if(!o._preSpiderfyLatlng)continue;o.setLatLng(o._preSpiderfyLatlng),delete o._preSpiderfyLatlng,o._setPos(r),o.setOpacity(0),s&&(a=o._spiderLeg._path.childNodes[0],a.setAttribute("to",a.getAttribute("from")),a.setAttribute("from",0),a.beginElement(),a=o._spiderLeg._path.childNodes[1],a.setAttribute("from",.5),a.setAttribute("to",0),a.setAttribute("stroke-opacity",0),a.beginElement(),o._spiderLeg._path.setAttribute("stroke-opacity",0))}setTimeout(function(){var e=0;for(u=i.length-1;u>=0;u--)o=i[u],o._spiderLeg&&e++;for(u=i.length-1;u>=0;u--){o=i[u];if(!o._spiderLeg)continue;o.setOpacity(1),o.setZIndexOffset(0),e>1&&L.FeatureGroup.prototype.removeLayer.call(t,o),n.removeLayer(o._spiderLeg),delete o._spiderLeg}t._animationEnd()},200)}}:{_animationSpiderfy:function(e,t){var n=this._group,r=n._map,i,s,o,u;for(i=e.length-1;i>=0;i--)u=r.layerPointToLatLng(t[i]),s=e[i],s._preSpiderfyLatlng=s._latlng,s.setLatLng(u),s.setZIndexOffset(1e6),L.FeatureGroup.prototype.addLayer.call(n,s),o=new L.Polyline([this._latlng,u],{weight:1.5,color:"#222"}),r.addLayer(o),s._spiderLeg=o;this.setOpacity(.3),n.fire("spiderfied")},_animationUnspiderfy:function(){var e=this._group,t=e._map,n=this.getAllChildMarkers(),r,i;this.setOpacity(1);for(i=n.length-1;i>=0;i--)r=n[i],L.FeatureGroup.prototype.removeLayer.call(e,r),r.setLatLng(r._preSpiderfyLatlng),delete r._preSpiderfyLatlng,r.setZIndexOffset(0),t.removeLayer(r._spiderLeg),delete r._spiderLeg}}),L.MarkerClusterGroup.include({_spiderfied:null,_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation?this._map.on("zoomstart",this._unspiderfyZoomStart,this):this._map.on("zoomend",this._unspiderfyWrapper,this),L.Path.SVG&&!L.Browser.touch&&this._map._initPathRoot()},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy()},_unspiderfyZoomStart:function(){if(!this._map)return;this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(e){if(L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching"))return;this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(e)},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(e){this._spiderfied&&this._spiderfied.unspiderfy(e)},_unspiderfyLayer:function(e){e._spiderLeg&&(L.FeatureGroup.prototype.removeLayer.call(this,e),e.setOpacity(1),e.setZIndexOffset(0),this._map.removeLayer(e._spiderLeg),delete e._spiderLeg)}})})(this);/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);/* Copyright (c) 2006-2007 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 2.1
 * 
 * Thanks to 
 * Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 * Tom Leonard for some improvements
 * 
 */
jQuery.fn.extend({
/**
* Returns get parameters.
*
* If the desired param does not exist, null will be returned
*
* To get the document params:
* @example value = $(document).getUrlParam("paramName");
* 
* To get the params of a html-attribut (uses src attribute)
* @example value = $('#imgLink').getUrlParam("paramName");
*/ 
 getUrlParam: function(strParamName){
	  strParamName = escape(unescape(strParamName));
	  
	  var returnVal = new Array();
	  var qString = null;
	  
	  if ($(this).attr("nodeName")=="#document") {
	  	//document-handler
		
		if (window.location.search.search(strParamName) > -1 ){
			
			qString = window.location.search.substr(1,window.location.search.length).split("&");
		}
			
	  } else if ($(this).attr("src")!="undefined") {
	  	
	  	var strHref = $(this).attr("src")
	  	if ( strHref.indexOf("?") > -1 ){
	    	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	  		qString = strQueryString.split("&");
	  	}
	  } else if ($(this).attr("href")!="undefined") {
	  	
	  	var strHref = $(this).attr("href")
	  	if ( strHref.indexOf("?") > -1 ){
	    	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	  		qString = strQueryString.split("&");
	  	}
	  } else {
	  	return null;
	  }
	  	
	  
	  if (qString==null) return null;
	  
	  
	  for (var i=0;i<qString.length; i++){
			if (escape(unescape(qString[i].split("=")[0])) == strParamName){
				returnVal.push(qString[i].split("=")[1]);
			}
			
	  }
	  
	  
	  if (returnVal.length==0) return null;
	  else if (returnVal.length==1) return returnVal[0];
	  else return returnVal;
	}
});(function() {
  "use strict";

  var inNodeJS = false;
  if (typeof process !== 'undefined' && !process.browser) {
    inNodeJS = true;
    var request = require('request'.trim()); //prevents browserify from bundling the module
  }

  var supportsCORS = false;
  var inLegacyIE = false;
  try {
    var testXHR = new XMLHttpRequest();
    if (typeof testXHR.withCredentials !== 'undefined') {
      supportsCORS = true;
    } else {
      if ("XDomainRequest" in window) {
        supportsCORS = true;
        inLegacyIE = true;
      }
    }
  } catch (e) { }

  // Create a simple indexOf function for support
  // of older browsers.  Uses native indexOf if 
  // available.  Code similar to underscores.
  // By making a separate function, instead of adding
  // to the prototype, we will not break bad for loops
  // in older browsers
  var indexOfProto = Array.prototype.indexOf;
  var ttIndexOf = function(array, item) {
    var i = 0, l = array.length;
    
    if (indexOfProto && array.indexOf === indexOfProto) return array.indexOf(item);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };
  
  /*
    Initialize with Tabletop.init( { key: '0AjAPaAU9MeLFdHUxTlJiVVRYNGRJQnRmSnQwTlpoUXc' } )
      OR!
    Initialize with Tabletop.init( { key: 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AjAPaAU9MeLFdHUxTlJiVVRYNGRJQnRmSnQwTlpoUXc&output=html&widget=true' } )
      OR!
    Initialize with Tabletop.init('0AjAPaAU9MeLFdHUxTlJiVVRYNGRJQnRmSnQwTlpoUXc')
  */

  var Tabletop = function(options) {
    // Make sure Tabletop is being used as a constructor no matter what.
    if(!this || !(this instanceof Tabletop)) {
      return new Tabletop(options);
    }
    
    if(typeof(options) === 'string') {
      options = { key : options };
    }

    this.callback = options.callback;
    this.wanted = options.wanted || [];
    this.key = options.key;
    this.simpleSheet = !!options.simpleSheet;
    this.parseNumbers = !!options.parseNumbers;
    this.wait = !!options.wait;
    this.reverse = !!options.reverse;
    this.postProcess = options.postProcess;
    this.debug = !!options.debug;
    this.query = options.query || '';
    this.orderby = options.orderby;
    this.endpoint = options.endpoint || "https://spreadsheets.google.com";
    this.singleton = !!options.singleton;
    this.simple_url = !!options.simple_url;
    this.callbackContext = options.callbackContext;
    // Default to on, unless there's a proxy, in which case it's default off
    this.prettyColumnNames = typeof(options.prettyColumnNames) == 'undefined' ? !options.proxy : options.prettyColumnNames
    
    if(typeof(options.proxy) !== 'undefined') {
      // Remove trailing slash, it will break the app
      this.endpoint = options.proxy.replace(/\/$/,'');
      this.simple_url = true;
      this.singleton = true;
      // Let's only use CORS (straight JSON request) when
      // fetching straight from Google
      supportsCORS = false;
    }
    
    this.parameterize = options.parameterize || false;
    
    if(this.singleton) {
      if(typeof(Tabletop.singleton) !== 'undefined') {
        this.log("WARNING! Tabletop singleton already defined");
      }
      Tabletop.singleton = this;
    }
    
    /* Be friendly about what you accept */
    if(/key=/.test(this.key)) {
      this.log("You passed an old Google Docs url as the key! Attempting to parse.");
      this.key = this.key.match("key=(.*?)(&|#|$)")[1];
    }

    if(/pubhtml/.test(this.key)) {
      this.log("You passed a new Google Spreadsheets url as the key! Attempting to parse.");
      this.key = this.key.match("d\\/(.*?)\\/pubhtml")[1];
    }

    if(!this.key) {
      this.log("You need to pass Tabletop a key!");
      return;
    }

    this.log("Initializing with key " + this.key);

    this.models = {};
    this.model_names = [];

    this.base_json_path = "/feeds/worksheets/" + this.key + "/public/basic?alt=";

    if (inNodeJS || supportsCORS) {
      this.base_json_path += 'json';
    } else {
      this.base_json_path += 'json-in-script';
    }
    
    if(!this.wait) {
      this.fetch();
    }
  };

  // A global storage for callbacks.
  Tabletop.callbacks = {};

  // Backwards compatibility.
  Tabletop.init = function(options) {
    return new Tabletop(options);
  };

  Tabletop.sheets = function() {
    this.log("Times have changed! You'll want to use var tabletop = Tabletop.init(...); tabletop.sheets(...); instead of Tabletop.sheets(...)");
  };

  Tabletop.prototype = {

    fetch: function(callback) {
      if(typeof(callback) !== "undefined") {
        this.callback = callback;
      }
      this.requestData(this.base_json_path, this.loadSheets);
    },
    
    /*
      This will call the environment appropriate request method.
      
      In browser it will use JSON-P, in node it will use request()
    */
    requestData: function(path, callback) {
      if (inNodeJS) {
        this.serverSideFetch(path, callback);
      } else {
        //CORS only works in IE8/9 across the same protocol
        //You must have your server on HTTPS to talk to Google, or it'll fall back on injection
        var protocol = this.endpoint.split("//").shift() || "http";
        if (supportsCORS && (!inLegacyIE || protocol === location.protocol)) {
          this.xhrFetch(path, callback);
        } else {
          this.injectScript(path, callback);
        }
      }
    },

    /*
      Use Cross-Origin XMLHttpRequest to get the data in browsers that support it.
    */
    xhrFetch: function(path, callback) {
      //support IE8's separate cross-domain object
      var xhr = inLegacyIE ? new XDomainRequest() : new XMLHttpRequest();
      xhr.open("GET", this.endpoint + path);
      var self = this;
      xhr.onload = function() {
        try {
          var json = JSON.parse(xhr.responseText);
        } catch (e) {
          console.error(e);
        }
        callback.call(self, json);
      };
      xhr.send();
    },
    
    /*
      Insert the URL into the page as a script tag. Once it's loaded the spreadsheet data
      it triggers the callback. This helps you avoid cross-domain errors
      http://code.google.com/apis/gdata/samples/spreadsheet_sample.html

      Let's be plain-Jane and not use jQuery or anything.
    */
    injectScript: function(path, callback) {
      var script = document.createElement('script');
      var callbackName;
      
      if(this.singleton) {
        if(callback === this.loadSheets) {
          callbackName = 'Tabletop.singleton.loadSheets';
        } else if (callback === this.loadSheet) {
          callbackName = 'Tabletop.singleton.loadSheet';
        }
      } else {
        var self = this;
        callbackName = 'tt' + (+new Date()) + (Math.floor(Math.random()*100000));
        // Create a temp callback which will get removed once it has executed,
        // this allows multiple instances of Tabletop to coexist.
        Tabletop.callbacks[ callbackName ] = function () {
          var args = Array.prototype.slice.call( arguments, 0 );
          callback.apply(self, args);
          script.parentNode.removeChild(script);
          delete Tabletop.callbacks[callbackName];
        };
        callbackName = 'Tabletop.callbacks.' + callbackName;
      }
      
      var url = path + "&callback=" + callbackName;
      
      if(this.simple_url) {
        // We've gone down a rabbit hole of passing injectScript the path, so let's
        // just pull the sheet_id out of the path like the least efficient worker bees
        if(path.indexOf("/list/") !== -1) {
          script.src = this.endpoint + "/" + this.key + "-" + path.split("/")[4];
        } else {
          script.src = this.endpoint + "/" + this.key;
        }
      } else {
        script.src = this.endpoint + url;
      }
      
      if (this.parameterize) {
        script.src = this.parameterize + encodeURIComponent(script.src);
      }
      
      document.getElementsByTagName('script')[0].parentNode.appendChild(script);
    },
    
    /* 
      This will only run if tabletop is being run in node.js
    */
    serverSideFetch: function(path, callback) {
      var self = this
      request({url: this.endpoint + path, json: true}, function(err, resp, body) {
        if (err) {
          return console.error(err);
        }
        callback.call(self, body);
      });
    },

    /* 
      Is this a sheet you want to pull?
      If { wanted: ["Sheet1"] } has been specified, only Sheet1 is imported
      Pulls all sheets if none are specified
    */
    isWanted: function(sheetName) {
      if(this.wanted.length === 0) {
        return true;
      } else {
        return (ttIndexOf(this.wanted, sheetName) !== -1);
      }
    },
    
    /*
      What gets send to the callback
      if simpleSheet === true, then don't return an array of Tabletop.this.models,
      only return the first one's elements
    */
    data: function() {
      // If the instance is being queried before the data's been fetched
      // then return undefined.
      if(this.model_names.length === 0) {
        return undefined;
      }
      if(this.simpleSheet) {
        if(this.model_names.length > 1 && this.debug) {
          this.log("WARNING You have more than one sheet but are using simple sheet mode! Don't blame me when something goes wrong.");
        }
        return this.models[ this.model_names[0] ].all();
      } else {
        return this.models;
      }
    },

    /*
      Add another sheet to the wanted list
    */
    addWanted: function(sheet) {
      if(ttIndexOf(this.wanted, sheet) === -1) {
        this.wanted.push(sheet);
      }
    },
    
    /*
      Load all worksheets of the spreadsheet, turning each into a Tabletop Model.
      Need to use injectScript because the worksheet view that you're working from
      doesn't actually include the data. The list-based feed (/feeds/list/key..) does, though.
      Calls back to loadSheet in order to get the real work done.

      Used as a callback for the worksheet-based JSON
    */
    loadSheets: function(data) {
      var i, ilen;
      var toLoad = [];
      this.googleSheetName = data.feed.title.$t;
      this.foundSheetNames = [];

      for(i = 0, ilen = data.feed.entry.length; i < ilen ; i++) {
        this.foundSheetNames.push(data.feed.entry[i].title.$t);
        // Only pull in desired sheets to reduce loading
        if( this.isWanted(data.feed.entry[i].content.$t) ) {
          var linkIdx = data.feed.entry[i].link.length-1;
          var sheet_id = data.feed.entry[i].link[linkIdx].href.split('/').pop();
          var json_path = "/feeds/list/" + this.key + "/" + sheet_id + "/public/values?alt="
          if (inNodeJS || supportsCORS) {
            json_path += 'json';
          } else {
            json_path += 'json-in-script';
          }
          if(this.query) {
            json_path += "&sq=" + this.query;
          }
          if(this.orderby) {
            json_path += "&orderby=column:" + this.orderby.toLowerCase();
          }
          if(this.reverse) {
            json_path += "&reverse=true";
          }
          toLoad.push(json_path);
        }
      }

      this.sheetsToLoad = toLoad.length;
      for(i = 0, ilen = toLoad.length; i < ilen; i++) {
        this.requestData(toLoad[i], this.loadSheet);
      }
    },

    /*
      Access layer for the this.models
      .sheets() gets you all of the sheets
      .sheets('Sheet1') gets you the sheet named Sheet1
    */
    sheets: function(sheetName) {
      if(typeof sheetName === "undefined") {
        return this.models;
      } else {
        if(typeof(this.models[ sheetName ]) === "undefined") {
          // alert( "Can't find " + sheetName );
          return;
        } else {
          return this.models[ sheetName ];
        }
      }
    },

    sheetReady: function(model) {
      this.models[ model.name ] = model;
      if(ttIndexOf(this.model_names, model.name) === -1) {
        this.model_names.push(model.name);
      }

      this.sheetsToLoad--;
      if(this.sheetsToLoad === 0)
        this.doCallback();
    },
    
    /*
      Parse a single list-based worksheet, turning it into a Tabletop Model

      Used as a callback for the list-based JSON
    */
    loadSheet: function(data) {
      var that = this;
      var model = new Tabletop.Model( { data: data, 
                                        parseNumbers: this.parseNumbers,
                                        postProcess: this.postProcess,
                                        tabletop: this,
                                        prettyColumnNames: this.prettyColumnNames,
                                        onReady: function() {
                                          that.sheetReady(this);
                                        } } );
    },

    /*
      Execute the callback upon loading! Rely on this.data() because you might
        only request certain pieces of data (i.e. simpleSheet mode)
      Tests this.sheetsToLoad just in case a race condition happens to show up
    */
    doCallback: function() {
      if(this.sheetsToLoad === 0) {
        this.callback.apply(this.callbackContext || this, [this.data(), this]);
      }
    },

    log: function(msg) {
      if(this.debug) {
        if(typeof console !== "undefined" && typeof console.log !== "undefined") {
          Function.prototype.apply.apply(console.log, [console, arguments]);
        }
      }
    }

  };

  /*
    Tabletop.Model stores the attribute names and parses the worksheet data
      to turn it into something worthwhile

    Options should be in the format { data: XXX }, with XXX being the list-based worksheet
  */
  Tabletop.Model = function(options) {
    var i, j, ilen, jlen;
    this.column_names = [];
    this.name = options.data.feed.title.$t;
    this.tabletop = options.tabletop;
    this.elements = [];
    this.onReady = options.onReady;
    this.raw = options.data; // A copy of the sheet's raw data, for accessing minutiae

    if(typeof(options.data.feed.entry) === 'undefined') {
      options.tabletop.log("Missing data for " + this.name + ", make sure you didn't forget column headers");
      this.original_columns = [];
      this.elements = [];
      this.onReady.call(this);
      return;
    }
    
    for(var key in options.data.feed.entry[0]){
      if(/^gsx/.test(key))
        this.column_names.push( key.replace("gsx$","") );
    }

    this.original_columns = this.column_names;
    
    for(i = 0, ilen =  options.data.feed.entry.length ; i < ilen; i++) {
      var source = options.data.feed.entry[i];
      var element = {};
      for(var j = 0, jlen = this.column_names.length; j < jlen ; j++) {
        var cell = source[ "gsx$" + this.column_names[j] ];
        if (typeof(cell) !== 'undefined') {
          if(options.parseNumbers && cell.$t !== '' && !isNaN(cell.$t))
            element[ this.column_names[j] ] = +cell.$t;
          else
            element[ this.column_names[j] ] = cell.$t;
        } else {
            element[ this.column_names[j] ] = '';
        }
      }
      if(element.rowNumber === undefined)
        element.rowNumber = i + 1;
      if( options.postProcess )
        options.postProcess(element);
      this.elements.push(element);
    }
    
    if(options.prettyColumnNames)
      this.fetchPrettyColumns();
    else
      this.onReady.call(this);
  };

  Tabletop.Model.prototype = {
    /*
      Returns all of the elements (rows) of the worksheet as objects
    */
    all: function() {
      return this.elements;
    },
    
    fetchPrettyColumns: function() {
      if(!this.raw.feed.link[3])
        return this.ready();
      var cellurl = this.raw.feed.link[3].href.replace('/feeds/list/', '/feeds/cells/').replace('https://spreadsheets.google.com', '');
      var that = this;
      this.tabletop.requestData(cellurl, function(data) {
        that.loadPrettyColumns(data)
      });
    },
    
    ready: function() {
      this.onReady.call(this);
    },
    
    /*
     * Store column names as an object
     * with keys of Google-formatted "columnName"
     * and values of human-readable "Column name"
     */
    loadPrettyColumns: function(data) {
      var pretty_columns = {};

      var column_names = this.column_names;

      var i = 0;
      var l = column_names.length;

      for (; i < l; i++) {
        if (typeof data.feed.entry[i].content.$t !== 'undefined') {
          pretty_columns[column_names[i]] = data.feed.entry[i].content.$t;
        } else {
          pretty_columns[column_names[i]] = column_names[i];
        }
      }

      this.pretty_columns = pretty_columns;

      this.prettifyElements();
      this.ready();
    },
    
    /*
     * Go through each row, substitutiting
     * Google-formatted "columnName"
     * with human-readable "Column name"
     */
    prettifyElements: function() {
      var pretty_elements = [],
          ordered_pretty_names = [],
          i, j, ilen, jlen;

      var ordered_pretty_names;
      for(j = 0, jlen = this.column_names.length; j < jlen ; j++) {
        ordered_pretty_names.push(this.pretty_columns[this.column_names[j]]);
      }

      for(i = 0, ilen = this.elements.length; i < ilen; i++) {
        var new_element = {};
        for(j = 0, jlen = this.column_names.length; j < jlen ; j++) {
          var new_column_name = this.pretty_columns[this.column_names[j]];
          new_element[new_column_name] = this.elements[i][this.column_names[j]];
        }
        pretty_elements.push(new_element);
      }
      this.elements = pretty_elements;
      this.column_names = ordered_pretty_names;
    },

    /*
      Return the elements as an array of arrays, instead of an array of objects
    */
    toArray: function() {
      var array = [],
          i, j, ilen, jlen;
      for(i = 0, ilen = this.elements.length; i < ilen; i++) {
        var row = [];
        for(j = 0, jlen = this.column_names.length; j < jlen ; j++) {
          row.push( this.elements[i][ this.column_names[j] ] );
        }
        array.push(row);
      }
      return array;
    }
  };

  if(typeof module !== "undefined" && module.exports) { //don't just use inNodeJS, we may be in Browserify
    module.exports = Tabletop;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
        return Tabletop;
    });
  } else {
    window.Tabletop = Tabletop;
  }

})();
var scriptEls = document.getElementsByTagName( 'script' );
var thisScriptEl = scriptEls[scriptEls.length - 1];
var scriptPath = thisScriptEl.src;
var scriptFolder = scriptPath.substr(0, scriptPath.lastIndexOf( '/' )+1 );


$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "http://cdn.leafletjs.com/leaflet-0.5/leaflet.css"
}).appendTo("head");

$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: scriptFolder+"libs/leaflet/markercluster/MarkerCluster.css"
}).appendTo("head");

$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: scriptFolder+"libs/leaflet/markercluster/MarkerCluster.Default.css"
}).appendTo("head");


$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: scriptFolder+"../css/searchlight.css"
}).appendTo("head");


window.getSLpath= function(){
    return scriptFolder
} 
var MyControl = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function (map) {
        // create the control container with a particular class name
        var container = L.DomUtil.create('div', 'searchlight-control leaflet-control-layers');
        container.innerHTML = "<div class='searchlight-opcoes'><ul> </ul></div>";
        container.innerHTML += "<div class='searchlight-analise'></div>";
       var stop = L.DomEvent.stopPropagation; 
        // ... initialize other DOM elements, add listeners, etc.
        L.DomEvent
		    .on(container, 'click', stop)
		    .on(container, 'mousedown', stop)
		    .on(container, 'mouseover', stop)
		    .on(container, 'touchstart', stop)
		    .on(container, 'touchend', stop)
		    .on(container, 'dblclick', stop)
		    .on(container, 'scroll', stop)
		    .on(container, 'mousewheel', stop)

        return container;
    }
});

var UndoRedoControl = L.Control.extend({
    options: {
        position: 'bottomleft'
    },

    onAdd: function (map) {
        // create the control container with a particular class name
        var container = L.DomUtil.create('div', 'leaflet-control-layers');
        container.innerHTML += "<div class='searchlight-undozoom'></div>";
       var stop = L.DomEvent.stopPropagation; 
        // ... initialize other DOM elements, add listeners, etc.
        L.DomEvent
		    .on(container, 'click', stop)
		    .on(container, 'mousedown', stop)
		    .on(container, 'mouseover', stop)
		    .on(container, 'touchstart', stop)
		    .on(container, 'touchend', stop)
		    .on(container, 'dblclick', stop)
		    .on(container, 'scroll', stop)
		    .on(container, 'mousewheel', stop)

        return container;
    }
});

getJSONP = function(url, func) {
  $.ajax({
    "url": url,
    "success": func,
    "type": "POST",
    "dataType": "jsonp"
  });
};

getJSON = function(url, func) {
  $.ajax({
    "url": url,
    "success": func,
    "dataType": "json",
    "beforeSend": (function(xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }

    }),
    "contentType": "application/json",
    "mimeType": "textPlain"
  });
};

getURLParameter = function(name) {
  return $(document).getUrlParam(name);
};

PilhaDeZoom = function(sl) {
  var html;
  this.pilha = [];
  this.sl = sl;
  this.id_undozoom = (("#" + this.sl.map_id) + " div.searchlight-undozoom");
  html = "";
  html += (("<a class='undo' title='desfazer zoom em grupo' href='javascript:SL(\"" + this.sl.map_id) + "\").control.clusterCtr.pilha_de_zoom.desfazer()'>&nbsp;</a>");
  html += (("<a class='redo' title='refazer zoom em grupo' href='javascript:SL(\"" + this.sl.map_id) + "\").control.clusterCtr.pilha_de_zoom.refazer()'>&nbsp;</a>");
  html += "&nbsp;";
  $(this.id_undozoom).append(html);
  $(this.id_undozoom).hide();
  this.undo_visivel = false;
  this.redo_visivel = false;
  this.undozoom_visivel = false;
  this.undo_index = 0;
  this.redo_index = 0;
  this.last_undo = null;
};

PilhaDeZoom.prototype.salva_zoom = (function() {
  var center, zoom;
  zoom = this.sl.map.getZoom();
  center = this.sl.map.getCenter();
  this.pilha.append([center, zoom]);
  this.last_undo = null;
  this.show_undo();
  this.hide_redo();
  this.undo_index = (this.pilha.length - 1);
});
PilhaDeZoom.prototype.desfazer = (function() {
  var _$rapyd_tuple$_, c, center, z, zoom;
  if ((!this.last_undo)) {
    z = this.sl.map.getZoom();
    c = this.sl.map.getCenter();
    this.last_undo = [c, z];
    this.pilha.append(this.last_undo);
  }

  if ((this.undo_index == (this.pilha.length - 1))) {
    this.undo_index = (this.pilha.length - 2);
  }

  _$rapyd_tuple$_ = this.pilha[this.undo_index];
  center = _$rapyd_tuple$_[0];
  zoom = _$rapyd_tuple$_[1];
  this.undo_index -= 1;
  if ((this.undo_index < 0)) {
    this.hide_undo();
  }

  this.show_redo();
  this.sl.map.setView(center, zoom);
});
PilhaDeZoom.prototype.refazer = (function() {
  var _$rapyd_tuple$_, center, zoom;
  if ((this.undo_index < 0)) {
    this.undo_index = 0;
  }

  _$rapyd_tuple$_ = this.pilha[(this.undo_index + 1)];
  center = _$rapyd_tuple$_[0];
  zoom = _$rapyd_tuple$_[1];
  this.undo_index += 1;
  this.sl.map.setView(center, zoom);
  if ((this.undo_index >= (this.pilha.length - 1))) {
    this.hide_redo();
  }

  this.show_undo();
});
PilhaDeZoom.prototype.show = (function() {
  if ((!this.undozoom_visivel)) {
    $(this.id_undozoom).show();
    this.undozoom_visivel = true;
  }

  if ((!this.undo_visivel)) {
    this.hide_undo();
  }

  if ((!this.redo_visivel)) {
    this.hide_redo();
  }

});
PilhaDeZoom.prototype.hide = (function() {
  if (((!this.undo_visivel) && (!this.redo_visivel))) {
    $(this.id_undozoom).hide();
    this.undozoom_visivel = false;
  }

});
PilhaDeZoom.prototype.show_undo = (function() {
  this.undo_visivel = true;
  this.show();
  $((this.id_undozoom + " a.undo")).show();
});
PilhaDeZoom.prototype.show_redo = (function() {
  this.redo_visivel = true;
  this.show();
  $((this.id_undozoom + " a.redo")).show();
});
PilhaDeZoom.prototype.hide_undo = (function() {
  $((this.id_undozoom + " a.undo")).hide();
  this.undo_visivel = false;
  this.hide();
});
PilhaDeZoom.prototype.hide_redo = (function() {
  $((this.id_undozoom + " a.redo")).hide();
  this.redo_visivel = false;
  this.hide();
});
PilhaDeZoom.prototype.esta_vazia = (function() {
  return (this.pilha.length == 0);
});
ClusterCtr = function(sl) {
  var obj;
  this.sl = sl;
  obj = this;
  this.criaPopup();
  this.pilha_de_zoom = new PilhaDeZoom(sl);
  this.clusters = {
    
  };
  this.id_analise = (("#" + this.sl.map_id) + " div.searchlight-analise");
  $(this.id_analise).append((("<p class='center'><a href='javascript:SL(\"" + this.sl.map_id) + "\").control.clusterCtr.desfocar()'>DESFOCAR</a></p>"));
  $(this.id_analise).hide();
  this.sl.map.on("dblclick", (function(a) {
    obj.clusterDuploClick();
  }));
  this.registraEventosClusters();
};

ClusterCtr.prototype.registraEventosClusters = (function() {
  var obj;
  obj = this;
  if (this.camadaAnalise) {
    this.camadaAnalise.on("clusterdblclick", (function(a) {
      a.layer.zoomToBounds();
    }));
    this.camadaAnalise.on("clusterclick", (function(a) {
      a.layer.zoomToBounds();
    }));
  } else {
    this.sl.markers.on("clusterdblclick", (function(a) {
      obj.clusterDuploClick(a);
    }));
    this.sl.markers.on("clusterclick", (function(a) {
      if ((dict.keys(obj.sl.dados.categorias).length > 1)) {
        obj.clusterClick(a);
      } else {
        a.layer.zoomToBounds();
      }

    }));
  }

  this.clickOrdem = 0;
});
ClusterCtr.prototype.criaPopup = (function() {
  var popup;
  popup = L.popup();
  this.popup = popup;
  this.timeUltimoClick = new Date().getTime();
});
ClusterCtr.prototype.clusterClick = (function(a) {
  var d;
  if (typeof a === "undefined") {a = null};
  d = new Date();
  if (((d.getTime() - this.timeUltimoClick) > 1500)) {
    this.clickOrdem = 1;
    this.popupOrZoom(a);
  }

  this.timeUltimoClick = d.getTime();
});
ClusterCtr.prototype.clusterDuploClick = (function(a) {
  if (typeof a === "undefined") {a = null};
  this.cancelPopup();
});
ClusterCtr.prototype.zoomGrupo = (function() {
  this.sl.map.closePopup();
  this.pilha_de_zoom.salva_zoom();
  this.cluster_clicado.layer.zoomToBounds();
});
ClusterCtr.prototype.cancelPopup = (function() {
  this.clickOrdem = 2;
  this.zoomGrupo();
});
ClusterCtr.prototype.mostraPopup = (function() {
  this.atualizaPopup();
  this.popup.openOn(this.sl.map);
});
ClusterCtr.prototype.showPopup = (function() {
  if ((this.clickOrdem == 1)) {
    this.mostraPopup();
  }

  this.clickOrdem = 0;
});
ClusterCtr.prototype.desfocar = (function() {
  this.sl.map.closePopup();
  $(this.id_analise).hide();
  this.sl.map.removeLayer(this.camadaAnalise);
  this.sl.mostrarCamadaMarkers();
  this.camadaAnalise = null;
  this.desfocou = true;
  this.registraEventosClusters();
});
ClusterCtr.prototype.focar = (function(cat) {
  var c, cats, m;
  this.sl.esconderCamadaMarkers();
  this.camadaAnalise = new L.MarkerClusterGroup({
    zoomToBoundsOnClick: false
  });
  this.sl.map.addLayer(this.camadaAnalise);
  this.camadaAnalise.fire("data:loading");
  cats = this.getCatsCluster();
  var _$tmp4_data = _$rapyd$_iter(cats);
  var _$tmp5_len = _$tmp4_data.length;
  for (var _$tmp6_index = 0; _$tmp6_index < _$tmp5_len; _$tmp6_index++) {
    c = _$tmp4_data[_$tmp6_index];

    if ((cat == c[0])) {
      var _$tmp1_data = _$rapyd$_iter(c[1]);
      var _$tmp2_len = _$tmp1_data.length;
      for (var _$tmp3_index = 0; _$tmp3_index < _$tmp2_len; _$tmp3_index++) {
        m = _$tmp1_data[_$tmp3_index];

        this.camadaAnalise.addLayer(m);
      }

    }

  }

  this.sl.map.fitBounds(this.camadaAnalise.getBounds());
  this.camadaAnalise.fire("data:loaded");
  this.sl.control.registraEventosCamadaAnalise();
  this.registraEventosClusters();
  $(this.id_analise).show();
});
ClusterCtr.prototype.update = (function() {
  this.clusters = {
    
  };
});
ClusterCtr.prototype.getCatsCluster = (function() {
  var cat, cats, cats_ord, cluster_cats, cluster_id, m;
  cluster_id = this.cluster_clicado.layer._leaflet_id;
  cluster_cats = this.clusters[cluster_id];
  if (cluster_cats) {
    return cluster_cats;
  }

  cats = {
    
  };
  var _$tmp7_data = _$rapyd$_iter(this.cluster_clicado.layer.getAllChildMarkers());
  var _$tmp8_len = _$tmp7_data.length;
  for (var _$tmp9_index = 0; _$tmp9_index < _$tmp8_len; _$tmp9_index++) {
    m = _$tmp7_data[_$tmp9_index];

    if (m.slinfo) {
      cat = m.slinfo.cat;
      if (cats[cat]) {
        cats[cat].append(m);
      } else {
        cats[cat] = [m];
      }

    }

  }

  cats_ord = [];
  var _$tmp10_data = _$rapyd$_iter(dict.keys(cats));
  var _$tmp11_len = _$tmp10_data.length;
  for (var _$tmp12_index = 0; _$tmp12_index < _$tmp11_len; _$tmp12_index++) {
    cat = _$tmp10_data[_$tmp12_index];

    cats_ord.append([cat, cats[cat]]);
  }

  cats_ord.sort((function(a, b) {
    return (b[1].length - a[1].length);
  }));
  this.clusters[cluster_id] = cats_ord;
  return cats_ord;
});
ClusterCtr.prototype.atualizaPopup = (function() {
  var cat, cat_id, cats_ord, html, iconUrl;
  cats_ord = this.getCatsCluster();
  html = "<div class='clusterPopup'>";
  if ((!this.sl.Icones)) {
    html += "<ul>";
    cat = cats_ord[0];
    var _$tmp13_data = _$rapyd$_iter(cats_ord);
    var _$tmp14_len = _$tmp13_data.length;
    for (var _$tmp15_index = 0; _$tmp15_index < _$tmp14_len; _$tmp15_index++) {
      cat = _$tmp13_data[_$tmp15_index];

      html += (((((((((("<li><a title='Focar no subgrupo " + cat[0]) + "'  href='javascript:SL(\"") + this.sl.map_id) + "\").control.clusterCtr.focar(\"") + cat[0]) + "\")'>") + cat[0]) + "</a> (") + cat[1].length) + ")</li>");
    }

    html += "</ul>";
  } else {
    html += "<ul class=\"icones\">";
    var _$tmp16_data = _$rapyd$_iter(cats_ord);
    var _$tmp17_len = _$tmp16_data.length;
    for (var _$tmp18_index = 0; _$tmp18_index < _$tmp17_len; _$tmp18_index++) {
      cat = _$tmp16_data[_$tmp18_index];

      cat_id = this.sl.dados.categorias_id[cat[0]];
      iconUrl = this.sl.Icones[cat_id].options.iconUrl;
      html += "<li>";
      html += (((((((("<p class='img'><a title='Focar no subgrupo " + cat[0]) + "' href='javascript:SL(\"") + this.sl.map_id) + "\").control.clusterCtr.focar(\"") + cat[0]) + "\")'><img src='") + iconUrl) + "'></a></p>");
      html += (((((((("<p class='texto'><a title='Focar no subgrupo " + cat[0]) + "' href='javascript:SL(\"") + this.sl.map_id) + "\").control.clusterCtr.focar(\"") + cat[0]) + "\")'>") + cat[1].length) + "</a></p>");
      html += "</li>";
    }

    html += "</ul>";
  }

  html += (("<p class='center'><input type='button' onclick='SL(\"" + this.sl.map_id) + "\").control.clusterCtr.zoomGrupo();' value='expandir grupo' /></p>");
  html += "</div>";
  this.popup.setContent(html);
});
ClusterCtr.prototype.popupOrZoom = (function(cluster) {
  var obj;
  this.sl.map.closePopup();
  this.popup.setLatLng(cluster.layer.getLatLng());
  obj = this;
  if ((this.clickOrdem == 1)) {
    this.cluster_clicado = cluster;
    setTimeout((function() {
      obj.showPopup(obj.sl.map_id);
    }), 600);
  }

});
Controle = function(sl) {
  var obj;
  obj = this;
  this.sl = sl;
  this.sl.map.addControl(new MyControl());
  this.sl.map.addControl(new UndoRedoControl());
  this.id_control = (("#" + this.sl.map_id) + " div.searchlight-control");
  this.id_opcoes = (("#" + this.sl.map_id) + " div.searchlight-opcoes");
  this.id_camadas = (this.opcoes + "ul");
  this.show = (function(event) {
    if ((obj.clusterCtr.camadaAnalise == null)) {
      $(obj.id_opcoes).show();
    }

  });
  $(this.id_control).mouseenter(this.show);
  $(this.id_control).bind("touchstart", this.show);
  this.hide = (function(event) {
    $(obj.id_opcoes).hide();
  });
  $(("#" + this.sl.map_id)).mouseover(this.hide);
  $(("#" + this.sl.map_id)).bind("touchstart", this.hide);
  this.sl.map.on("zoomend", (function() {
    if ((obj.marcador_clicado == null)) {
      obj.sl.map.closePopup();
    } else {
      obj.marcador_clicado = null;
    }

    if (obj.clusterCtr.desfocou) {
      obj.clusterCtr.desfocou = false;
      obj.clusterCtr.mostraPopup();
    }

    obj.atualizarIconesMarcVisiveis();
    if ((obj.sl.carregando == true)) {
      obj.sl.carregando = false;
      if ((window["onSLcarregaDados"] != undefined)) {
        onSLcarregaDados(obj.sl);
      }

    }

  }));
  this.sl.map.on("moveend", (function() {
    obj.atualizarIconesMarcVisiveis();
  }));
  this.sl.markers.on("click", (function(ev) {
    obj.markerClick(ev);
  }));
  this.clusterCtr = new ClusterCtr(sl);
};

Controle.prototype.registraEventosCamadaAnalise = (function() {
  var obj;
  obj = this;
  this.clusterCtr.camadaAnalise.on("click", (function(ev) {
    obj.markerClick(ev);
  }));
});
Controle.prototype.atualizarIconesMarcVisiveis = (function() {
  if (this.sl.esconder_icones) {
    if ((this.sl.map.getZoom() >= 16)) {
      this.mostrarIconesMarcVisiveis();
    } else {
      this.esconderIconesMarcVisiveis();
    }

  }

});
Controle.prototype.mostrarIconesMarcVisiveis = (function() {
  var m;
  var _$tmp1_data = _$rapyd$_iter(this.getMarcadoresVisiveis());
  var _$tmp2_len = _$tmp1_data.length;
  for (var _$tmp3_index = 0; _$tmp3_index < _$tmp2_len; _$tmp3_index++) {
    m = _$tmp1_data[_$tmp3_index];

    m.setIcon(m.slinfo.icon);
  }

});
Controle.prototype.esconderIconesMarcVisiveis = (function() {
  var m;
  var _$tmp4_data = _$rapyd$_iter(this.getMarcadoresVisiveis());
  var _$tmp5_len = _$tmp4_data.length;
  for (var _$tmp6_index = 0; _$tmp6_index < _$tmp5_len; _$tmp6_index++) {
    m = _$tmp4_data[_$tmp6_index];

    m.setIcon(sl_IconCluster);
  }

});
Controle.prototype.getMarcadoresVisiveis = (function() {
  var m, marcadores, marcadores_visiveis, mark;
  if (this.clusterCtr.camadaAnalise) {
    marcadores = this.clusterCtr.camadaAnalise._layers;
  } else {
    marcadores = this.sl.markers._layers;
  }

  marcadores_visiveis = [];
  var _$tmp7_data = _$rapyd$_iter(dict.keys(marcadores));
  var _$tmp8_len = _$tmp7_data.length;
  for (var _$tmp9_index = 0; _$tmp9_index < _$tmp8_len; _$tmp9_index++) {
    m = _$tmp7_data[_$tmp9_index];

    mark = marcadores[m];
    if (mark.hasOwnProperty("slinfo")) {
      marcadores_visiveis.append(mark);
    }

  }

  return marcadores_visiveis;
});
Controle.prototype.markerClick = (function(ev) {
  var center, m;
  m = ev.layer;
  this.marcador_clicado = m;
  if (m.slinfo.ultimo_zoom) {
    this.sl.map.setView(m.slinfo.ultimo_center, m.slinfo.ultimo_zoom);
    m.slinfo.ultimo_zoom = null;
    m.slinfo.ultimo_center = null;
    this.sl.map.closePopup();
  } else {
    m.slinfo.ultimo_zoom = this.sl.map.getZoom();
    m.slinfo.ultimo_center = this.sl.map.getCenter();
    center = new L.LatLng(m.slinfo.latitude, m.slinfo.longitude);
    this.sl.map.setView(center, 18);
  }

});
Controle.prototype.addCatsToControl = (function(map_id) {
  var c, cats, k, op, ul;
  if ((dict.keys(this.sl.dados.categorias).length > 1)) {
    op = (("#" + map_id) + " div.searchlight-opcoes");
    ul = (op + " ul");
    cats = [];
    var _$tmp10_data = _$rapyd$_iter(dict.keys(this.sl.dados.categorias));
    var _$tmp11_len = _$tmp10_data.length;
    for (var _$tmp12_index = 0; _$tmp12_index < _$tmp11_len; _$tmp12_index++) {
      k = _$tmp10_data[_$tmp12_index];

      cats.append([k, this.sl.dados.categorias[k].length]);
    }

    cats.sort((function(a, b) {
      return (b[1] - a[1]);
    }));
    $(ul).empty();
    var _$tmp13_data = _$rapyd$_iter(cats);
    var _$tmp14_len = _$tmp13_data.length;
    for (var _$tmp15_index = 0; _$tmp15_index < _$tmp14_len; _$tmp15_index++) {
      c = _$tmp13_data[_$tmp15_index];

      $(ul).append((((((((("<li><input type='checkbox' checked name='" + map_id) + "-cat' value='") + c[0]) + "' class='categoria'/>") + c[0]) + " (") + c[1]) + ")</li>"));
    }

    $(op).append((("<p class='center'><input type='button' onclick='SL(\"" + map_id) + "\").control.update();' value='Atualizar Mapa' /></p>"));
  } else {
    if ((!$(this.id_opcoes).hasClass("sem-categoria"))) {
      $(this.id_opcoes).addClass("sem-categoria");
    }

  }

});
Controle.prototype.update = (function() {
  $(this.id_opcoes).hide();
  this.clusterCtr.update();
  this.sl.markers.clearLayers();
  if (($((("input:checkbox[name=" + this.sl.map_id) + "-cat]:checked")).size() > 0)) {
    this.sl.markers.fire("data:loading");
    setTimeout((("SL('" + this.sl.map_id) + "').control.carregaDados()"), 50);
  }

});
Controle.prototype.carregaDados = (function() {
  var sl;
  sl = this.sl;
  $((("input:checkbox[name=" + this.sl.map_id) + "-cat]:checked")).each((function() {
    var cat;
    cat = $(this).val();
    sl.dados.catAddMarkers(cat, sl.markers);
  }));
  sl.map.fitBounds(sl.markers.getBounds());
  sl.markers.fire("data:loaded");
  sl.control.atualizarIconesMarcVisiveis();
});
Marcador = function(geoItem) {
  this.m = null;
  this.latitude = parseFloat(geoItem.latitude.replace(",", "."));
  this.longitude = parseFloat(geoItem.longitude.replace(",", "."));
  this.texto = geoItem.texto;
  if (geoItem.icon) {
    this.icon = geoItem.icon;
  } else {
    this.icon = sl_IconePadrao;
  }

  if (geoItem.cat) {
    this.cat_id = geoItem.cat_id;
    this.cat = geoItem.cat.replace(",", "").replace("\"", "");
  } else {
    this.cat = "descategorizado";
    this.cat_id = 1;
  }

};

Marcador.prototype.getMark = (function() {
  var m, p;
  if ((this.m == null)) {
    p = [this.latitude, this.longitude];
    m = new L.Marker(p);
    m.setIcon(this.icon);
    this.m = m;
    this.m.slinfo = this;
    this.m.bindPopup(m.slinfo.texto);
  }

  return this.m;
});
Dados = function() {
  this.clear();
};

Dados.prototype.clear = (function() {
  this.marcadores = [];
  this.categorias = {
    
  };
  this.categorias_id = {
    
  };
});
Dados.prototype.getCat = (function(m) {
  var cat;
  cat = this.categorias[m.cat];
  if (cat) {
    return cat;
  } else {
    this.categorias[m.cat] = [];
    this.categorias_id[m.cat] = m.cat_id;
    return this.categorias[m.cat];
  }

});
Dados.prototype.addItem = (function(i, func_convert) {
  var cat, geoItem, m;
  geoItem = func_convert(i);
  m = new Marcador(geoItem);
  cat = this.getCat(m);
  cat.append(m);
});
Dados.prototype.getCatLatLng = (function(name) {
  var m, v;
  v = [];
  var _$tmp1_data = _$rapyd$_iter(this.categorias[name]);
  var _$tmp2_len = _$tmp1_data.length;
  for (var _$tmp3_index = 0; _$tmp3_index < _$tmp2_len; _$tmp3_index++) {
    m = _$tmp1_data[_$tmp3_index];

    v.append(m.getMark().getLatLng());
  }

  return v;
});
Dados.prototype.catAddMarkers = (function(name, cluster) {
  var m;
  var _$tmp4_data = _$rapyd$_iter(this.categorias[name]);
  var _$tmp5_len = _$tmp4_data.length;
  for (var _$tmp6_index = 0; _$tmp6_index < _$tmp5_len; _$tmp6_index++) {
    m = _$tmp4_data[_$tmp6_index];

    cluster.addLayer(m.getMark());
  }

});
Dados.prototype.addMarkersTo = (function(cluster) {
  var k;
  var _$tmp7_data = _$rapyd$_iter(dict.keys(this.categorias));
  var _$tmp8_len = _$tmp7_data.length;
  for (var _$tmp9_index = 0; _$tmp9_index < _$tmp8_len; _$tmp9_index++) {
    k = _$tmp7_data[_$tmp9_index];

    this.catAddMarkers(k, cluster);
  }

});
L.Icon.Default.imagePath = "images/leaflet";
SENADO_FEDERAL = [(-15.799088), (-47.86535)];
UFES = [(-20.277233), (-40.303752)];
CT = [(-20.27353), (-40.305448)];
CEMUNI = [(-20.279483), (-40.30269)];
BIBLIOTECA = [(-20.276519), (-40.304503)];
public_spreadsheet_url = "https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html";
attribution = "Map generated by <a href=\"http://wancharle.github.com/Searchlight\">Searchlight</a>,  Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a>";
L.Icon.Default.imagePath = (getSLpath() + "../images/leaflet");
main = function() {
  var mainf, mps;
  mainf = getURLParameter("mainf");
  if (mainf) {
    eval((mainf + "()"));
  } else {
    mps = new Searchlight();
    window.onSLcarregaDados = (function(sl) {
      sl.autoZoom();
    });
  }

};

sl_IconCluster = new L.DivIcon({
  html: "<div><span>1</span></div>",
  className: "marker-cluster marker-cluster-small",
  iconSize: new L.Point(40, 40)
});
sl_IconePadrao = new L.Icon.Default();
referencia_atual = null;
sl_referencias = {
  
};
SL = function(map_id) {
  "funcao global para pegar a referencia do objeto mapa";
  return sl_referencias[map_id];
};

window.SL = SL;
Searchlight = function(url, func_convert, map_id, icones, clusterizar, esconder_icones, urlosm) {
  if (typeof url === "undefined") {url = null};
  if (typeof func_convert === "undefined") {func_convert = null};
  if (typeof map_id === "undefined") {map_id = "map"};
  if (typeof icones === "undefined") {icones = null};
  if (typeof clusterizar === "undefined") {clusterizar = true};
  if (typeof esconder_icones === "undefined") {esconder_icones = true};
  if (typeof urlosm === "undefined") {urlosm = "http://{s}.tile.osm.org/{z}/{x}/{y}.png"};
  
  sl_referencias[map_id] = this;
  this.map_id = map_id;
  this.esconder_icones = esconder_icones;
  this.clusterizar = clusterizar;
  this.Icones = icones;
  this.urlosm = urlosm;
  if (url) {
    this.url = url;
  } else {
    this.url = decodeURIComponent(getURLParameter("data"));
  }

  if (func_convert) {
    this.func_convert = func_convert;
  } else {
    this.func_convert = (function(item) {
      return item;
    });
  }

  this.create();
  this.dados = new Dados();
  this.get_data();
};

Searchlight.prototype.create = (function() {
  this.CamadaBasica = L.tileLayer(this.urlosm, {
    "attribution": attribution,
    "maxZoom": 18
  });
  this.map = L.map(this.map_id, {
    layers: [this.CamadaBasica],
    "center": SENADO_FEDERAL,
    "zoom": 13
  });
  if (this.clusterizar) {
    this.markers = new L.MarkerClusterGroup({
      zoomToBoundsOnClick: false
    });
  } else {
    this.markers = new L.FeatureGroup();
  }

  this.map.addLayer(this.markers);
  this.control = new Controle(this);
});
Searchlight.prototype.get_data = (function() {
  var obj;
  obj = this;
  this.markers.fire("data:loading");
  if ((this.url.indexOf("docs.google.com/spreadsheet") > (-1))) {
    Tabletop.init({
      "key": this.url,
      "callback": (function(data) {
        obj.carregaDados(data);
      }),
      "simpleSheet": true
    });
  } else {
    if ((this.url.slice(0, 4) == "http")) {
      getJSONP(this.url, (function(data) {
        obj.carregaDados(data);
      }));
    } else {
      getJSON(this.url, (function(data) {
        obj.carregaDados(data);
      }));
    }

  }

});
Searchlight.prototype.add_itens_gdoc = (function(data) {
  var d, p;
  var _$tmp1_data = _$rapyd$_iter(data);
  var _$tmp2_len = _$tmp1_data.length;
  for (var _$tmp3_index = 0; _$tmp3_index < _$tmp2_len; _$tmp3_index++) {
    d = _$tmp1_data[_$tmp3_index];

    p = [parseFloat(d.latitude.replace(",", ".")), parseFloat(d.longitude.replace(",", "."))];
    L.marker(p).addTo(this.basel).bindPopup(d.textomarcador);
  }

  this.map.addLayer(this.basel);
  this.map.fitBounds(this.basel.getBounds());
});
Searchlight.prototype.autoZoom = (function() {
  this.map.fitBounds(this.markers.getBounds());
});
Searchlight.prototype.carregaDados = (function(data) {
  var d;
  try {
    var _$tmp4_data = _$rapyd$_iter(data);
    var _$tmp5_len = _$tmp4_data.length;
    for (var _$tmp6_index = 0; _$tmp6_index < _$tmp5_len; _$tmp6_index++) {
      d = _$tmp4_data[_$tmp6_index];

      this.addItem(d);
    }

  } catch(_$rapyd$_Exception) {
    this.markers.fire("data:loaded");
    alert("N\u00e3o foi possivel carregar os dados do mapa. Verifique se a fonte de dados est\u00e1 formatada corretamente.");
    return;
  }

  this.markers.clearLayers();
  this.dados.addMarkersTo(this.markers);
  if ((this.map.getBoundsZoom(this.markers.getBounds()) == this.map.getZoom())) {
    this.carregando = false;
  } else {
    this.map.fitBounds(this.markers.getBounds());
    this.carregando = true;
  }

  this.control.addCatsToControl(this.map_id);
  this.markers.fire("data:loaded");
  this.control.atualizarIconesMarcVisiveis();
  if (((this.carregando == false) && (window["onSLcarregaDados"] != undefined))) {
    onSLcarregaDados(this);
  }

});
Searchlight.prototype.addItem = (function(item) {
  this.dados.addItem(item, this.func_convert);
});
Searchlight.prototype.mostrarCamadaMarkers = (function() {
  this.map.addLayer(this.markers);
  this.map.setView(this.map_ultimo_center, this.map_ultimo_zoom);
});
Searchlight.prototype.esconderCamadaMarkers = (function() {
  this.map.removeLayer(this.markers);
  this.map_ultimo_zoom = this.map.getZoom();
  this.map_ultimo_center = this.map.getCenter();
});

}());
