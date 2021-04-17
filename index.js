"use strict";

var emptyGantt = new gitGantt();
console.log(emptyGantt)
document.querySelector('#gantt-chart').appendChild(emptyGantt.chart_setup)