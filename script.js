

//setting variable for url
let weblink = "http://webapi19sa-1.course.tamk.cloud/v1/weather/";


//fatching data
fetch(weblink).then((result) => {
    result.json().then((data) => {
      let Rows = `
      <tr>
        <th>Row</th>
        <th>id</th>
        <th>device_id</th>
        <th>Date</th>
        <th>Time</th>
        <th>Type</th>
        <th>Value</th>
      </tr>`;
      // loop to get 30 latest data
      for (let i = 0; i < 30; i++) {
        const type = Object.keys(data[i].data)[0];
      //conent details
      Rows += `
        <tr>
          <td>${i + 1}</td>
          <td>${data[i].id}</td>
          <td>${data[i].device_id}</td>
          <td>${new Date(data[i].date_time).toLocaleDateString()}</td>
          <td>${new Date(data[i].date_time).toLocaleTimeString()}</td>
          <td>${type}</td>
          <td>${data[i].data[type]}</td>
        </tr>`;
      }
  
      const table = `<table>
        ${Rows}
      </table>`;
  
      const element = document.getElementById("page1Content");
      element.innerHTML = table;
    });
  })


//function to create chart

function makeChart(labels, values, datasetLabel, type, container) {
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: datasetLabel,
          backgroundColor: "green",
          data: values,
        },
      ],
    };
  
    const config = {
      type: type,
      data: chartData,
      options: { maintainAspectRatio: false},
    };
  
    return new Chart(document.getElementById(container), config);
  }
     


//making function for windspeed data

let windSpeed = [];
let windSpeedChart;


function windSpeedContent(list) {
  windSpeed = list;

  let Rows = `
  <tr>
    <th>Row</th>
    <th>Date</th>
    <th>Time</th>
    <th>Device Id</th>
    <th>Wind_Speed </th>
  </tr>`;

  //windspeed Chart
  let chartLabels = [];
  let chartValues = [];

  for (let i = 0; i < windSpeed .length; i++) {
    const date = new Date(windSpeed[i].date_time).toLocaleDateString();
    const time = new Date(windSpeed[i].date_time).toLocaleTimeString();

    chartLabels.push(date + " " + time + " (" + (i + 1) + ") ");
    chartValues.push(windSpeed[i].wind_speed);

    Rows += `
    <tr>
      <td>${i + 1}</td>
      <td>${date}</td>
      <td>${time}</td>
      <td>${windSpeed [i].device_id}</td>
      <td>${windSpeed [i]. wind_speed}</td>
    </tr>`;
  }

  const table = `
  <table>
    ${Rows}
  </table>
  `;

  const element = document.getElementById("page2Content");
  element.innerHTML = table;

  if (windSpeedChart) {
    windSpeedChart.destroy();
  }

  windSpeedChart = makeChart(
    chartLabels,
    chartValues,
    "Wind Speed Chart",
    "bar",
    "windSpeedChart"
  );
//setting the chart size
  windSpeedChart.canvas.parentNode.style.height = `${
    windSpeed.length * 35
  }px`;
}

fetch(weblink + "wind_speed").then((result) => {
    result.json().then((data) => {
      windSpeedContent(data);
    });
  });


////making function for light data
let lights = [];
let lightsChart;

function lightsContent(list) {
    lights = list;

  let Rows = `
  <tr>
    <th>Row</th>
    <th>Date</th>
    <th>Time</th>
    <th>Device Id</th>
    <th>light</th>
  </tr>`;

  let chartLabels = [];
  let chartValues = [];

  for (let i = 0; i < lights.length; i++) {
    const date = new Date(lights[i].date_time).toLocaleDateString();
    const time = new Date(lights[i].date_time).toLocaleTimeString();

    chartLabels.push(date + " " + time + " (" + (i + 1) + ") ");
    chartValues.push(lights[i].light);

    Rows += `
    <tr>
      <td>${i + 1}</td>
      <td>${date}</td>
      <td>${time}</td>
      <td>${lights[i].device_id}</td>
      <td>${lights[i].light}</td>
    </tr>`;
  }

  const table = `
  <table>
    ${Rows}
  </table>
  `;

  const element = document.getElementById("page3Content");
  element.innerHTML = table;

  if (lightsChart) {
    lightsChart.destroy();
  }

  lightsChart = makeChart(
    chartLabels,
    chartValues,
    "Light Chart",
    "bar",
    "lightsChart"
  );

  lightsChart.canvas.parentNode.style.height = `${
    lights.length * 35
  }px`;
}


fetch(weblink + "light").then((result) => {
    result.json().then((data) => {
        lightsContent(data);
    });
  });



//tab functions
function openTab(evt, tabName) {
  var i, tabView, pagelinks;

  tabView = document.getElementsByClassName("tabView");
  for (i = 0; i < tabView.length; i++) {
      tabView[i].style.display = "none";
  }

  pagelinks = document.getElementsByClassName("pagelinks");
  for (i = 0; i < pagelinks.length; i++) {
    pagelinks[i].className = pagelinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";

if (!evt) return;

evt.currentTarget.className += " active";
}

  


//the following are my view 1 table column header
fetch(weblink).then((result) => {
    result.json().then((data) => {
      let Rows = `
      <tr>
        <th>Row</th>
        <th>id</th>
        <th>device_id</th>
        <th>Date</th>
        <th>Time</th>
        <th>Type</th>
        <th>Value</th>
      </tr>`;
      // latest 500 vales
      for (let i = 0; i < 500; i++) {
        const type = Object.keys(data[i].data)[0];
      
      Rows += `
        <tr>
          <td>${i + 1}</td>
          <td>${data[i].id}</td>
          <td>${data[i].device_id}</td>
          <td>${new Date(data[i].date_time).toLocaleDateString()}</td>
          <td>${new Date(data[i].date_time).toLocaleTimeString()}</td>
          <td>${type}</td>
          <td>${data[i].data[type]}</td>
        </tr>`;
      }
  
      const table = `<table>
        ${Rows}
      </table>`;
  
      const element = document.getElementById("page5Content");
      element.innerHTML = table;
    });
  })



  //page 5, additional function for rain.

  let rains = [];
  let rainsChart;
  
  
  function rainsContent(list) {
    rains = list;
  
    let Rows = `
    <tr>
      <th>Row</th>
      <th>Date</th>
      <th>Time</th>
      <th>Device Id</th>
      <th>rain </th>
    </tr>`;
  
    //windspeed Chart
    let chartLabels = [];
    let chartValues = [];
  
    for (let i = 0; i < rains .length; i++) {
      const date = new Date(rains[i].date_time).toLocaleDateString();
      const time = new Date(rains[i].date_time).toLocaleTimeString();
  
      chartLabels.push(date + " " + time + " (" + (i + 1) + ") ");
      chartValues.push(rains[i].rain);
  
      Rows += `
      <tr>
        <td>${i + 1}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${rains [i].device_id}</td>
        <td>${rains [i]. rain}</td>
      </tr>`;
    }
  
    const table = `
    <table>
      ${Rows}
    </table>
    `;
  
    const element = document.getElementById("page5Content");
    element.innerHTML = table;
  
    if (rainsChart) {
      rainsChart.destroy();
    }
  
    rainsChart = makeChart(
      chartLabels,
      chartValues,
      "Rain Chart",
      "bar",
      "rainsChart"
    );
  //setting the chart size
  rainsChart.canvas.parentNode.style.height = `${
    rains.length * 35
    }px`;
  }




  
//page 5 temmparature for temperature 
  let temperatures = [];
  let temperaturesChart;
  
  
  function temperaturesContent(list) {
    temperatures = list;
  
    let Rows = `
    <tr>
      <th>Row</th>
      <th>Date</th>
      <th>Time</th>
      <th>Device Id</th>
      <th>temperature </th>
    </tr>`;
  
    //windspeed Chart
    let chartLabels = [];
    let chartValues = [];
  
    for (let i = 0; i < temperatures .length; i++) {
      const date = new Date(temperatures[i].date_time).toLocaleDateString();
      const time = new Date(temperatures[i].date_time).toLocaleTimeString();
  
      chartLabels.push(date + " " + time + " (" + (i + 1) + ") ");
      chartValues.push(temperatures[i].temperature);
  
      Rows += `
      <tr>
        <td>${i + 1}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${temperatures [i].device_id}</td>
        <td>${temperatures [i]. temperature}</td>
      </tr>`;
    }
  
    const table = `
    <table>
      ${Rows}
    </table>
    `;
  
    const element = document.getElementById("page5Content");
    element.innerHTML = table;
  
    if (temperaturesChart) {
      temperaturesChart.destroy();
    }
  
    temperaturesChart = makeChart(
      chartLabels,
      chartValues,
      "Temperature Chart",
      "bar",
      "temperaturesChart"
    );
  //setting the chart size
  temperaturesChart.canvas.parentNode.style.height = `${
    temperatures.length * 35
    }px`;
  }



// page 5 wind direction

let winddirection = [];
let winddirectionChart;


function winddirectionContent(list) {
  winddirection = list;

  let Rows = `
  <tr>
    <th>Row</th>
    <th>Date</th>
    <th>Time</th>
    <th>Device Id</th>
    <th>wind_direction </th>
  </tr>`;

  //windspeed Chart
  let chartLabels = [];
  let chartValues = [];

  for (let i = 0; i < winddirection .length; i++) {
    const date = new Date(winddirection[i].date_time).toLocaleDateString();
    const time = new Date(winddirection[i].date_time).toLocaleTimeString();

    chartLabels.push(date + " " + time + " (" + (i + 1) + ") ");
    chartValues.push(winddirection[i].wind_direction);

    Rows += `
    <tr>
      <td>${i + 1}</td>
      <td>${date}</td>
      <td>${time}</td>
      <td>${winddirection [i].device_id}</td>
      <td>${winddirection [i]. wind_direction}</td>
    </tr>`;
  }

  const table = `
  <table>
    ${Rows}
  </table>
  `;

  const element = document.getElementById("page5Content");
  element.innerHTML = table;

  if (winddirectionChart) {
    winddirectionChart.destroy();
  }

  winddirectionChart = makeChart(
    chartLabels,
    chartValues,
    "Wind Direction Chart",
    "bar",
    "winddirectionChart"
  );
//setting the chart size
winddirectionChart.canvas.parentNode.style.height = `${
  winddirection.length * 35
  }px`;
}


  //------ Tier 4 letting the user select a time interval------------ //
function changeInterval(event, tab) {
  const select = event.target;
  const option = select.options[select.selectedIndex];
  const value = option.value;

  let url = "";

  if (value === "now") {
    url = weblink + tab;
  } else {
    url = weblink + `${tab}/${value}`;
  }

  
fetch(url).then((result) => {
  result.json().then((data) => {
    console.log(data);
    if (tab == "wind_speed") {
      windSpeedContent(data);
    } else if (tab == "light") {
        lightsContent(data);
    } else if (tab=="rain"){
        rainsContent(data); 
    } else if (tab=="temperature"){
        temperaturesContent(data); 
    } else if(tab=="wind_direction"){
        winddirectionContent(data);
    }
     
  });
});
}