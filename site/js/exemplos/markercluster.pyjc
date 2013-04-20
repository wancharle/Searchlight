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
