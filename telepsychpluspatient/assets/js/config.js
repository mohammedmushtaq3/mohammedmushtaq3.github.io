// const CORS = "https://cors-anywhere.herokuapp.com/";
sessionStorage.clear();

window._config = {
  cognito: {
    userPoolId: "us-east-1_InedFezwr",
    region: "us-east-1",
    clientId: "2g2q4svd2pg3lro7jv9ae5q59h",
  },
};

const CORS = "";

const ENDPOINT = "https://api.ahmedalnajjar.com/dev";

let poolData = {
  UserPoolId: _config.cognito.userPoolId,
  ClientId: _config.cognito.clientId,
};

$(document).on("click", ".appt", function (e) {
  var action = $(this).data("action");
  var id = $(this).data("id");
  console.log("button clicked data - ", action, id);

  if (action === "confirm") {
    confirmAppointment(id);
  }
  if (action === "invoice") {
    showInvoice(id);
  }
  if (action === "reschedule") {
    rescheduleAppointment(id);
  }
});

function confirmAppointment(event_id) {
  $.showConfirm({
    title: "Appointment Confirmation",
    body: "Do you want to confirm this appointment",
    textTrue: "CONFIRM",
    textFalse: "CANCEL",
    onSubmit: function (result) {
      if (result) {
        //write logic for confirm appointment
        $.toast({
          icon: "success",
          text: "<p class='p-3'>Appointment Confirmed</p>",
          delay: "3000",
          position: "top-right",
          dismissible: false,
        });
      }
    },
  });
}

function showInvoice(id) {
  getResponse("/admin/users", { filter_name: "sub", filter_value: id }, null);

  var htmlPage = `<html><head>${bootstrapCDN}${style}</head><body>${renderInvoice()}</body></html>`;

  $.showModal({
    title:
      "INVOICE <button class='btn btn-sm btn-primary position-absolute print' style='right:50px;'>PRINT</button>",
    body: `<iframe id="printContent" name="printContent" height="500" srcdoc='${htmlPage}'></iframe>`,
  });
  var child = $("iframe#printContent").height();
  var parent = $("iframe#printContent").parent().height(500);
  console.log(parent);
}

$("#form-reset").on("click", function () {
  $("#patient-select").empty();
});

$("#patient-select").on("select2:select", function (e) {
  var id = e.params.data.id;
  var url = ENDPOINT + "/admin/users?filter_name=sub&filter_value=" + id;
  $.get(url, function (result) {
    $("#patient-email").val(result.data[0].email);
  });
});

// $(".datepicker").datepicker();

// if (!Modernizr.touch) {
//   // console.log(Modernizr.touch);
//   //if not a touch device initilize datepicker
//   $("#start-time,#end-time").attr("type", "text");
//   $("#start-date,#end-date").attr("type", "text");
//   $(".datetimepicker").datetimepicker({
//     icons: {
//       time: "fa fa-clock-o",
//       date: "fa fa-calendar",
//       up: "fa fa-chevron-up",
//       down: "fa fa-chevron-down",
//     },
//     daysOfWeekDisabled: [5],
//     // inline: true,
//     sideBySide: true,
//   });

//   $("#start-time").datetimepicker();
//   $("#end-time").datetimepicker({
//     useCurrent: false, //Important! See issue #1075
//   });
//   $("#start-time").on("dp.change", function (e) {
//     $("#end-time").data("DateTimePicker").minDate(e.date);
//   });
//   $("#end-time").on("dp.change", function (e) {
//     $("#start-time").data("DateTimePicker").maxDate(e.date);
//   });
// } else {
//   $("#start-time,#end-time").attr("type", "datetime-local");
//   $("#start-date,#end-date").attr("type", "date");
// }

function getResponse(link, formData, callback) {
  $.ajax({
    url: CORS + ENDPOINT + link,
    type: "get",
    dataType: "json",
    data: formData,
    contentType: "application/json",
  })
    .done(function (res) {
      callback(res);
    })
    .fail(function (error) {
      console.log("error -", error);
    });
  // .always(function (result) {});
}

function getSyncResponse(link, formData) {
  $.ajax({
    url: CORS + ENDPOINT + link,
    type: "get",
    dataType: "json",
    data: formData,
    async: false,
    contentType: "application/json",
  })
    .done(function (res) {
      return res;
    })
    .fail(function (err) {
      console.log("error -", err);
      return err;
    });
  // .always(function (result) {});
}

// if ($(".tel-phone-input").length) {
//   $(".tel-phone-input").intlTelInput({
//     preferredCountries: ["ae"],
//     utilsScript:
//       "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.8/build/js/utils.js",
//   });
// }

function findAge(birthdate) {
  return moment().diff(birthdate, "years", false);
}

function renderUserHtml(data) {
  var htmlContent = `<div class="row m-1 py-3 small rounded shadow">
                <div class="col-sm-auto text-center">
                  <img class="w-100" style="max-width: 100px;" src=${
                    data.picture != null
                      ? data.picture
                      : "./assets/img/user.svg"
                  } />
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col">
                        <h6 class="text-capitalize mb-0 font-weight-bold">
                        ${data.given_name != null ? `${data.given_name} ` : ""}
                        ${
                          data.middle_name != null ? `${data.middle_name} ` : ""
                        }
                        ${
                          data.family_name != null ? `${data.family_name} ` : ""
                        }
                        </h6>
                            <p>${data.email}</p>
                            ${
                              data.birthdate != null
                                ? `<p class="mb-0"><strong>DOB</strong>: ${data.birthdate}</p>`
                                : ""
                            }
                            ${
                              data.birthdate != null
                                ? `<p class="mb-0"><strong>Age</strong>: ${findAge(
                                    data.birthdate
                                  )} Years</p>`
                                : ""
                            }
                        </div>
                        <div class="col">
                        ${
                          data.locale != null
                            ? `<p class="mb-0"><strong>Nationality</strong>: ${data.locale}</p>`
                            : ""
                        }
                            ${
                              data.phone_number != null
                                ? `<p class="mb-0"><strong>Phone</strong>: ${data.phone_number}</p>`
                                : ""
                            }
                            ${
                              data.address != null
                                ? `<p class="mb-0"><strong>Address</strong>: ${data.address}</p>`
                                : ""
                            }
                            ${
                              data.preferred_username != null
                                ? `<p class="mb-0"><strong>Emirates ID</strong>: ${data.preferred_username}</p>`
                                : ""
                            }
                        </div>
                    </div>
                </div>
            </div>`;
  return htmlContent;
}

function eventTimeToString(startTime, endTime) {
  let start = moment(startTime).format("LL");
  let end = moment(endTime).format("LT");
  return `${start} - ${end}`;
}

function serviceDetails(service) {
  var text = `${
    service.service_type != null ? `${service.service_type} | ` : ""
  } 
  ${service.service_amount != null ? `${service.service_amount}` : ""}
  ${service.service_currency != null ? `${service.service_currency} | ` : ""}
  ${
    service.service_duration != null ? `${service.service_duration} min | ` : ""
  }
  ${service.service_desc != null ? `${service.service_desc} ` : ""};
  `;
  return text;
}

function renderAppointmentHtml(event) {
  htmlContent = `<div class="row m-1 py-3 small rounded shadow" >
    <div class="col">
        <div class="row">
            <div class="col">
                <p class="font-weight-bold mb-0" style="font-size:1rem;">Meeting with ${
                  event.extendedProperties.private.patient_email || "-"
                }</p>
                <p class="mb-2">${eventTimeToString(
                  event.start.dateTime,
                  event.end.dateTime
                )}</p>
            </div>
            <div class="col-auto">
                <p class="mb-1"><strong>File No. </strong> ${
                  event.extendedProperties.private.file_no
                }</p>
            </div>
        </div>
        <p class="mb-1"><strong>Chief Complaint: </strong> ${
          event.extendedProperties.private.chief_complaint || "-"
        }</p>
        <p class="mb-1"><strong>Location: </strong> ${event.location || "-"}</p>
        <p class="mb-1"><strong>Service Details: </strong> ${serviceDetails(
          event.extendedProperties.private
        )} 
        </p>`;
  if (event.organizer.email == event.extendedProperties.private.creator_email) {
    htmlContent += `<p class="mb-0"><strong>Doctor: </strong>${
      event.organizer.displayName || event.organizer.email
    }</p>`;
  } else {
    htmlContent += `<p class="mb-0"><strong>Doctor: </strong>${
      event.organizer.email
    }</p>
                    <p class="mb-1">Created By ${
                      event.organizer.displayName || event.organizer.email
                    }</p>`;
  }

  htmlContent += `<div class="row">
                    <div class="col">
                        <p class="mb-1"><strong>Status: </strong>${event.extendedProperties.private.status}</p>`;

  if (event.extendedProperties.private.meeting_link != null) {
    htmlContent += `<p class="mb-1"><strong>Meeting: </strong><a href="${event.extendedProperties.private.meeting_link}" target="_blank" >Start Meeting</a></p>`;
  }

  htmlContent += `</div>`;
  htmlContent += `  <div class="col">`;

  if (event.extendedProperties.private.payment_ref != null) {
    htmlContent += `    <p class="mb-1"><strong>Payment Ref: </strong> ${event.extendedProperties.private.payment_ref} </p>`;
  }

  if (event.extendedProperties.private.amount != null) {
    htmlContent += `    <p class="mb-1"><strong>Payment Type: </strong> ${event.extendedProperties.private.payment_type} </p>`;
  }

  htmlContent += `   </div>`;
  htmlContent += `</div>`;

  if (event.extendedProperties.private.status == "reschedule") {
    htmlContent += `<button class="btn btn-outline-primary appt btn-sm m-1" type="button" data-action="confirm" data-id='${event.id}'>CONFIRM</button>`;
  }

  if (
    event.extendedProperties.private.payment_status != null &&
    event.extendedProperties.private.payment_status == "paid"
  ) {
    htmlContent += `<button class="btn btn-outline-primary appt btn-sm m-1" type="button" data-action="invoice" data-id='${event.id}' >INVOICE</button>`;
  }

  htmlContent += `<button class="btn btn-outline-primary appt btn-sm m-1" type="button" data-action="reschedule" data-id='${event.id}'>RESCHEDULE</button>
                </div>
        </div>`;
  return htmlContent;
}

function renderInvoice(data) {
  var htmlContent = `<div class="row">
                      <div class="col-12 text-center"><img src="./assets/img/araa-consultancy-and-studies-logo.png" />
                          <p class="mb-0">Experience Most Compassionate Healthcare in UAE</p>
                          <p class="mb-0">Under the</p>
                          <p class="font-weight-bold mb-5">Leadership of Dr. Ahmed Alnajjar</p>
                      </div>
                      <div class="col-12">
                          <div class="row mb-5">
                              <div class="col">
                                  <p>Name: Mohammed Salman</p>
                                  <p>Email : mohammedsalman0258@gmail.com</p>
                                  <p>Age: 41 Years</p>
                                  <p>Appointment : 30/1/2021 03:00 PM - 3:30 PM</p>
                                  <p>Chief Complaint : Depression</p>
                              </div>
                              <div class="col-auto">
                                  <p>File No. 168254858774</p>
                                  <p>Doctor: Dr. Ahmed Alnajjar</p>
                              </div>
                          </div>
                          <div class="table-responsive">
                              <table class="table">
                                  <thead>
                                      <tr>
                                          <th>Description</th>
                                          <th>Price</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>Video Call</td>
                                          <td>500 AED</td>
                                      </tr>
                                  </tbody>
                                  <tfoot>
                                      <tr>
                                          <td>Total</td>
                                          <td>500 AED</td>
                                      </tr>
                                  </tfoot>
                              </table>
                          </div>
                      </div>
                    </div>`;
  htmlContent += `<footer class="sticky-footer w-100 text-center">
                      <p class="mb-0 font-weight-bold">Araa Consultancy and Studies</p>
                      <p class="mb-0">Unit 201, DBCS Building Al Gar houd 13866 Dubai 941, Tel: +971 ---------------</p>
                      <p class="mb-0">Email: ahmedalnajjar@ahmedalnajjar.com web: www.ahmedalnajjar.com</p>
                  </footer>`;
  return htmlContent;
}
