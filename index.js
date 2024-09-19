
function calculateTip(){
  // store the data of the input 

  var billAmount = parseFloat(document.getElementById("billAmount").value);
  var serviceQuality = parseFloat(document.getElementById("serviceQuality").value);
  var numPeople = parseFloat(document.getElementById("totalPeople").value);
// Quick validation

if (billAmount === 0 || serviceQuality == 0){
  alert("Please insert some value");
  return; //To stop the function from running
  } 
// check if the input is less than or equal to 1
if (isNaN(numPeople)|| numPeople <= 1 ){
    numPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // The calculation
  var total = (billAmount * serviceQuality)/ numPeople;
  
  // Display the result

document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total.toFixed(2);
}


// Hide the tip amount on load 

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// clicking the button calls our custom function 
document.getElementById("calculate").onclick = function (){
calculateTip();
};