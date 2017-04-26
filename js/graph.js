
//JS File for datasetreport.html
//Initialize and customizing the charts
//To find chart: ctrl+f: chart #

/***********************************************
****************** chart 1 **********************
*************************************************/

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data:{
      labels:["Q1","Q2","Q3","Q4"],
          datasets: [{
              label: "2013",
              backgroundColor: "#DFE10D",
              data: totalSalesArray2013
          }, {
              label: "2014",
              backgroundColor: "#E8620C",
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
*************************************************/

  var ctx2 = document.getElementById("myChart2");
  var myChart = new Chart(ctx2, {
    type: 'bar',
    data:{
      labels:["John","Leonardo","Paul","George","Michelangelo","Ringo","Raphael","Donatello"],
          datasets: [{
              label: "2013",
              backgroundColor: "#40B9A4",
              data: totalManagerArray2013
          }, {
              label: "2014",
              backgroundColor: "#E8620C",
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
           }
        }, //end of legends
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
                  labelString: 'Regional Manager'
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
  ****************** chart 3 **********************
  *************************************************/
  var ctx3 = document.getElementById("myChart3");
  var myChart = new Chart(ctx3, {
    type: 'bar',
    data:{
      labels:["South East","South West","North East","North West"],
          datasets: [{
              label: "2013",
              backgroundColor: "#DFE10D",
              data: totalRegionArray2013
          }, {
              label: "2014",
              backgroundColor: "#40B9A4",
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
               boxWidth: 12,
           }
        }, //end of legends
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
  ****************** chart 4 **********************
  *************************************************/
  var ctx4 = document.getElementById("myChart4");
  var myChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
            label: 'SALES ($)',
            data: totalSalesArray,
            backgroundColor: [
                '#DFE10D',
                '#E8620C',
                '#40B9A4',
                '#202E4A'
            ],
            borderWidth: 0,
        }],
    },
    options: {
        legend: {
           display: false,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 12,
               borderWidth: 1
           }
        }, //end of legends
        title: {
          display: true,
          text: 'Sales For Quarter 1',
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
                  labelString: 'Regional Manager'
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
  ****************** chart 5 **********************
  *************************************************/
  var ctx5 = document.getElementById("myChart5");
  var myChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
            label: 'SALES ($)',
            data: totalSalesArray,
            backgroundColor: [
                '#DFE10D',
                '#E8620C',
                '#40B9A4',
                '#202E4A'
            ],
            borderWidth: 0,
        }],
    },
    options: {
        legend: {
           display: false,
           labels: {
               fontColor: '#2E2E2E',
               fontFamily: "Open Sans",
               fontSize: 16,
               boxWidth: 12,
           }
        }, //end of legends
        title: {
          display: true,
          text: 'Sales For Quarter 1',
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
                  labelString: 'Regional Manager'
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
  ****************** chart 6 **********************
  *************************************************/
  var ctx6 = document.getElementById("myChart6");
  var myChart = new Chart(ctx6, {
      type: 'bar',
      data: {
          labels: ["Paul", "Leonardo", "Michelangelo", "Raphael"],
          datasets: [{
              label: 'SALES ($)',
              data: [10000, 20500, 15200, 35400],
              backgroundColor: [
                  '#DFE10D',
                  '#E8620C',
                  '#40B9A4',
                  '#202E4A'
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
               fontSize: 16,
               boxWidth: 12,
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
  /***********************************************
  ****************** chart 7 **********************
  *************************************************/
  var ctx7 = document.getElementById("myChart7");
  var myChart = new Chart(ctx7, {
      type: 'bar',
      data: {
          labels: ["George", "Michaelangelo", "Paul", "Raphael"],
          datasets: [{
              label: 'SALES ($)',
              data: [10000, 20500, 15200, 35400],
              backgroundColor: [
                  '#DFE10D',
                  '#E8620C',
                  '#40B9A4',
                  '#202E4A'
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
               fontSize: 16,
               boxWidth: 12,
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
