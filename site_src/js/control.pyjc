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

