"use strict";

var emptyGantt = new gitGantt();
console.log(emptyGantt)
document.querySelector('#gantt-chart').appendChild(emptyGantt.chart_setup)



var addingTasksGantt = new gitGantt();
console.log(addingTasksGantt)
document.querySelector('#adding-tasks').appendChild(addingTasksGantt.chart_setup)
addingTasksGantt.addTask('mon-wed', "Work on final report for BCB430")
addingTasksGantt.addTask('mon-wed', "Finish JavaScript library")
addingTasksGantt.addTask('tue1-thu1', "Work on documentation for JavaScript library")


var summerTasksGantt = new gitGantt();
console.log(summerTasksGantt)
document.querySelector('#summer-day-theme').appendChild(summerTasksGantt.chart_setup)
summerTasksGantt.addTask('mon-wed', "Work on final report for BCB430")
summerTasksGantt.addTask('mon-wed', "Finish JavaScript library")
summerTasksGantt.addTask('tue1-thu1', "Work on documentation for JavaScript library")
summerTasksGantt.changeTheme("summer day")

var autumnTasksGantt = new gitGantt();
console.log(autumnTasksGantt)
document.querySelector('#autumn-morning-theme').appendChild(autumnTasksGantt.chart_setup)
autumnTasksGantt.addTask('mon-wed', "Work on final report for BCB430")
autumnTasksGantt.addTask('mon-wed', "Finish JavaScript library")
autumnTasksGantt.addTask('tue1-thu1', "Work on documentation for JavaScript library")
autumnTasksGantt.changeTheme("autumn morning")

var winterTasksGantt = new gitGantt();
console.log(winterTasksGantt)
document.querySelector('#winter-night-theme').appendChild(winterTasksGantt.chart_setup)
winterTasksGantt.addTask('mon-wed', "Work on final report for BCB430")
winterTasksGantt.addTask('mon-wed', "Finish JavaScript library")
winterTasksGantt.addTask('tue1-thu1', "Work on documentation for JavaScript library")
winterTasksGantt.changeTheme("winter night")