function format(data)
{
	data = Math.round(data/1000);
	return data + 'K';
}

function commaseparated(value) {
  return (value).toLocaleString(
    undefined, // leave undefined to use the visitor's browser 
               // locale or a string like 'en-US' to override it.
    { minimumFractionDigits: 0 }
  );
}

option = {
  backgroundColor: '#FFF',
  tooltip: {
    formatter: '{a} <br/>{b} : {c}'
  },
  toolbox: {
    feature: {
      restore: {},
      saveAsImage: {}
    }
  },
  series: [
    // left
    {
      name: 'gauge 0',
      type: 'gauge',
      startAngle: -30,
      endAngle: -315,
      radius: '37%',
      center: ['21%', '55%'],
      axisLine: {
        lineStyle: {
          color: [[1, '#dcddde']]
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      anchor: {},
      pointer: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      name: 'gauge 1',
      type: 'gauge',
      min: 80000,
      max: 155000,
      startAngle: -30,
      endAngle: -315,
      splitNumber: 5,
      radius: '35%',
      center: ['21%', '55%'],
      axisLine: {
        lineStyle: {
          color: [[1, '#fff']]
        }
      },
      splitLine: {
        distance: -3,
        length: 12,
        lineStyle: {
          color: '#a7a9ab',
          width: 4
        }
      },
      axisTick: {
        distance: -4,
        length: 8,
        lineStyle: {
          color: '#a7a9ab',
          width: 2
        }
      },
      axisLabel: {
        distance: 14,
        fontSize: 17,
        fontWeight: 800,
        fontFamily: 'monospace',
        color: '#a7a9ab',
        formatter: function (value) {
                              		var val = format(value);
                                  return val;
                              }
      },
      anchor: {},
      pointer: {
        icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
        width: 3,
        length: '30%',
        offsetCenter: [0, '-40%'],
        itemStyle: {
          color: '#ef9b1b',
          shadowColor: 'rgb(239, 155, 27)',
          shadowBlur: 3,
          shadowOffsetY: 2
        }
      },
      title: {
        color: '#000',
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'monospace',
        offsetCenter: [0, 200],
        lineHeight: 8
      },
      progress: {
        show: true,
        width: -9,
        itemStyle: {
          color: '#dcddde'
        }
      },
      data: [
        {
          value: 99500,
          name: 'Market Lowest\nPrice',
          title: {
            fontSize: 22,
            fontWeight: 800,
            lineHeight: 25,
            fontFamily : 'monospace',
            offsetCenter: [-5, '135%']
          },
          detail: {
            fontSize: 21,
            color: '#000',
            fontFamily: '',
            formatter: function (value) {
                              		var val = commaseparated(value);
                                  return val + ' AED';
                              },
            offsetCenter: [10, '20%']
          }
        }
      ]
    },
    
    {
      name: 'gauge 1',
      type: 'gauge',
      min: 80000,
      max: 155000,
      startAngle: -30,
      endAngle: -315,
      splitNumber: 5,
      radius: '35%',
      center: ['21%', '55%'],
      axisLine: {
        lineStyle: {
          color: [[1, '#fff']]
        }
      },
      splitLine: {
        distance: -3,
        length: 12,
        lineStyle: {
          color: '#a7a9ab',
          width: 4
        }
      },
      axisTick: {
        distance: -4,
        length: 8,
        lineStyle: {
          color: '#a7a9ab',
          width: 2
        }
      },
      axisLabel: {
        distance: 14,
        fontSize: 17,
        fontWeight: 800,
        fontFamily: 'monospace',
        color: '#a7a9ab',
        formatter: function (value) {
                              		var val = format(value);
                                  return val;
                              }
      },
      anchor: {},
      pointer: {
        icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
        width: 3,
        length: '30%',
        offsetCenter: [0, '-40%'],
        itemStyle: {
          color: '#ef9b1b',
          shadowColor: 'rgb(239, 155, 27)',
          shadowBlur: 3,
          shadowOffsetY: 2
        }
      },
      title: {
        color: '#000',
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'monospace',
        offsetCenter: [0, 200],
        lineHeight: 8
      },
      progress: {
        show: true,
        width: -9,
        itemStyle: {
          color: '#ef9b1b'
        }
      },
      data: [
        {
          value: 140000,
          name: 'Dealer Price',
          title: {
            fontSize: 22,
            fontWeight: 800,
            offsetCenter: [-5, '-125%']
          },
          detail: {
            fontSize: 21,
            color: '#000',
            fontFamily: 'monospace',
            formatter: function (value) {
                              		var val = commaseparated(value);
                                  return val + ' AED';
                              },
            offsetCenter: [10, '-20%']
          }
        }
      ]
    },
    // middle
    {
      name: 'gauge 2',
      type: 'gauge',
      min: 80000,
      max: 160000,
      z: 10,
      startAngle: 225,
      endAngle: -45,
      splitNumber: 8,
      radius: '50%',
      center: ['50%', '50%'],
      axisLine: {
        show: true,
        lineStyle: {
          width: -9,
          color: [
            [1, '#dcddde']
          ]
        }
      },
      
      splitLine: {
        distance: 15,
        length: 20,
        lineStyle: {
          color: '#a7a9ab',
          width: 4,
          shadowColor: 'rgba(255, 255, 255, 0.5)',
          shadowBlur: 15,
          shadowOffsetY: -10
        }
      },
      axisTick: {
        distance: 20,
        length: 8,
        lineStyle: {
          color: '#a7a9ab',
          width: 2,
          shadowColor: 'rgba(255, 255, 255)',
          shadowBlur: 10,
          shadowOffsetY: -10
        }
      },
      axisLabel: {
        distance: 8,
        fontSize: 24,
        fontWeight: 800,
        fontFamily: 'monospace',
        color: '#a7a9ab',
        formatter: function (value) {
                              		var val = format(value);
                                  return val;
                              }
      },
      anchor: {},
      pointer: {
        icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
        width: 3,
        offsetCenter: [0, '-30%'],
        length: '50%',
        itemStyle: {
          color: '#ef9b1b',
          shadowColor: 'rgb(239, 155, 27)',
          shadowBlur: 3,
          shadowOffsetY: 2
        }
      },
      title: {
        color: '#000',
        fontSize: 24,
        fontWeight: 800,
        fontFamily: 'monospace',
        offsetCenter: [0, '-120%'],
        lineHeight: 20
      },
      progress: {
        show: true,
        width: -9,
        itemStyle: {
          color: '#ef9b1b'
        }
      },
      data: [
        {
          value: 131000,
          name: 'Recommended price'
        }
      ],
      detail: {
        show: true,
        fontSize: 26,
        fontWeight: 800,
        color: '#000',
        fontFamily: 'monospace',
        offsetCenter: [0, '30'],
        formatter: function (value) {
                              		var val = commaseparated(value);
                                  return val + '\nAED';
                              },
      }
    },
    
    // right
    {
      name: 'gauge 4',
      type: 'gauge',
      min: 0,
      max: 8,
      startAngle: 135,
      endAngle: 45,
      splitNumber: 8,
      radius: '37%',
      center: ['79%', '55%'],
      axisLine: {
        lineStyle: {
          color: [[1, '#dcddde']]
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      anchor: {},
      pointer: {
        show: false
      },
      title: {},
      detail: {
        show: false
      }
    },
    {
      name: 'gauge 4',
      type: 'gauge',
      min: 0,
      max: 8,
      startAngle: 210,
      endAngle: 310,
      splitNumber: 8,
      radius: '37%',
      clockwise: false,
      center: ['79%', '55%'],
      axisLine: {
        lineStyle: {
          color: [[1, '#dcddde']]
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      anchor: {},
      pointer: {
        show: false
      },
      title: {},
      detail: {
        show: false
      }
    },
    {
      name: 'gauge 5',
      type: 'gauge',
      min: 0,
      max: 100,
      startAngle: 135,
      endAngle: 45,
      splitNumber: 2,
      radius: '35%',
      center: ['79%', '55.3%'],
      axisLine: {
        lineStyle: {
          width: 10,
          color: [
            [0, '#AE96A6'],
            [1, 'rgba(255, 0, 0, 0)']
          ]
        }
      },
      splitLine: {
        distance: -5,
        length: 16,
        lineStyle: {
          color: '#dcddde',
          width: 4
        }
      },
      axisTick: {
        distance: -5,
        length: 10,
        lineStyle: {
          color: '#dcddde',
          width: 2
        }
      },
      axisLabel: {
        distance: 12,
        fontSize: 18,
        fontWeight: 800,
        fontFamily: 'monospace',
        color: '#a7a9ab',
        formatter: function (value) {
          if (value === 0.5) {
            return '2/4';
          }
          if (value === 1) {
            return '4/4';
          }
          return value + '';
        }
      },
      pointer: {
        icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
        width: 3,
        offsetCenter: [0, '-40%'],
        length: '30%',
        itemStyle: {
          color: '#ef9b1b',
          shadowColor: 'rgb(239, 155, 27)',
          shadowBlur: 3,
          shadowOffsetY: 2
        }
      },
      progress: {
        show: true,
        width: -9,
        itemStyle: {
          color: '#ef9b1b'
        }
      },
      title: {},
      detail: {
        show: true,
        fontSize: 22,
        fontFamily: 'monospace',
        color: '#000',
        offsetCenter: [0, '-20%'],
        formatter: '{value} cars'
      },
      data: [
        {
          value: 50,
          name: 'Market Availability',
          title: {
            fontSize: 22,
            fontFamily: 'monospace',
            fontWeight: 800,
            color: '#000',
            offsetCenter: [0, '-130%']
          }
        }
      ]
    },
    {
      name: 'gauge 6',
      type: 'gauge',
      min: 0,
      max: 60,
      startAngle: 210,
      endAngle: 310,
      clockwise: false,
      splitNumber: 2,
      radius: '34.5%',
      center: ['79%', '55%'],
      axisLine: {
        lineStyle: {
          color: [
            [1, '#fff'],
            [1.1, '#f00']
          ]
        }
      },
      splitLine: {
        distance: -5,
        length: 12,
        lineStyle: {
          color: '#dcddde',
          width: 4
        }
      },
      axisTick: {
        splitNumber: 5,
        length: 10,
        distance: -5,
        lineStyle: {
          color: '#dcddde',
          width: 2
        }
      },
      axisLabel: {
        distance: 14,
        fontSize: 18,
        fontWeight: 800,
        fontFamily: 'monospace',
        color: '#a7a9ab'
      },
      pointer: {
        icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
        width: 3,
        offsetCenter: [0, '-40%'],
        length: '30%',
        itemStyle: {
          color: '#ef9b1b',
          shadowColor: 'rgb(239, 155, 27)',
          shadowBlur: 3,
          shadowOffsetY: 2
        }
      },
      progress: {
        show: true,
        width: -9,
        itemStyle: {
          color: '#ef9b1b'
        }
      },
      title: {},
      detail: {
        show: true,
        fontSize: 22,
        fontFamily: 'monospace',
        color: '#000',
        offsetCenter: [0, '20%'],
        formatter: '{value} days'
      },
      data: [
        {
          value: 30,
          name: 'Avgerage Days\nto Sell',
          title: {
            fontSize: 22,
            fontWeight: 800,
            lineHeight: 25,
            fontFamily: 'monospace',
            color: '#000',
            offsetCenter: [-5, '145%']
          }
        }
      ]
    }
  ]
};
