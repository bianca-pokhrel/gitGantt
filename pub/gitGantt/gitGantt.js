"use strict";

// given a new gantt chart instance with parameters, create the gantt chart and in a separate js file, inject into the HTML
// need a list of tasks, and their start end time... so maybe in a JSON format? 
// Keys are tasks and their values are their start/end time?



function gitGantt() {
    //the constructor should just create an empty gantt chart with height/width specs provided by dev. 
    //the columns for the days of the week should be already there- just no tasks

    //this.width = width;
    //this.height = height;

    var tasks = document.createElement("ul")
    tasks.id = "tasks-list"// can do this in add task though... don't need that in the constructor

    
    let  days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
    var chart_wrapper = document.createElement("div")
    chart_wrapper.style = "max-width: 1150px;padding: 0 10px;margin: 0 auto;background: #f5f7f8;font-size: 16px;font-family: didot;padding-top: 40px; box-sizing: border-box;"
    var days_rows = document.createElement("ul")
    days_rows.id = "days-of-week"
    days_rows.style = "list-style: none;position: relative;display: flex;margin-bottom: 20px;font-weight: bold;font-size: 1.2rem;"
    var first_sep = document.createElement("li")
    first_sep.style = "content: '';position: absolute;right: 0;height: 100%;border-right: 1px solid lightgrey;"
        
    days.forEach(function(day) {
        var day_wrapper = document.createElement("li")
        day_wrapper.id = day
        day_wrapper.style = "flex: 1;min-width: 80px;text-align: center; position: relative;"
        var day_sep = document.createElement("li")
        day_sep.style = "content: '';position: absolute;right: 0;height: 100%;border-right: 1px solid lightgrey;"
        day_wrapper.appendChild(document.createTextNode(day))
        days_rows.appendChild(day_wrapper)
        day_wrapper.appendChild(day_sep)
        
    })
    days_rows.lastElementChild.removeChild(days_rows.lastElementChild.lastElementChild)
    chart_wrapper.appendChild(days_rows)
    chart_wrapper.lastElementChild.lastElementChild.style = "flex: 1;min-width: 80px;text-align: center;"
    //chart_wrapper.lastChild.style = "flex: 1;min-width: 80px;text-align: center;"
    this.tasks = tasks
    chart_wrapper.appendChild(this.tasks)
    console.log(this.tasks)
    this.chart_setup = chart_wrapper
    console.log(this.tasks)
    this.taskCounter = 0;

    
    
}


gitGantt.prototype = {
    addTask: function(duration, taskName){
        if (duration !=undefined && taskName !=undefined){
            var newTask = document.createElement("li")
            newTask.setAttribute("duration", duration)
            newTask.setAttribute("taskName", taskName)
            newTask.id = this.taskCounter
            newTask.style = "list-style: none;position: relative;color: #fff);margin-bottom: 15px;font-size: 16px;border-radius: 20px;padding: 10px 20px;width: 0;opacity: 0;transition: all 0.65s linear 0.2s;"
            console.log(newTask)
            var dur_split = duration.split("-")
            let days_ul = document.getElementById("days-of-week").childNodes
            let days_arr = [...days_ul]
            const startDay = dur_split[0];
            const endDay = dur_split[1];
            console.log(startDay.slice(0,-1))
            let left = 0,
            width = 0;
    
            if (startDay.endsWith("1")) {
                const find_corrDay = days_arr.filter(day => day.textContent == startDay.slice(0, -1));
                left = find_corrDay[0].offsetLeft ;
                console.log(find_corrDay)
            } else {
                const find_corrDay = days_arr.filter(day => day.textContent == startDay);
                // like above, this is so nuanced because I added grid lines as list items
                left = find_corrDay[0].offsetLeft - find_corrDay[0].offsetWidth / 2 + find_corrDay[0].offsetWidth / 4;
                console.log(find_corrDay)
            }
    
            if (endDay.endsWith("1")) {
                const find_corrDay = days_arr.filter(day => day.textContent == endDay.slice(0, -1));
                width = find_corrDay[0].offsetLeft - find_corrDay[0].offsetWidth*2;
                console.log(find_corrDay)
            } else {
                const find_corrDay = days_arr.filter(day => day.textContent == endDay);
                width = find_corrDay[0].offsetLeft;
                console.log(find_corrDay)
            }

            newTask.style.left = `${left}px`;
            newTask.style.width = `${width}px`;
            newTask.style.backgroundColor = "#bdfff8";
            newTask.style.opacity = 1;
            newTask.appendChild(document.createTextNode(taskName))
            newTask.childNodes[0].style = "font-fill: white;"
            this.tasks.appendChild(newTask)
            console.log(this.tasks)
            this.taskCounter ++;
        }
        
    },
    editTask: function(taskToEdit, newDuration, newName){
        // here you can edit a duration or give a task a new name or both
        var task_edit = document.getElementById(taskToEdit)
        if (newName != undefined) {
            task_edit.childNodes[0].textContent = newName
            console.log(task_edit.childNodes[0])
        }
        if (newDuration != undefined){
            task_edit.setAttribute("duration", newDuration)
            rerenderTasks()
        }
    },
    deleteTask: function(taskToDelete){
        var task_item = this.tasks.childNodes
        console.log(task_item)
        var id_num = -1
        task_item.forEach( function(taskdel){
            id_num = taskdel.getAttribute("id")
            if (taskToDelete == id_num){
                id_num = taskToDelete
            }
        })
        this.tasks.removeChild(this.tasks.childNodes[id_num])


    },
    changeTheme: function(theme){
        // theme is one of the 3 options other than the default theme
        if (theme == "default"){
            var change_back = this.chart_setup
            change_back.style= "max-width: 1150px;padding: 0 10px;margin: 0 auto;background: #f5f7f8;font-size: 16px;font-family: didot;padding-top: 40px; box-sizing: border-box;"
            var change_box = this.tasks.childNodes
            change_box.forEach(function(colours){
                colours.style.backgroundColor = "#bdfff8"
            })
        }
        else if (theme == "summer day") {
            var change_back = this.chart_setup
            change_back.style= "max-width: 1150px;padding: 0 10px;margin: 0 auto;background: #e6ebff;font-size: 16px;font-family: didot;padding-top: 40px; box-sizing: border-box;"
            var change_box = this.tasks.childNodes
            change_box.forEach(function(colours){
                colours.style.backgroundColor = "#ffea2b"
            })
        }
        else if (theme == "autumn morning"){
            var change_back = this.chart_setup
            change_back.style= "max-width: 1150px;padding: 0 10px;margin: 0 auto;background: #95ba99;font-size: 16px;font-family: didot;padding-top: 40px; box-sizing: border-box;"
            var change_box = this.tasks.childNodes
            change_box.forEach(function(colours){
                colours.style.backgroundColor = "#821e1e"
            })
        }
        else if (theme == "winter night"){
            var change_back = this.chart_setup
            change_back.style= "max-width: 1150px;padding: 0 10px;margin: 0 auto;background: #1a1c73;font-size: 16px;font-family: didot;padding-top: 40px; box-sizing: border-box;"
            var change_box = this.tasks.childNodes
            change_box.forEach(function(colours){
                colours.style.backgroundColor = "#9b9cc2"
            })
        }
    },
}

function rerenderTasks() {
    console.log(this.tasks)
    var all_tasks = this.tasks.childNodes
    console.log(all_tasks)
    console.log(all_tasks.childNodes)
    all_tasks.forEach(function(tasks) {
        var duration = tasks.getAttribute("duration")
        var dur_split = duration.split("-")
        let days_ul = document.getElementById("days-of-week").childNodes
        let days_arr = [...days_ul]
        const startDay = dur_split[0];
        const endDay = dur_split[1];
        console.log(startDay.slice(0,-1))
        let left = 0,
        width=0

    
        if (startDay.endsWith("1")) {
            const find_corrDay = days_arr.filter(day => day.textContent == startDay.slice(0, -1));
            left = find_corrDay[0].offsetLeft ;
            console.log(find_corrDay)
        } else {
            const find_corrDay = days_arr.filter(day => day.textContent == startDay);
            // like above, this is so nuanced because I added grid lines as list items
            left = find_corrDay[0].offsetLeft - find_corrDay[0].offsetWidth / 2 + find_corrDay[0].offsetWidth / 4;
            console.log(find_corrDay)
        }

        if (endDay.endsWith("1")) {
            const find_corrDay = days_arr.filter(day => day.textContent == endDay.slice(0, -1));
            width = find_corrDay[0].offsetLeft - find_corrDay[0].offsetWidth*2;
            console.log(find_corrDay)
        } else {
            const find_corrDay = days_arr.filter(day => day.textContent == endDay);
            width = find_corrDay[0].offsetLeft;
            console.log(find_corrDay)
        }

        tasks.style.left = `${left}px`;
        tasks.style.width = `${width}px`;
        tasks.style.opacity = 1;

    })
}

//window.addEventListener("load", rerenderTasks)
//window.addEventListener("resize", rerenderTasks)