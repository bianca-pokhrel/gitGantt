"use strict";

var emptyGantt = new gitGantt();
console.log(emptyGantt)
document.querySelector('#gantt-chart').appendChild(emptyGantt.chart_setup)



var addingTasksGantt = new gitGantt();
console.log(addingTasksGantt)
document.querySelector('#adding-tasks').appendChild(addingTasksGantt.chart_setup)
addingTasksGantt.addTask('mon-wed', "Work on final report for BCB430")
addingTasksGantt.addTask('thu-sat', "Finish JavaScript library")
addingTasksGantt.addTask('tue1-thu1', "Work on documentation for JavaScript library")
addingTasksGantt.changeTheme("winter night")
console.log(addingTasksGantt)
addingTasksGantt.deleteTask(2)

