function updateTime() {
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[now.getDay()];    
    const month = months[now.getMonth()];            
    const date = now.getDate();   
    const year = now.getFullYear();

    const hour = now.getHours(); 
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const period = hour >= 12 ? 'PM' : 'AM';


    const displayHour = hour % 12 || 12;

    document.getElementById('dayname').innerText = day;
    document.getElementById('month').innerText = month;
    document.getElementById('daynum').innerText = date;
    document.getElementById('year').innerText = year;
    document.getElementById('hour').innerText = displayHour < 10 ? '0' + displayHour : displayHour;
    document.getElementById('minutes').innerText = minute < 10 ? '0' + minute : minute;
    document.getElementById('seconds').innerText = second < 10 ? '0' + second : second;
    document.getElementById('period').innerText = period;
}

setInterval(updateTime, 1000);

updateTime();


     function Add() {
    var taskInput = document.getElementById("inputbox");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var list = document.getElementById("list-container");
        var li = document.createElement("li");
        li.textContent = taskText;
        
        li.addEventListener("click", deleteTask);
        
        list.appendChild(li);

        var totalTasksCount = document.getElementById("totalTasksCount");
        totalTasksCount.textContent = parseInt(totalTasksCount.textContent) + 1;
        
        taskInput.value = "";
       }
         }

     function deleteTask(event) {
    var listItem = event.target;
    if (listItem.tagName === "LI") {
        var list = listItem.parentNode;
        list.removeChild(listItem)
      
       var totalTasksCount = document.getElementById("totalTasksCount");
      totalTasksCount.textContent = parseInt(totalTasksCount.textContent) - 1;
    }
    }
     function ClearAll() {
    var listContainer = document.getElementById("list-container");
    listContainer.innerHTML = "";

    var completedContainer = document.getElementById("completed-container");
    completedContainer.innerHTML = "";

    updateTaskCount();
    }

    function DeleteAll() {
    var list = document.getElementById("list-container");
    var completedList = document.getElementById("completed-container");

    list.innerHTML = "";
    completedList.innerHTML = "";

    updateTaskCount();
}


