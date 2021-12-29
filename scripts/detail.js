var perPrice = 1000;
var numberAdults = document.getElementById("numOfAdults");
var totalBox = document.getElementById("total");
var oneday =  (1000 * 3600 * 24);
var fromDate = document.getElementById("fromDate");
var toDate = document.getElementById("toDate");
// getting the current time and date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

// function to disable previous dates and only show dates from the current day onwards
function disableSomeDates(){
  fromDate.setAttribute('min',today);
  toDate.setAttribute('min',today);
  console.log(today);
}
disableSomeDates();

// on updation of the number of adults input field ->
numberAdults.oninput = function calculateTotal(){
  var date1 = new Date(fromDate.value);
  var date2 = new Date(toDate.value);
  var diffDays = (date2.getTime() - date1.getTime()) / oneday;
  var total = numberAdults.value * perPrice * diffDays;
  totalBox.value = "Rs. "+total;
  console.log(total+" "+ diffDays+ " "+date1.getTime()+" "+date2.getTime()+ " "+numberAdults.value+ " "+perPrice);
}