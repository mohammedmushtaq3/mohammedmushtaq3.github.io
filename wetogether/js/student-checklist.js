/*jshint esversion: 6 */

let default_survey = {
  statusCode: 200,
  body: {
    created: "2021-06-10T22:48:01.169Z",
    updated: "2021-06-10T22:48:01.169Z",
    sections: [
      {
        questions: [
          {
            en: "Have you recently been feeling perfectly well and in good health",
            ar: "",
            labels: [
              { label: { en: "Better than usual", ar: "", value: 1 } },
              { label: { en: "Same as usual", ar: "", value: 2 } },
              { label: { en: "Worse tan usual", ar: "", value: 3 } },
              { label: { en: "Much worse than usual", ar: "", value: 4 } },
            ],
          },
        ],
        questions: [
          {
            en: "Have you recently been feeling in need of a good tonic?",
            ar: "",
            labels: [
              { label: { en: "Not at all", ar: "", value: 1 } },
              { label: { en: "No more than usual", ar: "", value: 2 } },
              { label: { en: "Rather more than usual", ar: "", value: 3 } },
              { label: { en: "Much more than usual", ar: "", value: 4 } },
            ],
          },
        ],
        questions: [
          {
            en: "Have you recently been feeling rundown and out of sorts",
            ar: "",
            labels: [
              { label: { en: "Not at all", ar: "", value: 1 } },
              { label: { en: "No more than usual", ar: "", value: 2 } },
              { label: { en: "Rather more than usual", ar: "", value: 3 } },
              { label: { en: "Much more than usual", ar: "", value: 4 } },
            ],
          },
        ],
        title: { en: "", ar: "" },
        sectionType: "scale",
      },
    ],
    description: "Student Checklist",
    name: "student-checklist",
  },
};
