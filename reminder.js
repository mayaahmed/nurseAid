var schedulesArray = [];

function init(){
  if(localStorage.savedSchedules){
    schedulesArray = JSON.parse(localStorage.savedSchedules);
    for(var i=0; i<  schedulesArray.length; i++){
      insertNewSchedule(i+1, schedulesArray[i].time, schedulesArray[i].list);
    } 
  }
  ringAlarm();
  }


function clearAll(){

  if (confirm("Are you sure you want to delete all data?") == true) {
         localStorage.clear();
         var table = document.getElementById("scheduleTable");
         for(var i = table. rows. length - 1; i > 0; i--)
           {
             table. deleteRow(i);
           }
  } 
}


function deleteCell(){

  if (confirm("Are you sure you want to delete an entry?") == true) {
 var index =   prompt("Enter index of entry you want to delete: ");
  var table = document.getElementById("scheduleTable");
  table. deleteRow(index);
schedulesArray.splice(index-1, 1);
localStorage.savedSchedules = JSON.stringify(schedulesArray);
  } 
}

 
function run(){

var medicineTime =  document.getElementById("inputValue").value;
var medicineList= document.getElementById("prescriptionValue").value;

var scheduleObj = {time:medicineTime, list:medicineList};
schedulesArray.push(scheduleObj);
localStorage.savedSchedules = JSON.stringify(schedulesArray);
console.log(schedulesArray);
insertNewSchedule(schedulesArray.length, medicineTime, medicineList);
}

function insertNewSchedule(n, time, list){
  var table = document.getElementById("scheduleTable");
 var row = table.insertRow();
  var cellIndex = row.insertCell(0);
    var cellTime = row.insertCell(1);
    var cellList = row.insertCell(2);
    cellIndex.innerHTML = n;
    cellTime.innerHTML = time;
    cellList.innerHTML = list;
}

function editIndex(){
  var n = document.getElementById("editNumber").value;
var v = document.getElementById("editValue").value;

 schedulesArray[n-1].time=v;
 var table = document.getElementById("scheduleTable");
 table.rows[n].cells[0].innerHTML=n;
 table.rows[n].cells[1].innerHTML=v;

localStorage.savedSchedules = JSON.stringify(schedulesArray);
}




function editList(){
  var n = document.getElementById("editNumber").value;

var t = document.getElementById("editprescriptionValue").value;
console.log(n);
console.log(t);

 schedulesArray[n-1].list=t;
 var table = document.getElementById("scheduleTable");
 table.rows[n].cells[0].innerHTML=n;

table.rows[n].cells[2].innerHTML=t;
localStorage.savedSchedules = JSON.stringify(schedulesArray);
}




function ringAlarm() {
  var now = new Date();
  var hours = now.getHours();
  var audio = new Audio('clock.mp3');
  console.log(hours);

  if(hours < 13) timeString = hours+" am. ";
  else{
    tempString = hours-12;
    timeString = tempString+" pm. ";
  }

  for(var i=0; i<  schedulesArray.length; i++){
console.log(schedulesArray[i].time);
    if(hours == schedulesArray[i].time) {
     
      document.getElementById("messageDiv").innerHTML ="Eat your Medicines. It is " + now+".";
             audio.play();
  }

}
}

 setTimeout('ringAlarm()',600000);

// Drop down punjiri screen

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


function slideOpen(el){
el.style= "-webkit-transition: height 0.5s ease-in 0s";
el.style.height="300px";
el.style.visibility="visible";
}

function slideClose(el){
el.style.transition="height 1.0s linear 0s";
el.style.height="0px";
el.style.border="none";
}



function slideOpen2(el){
el.style= "-webkit-transition: height 0.5s ease-in 0s";
el.style.height="700px";
el.style.visibility="visible";
}

 



