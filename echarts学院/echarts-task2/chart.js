var myChart = echarts.init(document.getElementById('main'));

var countries = ['巴西','印尼','美国','印度','中国','世界人口(万)'];
var population_2011 = [18203, 23489, 29034, 104970, 131744, 630230];
var population_2012 = [19325, 23438, 31000, 121594, 134141, 681807];

// 指定图表的配置项和数据
var option = {
    backgroundColor: '#d7ebf4',
    color: ['#1b647c', '#20b6e8'],
    title: [
      {
        text: '世界人口总量',
        subtext: 'ife 2017',
        subtextStyle: {
          color: 'black',
          fontSize: 16
        },
        left: '5%'
      },
      {
        subtext: '数据来自网络',
        bottom: '2%',
        subtextStyle: {
          color: 'black',
          fontSize: 16
        },
        left: '5%'
      }
    ],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年'],
        left: '5%',
        top: '10%'
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '18%',
        containLabel: true,
    },

    xAxis: [
      {
        type: 'category',
        data: countries,
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'red',
                width: 2
            }
        },
        axisLabel: {
          textStyle: {
              color: 'black'
          }
        }

      },
      {
        type: 'category',
        position: 'bottom',
        axisTick: {
            inside: true,
            alignWithLabel: true
          },
        axisLine: {
          onZero: false
        },
        data: countries
      }
    ],

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
                // color: ['red','white','white','white','white','white','white', 'transparent'],
                color: 'white',
                width: 3
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
            barGap: '0',
            data: population_2012
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
