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
    days_rows.style = "list-style: none;position: relative;display: flex;margin-bottom: 20px;font-weight: bold;font-size: 1.2rem;"
    var first_sep = document.createElement("li")
    first_sep.style = "content: '';position: absolute;right: 0;height: 510px;border-right: 1px solid lightgrey;"
        
    days.forEach(function(day) {
        var day_wrapper = document.createElement("li")
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
    chart_wrapper.appendChild(tasks)
    this.chart_setup = chart_wrapper
    this.tasks_list = tasks
    this.taskCounter = 0;
    
}


gitGantt.prototype = {
    addTask: function(){

    },
    editTask: function(){

    },
    deleteTask: function(){

    },
    changeTheme: function(){

    },
}



