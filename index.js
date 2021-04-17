"use strict";

var emptyGantt = new gitGantt();
console.log(emptyGantt)
document.querySelector('#gantt-chart').appendChild(emptyGantt.chart_setup)


emptyGantt.addTask("tue½-wed", "Task")
emptyGantt.addTask("mon-wed", "Task2")

emptyGantt.deleteTask("0")