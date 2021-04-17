"use strict";

// given a new gantt chart instance with parameters, create the gantt chart and in a separate js file, inject into the HTML
// need a list of tasks, and their start end time... so maybe in a JSON format? 
// Keys are tasks and their values are their start/end time?
// can do this in add task though... don't need that in the constructor
function gitGantt() {
    //the constructor should just create an empty gantt chart with height/width specs provided by dev. 
    //the columns for the days of the week should be already there- just no tasks

    //this.width = width;
    //this.height = height;
    
    let  days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
    var chart_wrapper = document.createElement("div")
    chart_wrapper.style = "max-width: 1150px;padding: 0 10px;margin: 0 auto;background: #f5f7f8;font-size: 16px;font-family: sans-serif;padding-top: 40px; box-sizing: border-box;"
    var days_rows = document.createElement("ul")
    days_rows.id = "days-of-week"
    days_rows.style = "list-style: none;position: relative;display: flex;margin-bottom: 20px;font-weight: bold;font-size: 1.2rem;"
    var first_sep = document.createElement("li")
    first_sep.style = "content: '';position: absolute;right: 0;height: 510px;border-right: 1px solid lightgrey;"
        
    days.forEach(function(day) {
        var day_wrapper = document.createElement("li")
        day_wrapper.id = day
        day_wrapper.style = "flex: 1;min-width: 80px;text-align: center; position: relative;"
        var day_sep = document.createElement("li")
        day_sep.style = "content: '';position: absolute;right: 0;height: 510px;border-right: 1px solid lightgrey;"
        day_wrapper.appendChild(document.createTextNode(day))
        days_rows.appendChild(day_wrapper)
        day_wrapper.appendChild(day_sep)
        
    })
    days_rows.lastElementChild.removeChild(days_rows.lastElementChild.lastElementChild)
    chart_wrapper.appendChild(days_rows)
    chart_wrapper.lastElementChild.lastElementChild.style = "flex: 1;min-width: 80px;text-align: center;"
    //chart_wrapper.lastChild.style = "flex: 1;min-width: 80px;text-align: center;"
    var tasks = document.createElement("ul")
    tasks.id = "tasks-list"
    chart_wrapper.appendChild(tasks)
    this.chart_setup = chart_wrapper
    this.tasks_list = tasks
    console.log(this.tasks_list)
    this.taskCounter = 0;

    
    
}


gitGantt.prototype = {
    addTask: function(duration, taskName){
        var newTask = document.createElement("li")
        newTask.setAttribute("duration", duration)
        newTask.setAttribute("taskName", taskName)
        newTask.id = this.taskCounter
        newTask.style = "position: relative;color: #fff);margin-bottom: 15px;font-size: 16px;border-radius: 20px;padding: 10px 20px;width: 0;opacity: 0;transition: all 0.65s linear 0.2s;"
        console.log(newTask)
        var dur_split = duration.split("-")
        let days_ul = document.getElementById("days-of-week").childNodes
        let days_arr = [...days_ul]
        const startDay = dur_split[0];
        const endDay = dur_split[1];
        console.log(startDay.slice(0,-2))
        let left = 0,
        width = 0;
  
        if (startDay.endsWith("½")) {
        const filteredArray = days_arr.filter(day => day.textContent == startDay.slice(0, -2));
        left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
        console.log(filteredArray)
        } else {
        const filteredArray = days_arr.filter(day => day.textContent == startDay);
        left = filteredArray[0].offsetLeft;
        }
  
        if (endDay.endsWith("½")) {
            const filteredArray = days_arr.filter(day => day.textContent == endDay.slice(0, -2));
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
        } else {
            const filteredArray = days_arr.filter(day => day.textContent == endDay);
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
        }

        newTask.style.left = `${left}px`;
        newTask.style.width = `${width}px`;
        newTask.style.backgroundColor = "blue";
        newTask.style.opacity = 1;
        newTask.appendChild(document.createTextNode(taskName))
        newTask.childNodes[0].style = "font-fill: white;"
        this.tasks_list.appendChild(newTask)
        console.log(document.getElementById("tasks-list"))
        this.taskCounter ++;
        
        
    },
    editTask: function(){
        
    },
    deleteTask: function(taskToDelete){
        var task_item = document.getElementById(taskToDelete)
        task_item.remove()

    },
    changeTheme: function(){

    },
}



//window.addEventListener("load", gitGantt)
window.addEventListener("resize", gitGantt)