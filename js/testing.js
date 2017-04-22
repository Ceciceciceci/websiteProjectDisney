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
     "year": 2013, "quarter": 1, "region": "North West", "regional_manager": "ringo", "sales": "22486.00"
   },
   {
     "year": 2013, "quarter": 2, "region": "North West", "regional_manager": "raphael", "sales": "18383.00"
   },
   {
     "year": 2013, "quarter": 3, "region": "North West", "regional_manager": "raphael", "sales": "19190.00"
   },
   {
     "year": 2013, "quarter": 4, "region": "North West", "regional_manager": "raphael", "sales": "21011.00"
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
     "year": 2014, "quarter": 1, "region": "North West", "regional_manager": "raphael", "sales": "15282.00"
   },
   {
     "year": 2014, "quarter": 2, "region": "North West", "regional_manager": "raphael", "sales": "1645400"
   },
   {
     "year": 2014, "quarter": 3, "region": "North West", "regional_manager": "raphael", "sales": "19653.00"
   },
   {
     "year": 2014, "quarter": 4, "region": "North West", "regional_manager": "raphael", "sales": "10284.00"
   }
]

// console.log(dataset);
// console.log(dataset[1].sales);

// $(document).ready(function() {
     var result  ="";
     for (i = 0; i < dataset.length; i++){
       if (dataset[i].regional_manager === "John"){
         result += dataset[i].sales+ '\n';
       }
     }
     console.log(result);
     document.getElementById('animal-info').innerHTML =result;
// });


//
// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'dataset.json');
// ourRequest.onload = function(){
//    console.log(ourRequest.responseText);
//    var ourData = ourRequest.responseText;
//    var ourData = JSON.parse(ourRequest.responseText);
// };
// ourRequest.send();
//
//
// $.getJSON('dataset.json', function (data){
//     console.log("It worked.");
// });
//
// $.ajax({
//     url: 'dataset.json',
//     dataType: 'jsonp',
//     type: 'get',
//     cache: false,
//     success: function(data){
//        $(data.dataset).each(function(index, value){
//           console.log('It worked!');
//        });
//     }
// });
