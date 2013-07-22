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
portoalegrecc_json = "http://portoalegre.cc/causes/visibles?topLeftY=-29.993308319952344&topLeftX=-51.05793032165525&bottomRightY=-30.127023880027313&bottomRightX=-51.34906801696775&currentZoom=1&maxZoom=6";
pacc_jsonp = "https://dl.dropbox.com/u/877911/portoalegre.js";
Icones = {
  
};
Icones["1"] = new L.icon({
  iconUrl: "images/pin_1.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["2"] = new L.icon({
  iconUrl: "images/pin_2.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["3"] = new L.icon({
  iconUrl: "images/pin_3.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["4"] = new L.icon({
  iconUrl: "images/pin_4.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["5"] = new L.icon({
  iconUrl: "images/pin_5.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["6"] = new L.icon({
  iconUrl: "images/pin_6.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["7"] = new L.icon({
  iconUrl: "images/pin_7.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["8"] = new L.icon({
  iconUrl: "images/pin_8.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["9"] = new L.icon({
  iconUrl: "images/pin_9.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["10"] = new L.icon({
  iconUrl: "images/pin_10.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["11"] = new L.icon({
  iconUrl: "images/pin_11.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
Icones["12"] = new L.icon({
  iconUrl: "images/pin_12.png",
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
portoalegre_cc = function(map_id) {
  var convert_item_porto, mps2;
  convert_item_porto = (function(item) {
    var item_convertido;
    if (typeof map_id === "undefined") {map_id = "map"};
    item_convertido = {
      
    };
    item_convertido.longitude = ("" + item.cause.longitude);
    item_convertido.latitude = ("" + item.cause.latitude);
    item_convertido.texto = item.cause.category_name;
    item_convertido.cat = item.cause.category_name;
    item_convertido.cat_id = item.cause.category_id;
    item_convertido.icon = Icones[item_convertido.cat_id];
    return item_convertido;
  });
  mps2 = new Searchlight(pacc_jsonp, convert_item_porto, map_id, Icones);
};

window.portoalegre_cc = portoalegre_cc;
OnibusAzul = new L.icon({
  iconUrl: (getSLpath() + "../images/onibus_azul.png"),
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
OnibusVolta = new L.icon({
  iconUrl: (getSLpath() + "../images/onibus_volta.png"),
  iconSize: [45, 58],
  iconAnchor: [23, 48],
  popupAnchor: [0, (-40)]
});
pontos_inseridos = 0;
converte_item1 = function(item) {
  var item_convertido;
  
  item_convertido = {
    
  };
  item_convertido.longitude = ("" + item.longitude);
  item_convertido.latitude = ("" + item.latitude);
  item_convertido.texto = ((item.ponto + " ordem=") + item.ordem);
  pontos_inseridos += 1;
  if ((pontos_inseridos < 68)) {
    item_convertido.icon = OnibusAzul;
    item_convertido.cat_id = 1;
    item_convertido.cat = "IDA";
  } else {
    item_convertido.cat_id = 2;
    item_convertido.cat = "VOLTA";
    item_convertido.icon = OnibusVolta;
  }

  return item_convertido;
};

onSlcarregaDados = function(sl) {
  var polyline, v;
  if ((sl.map_id == "map1")) {
    v = sl.dados.getCatLatLng("IDA");
    polyline = L.polyline(v, {
      color: "blue"
    }).addTo(sl.map);
    v = sl.dados.getCatLatLng("VOLTA");
    polyline = L.polyline(v, {
      color: "black"
    }).addTo(sl.map);
  }

  if ((sl.map_id == "map_gdoc")) {
    sl.autoZoom();
  }

};

exemplo1 = function() {
  var mps;
  mps = new Searchlight("js/exemplos/121.json", converte_item1, "map1", null, false, false);
};

exemplo_gdoc = function() {
  var mps, public_spreadsheet_url;
  public_spreadsheet_url = "https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html";
  mps = new Searchlight(public_spreadsheet_url, null, "map_gdoc", null, true, false);
};

exemplos = function() {
  window.onSLcarregaDados = onSlcarregaDados;
  exemplo1();
  exemplo_markercluster();
  exemplo_gdoc();
  portoalegre_cc("map");
};


}());