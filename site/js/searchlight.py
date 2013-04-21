#import normais
import stdlib

#imports de arquivos javascripts crus
import libs.leaflet05
import libs.spin
import libs.leaflet.spin

L.Icon.Default.imagePath = "images/leaflet"
import libs.leaflet.markercluster.markercluster
import libs.jquery191min
import libs.jquery.getUrlParam
import libs.tabletop
import control
import exemplos.portoalegre
import utilidades

# marcadores
UFES = [-20.277233,-40.303752 ]
CT = [-20.273530, -40.305448]
CEMUNI = [ -20.279483,-40.302690]
BIBLIOTECA = [-20.276519, -40.304503]

public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html'
urlosm = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'


def main():
    mainf = getURLParameter("mainf") # define uma funcao de inicializacao
    if mainf:
       eval(mainf+"()")
    else:
        mps = new Searchlight()
    
def searchlight_callback(data):
    referencia_atual.carregaDados(data)

# referencia para callback
referencia_atual = None
referencias = {}

class Searchlight:
    def __init__(self, url=None,func_convert=None,map_id="map_gdoc",icones = None):
        nonlocal referencias
        referencias[map_id] = self 
        self.map_id= map_id
        
        self.Icones = icones
        # se nao for informada a fonte de dados procura no parametro data
        if url:
            self.url = url
        else:
            self.url = decodeURIComponent(getURLParameter("data"))
        
        # funcao de conversao para  geoJSON
        if func_convert:
            self.func_convert = func_convert
        else:
            self.func_convert = def(item): return item

        self.dados = new Dados()
        self.create()

    def initControl(self):
        
        c="#"+self.map_id+" div.searchlight-control"
        op ="#"+self.map_id+ " div.searchlight-opcoes" 
        show = def(event):
            $(op).show()
        $(c).mouseenter(show )
        $(c).bind('touchstart',show);
        hide = def(event):
                $(op).hide()
 
        $("#"+self.map_id).mouseover(hide)
        $("#"+self.map_id).bind('touchstart',hide)

        

    def create(self):
        self.CamadaBasica = L.tileLayer(urlosm,  { 'attribution': attribution, 'maxZoom': 18 })
        self.map = L.map(self.map_id, {layers:[self.CamadaBasica],'center': UFES,'zoom': 12}) #TODO: mudar centro e zoom 
        self.get_data()
        self.map.addControl(new MyControl())
        self.initControl()
    
    def get_data(self):
        nonlocal referencia_atual
        referencia_atual = self
        self.markers = new L.MarkerClusterGroup()
        self.map.addLayer(self.markers)
        self.markers.fire("data:loading")

        if self.url.indexOf("docs.google.com/spreadsheet") > -1 :
            Tabletop.init( { 'key': self.url, 'callback': searchlight_callback, 'simpleSheet': true } )
        else:
            getJSONP(self.url, searchlight_callback)
    
    def add_itens_gdoc(self,data):
        for d in data:
            p =  [parseFloat(d.latitude.replace(',','.')), parseFloat(d.longitude.replace(',','.'))] 
            L.marker(p).addTo(self.basel).bindPopup(d.textomarcador)
        self.map.addLayer(self.basel);
        self.map.fitBounds(self.basel.getBounds())

    def carregaDados(self, data):
        
        for d in data:
            self.addItem(d) 


        self.dados.addMarkersTo(self.markers)
        self.map.fitBounds(self.markers.getBounds())
        self.markers.fire("data:loaded") 
        self.dados.addCatsToControl(self.map_id)

    def addItem(self,item):
        self.dados.addItem(item,self.func_convert)
        



class Marcador:
    def __init__(self,geoItem,icon=None):
        self.m = None
        self.latitude = parseFloat(geoItem.latitude.replace(',','.'))
        self.longitude = parseFloat(geoItem.longitude.replace(',','.'))
        self.texto = geoItem.texto
        self.icon = icon
        self.cat_id = geoItem.cat_id
    def getMark(self):
        if self.m == None:
            p =  [self.latitude,self.longitude ] 
            if self.icon:
                m = new L.Marker(p,{icon:self.icon})
            else:
                m = new L.Marker(p)
            m.bindPopup(self.texto)
            self.m = m
            self.m.cat_id=self.cat_id
        return self.m

class Dados:
    def __init__(self):
        self.marcadores = []
        self.categorias = {}

    def getCat(self, name):
        if not name:
            name = "semcategoria"
        cat=self.categorias[name]
        if cat:
            return cat
        else:
            self.categorias[name] = []
            return self.categorias[name]

    def addItem(self,i,func_convert): 
        geoItem = func_convert(i)
        cat = self.getCat(geoItem.cat)
        m =  Marcador(geoItem)
        cat.append(m)

    def catAddMarkers(self,name,cluster):
       for m in self.categorias[name]:
            cluster.addLayer(m.getMark())

    def addMarkersTo(self, cluster):
        for k in dict.keys(self.categorias):
            self.catAddMarkers(k,cluster)

    def addCatsToControl(self,map_id):
        op ="#"+map_id+ " div.searchlight-opcoes ul" 
        for k in dict.keys(self.categorias):
            $(op).append("<li><input type='checkbox' checked name='"+k+"' class='categoria'/>"+k+"</li>")
        #$(op).show()


class Categorias:
    def __init__(self, name, icone):
        self.itens = []
        self.name = name
        self.icone = icone
        self.markers = []
    def addItem(self, item):
        self.itens.append(item)
    def getarray(self):
        if len(self.markers)==0:
            for i in self.items:
                self.add_item_mapa(i)
        return self.markers
    def add_item_mapa(self,item):
        p =  [parseFloat(item.latitude.replace(',','.')), parseFloat(item.longitude.replace(',','.'))] 
        if not self.center :
            self.map.panTo(p)
            self.center = True
        if self.Icones:
            m = new L.Marker(p,{icon:self.icone})
        else:
            m = new L.Marker(p)
        m.bindPopup(item.textomarcador)
        self.markers.append(m)











