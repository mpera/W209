var map = d3.geomap.choropleth()
    .geofile('/js/d3-geomap/topojson/countries/USA.json')
    .projection(d3.geo.albersUsa)
    .colors(["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"])
    .column('2011')
    .unitId('fips')
    .legend(true);


d3.csv('states.csv', function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);


    d3.select('#map')
        .datum(data)
        .call(map.draw, map);

    }
});





