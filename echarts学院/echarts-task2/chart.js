var myChart = echarts.init(document.getElementById('main'));

var countries = ['巴西','印尼','美国','印度','中国','世界人口(万)'];
var population_2011 = [18203, 23489, 29034, 104970, 131744, 630230];
var population_2012 = [19325, 23438, 31000, 121594, 134141, 681807];

// 指定图表的配置项和数据
var option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: countries,
        position: 'bottom',
        boundaryGap: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'red',
                width: 3
            }
        },
        axisLabel: {
          textStyle: {
              color: 'black'
          }
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        position: 'right',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'blue'
            }
        }
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: population_2011
        },
        {
            name: '2012年',
            type: 'bar',
            data: population_2012
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
