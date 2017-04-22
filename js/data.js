var dataset = [
   {
     "year": 2013, "quarter": 1, "region": "South East", "regional_manager": "John", "sales": "14013.00"
   },
   {
     "year": 2013, "quarter": 2, "region": "South East", "regional_manager": "John", "sales": "18600.00"
   },
   {
     "year": 2013, "quarter": 3, "region": "South East", "regional_manager": "Leonardo", "sales": "23353.00"
   },
   {
     "year": 2013, "quarter": 4, "region": "South East", "regional_manager": "Leonardo", "sales": "20756.00"
   },
   {
     "year": 2013, "quarter": 1, "region": "North East", "regional_manager": "Paul", "sales": "24149.00"
   },
   {
     "year": 2013, "quarter": 2, "region": "North East", "regional_manager": "Paul", "sales": "13119.00"
   },
   {
     "year": 2013, "quarter": 3, "region": "North East", "regional_manager": "Paul", "sales": "23284.00"
   },
   {
     "year": 2013, "quarter": 4, "region": "North East", "regional_manager": "Paul", "sales": "12697.00"
   },
   {
     "year": 2013, "quarter": 1, "region": "South West", "regional_manager": "George", "sales": "23409.00"
   },
   {
     "year": 2013, "quarter": 2, "region": "South West", "regional_manager": "George", "sales": "13113.00"
   },
   {
     "year": 2013, "quarter": 3, "region": "South West", "regional_manager": "George", "sales": "17097.00"
   },
   {
     "year": 2013, "quarter": 4, "region": "South West", "regional_manager": "Michelangelo", "sales": "21796.00"
   },
   {
     "year": 2013, "quarter": 1, "region": "North West", "regional_manager": "Ringo", "sales": "22486.00"
   },
   {
     "year": 2013, "quarter": 2, "region": "North West", "regional_manager": "Raphael", "sales": "18383.00"
   },
   {
     "year": 2013, "quarter": 3, "region": "North West", "regional_manager": "Raphael", "sales": "19190.00"
   },
   {
     "year": 2013, "quarter": 4, "region": "North West", "regional_manager": "Raphael", "sales": "21011.00"
   },
   {
     "year": 2014, "quarter": 1, "region": "South East", "regional_manager": "Leonardo", "sales": "18378.00"
   },
   {
     "year": 2014, "quarter": 2, "region": "South East", "regional_manager": "Leonardo", "sales": "22284.00"
   },
   {
     "year": 2014, "quarter": 3, "region": "South East", "regional_manager": "Donatello", "sales": "24473.00"
   },
   {
     "year": 2014, "quarter": 4, "region": "South East", "regional_manager": "Donatello", "sales": "16286.00"
   },
   {
     "year": 2014, "quarter": 1, "region": "North East", "regional_manager": "Paul", "sales": "21630.00"
   },
   {
     "year": 2014, "quarter": 2, "region": "North East", "regional_manager": "Paul", "sales": "19603.00"
   },
   {
     "year": 2014, "quarter": 3, "region": "North East", "regional_manager": "Paul", "sales": "23947.00"
   },
   {
     "year": 2014, "quarter": 4, "region": "North East", "regional_manager": "Paul", "sales": "22444.00"
   },
   {
     "year": 2014, "quarter": 1, "region": "South West", "regional_manager": "Michelangelo", "sales": "11436.00"
   },
   {
     "year": 2014, "quarter": 2, "region": "South West", "regional_manager": "Michelangelo", "sales": "18152.00"
   },
   {
     "year": 2014, "quarter": 3, "region": "South West", "regional_manager": "Michelangelo", "sales": "17919.00"
   },
   {
     "year": 2014, "quarter": 4, "region": "South West", "regional_manager": "Michelangelo", "sales": "12747.00"
   },
   {
     "year": 2014, "quarter": 1, "region": "North West", "regional_manager": "Raphael", "sales": "15282.00"
   },
   {
     "year": 2014, "quarter": 2, "region": "North West", "regional_manager": "Raphael", "sales": "1645400"
   },
   {
     "year": 2014, "quarter": 3, "region": "North West", "regional_manager": "Raphael", "sales": "19653.00"
   },
   {
     "year": 2014, "quarter": 4, "region": "North West", "regional_manager": "Raphael", "sales": "10284.00"
   }
]

/**************************************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/

var salesArray=[];
var label=[];
//need drop down get id for year, quarter, and region
var yearDropdown = document.getElementById('yearDrop');
var quartDropdown = document.getElementById('quarterDrop');
var regionDropdown = document.getElementById('regionDrop');

//adds all items in sales
function add(a, b) {
    return a + b;
}

for (i=0; i < dataset.length; i++){
    //custom if with variables for dropdown options
    // if(dataset[i].region === "South East" && dataset[i].quarter === 1 && dataset[i].year === 2013){
    if(dataset[i].region === "South West" && dataset[i].year === 2013){
        salesArray.push(parseInt(dataset[i].sales));
        label.push(dataset[i].regional_manager);
        console.log(salesArray);
        var sum = salesArray.reduce(add, 0);
    }
}

console.log("sum: " + sum);
$(document).ready(function() {
    if (sum != null){ document.getElementById('total-sales').innerHTML = sum; }
    document.getElementById('total-sales').innerHTML = sum;
});

var ctx = document.getElementById("myChart")
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
            label: '# of Votes',
            data: salesArray,
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
