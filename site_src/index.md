---
layout: default
title: searchlight
---

Sobre
-----

Searchlight é um framework que pretende iluminar uma das partes mais importantes dos mapas web: o conteúdo.

Para isso ele oferece recursos para facilitar a visualização e compreensão de mapas web. Tendo como foco os mapas com informações de crowdsourcing que geralmente trabalham com quantidades elevadas de dados.

A missão do projeto é agrupar, numa única ferramenta, técnicas de visualização de mapas que permitam um melhor aproveitamento dos dados e compreensão das informações exibidas pelo mapa.

O projeto tem 3 objetivos principais:

* Organizar os dados no mapa de forma que evite sobreposição de informações.
* Permitir o filtro dos dados por zoom, categorias e tempo.
* Fácilitar a geração de mapas tanto por programadores quanto por usuários finais. 


Exemplos
--------
Alguns exemplos, dos recursos fornecidos pelo framework Searchlight, podem ser vistos a seguir.

### Filtro por categorias
O mapa abaixo exibe a localização de todos os pontos de ônibus da linha 163 da cidade de Vitória - ES. O filtro de categorias, no canto superior direito, nos permite filtrar os pontos de ônibus pelas categorias IDA e VOLTA, separando assim os pontos que o ônibus para na ida e volta da viagem.
<div id="map1"> </div>

### Agrupamento e Zoom Contextual

Quando temos muitos marcadores podemos agrupá-los para melhorar a visualização. Além disso, algumas informações são irrelevantes para determinados níveis de zoom, e podem ser agrupadas de acordo com o zoom.

<div id="map_cluster"> </div>

Um recurso interessante é o zoom contextual. No mapa acima, esse zoom pode ser feito ao clicarmos em um grupo. Observe que nesse caso é feito um zoom que mostra toda a area do agrupamento. Esse zoon varia de acordo com o contexto, de forma que para exibir alguns grupos o zoom terá que avancar nivéis diferences na hieraquia padrão de zoom.

### Balãoes de Resumo e Foco
No mapa anterior usamos o grupo como contexto do zoom, porém em mapas maiores, com grupos maiores, isso ponde não ser suficiente. Em casos assim, focar em um subgrupo específico, exbindo no mapa  apenas os elementos pertencentes do subgrupo, pode ser uma estratégia útil. 

O mapa abaixo exemplifica isso. Ao clicarmos num grupo, o mapa nos apresenta um balão com um resumo sobre os subgrupos pertencentes ao grupo. Se clicarmos em subgrupo o mapa exibe apenas os elementos do subgrupo. Para voltar a visualizção anterior basta clicar na opção DESFOCAR: 

<div id="map"> </div>
### Geração automática de mapa
Searchlight permite o uso de planilhas eletrônicas do google docs como base de dados para o seu mapa automaticamente (não é preciso saber programar).

<div id='map_gdoc'> </div>

Os marcadores do mapa acima foram obtidos através de um planilha do google docs ([planilha](https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html))  que tem como coteudo as posições e os titulos dos marcadores.

Qualquer alteração na planilha é refletida automaticamente no mapa. Se adicionarmos uma nova linha na planilha, com dados de um marcador, o mapa automaticamente exibe o novo marcador, se tirarmos uma linha o marcador respectivo some.

### Compartilhar mapa
Para criar e compartilhar seu próprio mapa, basta criar uma planilha publica no google docs contendo os dados geograficos que deseja compartilhar. Observe, é claro, a convenção de nomes para as colunas da planilha. 

Após criar a planilha, cole o link publico no campo abaixo e clique em compartilhar.
<form method="GET" action="view.html">Endereço da planilha:  <input type="text" style="width:600px" name="data" value="https://docs.google.com/spreadsheet/pub?key=0AhU-mW4ERuT5dHBRcGF5eml1aGhnTzl0RXh3MHdVakE&single=true&gid=0&output=html" />
  <input type="submit" value="compartilhar" />
</form>


### Filtro por Tempo
No mapa abaixo podemos filtrar e exibir apenas os marcadores que pertencem as categorias escolhidos e com atributo data dentro do período de tempo escolhido.

---- em construção -----


