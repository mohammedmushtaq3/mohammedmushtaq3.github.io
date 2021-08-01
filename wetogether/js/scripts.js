/* jshint esversion:6 */
/* jshint esversion:8 */
//@ts-check

const ENDPOINT = "https://97j6jnn5gc.execute-api.us-east-1.amazonaws.com/dev/uaeu";
$(`#language-preference option[value=${sessionStorage.getItem("lang") || "en"}]`).attr("selected", true);
function languageChange(val) {
  console.log("language - ", val);
  sessionStorage.setItem("lang", val);
  location.reload();
}

$("input[name=phq-interpretation-lang],input[name=stq-interpretation-lang],input[name=summary-lang]").change(
  function () {
    if (this.value == "en") {
      $(this).parent().parent().find("textarea").attr("dir", "ltr");
    } else if (this.value == "ar") {
      $(this).parent().parent().find("textarea").attr("dir", "rtl");
    }
  }
);

function textDirection(lang = "en", target) {
  var text_direction = "ltr";
  if (lang == "ar") {
    text_direction = "rtl";
  }
  $(target).attr("dir", text_direction);
  $(target).parent().find("input[name=phq-interpretation-lang][value=en]").prop("checked", true);
}

/**
 *
 * @param {Object} data
 * @param {Element} contentHolder
 * @param {boolean} forViewing
 */
function renderSurvey(data, contentHolder, forViewing = false) {
  let languagePreference = sessionStorage.getItem("lang") ? sessionStorage.getItem("lang") : "en";
  var surveyContent = "";
  data.body.sections.forEach((section, sectionIndex) => {
    surveyContent += `<div class="table-responsive"> <table class="table table-borderless" ${
      sessionStorage.getItem("lang") == "ar" ? "dir='rtl' lang='ar'" : ""
    }>`;
    if (section.sectionType === "scale") {
      section.questions.forEach((question, questionIndex) => {
        surveyContent += `
            <tr>
              <th scope="row" colspan="4">
                <h5>
                  ${++questionIndex}. ${question[languagePreference]}
                </h5>
              </th>
            </tr>`;
        surveyContent += `
            <tr class="text-center">`;
        $.each(question.labels, function (labelIndex, item) {
          surveyContent += `
                <th class="px-3">${item[languagePreference]}</th>`;
        });

        surveyContent += `
              </tr>
              <tr class="text-center">`;
        $.each(question.labels, function (labelIndex, item) {
          surveyContent += `<td>
                <input type="radio" name="${question.en}" value="${item.value}" class="${forViewing ? "pe-none" : ""}"/>
              </td>`;
        });
        surveyContent += `</tr>`;
      });
    } else if (section.sectionType === "boolean") {
      section.questions.forEach((question, questionIndex) => {
        surveyContent += `
            <tr>
              <th scope="row" colspan="4">
                <h5>
                  ${questionIndex + 1}. ${question[languagePreference]}
                </h5>
              </th>
            </tr>
            <tr class="text-center">
              <th>${sessionStorage.getItem("lang") == "en" ? "Yes" : "نعم"}</th>
              <th>${sessionStorage.getItem("lang") == "en" ? "No" : "لا"}</th>
            </tr>
            <tr class="text-center">
              <td><input type="radio" name="${question.en}" value="yes" class="${forViewing ? "pe-none" : ""}"/></td>
              <td><input type="radio" name="${question.en}" value="no" class="${forViewing ? "pe-none" : ""}"/></td>
            </tr>`;
      });
    }
  });
  if (!forViewing) {
    surveyContent += `
    <tr>
      <td colspan="4" class="text-right">
        <button id="formSubmitBtn" class="btn btn-primary" type="submit">
        SUBMIT</button>
      </td>
    </tr>
    `;
  }
  surveyContent += `</table></div>`;
  $(`#${contentHolder}`).html(surveyContent);
}

/**
 *
 * @param {Object} checklist
 * @returns Form Data in Json format for checklists
 */
function checklistFormData(checklist) {
  var data = checklist.body;
  let survey = {};
  let sectionFilled = false;
  survey.name = data.name;
  survey.description = data.description;
  survey.created = data.created;
  survey.updated = data.updated;
  survey.sections = [];
  data.sections.forEach((section, sectionIndex) => {
    let temp = {};
    temp.title = section.title;
    temp.questions = [];
    temp.totalQuestions = 0;
    temp.sectionType = section.sectionType;
    section.questions.forEach((question, questionIndex) => {
      temp.totalQuestions += 1;
      let checked = $(
        `input[name="sections[${sectionIndex}].questions[${questionIndex}].${question.en}"]:checked`
      ).val();

      console.log(`checked  - ${checked}`);
      if (checked) {
        sectionFilled = true;
        let temp2 = {};
        temp2.en = question.en;
        temp2.ar = question.ar;
        // temp2[question.en] = $(
        //   `input[name="sections[${sectionIndex}].questions[${questionIndex}].${question.en}"]:checked`
        // ).val();
        temp2.value = $(
          `input[name="sections[${sectionIndex}].questions[${questionIndex}].${question.en}"]:checked`
        ).val();
        temp.questions.push(temp2);
      }
    });
    if (sectionFilled) {
      survey.sections.push(temp);
    }
    sectionFilled = false;
  });
  let formData = {};

  if (sessionStorage.getItem("pt-email") != null) {
    formData.email = sessionStorage.getItem("pt-email");
  }
  console.log("get form survey data - ", survey);
  formData.survey = survey;
  if (formData.survey.sections.length == 0) {
    console.log("cannot send empty request");
    alert("Cannot Send Empty Request.");
    return;
  }
  console.log(`Submit FORM ${JSON.stringify(formData)}`);
  return formData;
}

function asyncResponse(method, link, formData, callback) {
  $("form")
    .find("button[type=submit]")
    .html(
      `
        <span
          class="spinner-border spinner-border-sm mx-2"
          role="status"
          aria-hidden="true"
        ></span> Submit
        `
    )
    .addClass("pe-none");
  // const CORS = "https://cors-anywhere.herokuapp.com/";
  const CORS = "";
  // showSpinner();
  disableBtnOnSubmit();
  if (method.toLowerCase() == "post" || method.toLowerCase() == "put") {
    formData = JSON.stringify(formData);
  }
  $.ajax({
    url: CORS + ENDPOINT + link,
    type: method,
    dataType: "json",
    data: formData,
    contentType: "application/json",
    processing: false,
  })
    .done((res) => {
      callback(res);
    })
    .fail((error) => {
      console.log("error -", error);
    })
    .always((result) => {
      // hideSpinner();
      $("form").find("button[type=submit]").html(`Submit`).removeClass("pe-none");
    });
}

function disableBtnOnSubmit() {
  $("button [type=submit]").attr("disabled", false);
  // $('#btnSubmit').removeAttr("disabled");
}

function uploadCanvasImage(link, cropperId) {
  $(`#${cropperId}`)
    .croppie("result", {
      type: "blob",
      size: "viewport",
    })
    .then(function (data) {
      let blob = data;
      $.ajax({
        url: link,
        type: "PUT",
        data: blob,
        contentType: "image/jpeg",
        processData: false,
        cache: false,
        error: function (error) {
          console.error("error", error);
          // dangerToast("Error While Upload Images");
        },
        success: function (res) {
          console.log("success -" + cropperId, res);
        },
      });
    });
}

//Dynamic Modal Creating
// reference https://github.com/shaack/bootstrap-show-modal
(function ($) {
  "use strict";

  var i = 0;

  function Modal(props) {
    this.props = {
      title: "", // the dialog title html
      body: "", // the dialog body html
      footer: "", // the dialog footer html (mainly used for buttons)
      modalClass: "fade", // Additional css for ".modal", "fade" for fade effect
      modalDialogClass: "", // Additional css for ".modal-dialog", like "modal-lg" or "modal-sm" for sizing
      options: null, // The Bootstrap modal options as described here: https://getbootstrap.com/docs/4.0/components/modal/#options
      // Events:
      onCreate: null, // Callback, called after the modal was created
      onShown: null, // Callback, called after the modal was shown and completely faded in
      onDispose: null, // Callback, called after the modal was disposed
      onSubmit: null, // Callback of $.showConfirm(), called after yes or no was pressed
    };
    for (var prop in props) {
      // noinspection JSUnfilteredForInLoop
      this.props[prop] = props[prop];
    }
    this.id = "bootstrap-show-modal-" + i;
    i++;
    this.show();
    if (this.props.onCreate) {
      this.props.onCreate(this);
    }
  }

  Modal.prototype.createContainerElement = function () {
    var self = this;
    this.element = document.createElement("div");
    this.element.id = this.id;
    this.element.setAttribute("class", "modal " + this.props.modalClass);
    this.element.setAttribute("tabindex", "-1");
    this.element.setAttribute("role", "dialog");
    this.element.setAttribute("aria-labelledby", this.id);
    this.element.innerHTML =
      '<div class="modal-dialog ' +
      this.props.modalDialogClass +
      '" role="document">' +
      '<div class="modal-content">' +
      '<div class="modal-header">' +
      '<h5 class="modal-title"></h5>' +
      '<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>' +
      "</div>" +
      '<div class="modal-body"></div>' +
      '<div class="modal-footer"></div>' +
      "</div>" +
      "</div>";
    document.body.appendChild(this.element);
    this.titleElement = this.element.querySelector(".modal-title");
    this.bodyElement = this.element.querySelector(".modal-body");
    this.footerElement = this.element.querySelector(".modal-footer");
    $(this.element).on("hidden.bs.modal", function () {
      self.dispose();
    });
    $(this.element).on("shown.bs.modal", function () {
      if (self.props.onShown) {
        self.props.onShown(self);
      }
    });
  };

  Modal.prototype.show = function () {
    if (!this.element) {
      this.createContainerElement();
      if (this.props.options) {
        $(this.element).modal(this.props.options);
      } else {
        $(this.element).modal();
      }
    } else {
      $(this.element).modal("show");
    }
    if (this.props.title) {
      $(this.titleElement).show();
      this.titleElement.innerHTML = this.props.title;
    } else {
      $(this.titleElement).hide();
    }
    if (this.props.body) {
      $(this.bodyElement).show();
      this.bodyElement.innerHTML = this.props.body;
    } else {
      $(this.bodyElement).hide();
    }
    if (this.props.footer) {
      $(this.footerElement).show();
      this.footerElement.innerHTML = this.props.footer;
    } else {
      $(this.footerElement).hide();
    }
  };

  Modal.prototype.hide = function () {
    $(this.element).modal("hide");
  };

  Modal.prototype.dispose = function () {
    $(this.element).modal("dispose");
    document.body.removeChild(this.element);
    if (this.props.onDispose) {
      this.props.onDispose(this);
    }
  };

  $.extend({
    showModal: function (props) {
      if (props.buttons) {
        var footer = "";
        for (var key in props.buttons) {
          // noinspection JSUnfilteredForInLoop
          var buttonText = props.buttons[key];
          footer +=
            '<button type="button" class="btn btn-primary" data-value="' +
            key +
            '" data-dismiss="modal">' +
            buttonText +
            "</button>";
        }
        props.footer = footer;
      }
      return new Modal(props);
    },
    showAlert: function (props) {
      props.buttons = { OK: "OK" };
      return this.showModal(props);
    },
    showConfirm: function (props) {
      props.footer =
        '<button class="btn btn-secondary btn-false btn-cancel">' +
        props.textFalse +
        '</button><button class="btn btn-primary btn-true">' +
        props.textTrue +
        "</button>";
      props.onCreate = function (modal) {
        $(modal.element).on("click", ".btn", function (event) {
          event.preventDefault();
          modal.hide();
          modal.props.onSubmit(event.target.getAttribute("class").indexOf("btn-true") !== -1, modal);
        });
      };
      return this.showModal(props);
    },
  });
})(jQuery);
