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



sl_IconCluster = new L.DivIcon({ html: '<div><span>1</span></div>', className: 'marker-cluster marker-cluster-small', iconSize: new L.Point(40, 40) });

# referencia para callback
referencia_atual = None
sl_referencias = {}
class Searchlight:

    def __init__(self, url=None,func_convert=None,map_id="map_gdoc",icones = None):
        nonlocal referencias
        sl_referencias[map_id]  = self 
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

          

    def create(self):
        self.CamadaBasica = L.tileLayer(urlosm,  { 'attribution': attribution, 'maxZoom': 18 })
        self.map = L.map(self.map_id, {layers:[self.CamadaBasica],'center': UFES,'zoom': 12}) #TODO: mudar centro e zoom 
        self.get_data()
        self.map.addControl(new MyControl())
        self.control = new Controle(self)
    
    def get_data(self):
        nonlocal referencia_atual
        referencia_atual = self

        obj = self
        # criando camada com clusters

        self.markers = new L.MarkerClusterGroup({ zoomToBoundsOnClick: false})
        self.map.on('dblclick', def(a):
            obj.control.clusterDuploClick()      
        )
        self.markers.on('clusterdblclick', def (a) :
            obj.control.clusterDuploClick(a)
        );
        self.markers.on('clusterclick', def (a): 
            obj.control.clusterClick(a)
        )
        self.map.addLayer(self.markers)
        self.markers.fire("data:loading")
       
        # obtendo dados
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
        self.control.addCatsToControl(self.map_id)

    def addItem(self,item):
        self.dados.addItem(item,self.func_convert)

        
class Controle:
    def __init__(self,sl):
        obj = self
        self.sl = sl
        self.id_control = "#"+self.sl.map_id+" div.searchlight-control"
        self.id_opcoes = "#"+self.sl.map_id+ " div.searchlight-opcoes" 
        self.id_camadas = self.opcoes + "ul"
        self.show = def(event):
            $(obj.id_opcoes).show()
        $(self.id_control).mouseenter(self.show )
        $(self.id_control).bind('touchstart',self.show);
        self.hide = def(event):
            $(obj.id_opcoes).hide()
 
        $("#"+self.sl.map_id).mouseover(self.hide)
        $("#"+self.sl.map_id).bind('touchstart',self.hide)
        self.criaPopup()

    def criaPopup(self):
       popup = L.popup()
       self.tout= 0
       self.popup = popup
       popup.setContent('<p>Hello world!<br />This is a nice popup.</p>')
       self.timeUltimoClick = Date().getTime()

    def clusterClick(self,a=None):
        d = Date()
        if (d.getTime() - self.timeUltimoClick)>1500: # 2s
            self.clickOrdem = 1
            self.popupOrZoom(a)
        self.timeUltimoClick = d.getTime()
             
    def clusterDuploClick(self, a =None):
        self.cancelPopup()

    def cancelPopup(self):
        self.clickOrdem = 2
        self.sl.map.closePopup()
        self.cluster_clicado.layer.zoomToBounds()
        
    def showPopup(self, map_id):
        sl = sl_referencias[map_id]
        obj=sl.control;
        
        if obj.clickOrdem == 1:
            obj.popup.openOn(self.sl.map)

        obj.clickOrdem = 0

    def popupOrZoom(self,cluster):
        self.sl.map.closePopup() 
        self.popup.setLatLng(cluster.layer.getLatLng())
        obj = self
        if self.clickOrdem == 1:
            self.cluster_clicado = cluster
            setTimeout(def (): 
                obj.showPopup(obj.sl.map_id);
            , 600)
   
    def addCatsToControl(self,map_id):
        op ="#"+map_id+ " div.searchlight-opcoes" 
        ul =op + " ul" 
        for k in dict.keys(self.sl.dados.categorias).sort():
            $(ul).append("<li><input type='checkbox' checked name='"+map_id+"-cat' value='"+k+"' class='categoria'/>"+k+" ("+self.sl.dados.categorias[k].length+")</li>")
        
        $(op).append("<p class='center'><input type='button' onclick='Controle.update(\""+map_id+"\");' value='Atualizar Mapa' /></p>")

Controle.update = def (self,map_id):
        sl = sl_referencias[map_id]
        $(sl.control.id_opcoes).hide()
        sl.markers.clearLayers();
        sl.markers.fire("data:loading")
        setTimeout("Controle.carregaDados('"+map_id+"')",50);

Controle.carregaDados = def (self, map_id)
        sl = sl_referencias[map_id]
        $("input:checkbox[name="+map_id.replace("#","")+"-cat]:checked").each(def ():
            cat=$(self).val();
            console.info(cat);
            sl.dados.catAddMarkers(cat,sl.markers);
        );
        sl.map.fitBounds(sl.markers.getBounds())
        sl.markers.fire("data:loaded") 



class Marcador:
    def __init__(self,geoItem,icon=None):
        self.m = None
        self.latitude = parseFloat(geoItem.latitude.replace(',','.'))
        self.longitude = parseFloat(geoItem.longitude.replace(',','.'))
        self.texto = geoItem.texto
        self.icon = sl_IconCluster
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
        name = name.replace(",","").replace('"','')
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
