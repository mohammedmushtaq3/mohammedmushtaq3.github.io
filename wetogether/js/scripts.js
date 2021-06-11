/**
 *
 * @param {Object} data
 * @param {Element} contentHolder
 * @param {boolean} forViewing
 */
function renderSurvey(data, contentHolder, forViewing = false) {
  let languagePreference = sessionStorage.getItem("lang")
    ? sessionStorage.getItem("lang")
    : "en";
  var surveyContent = "";
  data.body.sections.forEach((section) => {
    surveyContent += ` <table class="table table-responsive table-borderless table-sm">`;
    if (section.sectionType === "scale") {
      section.questions.forEach((question, index) => {
        surveyContent += `
            <tr>
              <th scope="row" colspan="4">
                <h5>
                  ${++index}. ${question[languagePreference]}
                </h5>
              </th>
            </tr>`;
        surveyContent += `
            <tr class="text-center">`;
        $.each(question.labels, function (index, item) {
          surveyContent += `
                <th>${item.label[languagePreference]}</th>`;
        });

        surveyContent += `
              </tr>
              <tr class="text-center">`;
        $.each(question.labels, function (index, item) {
          surveyContent += `<td>
                <input type="radio" name="${
                  question[languagePreference]
                }" value="${item.label.value}" class="${
            forViewing ? "pe-none" : ""
          }"/>
              </td>`;
        });
        surveyContent += `</tr>`;
      });
    } else if (section.sectionType === "boolean") {
      section.questions.forEach((question, index) => {
        surveyContent += `
            <tr>
              <th scope="row" colspan="4">
                <h5>
                  ${++index}. ${question[languagePreference]}
                </h5>
              </th>
            </tr>
            <tr class="text-center">
              <th>Yes</th>
              <th>No</th>
            </tr>
            <tr class="text-center">
              <td><input type="radio" name="${
                question.en
              }" value="yes" class="${forViewing ? "pe-none" : ""}"/></td>
              <td><input type="radio" name="${question.en}" value="no" class="${
          forViewing ? "pe-none" : ""
        }"/></td>
            </tr>`;
      });
    }
  });
  if (!forViewing) {
    surveyContent += `
    <tr>
      <td colspan="4" class="text-right">
        <button class="btn btn-primary" type="submit">SUBMIT</button>
      </td>
    </tr>
    `;
  }
  surveyContent += `</table>`;
  $(`#${contentHolder}`).html(surveyContent);
}
