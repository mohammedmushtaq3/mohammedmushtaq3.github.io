$("#survey-form-mail").on("submit", function (e) {
  e.preventDefault();
  sessionStorage.setItem("survey_mail", $("#survey-mail").val());
  $("#survey-form-mail").addClass("d-none");
  takeSurvey();
  $("#survey-table").removeClass("d-none");
});
var response = "";
response = default_survey;

// $.ajax({
//   url: CORS + ENDPOINT +"/survey",
//   type: "GET",
//   dataType: "json",
//   contentType: "application/json;",
//   cache: false,
// })
//   .done(function (result) {
//     console.log("response - ", result);
//     response = result;
//   })
//   .fail(function (e) {
//     //show error
//     console.log("error ajax");
//   })
//   .always(function (result) {
//     //hide progress loader
//   });

if (response.statusCode == "200") {
  var data = response.body;
  var surveyContent = "";

  // survey progress steps
  surveyContent += `<div class="text-center py-3">`;
  for (var i = data.sections.length; i > 0; i--) {
    surveyContent += `<span class="step"></span>`;
  }
  // surveyContent += `<button class="btn btn-primary float-right" type="button" id="skipBtn" onclick="nextPrev(1)">Skip</button>`;
  surveyContent += `</div>`;

  data.sections.forEach((section) => {
    //titles
    surveyContent += `<div class="tab">
                        <h2 class="text-center">${section.title.en}</h2>
                        <h3 class="arabic-text text-center">${section.title.ar}</h3>`;

    if (section.sectionType === "scale") {
      section.questions.forEach((question) => {
        surveyContent += `<hr/><div class="form-group">
                              <p>${question.en}</p>
                              <p class="arabic-text text-right">${question.ar}</p>`;
        surveyContent += `<table class="table-borderless w-100 text-center"><tr>`;
        $.each(question.labels, function (index, item) {
          surveyContent += `<th><span class="label"> ${item.label.en}</span></th>`;
        });
        surveyContent += `</tr><tr>`;
        $.each(question.labels, function (index, item) {
          surveyContent += `<td class="text-center">
            <input type="radio" name="${question.en}" value="${item.label.value}">
            </td>`;
        });

        surveyContent += `</tr></table>`;
        surveyContent += `</div>`;
      });
      surveyContent += `</div>`;
    } else if (section.sectionType === "boolean") {
      section.questions.forEach((question) => {
        surveyContent += `<hr/><div class="form-group">
                              <p>${question.en}</p>
                              <p class="arabic-text text-right">${question.ar}</p>
                                    <table class="table-borderless w-100 text-center">
                                      <tr>
                                            <th>TRUE</th>
                                            <th>FALSE</th>
                                        </tr>
                                        <tr>
                                            <td class="text-center"><input type="radio" name="${question.en}" value="true"></td>
                                            <td class="text-center"><input type="radio" name="${question.en}" value="false"></td>
                                        </tr>
                                    </table>
                          </div>`;
      });
      surveyContent += `</div>`;
    }
  });
}

function takeSurvey() {
  $("#surveyForm").html(surveyContent);
  showTab(currentTab);
}

function onSurveySubmit() {
  var data = response.body;
  let survey = {};
  let sectionFilled = false;
  survey.name = data.name;
  survey.description = data.description;
  survey.created = data.created;
  survey.updated = data.updated;
  survey.sections = [];
  data.sections.forEach((section) => {
    let temp = {};
    temp.title = section.title;
    temp.questions = [];
    temp.totalQuestions = 0;
    temp.sectionType = section.sectionType;
    section.questions.forEach((question) => {
      temp.totalQuestions += 1;
      let checked = $(`input[name="${question.en}"]:checked`).val();
      // console.log(`checked - ${checked}`);
      if (checked) {
        sectionFilled = true;
        let temp2 = {};
        temp2.en = question.en;
        temp2.ar = question.ar;
        temp2.value = $(`input[name="${question.en}"]:checked`).val();
        temp.questions.push(temp2);
      }
    });
    if (sectionFilled) {
      survey.sections.push(temp);
    }
    sectionFilled = false;
  });
  let formData = {};
  if (sessionStorage.getItem("survey_mail") != null) {
    formData.email = sessionStorage.getItem("survey_mail");
  } else if (sessionStorage.getItem("uid") != null) {
    formData.uid = sessionStorage.getItem("uid");
  }
  formData.survey = survey;

  console.log(`Submit FORM ${JSON.stringify(formData)}`);
  $("#bootstrap-show-modal-0").modal("hide");
  $.ajax({
    url: CORS + ENDPOINT + "/survey",
    method: "PUT",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(formData),
    processData: false,
  })
    .done(function (res) {
      $.toast({
        icon: "success",
        text: "<p class='p-3'>survey send successfull</p>",
        delay: "3000",
        position: "top-right",
        dismissible: false,
      });
    })
    .fail(function (e) {
      console.log("error - ", e);
    })
    .always(function (result) {
      setTimeout(() => {
        location.reload();
      }, 3000);
    });
}
