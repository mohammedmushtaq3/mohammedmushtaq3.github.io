Chart.register(ChartDataLabels);

var alphaChartData = {
  type: "pie",
  data: {
    labels: ["No", "Yes"],
    datasets: [
      {
        label: ["No", "Yes"],
        data: [0, 0],
        backgroundColor: ["rgba(34,102,211,0.9)", "rgba(240,36,36,0.9)"],
        datalabels: {
          color: "white",
        },
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          let sum = 0;
          let dataArr = alphaChartData.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(0) + "%";
          let displayText = `${
            context.dataset.label[context.dataIndex]
          } - ${percentage}`;
          return displayText;
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
  document.getElementById("alpha-test-chart").getContext("2d"),
  alphaChartData
  // alphaChartOptions
);
function showAlphaChart(data) {
  let alphatest_data = data;
  let yes = 0;
  let no = 0;
  for (const [key, value] of Object.entries(alphatest_data)) {
    value == "yes" ? yes++ : no++;
  }
  yes *= 10;
  no *= 10;
  //   console.log("yes no ", yes, no);
  alphaChart.config._config.data.datasets[0].data = [no, yes];
  alphaChart.update();
}

let stqChartData1 = {
  type: "bar",
  data: {
    labels: [
      "Extrovert",
      "Introvert",
      "Practical",
      "Imaginative",
      "Thinking",
      "Feeling",
      "Organized",
      "Flexible",
    ],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: [
          "rgb(71,125,201)",
          "rgb(71,125,201)",
          "rgb(253, 245, 23)",
          "rgb(253, 245, 23)",
          "rgb(78, 218, 2)",
          "rgb(78, 218, 2)",
          "rgb(89, 229, 253)",
          "rgb(89, 229, 253)",
        ],
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

function showPhqChart(data) {
  // console.log("phq - data - ", data);
  if (!data) {
    return;
  }
  let phqData = data;
  let somatic_symptoms = 0;
  let severe_depression = 0;
  let anxiety_insomnia = 0;
  let social_dsyfunction = 0;
  let phq_total = 0;

  for (const [key, value] of Object.entries(phqData)) {
    let category = value.split("#")[0];
    // console.log(value);
    switch (category) {
      case "somatic-symptoms":
        somatic_symptoms += parseInt(value.split("#")[1]);
        break;
      case "severe-depression":
        severe_depression += parseInt(value.split("#")[1]);
        break;
      case "anxiety-insomnia":
        anxiety_insomnia += parseInt(value.split("#")[1]);
        break;
      case "social-dysfunction":
        social_dsyfunction += parseInt(value.split("#")[1]);
        break;
    }
  }

  phq_total =
    somatic_symptoms +
    severe_depression +
    anxiety_insomnia +
    social_dsyfunction;

  // console.log(
  //   somatic_symptoms,
  //   severe_depression,
  //   anxiety_insomnia,
  //   social_dsyfunction
  // );
  $("#chart-phq-1 img").attr("src", phqGaugeSelector(somatic_symptoms));
  $("#chart-phq-2 img").attr("src", phqGaugeSelector(severe_depression));
  $("#chart-phq-3 img").attr("src", phqGaugeSelector(anxiety_insomnia));
  $("#chart-phq-4 img").attr("src", phqGaugeSelector(social_dsyfunction));
  $("#chart-phq-total img").attr("src", phqTotalGaugeSelector(phq_total));
  $("#chart-phq-1 span").html(somatic_symptoms);
  $("#chart-phq-2 span").html(severe_depression);
  $("#chart-phq-3 span").html(anxiety_insomnia);
  $("#chart-phq-4 span").html(social_dsyfunction);
  $("#chart-phq-total span").html(phq_total);
  $("#chart-phq-table tbody tr").html(`
    <td scope="row">Score</td>
    <td>${somatic_symptoms}</td>
    <td>${severe_depression}</td>
    <td>${anxiety_insomnia}</td>
    <td>${social_dsyfunction}</td>
    <td>${phq_total}</td>
  `);
}
function phqGaugeSelector(val) {
  if (val <= 5) {
    return "../img/ghq-1.jpg";
  }
  if (val <= 10) {
    return "../img/ghq-2.jpg";
  }
  if (val <= 15) {
    return "../img/ghq-3.jpg";
  }
  if (val > 15) {
    return "../img/ghq-4.jpg";
  }
}
function phqTotalGaugeSelector(val) {
  if (val <= 23) {
    return "../img/ghq-total-1.png";
  }
  if (val <= 45) {
    return "../img/ghq-total-2.png";
  }
  if (val <= 68) {
    return "../img/ghq-total-3.png";
  }
  if (val > 69) {
    return "../img/ghq-total-4.png";
  }
}
function showStqChart(data) {
  // console.log("stq - chart - ", data);
  if (!data) {
    return;
  }
  let stqData = data;
  let extrovert = 0;
  let introvert = 0;
  let practical = 12;
  let imaginative = 0;
  let thinking = 0;
  let feeling = 0;
  let organized = 0;
  let flexible = 0;
  for (const [key, value] of Object.entries(stqData)) {
    value.split("_").forEach((item) => {
      let category = item.split("#")[0];
      switch (category) {
        case "extrovert":
          extrovert += parseInt(value.split("#")[1]);
          break;
        case "introvert":
          introvert += parseInt(value.split("#")[1]);
          break;
        case "practical":
          practical += parseInt(value.split("#")[1]);
          break;
        case "imaginative":
          imaginative += parseInt(value.split("#")[1]);
          break;
        case "thinking":
          thinking += parseInt(value.split("#")[1]);
          break;
        case "feeling":
          feeling += parseInt(value.split("#")[1]);
          break;
        case "organized":
          organized += parseInt(value.split("#")[1]);
          break;
        case "flexible":
          flexible += parseInt(value.split("#")[1]);
          break;
      }
    });
  }
  $("#chart-stq-table tbody tr:last td:eq(1)").html(extrovert);
  $("#chart-stq-table tbody tr:last td:eq(2)").html(introvert);
  $("#chart-stq-table tbody tr:last td:eq(3)").html(practical);
  $("#chart-stq-table tbody tr:last td:eq(4)").html(imaginative);
  $("#chart-stq-table tbody tr:last td:eq(5)").html(thinking);
  $("#chart-stq-table tbody tr:last td:eq(6)").html(feeling);
  $("#chart-stq-table tbody tr:last td:eq(7)").html(organized);
  $("#chart-stq-table tbody tr:last td:eq(8)").html(flexible);
  stqChart1.config._config.data.datasets[0].data = [
    extrovert,
    introvert,
    practical,
    imaginative,
    thinking,
    feeling,
    organized,
    flexible,
  ];
  stqChart1.update();
}
