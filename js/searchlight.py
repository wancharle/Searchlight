import stdlib

urlosm = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'

# marcadores
UFES = [-20.277233,-40.303752 ]
CT = [-20.273530, -40.305448]
CEMUNI = [ -20.279483,-40.302690]
BIBLIOTECA = [-20.276519, -40.304503]

public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html'
map_gdoc= None

def teste():
    alert("ola")


def main():
    nonlocal urlosm, attribuition, UFES, public_spreadsheet_url, map_gdoc
    url = decodeURIComponent(getURLParameter("data"))
    Tabletop.init( { 'key': url, 'callback': showInfo, 'simpleSheet': true } )
    CamadaBasica = L.tileLayer(urlosm,  { attribution: attribution, maxZoom: 18 })
    map_gdoc = L.map('map_gdoc',{layers:[CamadaBasica],center: UFES,zoom: 15})

def showInfo(data):
    nonlocal urlosm, attribuition, UFES, public_spreadsheet_url, map_gdoc
    for d in data:
       p =  [parseFloat(d.latitude.replace(',','.')), parseFloat(d.longitude.replace(',','.'))]; 
       L.marker(p).addTo(map_gdoc).bindPopup(d.textomarcador);

def getURLParameter(name):
    return $(document).getUrlParam(name);
