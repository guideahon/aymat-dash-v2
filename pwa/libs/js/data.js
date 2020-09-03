        var carga_bat=100;
        var produccion_diaria=0;
        var produccion_total=0;
        var consumo_red_dia=0;
        var consumo_red_total=0;
        var consumo_diaria=0;
        var consumo_total=0;

        //document.getElementById('P_dia').textContent = produccion_diaria;
        document.getElementById('P_total').textContent = produccion_total;
        document.getElementById('CR_dia').textContent = consumo_red_dia;
        document.getElementById('CR_total').textContent = consumo_red_total;
        document.getElementById('C_dia').textContent = consumo_diaria;
        document.getElementById('C_total').textContent = consumo_total;

        var options = {
          series: [carga_bat],
          chart: {
          height: 272,
          type: 'radialBar',
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -180,
            endAngle: 180,
             hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
        
            dataLabels: {
              show: true,
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                formatter: function(val) {
                  return parseInt(val);
                },
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'solid',
          colors:['#00A5D0'],
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['Carga'],
        };

        var chart = new ApexCharts(document.querySelector("#morris_bateria"), options);
        chart.render();