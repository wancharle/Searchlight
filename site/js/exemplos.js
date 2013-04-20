/* This file was auto-generated using RapydScript */
(function(){
var markers = new L.MarkerClusterGroup();
var markersList = [];
function populate() {
    for (var i = 0; i < 400; i++) {
        var m = new L.Marker(getRandomLatLng(map2));
        markersList.push(m);
        markers.addLayer(m);
    }
    return false;
}
function populateRandomVector() {
    for (var i = 0, latlngs = [], len = 20; i < len; i++) {
        latlngs.push(getRandomLatLng(map2));
    }
    var path = new L.Polyline(latlngs);
    map2.addLayer(path);
}
function getRandomLatLng(map) {
    var bounds = map.getBounds(),
        southWest = bounds.getSouthWest(),
        northEast = bounds.getNorthEast(),
        lngSpan = northEast.lng - southWest.lng,
        latSpan = northEast.lat - southWest.lat;

    return new L.LatLng(
            southWest.lat + latSpan * Math.random(),
            southWest.lng + lngSpan * Math.random());
}

var map2;
function exemplo_markercluster(){
		var Url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
			Attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery  <a href="http://cloudmade.com">CloudMade</a>',		
            cloudmade = new L.TileLayer(Url, {maxZoom: 18, attribution: Attribution}),
			latlng = new L.LatLng(-20.277233,-40.303752 );

		 map2 = new L.Map('map_cluster', {center: latlng, zoom: 15, layers: [cloudmade]});
		populate();
		map2.addLayer(markers);
        
        map2.setZoom(14);
}
var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html';

 

var map_gdoc;
function exemplo_gdoc(){

          Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         simpleSheet: true } );
   
   var CamadaBasica = L.tileLayer(urlosm,  { attribution: attribution, maxZoom: 18 })
   
   
   map_gdoc = L.map('map_gdoc',{layers:[CamadaBasica],center: UFES,zoom: 15});

    


 }

function showInfo(data) {
        for (i=0;i<data.length;i++){
             var p =  [parseFloat(data[i].latitude.replace(',','.')), 
                       parseFloat(data[i].longitude.replace(',','.'))]; 
            L.marker(p).addTo(map_gdoc).bindPopup(data[i].textomarcador);
        }
}

var map_geo;
function add_iti(data){
        var markerLocation = new L.LatLng(data.features[0].centroid.coordinates[1], data.features[0].centroid.coordinates[0]);
	    L.marker(markerLocation).addTo(map_geo);  
    
       // console.info(markerLocation); 
    }
function exemplo_geocoding() {
   var CamadaBasica = L.tileLayer(urlosm,  { attribution: attribution, maxZoom: 18 })
 
   map_geo = L.map('map_geo',{layers:[CamadaBasica],center: UFES,zoom: 15});
   L.marker(UFES).addTo(map_geo)
        .bindPopup('UFES')
         .openPopup();

    geoCode("street:Av. Fernando Ferrari;city:vitoria","vitoria",add_iti);
    geoCode("street:BR-101 NORTE;city:serra:",'',add_iti);
    geoCode("street:RUA sao domingos;city:serrA",'BR-101 NORTE',add_iti);

   
}

function geoCode(address, centro, callback) {
	var firstPart = 'http://geocoding.cloudmade.com/bbcf9165c23646efbb1828828278c8bc/geocoding/v2/find.geojs?query='
	var url = firstPart + encodeURI(address)
	$.ajax({
	  url: url,
	  success: callback,
      type:"POST",
      dataType: 'jsonp',
	})
}
 

var ultimo_zoom = 5; // para comecar dando zoom out
function exemplo2() {

   var CamadaBasica = L.tileLayer(urlosm,  { attribution: attribution, maxZoom: 18 })
   
   var  markers = [L.marker(CT).bindPopup('CT.'),
        L.marker(CEMUNI).bindPopup('CEMUNI'), 
        L.marker(BIBLIOTECA).bindPopup('Biblioteca')];
   var centros = new L.FeatureGroup(markers);     
 
   var map = L.map('map2',{layers:[CamadaBasica,centros],center:  UFES,zoom: 5});
    ///centros.addTo(map)

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


urlosm = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
attribution = "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery \u00a9 <a href=\"http://cloudmade.com\">CloudMade</a>";
UFES = [(-20.277233), (-40.303752)];
CT = [(-20.27353), (-40.305448)];
CEMUNI = [(-20.279483), (-40.30269)];
BIBLIOTECA = [(-20.276519), (-40.304503)];
exemplo1 = function() {
  var CamadaBasica, baseMaps, centros, map, markers, overlayMaps;
  
  CamadaBasica = L.tileLayer(urlosm, {
    attribution: attribution,
    maxZoom: 18
  });
  markers = [L.marker(CT).bindPopup("CT."), L.marker(CEMUNI).bindPopup("CEMUNI"), L.marker(BIBLIOTECA).bindPopup("Biblioteca")];
  centros = new L.FeatureGroup(markers);
  map = L.map("map", {
    layers: [CamadaBasica, centros],
    center: UFES,
    zoom: 15
  });
  L.marker(UFES).addTo(map).bindPopup("UFES").openPopup();
  baseMaps = {
    
  };
  overlayMaps = {
    "Centros": centros
  };
  L.control.layers(baseMaps, overlayMaps).addTo(map);
};

exemplos = function() {
  
  exemplo1();
  console.info("ex1");
  exemplo2();
  console.info("ex2");
  exemplo_markercluster();
  exemplo_gdoc();
  exemplo_geocoding();
};


}());