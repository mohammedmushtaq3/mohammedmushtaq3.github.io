// $(document).ready(function () {
//   let survey = "";
//   let siteUsersData = [];

//   let siteUsersTable = $("#site-survey-datatable").DataTable({
//     pagingType: "simple",
//     lengthChange: false,
//     info: false,
//     // paging: false,
//     // selectable: true,
//     ordering: false,
//     filter: true,
//     data: siteUsersData,
//     columns: [{ title: "" }, { title: "Email" }, { title: "Date" }],
//     columnDefs: [
//       {
//         searchable: false,
//         orderable: false,
//         targets: 0,
//         width: 30,
//         className: "details-control",
//         data: null,
//         defaultContent: "",
//       },
//     ],
//   });

//   var user_report_chart = document.querySelector("#user-report-chart canvas")
//     .chart;
//   console.log(user_report_chart);
//   user_report_chart.chart.config = {
//     type: "horizontalBar",
//     data: {
//       datasets: [
//         {
//           backgroundColor: [
//             "#dc3912",
//             "#ff9900",
//             "#109618",
//             "#0099c6",
//             "#dd4477",
//             "#66aa00",
//             "#b82e2e",
//             "#316395",
//             "#994499",
//             "#22aa99",
//             "#aaaa11",
//             "#6633cc",
//             "#c845e6",
//             "#e6de45",
//           ],
//           datalabels: {
//             color: "white",
//             align: "center",
//             anchor: "center",
//             font: {
//               weight: "bold",
//             },
//           },
//         },
//       ],
//     },
//     responsive: true,
//   };
//   // user_report_chart.chart.options = {

//   // };
//   user_report_chart.chart.options = {
//     events: ["click"],
//     onClick: function (evt) {
//       var activeElement = user_report_chart.getElementAtEvent(evt);
//       var tabTitle = activeElement[0]._view.label;
//       var index = activeElement[0]._index;
//       // console.log(tabTitle, index, currentTab);
//       //supply tab index to the below function;
//       // nextPrev();
//     },
//     title: {
//       display: true,
//       text: "Behaviour Chart",
//       position: "top",
//       fontSize: 14,
//     },
//     scales: {
//       xAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//             max: 100,
//           },
//           gridLines: {
//             display: false,
//           },
//         },
//       ],
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//     legend: {
//       display: false,
//     },
//     layout: {
//       padding: {
//         left: 50,
//         right: 50,
//         top: 0,
//         bottom: 0,
//       },
//     },
//   };

//   // function handleChartClick(c, items) {
//   //   console.log("chart bar onclick - ", e);
//   //   console.log("items - ", items);
//   //   e = i[0];
//   //   console.log(e._index);
//   //   var x_value = this.data.labels[e._index];
//   //   var y_value = this.data.datasets[0].data[e._index];
//   //   console.log(x_value);
//   //   console.log(y_value);
//   // }

//   $.get(CORS + ENDPOINT + "/admin/surveys", null, initSiteUsersDatatable);

//   function initSiteUsersDatatable(response) {
//     $.each(response.body.Items, function (index, item) {
//       let date = new Date(item.created);
//       // date.toString('YYYY-MM-dd');
//       // date.toDateString('YYYY-MM-dd')
//       siteUsersData.push([
//         item.created,
//         item.email,
//         date.toString("YYYY-MM-dd"),
//       ]);
//     });

//     siteUsersTable.clear();
//     siteUsersTable.rows.add(siteUsersData);
//     siteUsersTable.draw();

//     // siteUsersTable.on("search.dt", function () {
//     //   searchDate = $(
//     //     "#site-survey-datatable_filter label input[type=search]"
//     //   ).val();
//     //   if (searchDate.length > 4) {
//     //     alert("search");
//     //   }
//     // });
//   }

//   $("#site-survey-datatable tbody").on(
//     "click",
//     "td.details-control",
//     function () {
//       var data = siteUsersTable.row($(this).parents("tr")).data();
//       $.post(
//         CORS + ENDPOINT + "/survey",
//         JSON.stringify({ email: data[1], date: data[0] }),
//         function (data, textStatus, xhr) {
//           if (data.statusCode == "200") drawChart(data.body.Items[0].survey);
//         },
//         "json"
//       );
//     }
//   );

//   function drawChart(survey) {
//     // user_report_chart.reset();
//     const scaleRange = 5;
//     var filledQuestions = {};
//     // var chartHeight = 0;
//     // let ChartData = [];
//     let labels = [];
//     let data = [];

//     if (survey != null) {
//       $.each(survey.sections, function (index, section) {
//         let block =
//           section.totalQuestions / (section.totalQuestions * scaleRange);
//         let sum = 0;
//         $.each(section.questions, function (index2, question) {
//           sum += question.value * block;
//           // console.log(question.en, question.value);
//           filledQuestions[question.en] = question.value;
//         });
//         let percent = (sum * 100) / section.totalQuestions;
//         if (section.sectionType === "scale") {
//           labels.push(section.title.en);
//           data.push(parseFloat(percent.toFixed(1)));
//         }
//       });

//       // console.log(labels, data);
//       updateChart(labels, data);
//       // var paddingHeight = 50;
//       // var rowHeight = Data.length * 50;
//       // chartHeight = rowHeight + paddingHeight;
//     }

//     if (!jQuery.isEmptyObject(survey)) {
//       $("#check-list-graph").removeClass("d-none");
//     }

//     if (!jQuery.isEmptyObject(filledQuestions)) {
//       fillSurvey(filledQuestions);
//     }
//   }

//   // user_report_chart.update();

//   // $(window).resize(function () {
//   //   drawChart(survey);
//   // });

//   function updateChart(labels, data) {
//     // user_report_chart.reset();
//     user_report_chart.data.labels = labels;
//     user_report_chart.data.datasets[0].data = data;
//     user_report_chart.update();
//   }
//   function fillSurvey(data) {
//     $("#user-report-questions").removeClass("d-none");
//     $("#filledSurvey").html(surveyContent);
//     showTab(currentTab);
//     js2form(document.getElementById("filledSurvey"), data);
//   }
// });
