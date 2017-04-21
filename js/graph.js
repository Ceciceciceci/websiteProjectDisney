// for the graphs

  var ctx = document.getElementById("myChart")
  var dataset2013q1 = [14013,24149,23409,22486];
  var dataset2013q2 = [14013, 24149,23,409,18383];
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["JOHN", "LEO", "PAUL", "GEORGE", "RINGO"],
          datasets: [{
              label: '# of Votes',
              data: [10, 20, 15, 5, 25],
              backgroundColor: [
                  '#DFE10D',
                  '#E8620C',
                  '#40B9A4',
                  '#202E4A',
                  '#E6E4E2'
              ],
              borderWidth: 0,
          }],
      },
      options: {
          legend: {
             display: true,
             labels: {
                 fontColor: '#2E2E2E',
                 fontFamily: "Open Sans",
                 fontSize: 12,
                 boxWidth: 10,
             }
          }, //end of legends
          scales: {
              xAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontFamily: "Open Sans",
                    fontSize: 12
                  }
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontFamily: "Open Sans",
                      fontSize: 12
                  }
              }]
          } //end of scales
      }
  });

  var ctx2 = document.getElementById("myChart2");
  var myChart = new Chart(ctx2, {
      type: 'bar',
      data: {
          labels: ["LEO", "DONA", "PAUL", "MICHAEL", "RAPHAEL"],
          datasets: [{
              label: 'undefined',
              data: [10, 20, 15, 5, 25],
              backgroundColor: [
                  '#DFE10D',
                  '#E8620C',
                  '#40B9A4',
                  '#202E4A',
                  '#E6E4E2'
              ],
              borderWidth: 0,
          }],
      },
      options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 12,
               boxWidth: 10,
           }
        }, //end of legends
          scales: {
              xAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontFamily: "Open Sans",
                    fontSize: 12
                  }
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontFamily: "Open Sans",
                      fontSize: 12
                  }
              }]
          }
      }
  });
