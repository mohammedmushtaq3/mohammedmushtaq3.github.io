getResponse(
  "/admin/appointments",
  // null,
  {
    // timeMax: `${moment().format("YYYY-MM-DD")}`,
    patient_id: sessionStorage.getItem("uid"),
  },
  listAppointments
);

$("#appointments-filter-form").on("submit", function (e) {
  e.preventDefault();
  let formData = form2js(this, ".", true, null);
  console.log(formData);
  getResponse("/admin/appointments", formData, listAppointments);
});

function listAppointments(res) {
  $("#appointments-list").html("");
  res.events.forEach((event) => {
    $("#appointments-list").append(renderAppointmentHtml(event));
  });
}
