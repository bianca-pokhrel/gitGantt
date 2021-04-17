
// given a new gantt chart instance with parameters, create the gantt chart and in a separate js file, inject into the HTML
// need a list of tasks, and their start end time... so maybe in a JSON format? 
// Keys are tasks and their values are their start/end time?
// can do this in add task though... don't need that in the constructor
function gitGantt() {
    //the constructor should just create an empty gantt chart with height/width specs provided by dev. 
    //the columns for the days of the week should be already there- just no tasks

    this.width = width;
    this.height = height;
    this.tasks = [];
    const days = [];
}



function createChart(e) {

    // make a constructor for function, instead of e, needs information 
    const days = document.querySelectorAll(".chart-values li");
    console.log(days)
    const tasks = document.querySelectorAll(".chart-bars li");
    const daysArray = [...days];
  
    tasks.forEach(el => {
      const duration = el.dataset.duration.split("-");
      const startDay = duration[0];
      const endDay = duration[1];
      let left = 0,
        width = 0;
  
      if (startDay.endsWith("½")) {
        const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
        left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
      } else {
        const filteredArray = daysArray.filter(day => day.textContent == startDay);
        left = filteredArray[0].offsetLeft;
      }
  
      if (endDay.endsWith("½")) {
        const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
        width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
      } else {
        const filteredArray = daysArray.filter(day => day.textContent == endDay);
        width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
      }
  
      // apply css
      el.style.left = `${left}px`;
      el.style.width = `${width}px`;
      if (e.type == "load") {
        el.style.backgroundColor = el.dataset.color;
        el.style.opacity = 1;
      }
    });
  }
  
  window.addEventListener("load", createChart);
  window.addEventListener("resize", createChart);