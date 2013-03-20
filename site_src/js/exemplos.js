
var urlosm = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>';

// marcadores
var UFES = [-20.277233,-40.303752 ], 
    CT = [-20.273530, -40.305448],
    CEMUNI = [ -20.279483,-40.302690],
    BIBLIOTECA = [-20.276519, -40.304503];

function exemplo1() {
   var CamadaBasica = L.tileLayer(urlosm,  { attribution: attribution, maxZoom: 18 })
   
   var  markers = [L.marker(CT).bindPopup('CT.'),
        L.marker(CEMUNI).bindPopup('CEMUNI'), 
        L.marker(BIBLIOTECA).bindPopup('Biblioteca')];
   var centros = L.layerGroup(markers);     
   
   var map = L.map('map',{layers:[CamadaBasica,centros],center: UFES,zoom: 15});

    L.marker(UFES).addTo(map)
        .bindPopup('UFES')
        .openPopup();

    var baseMaps = {
    };

    var overlayMaps = {
        "Centros": centros
    };

    L.control.layers(baseMaps, overlayMaps).addTo(map);

 }

var ultimo_zoom = 5; // para comecar dando zoom out
function exemplo2() {

   var CamadaBasica = L.tileLayer(urlosm,  { attribution: attribution, maxZoom: 18 })
   
   var  markers = [L.marker(CT).bindPopup('CT.'),
        L.marker(CEMUNI).bindPopup('CEMUNI'), 
        L.marker(BIBLIOTECA).bindPopup('Biblioteca')];
   var centros = L.layerGroup(markers);     
 
   var map = L.map('map2',{layers:[CamadaBasica,centros],center:  UFES,zoom: 5});


    map.on('zoomend', onZoomend);
    function onZoomend(){
        var southWest = new L.LatLng(-20.273530, -40.305448),
            northEast = new L.LatLng( -20.279483,-40.302690),
            bounds = new L.LatLngBounds(southWest, northEast);
        if(map.getZoom()>ultimo_zoom){ 
            ultimo_zoom = map.getZoom();
            map.fitBounds(bounds.pad(0.1));
        };
        ultimo_zoom = map.getZoom();
     };

 }

function exemplos(){
    exemplo1();    
    exemplo2();
    exemplo_markercluster();
}
