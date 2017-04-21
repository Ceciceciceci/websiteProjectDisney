
var dataset1 = [41291,56778,12345,45678];
var sum = dataset1.reduce(add, 0);
function add(a, b) {
    return a + b;
}
console.log(sum);
$(document).ready(function() {
  if (sum != null){ document.getElementById('total-sales').innerHTML = sum; }
  document.getElementById('total-sales').innerHTML = sum;
});
