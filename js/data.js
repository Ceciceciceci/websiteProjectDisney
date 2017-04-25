
//JS File for datasetreport.html
//Data set given to sort and graph
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
     "year": 2014, "quarter": 2, "region": "North West", "regional_manager": "Raphael", "sales": "16454.00"
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
var totalSalesArray=[];
var totalSalesArray2013=[];
var totalSalesArray2014=[];
var quarterTotalSales=[];
var regionTotalSales=[];
var quarter1Total=[];
var quarter2Total=[];
var quarter3Total=[];
var quarter4Total=[];
var quarter5Total=[];
var quarter6Total=[];
var quarter7Total=[];
var quarter8Total=[];
var label=[];
var label2=[];

//ID elements needed for year, quarter, and region
var yearDropdown = document.getElementById('yearDrop');
var quartDropdown = document.getElementById('quarterDrop');
var regionDropdown = document.getElementById('regionDrop');

//adds all items in sales
function add(a, b) {
    return a + b;
}

/**************************************************************************************************************/
/******************************************* GRAPH FUNCTIONS **************************************************/
/*********************** Sorts the data and adds the sum for different Graphs *********************************/

for (i=0; i < dataset.length; i++){
    //custom if with variables for dropdown options
    //replace "" "with dropdown values"
    //need two other conditions
    // if(dataset[i].quarter === 1){}
    // if(dataset[i].quarter === 1 && dataset[i].year === 2013 && dataset[i].region === "South East"){
    // if(dataset[i].region === "South West" && dataset[i].year === 2013);

    //For Total Sales per Quarter in a Year
    if(dataset[i].year === 2013){
        if(dataset[i].quarter === 1){
            quarter1Total.push(parseInt(dataset[i].sales));
            console.log("Quarter 1: " + quarter1Total);
            var sum1 = quarter1Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 2){
            quarter2Total.push(parseInt(dataset[i].sales));
            console.log("Quarter 2: " + quarter2Total);
            var sum2 = quarter2Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 3){
            quarter3Total.push(parseInt(dataset[i].sales));
            console.log("Quarter 3: " + quarter3Total);
            var sum3 = quarter3Total.reduce(add, 0);
        }
        else{
            quarter4Total.push(parseInt(dataset[i].sales));
            console.log("Quarter 4: " + quarter4Total);
            var sum4 = quarter4Total.reduce(add, 0);
        }

        totalSalesArray2013 = [sum1, sum2, sum3, sum4];
        // totalSalesArray2013.push(parseInt(dataset[i].sales));
        console.log("totalSalesArray2013: " + totalSalesArray2013);
        var sum2013 = totalSalesArray2013.reduce(add, 0); //add up all sales in the new array

  //2014
    } else if (dataset[i].year === 2014){
        // totalSalesArray2014.push(parseInt(dataset[i].sales));
        if(dataset[i].quarter === 1){
            quarter5Total.push(parseInt(dataset[i].sales));
            console.log("Quarter 1: " +quarter1Total);
            var sum5 = quarter5Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 2){
            quarter6Total.push(parseInt(dataset[i].sales));
            console.log("Quarter 2: " +quarter2Total);
            var sum6 = quarter6Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 3){
            quarter7Total.push(parseInt(dataset[i].sales));
            console.log("Quarter 3: " + quarter3Total);
            var sum7 = quarter7Total.reduce(add, 0);
        }
        else{
            quarter8Total.push(parseInt(dataset[i].sales));
            console.log("Quarter 4: " + quarter4Total);
            var sum8 = quarter8Total.reduce(add, 0);
        }

        totalSalesArray2014 = [sum5, sum6, sum7, sum8];
        console.log("totalSalesArray2014: " + totalSalesArray2013);
        var sum2014 = totalSalesArray2014.reduce(add, 0);
    }

    //END OF TOTAL SALES PER Quarter

    var totalSum = sum2013 + sum2014;
    console.log("totalSum: " +  totalSum);
}
console.log("sum: " + totalSum);


//post the total onto the total sales panel
$(document).ready(function() {
    document.getElementById('total-sales').innerHTML = totalSum;
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
