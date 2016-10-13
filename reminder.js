// medicineTime = "10";

function run(){
medicineTime =  document.getElementById("inputValue").value;
localStorage.setItem("lastalarm",medicineTime);
console.log(medicineTime);
cdtd();
} //  end of function run().



function cdtd() {
 
  	var now = new Date();
var hours = now.getHours();
var audio = new Audio('clock.mp3');
alarm = localStorage.getItem("lastalarm");
// console.log(hours);
if(alarm==hours) {
var string =  "Hey It is " +alarm+ " Please, remember to eat your medicines.";

             
document.getElementById("clockDiv").innerHTML =string;
audio.play();
}

else{
  document.getElementById("clockDiv").innerHTML = "Hi.....";
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




 



