

function run(){
medicineTime =  document.getElementById("inputValue").value;
localStorage.setItem("lastalarm",medicineTime);
console.log(medicineTime);
medicineString =  document.getElementById("prescriptionValue").value;
 medicineString = "<br />"+ medicineString; 
localStorage.setItem("prescrip", medicineString);
console.log(medicineString);

cdtd();
} //  end of function run().

/*
function changePrescription(){
 medicineString =  document.getElementById("prescriptionValue").value;
 medicineString = "<br />"+ medicineString; 
localStorage.setItem("prescrip", medicineString);
console.log(medicineString);
 cdtd();
}
*/

function cdtd() {
  
  	var now = new Date();
var hours = now.getHours();
var audio = new Audio('clock.mp3');
alarm = localStorage.getItem("lastalarm");
if(alarm < 13) alarmString = alarm+" am. ";
else alarmString = alarm+" pm. ";
prescription = localStorage.getItem("prescrip");
// console.log(hours);

if(alarm==hours) {
var string =  "Hey! It is " +alarmString+ "<br \> Please, remember to eat your medicines." + prescription;

             
document.getElementById("clockDiv").innerHTML =string;

audio.play();
}

else{
  document.getElementById("clockDiv").innerHTML = "Hi! Your next scheduled medicine time is " + alarmString;
}
}
cdtd();






// Drop down punjiri screen

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


function slideOpen(el){
el.style= "-webkit-transition: height 0.5s ease-in 0s";
el.style.height="250px";
el.style.visibility="visible";
}

function slideClose(el){
el.style.transition="height 1.0s linear 0s";
el.style.height="0px";
el.style.border="none";
}







 



