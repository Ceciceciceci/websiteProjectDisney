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
//*******************TO-DO
//set toggle condition for side nav with fa-bars
//grab fa-bars and also subtract left on col blocks
//custom if with variables for dropdown options
    //replace "" "with dropdown values"
    //need two other conditions
//add filter table option

//variables
var salesArray=[];
var label=[];

//ID elements needed for year, quarter, and region
var yearDropdown = document.getElementById('yearDrop');
var quartDropdown = document.getElementById('quarterDrop');
var regionDropdown = document.getElementById('regionDrop');

//adds all items in sales
function add(a, b) {
    return a + b;
}

for (i=0; i < dataset.length; i++){
    //custom if with variables for dropdown options
    //replace "" "with dropdown values"
    //need two other conditions
    // if(dataset[i].quarter === 1){}
    if(dataset[i].year === 2013 && dataset[i].region === "South East"){
    // if(dataset[i].quarter === 1 && dataset[i].year === 2013 && dataset[i].region === "South East"){
    // if(dataset[i].region === "South West" && dataset[i].year === 2013){
        salesArray.push(parseInt(dataset[i].sales));
        label.push(dataset[i].regional_manager); // create labels needed for bar graph
        console.log(salesArray);
        var sum = salesArray.reduce(add, 0); //add up all sales in the new array
    }
}

console.log("sum: " + sum);
$(document).ready(function() {
    if (sum != null){ document.getElementById('total-sales').innerHTML = sum; }
    document.getElementById('total-sales').innerHTML = sum;
});

/**************************************************************************************************************/
/******************************************* TABLE FUNCTIONS **************************************************/

//Fill up table with the dataset
function printFullTable(data)
{
    var table = document.getElementById('fullDataSetTable'); //grab table
    for (var i = 0; i < data.length; i++)
    {
        var dataset1= data[i];
        var row = document.createElement('tr'); // create row
        var properties = ['year', 'quarter', 'region', 'regional_manager', 'sales']; //properties for the row

        for (var j = 0; j < properties.length; j++) // append each one of them
        {
            var cell = document.createElement('td'); //names for cell
            cell.innerHTML = dataset1[properties[j]];
            row.appendChild(cell); //append value to cell inthat row
        }
        table.appendChild(row); //add row
    }
}
printFullTable(dataset);

//button print table data
function printTable()
{
   var printTable=document.getElementById("fullDataSetTable");
   openWin= window.open("");
   openWin.document.write(printTable.outerHTML);
   openWin.print();
   openWin.close();
}
//grab button
$('.print-button').on('click',function(){
    printTable();
})

//add filter table option
