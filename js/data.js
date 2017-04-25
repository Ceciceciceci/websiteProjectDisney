
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
//add filter table option (extra use case)

//array variables
//for total sales for quarter
var totalSalesArray=[];
var totalSalesArray2013=[];
var totalSalesArray2014=[];
var quarterTotalSales=[];
var quarter1Total=[], quarter2Total=[], quarter3Total=[], quarter4Total=[],quarter5Total=[],quarter6Total=[],quarter7Total=[],quarter8Total=[];

//for total sales per region
var totalRegionArray=[];
var totalRegionArray2013=[];
var totalRegionArray2014=[];
var regionTotalSales=[];
var seTotal=[],swTotal=[],neTotal=[],nwTotal=[],se2Total=[],sw2Total=[],ne2Total=[],nw2Total=[];

//for total sales per manager
var totalManagerArray=[];
var totalManagerArray2013=[];
var totalManagerArray2014=[];
var managerTotalSales=[];
var johnTotal=[],leoTotal=[], paulTotal=[], georgeTotal=[], michelTotal=[], ringoTotal=[],raphaelTotal=[],donaTotal=[];

//for labels
var label=[];

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
        //quarter
        if(dataset[i].quarter === 1){
            quarter1Total.push(parseInt(dataset[i].sales));
            // console.log("Quarter 1: " + quarter1Total);
            var sum1 = quarter1Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 2){
            quarter2Total.push(parseInt(dataset[i].sales));
            // console.log("Quarter 2: " + quarter2Total);
            var sum2 = quarter2Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 3){
            quarter3Total.push(parseInt(dataset[i].sales));
            // console.log("Quarter 3: " + quarter3Total);
            var sum3 = quarter3Total.reduce(add, 0);
        }
        else{
            quarter4Total.push(parseInt(dataset[i].sales));
            // console.log("Quarter 4: " + quarter4Total);
            var sum4 = quarter4Total.reduce(add, 0);
        }

        //region
        if (dataset[i].region === "South East"){
            seTotal.push(parseInt(dataset[i].sales));
            console.log("SouthEast " + swTotal);
            var sumr1 = seTotal.reduce(add, 0);
        }
        else if(dataset[i].region === "South West"){
            swTotal.push(parseInt(dataset[i].sales));
            console.log("SouthWest " + swTotal);
            var sumr2 = swTotal.reduce(add, 0);
        }
        else if(dataset[i].region === "North East"){
            neTotal.push(parseInt(dataset[i].sales));
            console.log("NorthEast " + quarter3Total);
            var sumr3 = neTotal.reduce(add, 0);
        }
        else{
            nwTotal.push(parseInt(dataset[i].sales));
            console.log("NorthWest " + quarter4Total);
            var sumr4 = nwTotal.reduce(add, 0);
        }

        //manager total: john, leo, paul, george, michaelangelo, ringo, raphael
        switch (dataset[i].regional_manager) {
            case "John":
                johnTotal.push(parseInt(dataset[i].sales));
                var summ1 = johnTotal.reduce(add, 0);
                break;
            case "Leonardo":
                leoTotal.push(parseInt(dataset[i].sales));
                var summ2 = leoTotal.reduce(add, 0);
                break;
            case "Paul":
                paulTotal.push(parseInt(dataset[i].sales));
                var summ3 = paulTotal.reduce(add, 0);
                break;
            case "George":
                georgeTotal.push(parseInt(dataset[i].sales));
                var summ4 = georgeTotal.reduce(add, 0);
                break;
            case "Michelangelo":
                michelTotal.push(parseInt(dataset[i].sales));
                var summ5 = michelTotal.reduce(add, 0);
                break;
            case "Ringo":
                ringoTotal.push(parseInt(dataset[i].sales));
                var summ6 = ringoTotal.reduce(add, 0);
                break;
            case "Raphael":
                raphaelTotal.push(parseInt(dataset[i].sales));
                var summ7 = raphaelTotal.reduce(add, 0);
                break;
            case "Donatello":
                donaTotal.push(parseInt(dataset[i].sales));
                var summ8 = donaTotal.reduce(add, 0);
                break;
        }
        //total
        totalSalesArray2013 = [sum1, sum2, sum3, sum4];
        totalRegionArray2013=[sumr1, sumr2, sumr3, sumr4];
        totalManagerArray2013 = [summ1,summ2,summ3,summ4,summ5,summ6,summ7,summ8];
        console.log("totalSalesArray2013: " + totalSalesArray2013);
        var sum2013 = totalSalesArray2013.reduce(add, 0);
        var sumRegion2013 = totalRegionArray2013.reduce(add, 0);

    //2014
    } else if (dataset[i].year === 2014){
        //quarter
        if(dataset[i].quarter === 1){
            quarter5Total.push(parseInt(dataset[i].sales));
            // console.log("Quarter 1: " +quarter1Total);
            var sum5 = quarter5Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 2){
            quarter6Total.push(parseInt(dataset[i].sales));
            // console.log("Quarter 2: " +quarter2Total);
            var sum6 = quarter6Total.reduce(add, 0);
        }
        else if(dataset[i].quarter === 3){
            quarter7Total.push(parseInt(dataset[i].sales));
            // console.log("Quarter 3: " + quarter3Total);
            var sum7 = quarter7Total.reduce(add, 0);
        }
        else{
            quarter8Total.push(parseInt(dataset[i].sales));
            // console.log("Quarter 4: " + quarter4Total);
            var sum8 = quarter8Total.reduce(add, 0);
        }

        //region
        if (dataset[i].region === "South East"){
            se2Total.push(parseInt(dataset[i].sales));
            console.log("SouthWest " + swTotal);
            var sumr5 = se2Total.reduce(add, 0);
        }
        else if(dataset[i].region === "South West"){
            sw2Total.push(parseInt(dataset[i].sales));
            console.log("SouthWest " + swTotal);
            var sumr6 = sw2Total.reduce(add, 0);
        }
        else if(dataset[i].region === "North East"){
            ne2Total.push(parseInt(dataset[i].sales));
            console.log("NorthEast " + quarter3Total);
            var sumr7 = ne2Total.reduce(add, 0);
        }
        else{
            nw2Total.push(parseInt(dataset[i].sales));
            console.log("NorthWest " + quarter4Total);
            var sumr8 = nw2Total.reduce(add, 0);
        }

        //Manager total: leo, donatello, paul, michaelangelo, raphael
        switch (dataset[i].regional_manager) {
            case "John":
                johnTotal.push(parseInt(dataset[i].sales));
                var summ1b = johnTotal.reduce(add, 0);
                break;
            case "Leonardo":
                leoTotal.push(parseInt(dataset[i].sales));
                var summ2b = leoTotal.reduce(add, 0);
                break;
            case "Paul":
                paulTotal.push(parseInt(dataset[i].sales));
                var summ3b = paulTotal.reduce(add, 0);
                break;
            case "George":
                georgeTotal.push(parseInt(dataset[i].sales));
                var summ4b = georgeTotal.reduce(add, 0);
                break;
            case "Michelangelo":
                michelTotal.push(parseInt(dataset[i].sales));
                var summ5b = michelTotal.reduce(add, 0);
                break;
            case "Ringo":
                ringoTotal.push(parseInt(dataset[i].sales));
                var summ6b = ringoTotal.reduce(add, 0);
                break;
            case "Raphael":
                raphaelTotal.push(parseInt(dataset[i].sales));
                var summ7b = raphaelTotal.reduce(add, 0);
                break;
            case "Donatello":
                donaTotal.push(parseInt(dataset[i].sales));
                var summ8b = donaTotal.reduce(add, 0);
                break;
        }

        //total
        totalSalesArray2014 = [sum5, sum6, sum7, sum8];
        totalRegionArray2014 = [sumr5, sumr6, sumr7, sumr8];
        totalManagerArray2014 = [summ1b,summ2b,summ3b,summ4b,summ5b,summ6b,summ7b,summ8b];
        console.log("totalSalesArray2014: " + totalSalesArray2013);
        var sum2014 = totalSalesArray2014.reduce(add, 0);
        var sumRegion2014 = totalRegionArray2014.reduce(add, 0);
    }

    //END OF TOTAL SALES PER Quarter
    var totalSum = sum2013 + sum2014;
}
console.log("sum: " + totalSum);


//post the total onto the total sales panel
$(document).ready(function() {
    document.getElementById('total-sales').innerHTML = sum2013;
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
