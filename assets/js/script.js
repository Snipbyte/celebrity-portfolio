// Making a skills Chart
  var ctx2 = document.getElementById('myChart2')
  new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
      labels: ["A", "B", "C", "D", "E", "F", "G","H"],
      datasets: [ { 
        data: [80,55,60,40,65,90,35,30,44,80,55],
        label: "Skills",
        barThickness: 10,
        borderColor: "#34d399",
        backgroundColor: "#34d399",
        borderWidth:2,
      }
      ]
    },
    options: {

      scales: {
       xAxes: [{ 
        stacked: true ,
        ticks: {
          fontColor: "white",
          stepSize: 20,
          beginAtZero: true
        } ,
        gridLines: {
          display:true,
          color: 'rgba(52,211,153,0.3)',

        }
      }],
       yAxes: [{
        stacked:true,
        ticks: {
          fontColor: "white",
        },
        gridLines: {
          display:false
        }
      }],
     }
   }
 });