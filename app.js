function updateTime() {
    hour = new Date().getHours();
    min = new Date().getMinutes();
    sec = new Date().getSeconds();
if (hour <= 9){
    hour = '0' + hour;
}
if (min <= 9){
    min = '0' + min;
}
if (sec <= 9){
    sec = '0' + sec;
}
    currentTime = hour + ':' + min + ':' + sec;
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(updateTime,1000);
function updateDay() {
     day = new Date().getDay();
      switch(day) {
 case 0 :
 day = 'Sunday';
 break;
 case 1 :
 day = 'Monday';
 break;
 case 2 :
 day = 'Tuesday';
 break;
 case 3 :
 day = 'Wednesday';
 break;
 case 4 :
 day = 'Thursday';
 break;
 case 5 :
 day = 'Friday';
 break;
 case 6 :
 day = 'Saturday';
 break; 
 }
    document.getElementById('day').innerHTML = day
}
setInterval(updateDay,1000)
function updateDate() {
    date = new Date().getDate();
    month = new Date().getMonth();
    year = new Date().getFullYear();
    switch(month) {
 case 0 :
 month = 'Jan';
 break;
 case 1 :
 month = 'Feb';
 break;
 case 2 :
 month = 'March';
 break;
 case 3 :
 month = 'April';
 break;
 case 4 :
 month = 'May';
 break;
 case 5 :
 month = 'June';
 break;
 case 6 :
 month = 'July';
 break;
 case 7 :
 month = 'Aug';
 break;
 case 8 :
 month = 'Sept';
 break;
 case 9 :
 month = 'Oct';
 break;
 case 10 :
 month = 'Nov';
 break;
 case 11 :
 month = 'Dec';
 break;  
} 
currentDate = date + '/' + month + '/' + year
document.getElementById('date').innerHTML = currentDate
}
setInterval(updateDate,1000)
function add() {
    userInput = document.getElementById('task')
    if (userInput.value == '' || userInput.value == ' ') {
        document.getElementById('error').innerHTML = 'Please Enter Some Data.'
    }
    else {
    document.getElementById('error').innerHTML = '';
    list = document.createElement('li');
    var enterData = document.createTextNode(userInput.value);
    list.appendChild(enterData);
    document.getElementById('add').appendChild(list);
    list.className += 'list';
    userInput.value = '';
    del = document.createElement('input');
    del.setAttribute('type','image');
    del.setAttribute('src','del.png');
    del.setAttribute('width','20px');
    del.setAttribute('height','20px');
    del.setAttribute('align','right')
    del.className += 'del';
    list.appendChild(del);
    delItem = document.getElementsByClassName('del');
    for (var i = 0;i<delItem.length;i++){
        delItem[i].onclick = function () {
            this.parentElement.style.display = 'none';
        }
    }
     }
         }
    

    function remove() {
    document.getElementById('add').innerHTML = '';
}
