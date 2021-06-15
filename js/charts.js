function chartAddData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

function chartRemoveData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
  });
  chart.update();
}

let alphaChartData = {
  type: "pie",
  data: {
    labels: ["No", "Yes"],
    datasets: [
      {
        data: [1, 1],
        backgroundColor: ["rgba(34,102,211,0.9)", "rgba(240,36,36,0.9)"],
      },
    ],
  },
};
var alphaChartOptions = {
  dataLabelsPlugin: true,
  tooltops: {
    enabled: false,
  },
  options: {
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          // Assign the data to the variable and format it according to your needs
          let dataArr = alphaChartData.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        color: "white",
        labels: {
          title: {
            font: {
              size: "14",
            },
          },
        },
      },
    },
  },
};
var alphaChart = new Chart(
  document.getElementById("alpha-test-chart"),
  alphaChartData,
  alphaChartOptions
);

function showAlphaChart(data) {
  //   let alphatest_data = data;
  let alphatest_data = JSON.parse(sessionStorage.getItem("alpha"));
  // js2form("alpha-test", alphatest_data.survey);
  //   console.log(alphatest_data.survey.sections[0].questions);
  let yes = 0;
  let no = 0;
  alphatest_data.survey.sections[0].questions.forEach((question) => {
    question.value == "yes" ? yes++ : no++;
  });

  yes *= 10;
  no *= 10;
  //   console.log("yes no ", yes, no);
  console.log(alphaChart);
  // alphaChart._data.data.datasets[0].data = [no, yes];
  alphaChart.config._config.data.datasets[0].data = [no, yes];
  alphaChart.update();
}

let stqChartData1 = {
  type: "bar",
  data: {
    labels: ["Extrovert", "Introvert"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: "rgb(43,88,161)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
  },
};

let stqChartData2 = {
  type: "bar",
  data: {
    labels: ["Practical", "Imaginative"],
    datasets: [
      {
        data: [12, 0],
        backgroundColor: "rgb(253, 245, 23)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
  },
};
let stqChartData3 = {
  type: "bar",
  data: {
    labels: ["Thinking", "Feeling"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: "rgb(78, 218, 2)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
  },
};
let stqChartData4 = {
  type: "bar",
  data: {
    labels: ["Organized", "Flexible"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: "rgb(89, 229, 253)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
  },
};

var stqChart1 = new Chart(
  document.getElementById("stq-chart-1"),
  stqChartData1
);
var stqChart1 = new Chart(
  document.getElementById("stq-chart-2"),
  stqChartData2
);
var stqChart1 = new Chart(
  document.getElementById("stq-chart-3"),
  stqChartData3
);
var stqChart1 = new Chart(
  document.getElementById("stq-chart-4"),
  stqChartData4
);
