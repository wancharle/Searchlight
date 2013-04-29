
import exemplos.markercluster
import exemplos.portoalegre

OnibusAzul = new L.icon({ iconUrl:getSLpath()+"../images/onibus_azul.png",iconSize:     [45, 58], iconAnchor:   [23, 48], popupAnchor: [0, -40] })
OnibusVolta = new L.icon({ iconUrl:getSLpath()+"../images/onibus_volta.png",iconSize:     [45, 58], iconAnchor:   [23, 48], popupAnchor: [0, -40] })
pontos_inseridos = 0
def converte_item1(item):
    nonlocal pontos_inseridos
    item_convertido = {}
    item_convertido.longitude = ""+item.longitude
    item_convertido.latitude = "" +item.latitude
    item_convertido.texto = item.ponto + " ordem=" + item.ordem
    pontos_inseridos +=1
    if (pontos_inseridos < 68):
        item_convertido.icon = OnibusAzul
        item_convertido.cat_id = 1
        item_convertido.cat = 'IDA'
    else:
        item_convertido.cat_id = 2
        item_convertido.cat = 'VOLTA'
        item_convertido.icon = OnibusVolta
    
    return item_convertido

def exemplo1(): 
    mps = new Searchlight("js/exemplos/121.json",converte_item1,"map1",None,False,False)

window.onSLcarregaDados= def (sl):
    v=sl.dados.getCatLatLng('IDA')
    polyline = L.polyline(v, {color: 'blue'}).addTo(sl.map);
    v=sl.dados.getCatLatLng('VOLTA')
    polyline = L.polyline(v, {color: 'black'}).addTo(sl.map);


 

def exemplo_gdoc():
    public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html';
    mps = new Searchlight(public_spreadsheet_url,null,'map_gdoc')




def exemplos():
    exemplo1() 
    exemplo_markercluster()
    exemplo_gdoc()
    portoalegre_cc('map')


