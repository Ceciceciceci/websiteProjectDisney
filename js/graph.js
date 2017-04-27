
//JS File for datasetreport.html
//Initialize and customizing the charts
//To find chart: ctrl+f: chart #
/***********************************************
****************** chart 1 **********************
************ Total Sales by Quarter ***********/

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data:{
      animationSteps: 50000,
      labels:["Q1","Q2","Q3","Q4"],
          datasets: [{
              label: "2013",
              backgroundColor: "#E8620C",
              data: totalSalesArray2013
          }, {
              label: "2014",
              backgroundColor: "#DFE10D",
              data: totalSalesArray2014
          }],
    },
    options: {
        legend: {
             display: true,
             labels: {
                 fontColor: '#2E2E2E',
                 fontFamily: "Open Sans",
                 fontSize: 16,
                 boxWidth: 12,
                 borderWidth: 0
             }
          }, //end of legends
          tooltips: {
              callbacks: {
                  label: function(tooltipItems, data) {
                      return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                  }
              }
          },
          scales: {
              xAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontFamily: "Open Sans",
                    fontSize: 12
                  },
                  scaleLabel: {
                    display: true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    labelString: 'Quarter'
                  }
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontFamily: "Open Sans",
                      fontSize: 12
                  },
                  scaleLabel: {
                    display: true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    labelString: 'Sales'
                  }
              }]
          } //end of scales
      }
});

/***********************************************
****************** chart 2 **********************
********** Total Sales by Manager **************/

  var ctx2 = document.getElementById("myChart2");
  var myChart = new Chart(ctx2, {
    type: 'horizontalBar',
    data:{
      labels:["John","Leonardo","Paul","George","Michelangelo","Ringo","Raphael","Donatello"],
          datasets: [{
              label: "2013",
              backgroundColor: "#E8620C",
              data: totalManagerArray2013
          }, {
              label: "2014",
              backgroundColor: "#40B9A4",
              data: totalManagerArray2014
          }],
    },
    options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 12,
               padding:10,
               borderWidth: 1
           }
        }, //end of legends
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.xLabel;
                }
            }
        },
        title: {
          display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  fontFamily: "Open Sans",
                  fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Sales'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "Open Sans",
                    fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Regional Manager'
                }
            }]
        } //end of scales
    }
});


  /***********************************************
  ****************** chart 3 **********************
  ************Total Sales by Region **************/
  var ctx3 = document.getElementById("myChart3");
  var myChart = new Chart(ctx3, {
    type: 'bar',
    data:{
      labels:["South East","South West","North East","North West"],
          datasets: [{
              label: "2013",
              backgroundColor: "#40B9A4",
              data: totalRegionArray2013
          }, {
              label: "2014",
              backgroundColor: "#DFE10D",
              data: totalRegionArray2014
          }],
    },
    options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 12
           }
        }, //end of legends
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                }
            }
        },
        title: {
          display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  fontFamily: "Open Sans",
                  fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Region'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    max: 100000
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Sales'
                }
            }]
        } //end of scales
    }
});


  /***********************************************
  ****************** chart 4 **********************
  **********2014 Detailed Quarter Sales ***********/
  var ctx4 = document.getElementById("myChart4");
  var myChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ["Q1","Q2","Q3","Q4"],
        datasets: [{
              label: "South East",
              data: [18378, 22284, 24473, 16206],
              backgroundColor: "#40B9A4",
              borderColor:"#40B9A4",
              fill: false,
              lineTension: 0
          }, {
              label: "South West",
              data: [11436, 18152, 17919, 12747],
              backgroundColor: "#E8620C",
              borderColor:"#E8620C",
              fill: false,
              lineTension: 0
          }, {
              label: "North East",
              data: [21630, 19603, 23947, 22444],
              backgroundColor: "#DFE10D",
              borderColor:"#DFE10D",
              fill: false,
              lineTension: 0
          }, {
              label: "North West",
              data: [15282, 16454, 19653, 10284],
              backgroundColor: "#B6C2C9",
              borderColor:"#B6C2C9",
              fill: false,
              lineTension: 0
        }],
    },
    options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 15,
               padding: 10
           }
        }, //end of legends
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                }
            }
        },
        title: {
          display: false,
          text: '2014 Sales Detailed',
          fontFamily: "Open Sans",
          fontSize: 15
        },
        scales: {
            xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  fontFamily: "Open Sans",
                  fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Quarter'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    max: 30000
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Sales'
                }
            }]
        } //end of scales
    }
});


  /***********************************************
  ****************** chart 5 **********************
  *************************************************/
  var ctx5 = document.getElementById("myChart5");
  var myChart = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ["Q1","Q2","Q3","Q4"],
        datasets: [{
              label: "South East",
              data: [14013, 18600, 23353, 20756],
              backgroundColor: "#40B9A4",
              borderColor:"#40B9A4",
              fill: false,
              lineTension: 0
          }, {
              label: "South West",
              data: [23409, 13113, 17097, 21796],
              backgroundColor: "#E8620C",
              borderColor:"#E8620C",
              fill: false,
              lineTension: 0
          }, {
              label: "North East",
              data: [24149, 13119, 23284, 12697],
              backgroundColor: "#DFE10D",
              borderColor:"#DFE10D",
              fill: false,
              lineTension: 0
          }, {
              label: "North West",
              data: [22486, 18383, 19190, 21011],
              backgroundColor: "#B6C2C9",
              borderColor:"#B6C2C9",
              fill: false,
              lineTension: 0
        }],
    },
    options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 15,
           }
        }, //end of legends
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                }
            }
        },
        title: {
          display: false,
          text: '2013 Detailed Sales',
          fontFamily: "Open Sans",
          fontSize: 15
        },
        scales: {
            xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  fontFamily: "Open Sans",
                  fontSize: 12
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Quarter'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "Open Sans",
                    fontSize: 12,
                    max: 30000
                },
                scaleLabel: {
                  display: true,
                  fontFamily: "Open Sans",
                  fontSize: 12,
                  labelString: 'Sales'
                }
            }]
        } //end of scales
    }
});

  /***********************************************
  ****************** chart 6 **********************
  *************************************************/
  var ctx6 = document.getElementById("myChart6");
  var myChart6 = new Chart(ctx6, {
      type: 'line',
      data: {
          labels:["Q1","Q2","Q3","Q4"],
          datasets: [{
                label: "John",
                data: [14013, 18600, null, null],
                backgroundColor: "#FF5B57",
                borderColor:"#FF5B57",
                fill: false,
                pointRadius: 5,
                lineTension: 0
            }, {
                label: "Leonardo",
                data: [null, null, 23353, 20756],
                backgroundColor: "#E8620C",
                borderColor:"#E8620C",
                fill: false,
                pointRadius: 5,
                lineTension: 0
            }, {
                label: "Paul",
                data: [24149, 13119, 23284, 12697],
                backgroundColor: "#DFE10D",
                borderColor:"#DFE10D",
                fill: false,
                pointRadius: 5,
                lineTension: 0
            }, {
                label: "George",
                data: [23409, 13113, 17097, null],
                backgroundColor: "#40B9A4",
                borderColor:"#40B9A4",
                fill: false,
                pointRadius: 7,
                lineTension: 0
          }, {
                label: "Michelangelo",
                data: [null, null, null, 21796],
                backgroundColor: "#5CA5E7",
                borderColor:"#5CA5E7",
                fill: false,
                pointRadius: 5,
                lineTension: 0
         }, {
                label: "Ringo",
                data: [22486, null, null, null],
                backgroundColor: "#8E96C4",
                borderColor:"#8E96C4",
                fill: false,
                pointRadius: 5,
                lineTension: 0
         }, {
                label: "Raphael",
                data: [null, 18383, 19190, 21011],
                backgroundColor: "#B6C2C9",
                borderColor:"#B6C2C9",
                fill: false,
                pointRadius: 5,
                lineTension: 0
        }, {
                label: "Donatello",
                data: [null, null, null, null],
                backgroundColor: "#2E2E2E",
                borderColor:"#2E2E2E",
                fill: false,
                pointRadius: 5,
                lineTension: 0
       }],
      },
      options: {
        legend: {
           display: true,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 12,
           }
        }, //end of legends
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + '$' +tooltipItems.yLabel;
                }
            }
        },
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
                      fontSize: 12,
                      max: 30000
                  }
              }]
          }
      }
  });

//update function dropdown for manager detailed chart
function updateChart() {
    var yearValue = $("#yearSelect").val();
    if (yearValue === "2014"){
      //John
        myChart6.data.datasets[0].data[0] = null;
        myChart6.data.datasets[0].data[1] = null;
      // Leonardo
        myChart6.data.datasets[1].data[0] = 18378;
        myChart6.data.datasets[1].data[1] = 22284;
        myChart6.data.datasets[1].data[2] = null;
        myChart6.data.datasets[1].data[3] = null;
      //Donatello
        myChart6.data.datasets[7].data[2] = 24473;
        myChart6.data.datasets[7].data[3] = 16286;
      //Paul
        myChart6.data.datasets[2].data[0] = 21630;
        myChart6.data.datasets[2].data[1] = 19603;
        myChart6.data.datasets[2].data[2] = 23947;
        myChart6.data.datasets[2].data[3] = 22444;
      //George
        myChart6.data.datasets[3].data[0] = null;
        myChart6.data.datasets[3].data[1] = null;
        myChart6.data.datasets[3].data[2] = null;
      //Michelangelo
        myChart6.data.datasets[4].data[0] = 11436;
        myChart6.data.datasets[4].data[1] = 18152;
        myChart6.data.datasets[4].data[2] = 17919;
        myChart6.data.datasets[4].data[3] = 12747;
      //Ringo
        myChart6.data.datasets[5].data[0] = null;
      //Raphael
        myChart6.data.datasets[6].data[0] = 15282;
        myChart6.data.datasets[6].data[1] = 16454;
        myChart6.data.datasets[6].data[2] = 19653;
        myChart6.data.datasets[6].data[3] = 10284;

        myChart6.update();
    }
    else{
      //John
        myChart6.data.datasets[0].data[0] = 14013;
        myChart6.data.datasets[0].data[1] = 18600;
      // Leonardo
        myChart6.data.datasets[1].data[0] = null;
        myChart6.data.datasets[1].data[1] = null;
        myChart6.data.datasets[1].data[2] = 23353;
        myChart6.data.datasets[1].data[3] = 20756;
      //Paul
        myChart6.data.datasets[2].data[0] = 24149;
        myChart6.data.datasets[2].data[1] = 13119;
        myChart6.data.datasets[2].data[2] = 23184;
        myChart6.data.datasets[2].data[3] = 12697;
      //George
        myChart6.data.datasets[3].data[0] = 23409;
        myChart6.data.datasets[3].data[1] = 13113;
        myChart6.data.datasets[3].data[2] = 17097;
      //Michelangelo
        myChart6.data.datasets[4].data[0] = null;
        myChart6.data.datasets[4].data[1] = null;
        myChart6.data.datasets[4].data[2] = null;
        myChart6.data.datasets[4].data[3] = 22444;
      //Ringo
        myChart6.data.datasets[5].data[0] = 22486;
      //Raphael
        myChart6.data.datasets[6].data[0] = null;
        myChart6.data.datasets[6].data[1] = 18383;
        myChart6.data.datasets[6].data[2] = 19190;
        myChart6.data.datasets[6].data[3] = 21011;
      //Donatello
        myChart6.data.datasets[7].data[2] = null;
        myChart6.data.datasets[7].data[3] = null;

        myChart6.update();
    }
}
$('#yearSelect').on('change', updateChart)
updateChart();
