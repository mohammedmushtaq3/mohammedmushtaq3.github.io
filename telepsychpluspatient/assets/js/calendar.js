var calendarEl = document.getElementById("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, {
  // schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
  //timeZone: "local",
  //height: "80vh",
  //contentHeight: 400,
  expand: true,
  navLinks: true,
  nowIndicator: true,
  selectable: true,
  selectOverlap: false,
  dayMaxEvents: true,
  stickyHeaderDates: true,
  initialView: "timeGridDay",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridDay",
  },
  slotEventOverlap: false,
  slotDuration: { minutes: 30 },
  select: function (info) {
    // console.log("information - ", info);
    let dateTimeNow = new Date();
    let startDateTime = new Date(info.startStr);
    let endDateTime = new Date(info.endStr);
    if (
      (info.view.type == "timeGridDay" ||
        info.view.type == "resourceTimeGridDay") &&
      startDateTime > dateTimeNow
    ) {
      $("#patient-id").val(sessionStorage.getItem("uid"));
      $("#patient-email").val(sessionStorage.getItem("email"));
      $("#new-appointment-modal").modal("show");
      $("#new-appointment-modal input[name='start']").val(
        moment(startDateTime).format("YYYY-MM-DDTHH:mm")
      );
      $("#new-appointment-modal input[name='end']").val(
        moment(endDateTime).format("YYYY-MM-DDTHH:mm")
      );
    } else {
      $.toast({
        icon: "warning",
        text: "<p class='p-3'>Cannot Select Past Slot</p>",
        delay: "3000",
        position: "top-right",
        dismissible: false,
      });
    }
  },
  eventSources: [
    {
      googleCalendarId: "sims2020@ahmedalnajjar.com",
      googleCalendarApiKey: "AIzaSyCfv18Yh96KZSjrfF0YVCpdmdmltvtPNNA",
      className: "gcal-event",
    },
  ],
  eventDataTransform: function (data) {
    data.title = "BUSY";
    delete data.url;
    delete data.description;
    delete data.location;
    // console.log(data);
    return data;
  },
  eventClick: function (arg) {
    arg.jsEvent.preventDefault();
  },
});
calendar.render();

// $(".fc-timegrid-slot.fc-timegrid-slot-lane").on("dblclick", function (e) {
//   var eventDate = $(e.relatedTarget).data("time");
//   console.log("calendar date ", eventDate);
// });

$("#create-appointment-form").on("submit", function (e) {
  e.preventDefault();
  // console.log("new appointment details - ", form2js(this, ".", true, null));
  let formData = form2js(this, ".", true, null);

  formData.start = new Date(formData.start).toISOString();
  formData.end = new Date(formData.end).toISOString();
  console.log(formData);
  $.ajax({
    url: ENDPOINT + "/appointments",
    method: "POST",
    crossDomain: true,
    dataType: "json",
    data: JSON.stringify(formData),
    processData: false,
  })
    .done(function (res) {
      if (res.errorMessage != null) {
        $(".error-msg")
          .removeClass("d-none")
          .html(
            `Appointment Created Successfully.\nUnable to save appointment details to DB.\nTake a photo and report to Development Team.\nError: ${res.errorMessage}`
          );
      } else if (res.statusCode != 201 || res.hasOwnProperty("message")) {
        $(".error-msg").removeClass("d-none").html(res.message);
        return;
      }
      $(".modal").modal("hide");
      $.toast({
        icon: "success",
        text: "<p class='p-3'>Appointment Registered Successful</p>",
        delay: "5000",
        position: "top-right",
        dismissible: false,
      });
      $("#create-user").trigger("reset");
      calendar.refetchEvents();
    })
    .fail(function (error) {
      console.log("error - ", error);
      $.toast({
        icon: "danger",
        text: "<p class='p-3'>Appointment Registration Failed</p>",
        delay: "3000",
        position: "top-right",
        dismissible: false,
      });
    });
});
