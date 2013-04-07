#import normais
import stdlib

#imports de arquivos javascripts crus
import libs.leaflet05
L.Icon.Default.imagePath = "images/leaflet"
import libs.leaflet.markercluster.markercluster
#import libs.spin
#import libs.leaflet.spin

import libs.jquery191min
import libs.jquery.getUrlParam
import libs.tabletop
import control
import exemplos.portoalegre

# ---------- exemplo view -------------------------
# marcadores
UFES = [-20.277233,-40.303752 ]
CT = [-20.273530, -40.305448]
CEMUNI = [ -20.279483,-40.302690]
BIBLIOTECA = [-20.276519, -40.304503]

public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html'

def main():
    mainf = getURLParameter("mainf") # define uma funcao de inicializacao
    if mainf:
       eval(mainf+"()")
    else:
        mps = new Searchlight()

def getURLParameter(name):
    return $(document).getUrlParam(name)

def searchlight_callback(data):
    referencia_atual.add_itens(data)

def getJSONP(url,func):
    $.ajax({ 'url': url, 'success': func, 'type':"POST", 'dataType': 'jsonp'})
#--------------------- fim -----------------------------
urlosm = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'

# referencia para callback
referencia_atual = None

class Searchlight:
    def __init__(self, url=None,add_func=None,map_id="map_gdoc",icones = None):
        self.map_id= map_id
        self.Icones = icones
        # se nao for informada a fonte de dados procura no parametro data
        if url:
            self.url = url
        else:
            self.url = decodeURIComponent(getURLParameter("data"))
        
        # funcao de conversao para  geoJSON
        if add_func:
            self.add_func = add_func
        else:
            self.add_func = self.add_item
        self.create()


    def create(self):
        self.CamadaBasica = L.tileLayer(urlosm,  { 'attribution': attribution, 'maxZoom': 18 })
        self.map = L.map(self.map_id, {layers:[self.CamadaBasica],'center': UFES,'zoom': 12}) #TODO: mudar centro e zoom 
        self.get_data()
        self.map.addControl(new MyControl())

    def get_data(self):
        nonlocal referencia_atual
        if self.url.indexOf("docs.google.com/spreadsheet") > -1 :
            main = self
            self.basel= new L.featureGroup()
            add_itens = def (data):
                main.add_itens_gdoc(data)
            Tabletop.init( { 'key': self.url, 'callback': add_itens, 'simpleSheet': true } )
        else:
            referencia_atual = self
            getJSONP(self.url, searchlight_callback)
    def add_itens_gdoc(self,data):
        for d in data:
            p =  [parseFloat(d.latitude.replace(',','.')), parseFloat(d.longitude.replace(',','.'))] 
            L.marker(p).addTo(self.basel).bindPopup(d.textomarcador)
        self.map.addLayer(self.basel);
        self.map.fitBounds(self.basel.getBounds())

    def add_itens(self, data):
        self.markers = {}
        for d in data:
            self.add_func(d)
        for l in self.markers:
            if l.indexOf("gura") >-1 :#or l.indexOf("ecno") > -1 or l.indexOf("Bem")>-1:
                self.map.addLayer(self.markers[l])
                self.map.fitBounds(self.markers[l].getBounds())
        baseMaps = {};
        overlayMaps = {"markers": self.markers};
        L.control.layers(baseMaps,self.markers).addTo(self.map)



    def add_item(self,obj,item):
        p =  [parseFloat(item.latitude.replace(',','.')), parseFloat(item.longitude.replace(',','.'))] 
        if not self.center :
            self.map.panTo(p)
            self.center = True
        if self.Icones:
            m = new L.Marker(p,{icon:self.Icones[item.cat_id]})
        else:
            m = new L.Marker(p)
        m.bindPopup(item.textomarcador)
        if not self.markers[item.cat]:
            self.markers[item.cat] = new L.MarkerClusterGroup();
        self.markers[item.cat].addLayer(m)
        



