
$.get('world.json', function (worldJson) {
    echarts.registerMap('world', worldJson);
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'world'
        }]
    });
});
