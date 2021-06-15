/*jshint esversion: 6 */

const student_alpha_test = {
  statusCode: 200,
  body: {
    created: "2021-06-10T22:48:01.169Z",
    updated: "2021-06-10T22:48:01.169Z",
    sections: [
      {
        questions: [
          {
            en: "Do You Have Variety Of Hobbies?",
            ar: "هل لديك هوايات متنوعة؟",
          },
          {
            en: "Are You Always Full Of Energy?",
            ar: "هل أنت دائما مليء بالطاقة؟",
          },
          {
            en: "Do You Consider You Self A Comfortable Person And Never Worries Controls You?",
            ar: "هل تعتبر نفسك شخصًا مريحًا ولا يتحكم بك القلق؟",
          },
          {
            en: "Do You Always Make New Friends?",
            ar: "هل تصنع دائما صداقات جديدة؟",
          },
          {
            en: "Can You Easily Turn A Bored Social Gathering To Be Full Of Joy And Happiness?",
            ar: "هل يمكنك تحويل لقاء اجتماعي مٌمل بسهولة إلى المتعة والسعادة؟",
          },
          {
            en: "Do You Like Mixing With People Always?",
            ar: "هل تحب الاختلاط بالناس دائما؟",
          },
          {
            en: "Do You Have A Ready Answers When People Talk To You? All The Time",
            ar: "هل لديك إجابات جاهزة عندما يتحدث الناس إليك طوال الوقت؟",
          },
          {
            en: "Are You Always On The Right Side And Your Decisions Never Go Wrong?",
            ar: "هل أنت دائمًا على الجانب الصحيح وقراراتك لا تخطىء أبدًا؟",
          },
          {
            en: "Would You Like The Sand Noise To Surround You Always?",
            ar: "هل تحب الضوضاء الرملية ان تحيط بك دائمًا؟",
          },
          {
            en: "Have You Ever Lied Never?",
            ar: "هل لم تكذب ابدا؟",
          },
        ],
        sectionType: "boolean",
        title: { en: "Describe Your Self", ar: "صف نفسك" },
        label: {
          en: "",
          ar: "",
        },
      },
    ],
    description: "Student Alpha Test",
    name: "student-alpha-test",
  },
};

const student_phq = {
  statusCode: 200,
  body: {
    created: "2021-06-10T22:48:01.169Z",
    updated: "2021-06-10T22:48:01.169Z",
    sections: [
      {
        questions: [
          {
            question: 1,
            en: "Have you recently been feeling perfectly well and in good health",
            ar: "تحس بأنك في أحسن حال و صحة جيدة.",
            labels: [
              {
                label: {
                  en: "Better than usual",
                  ar: "احسن من المعتاد",
                  value: "somatic-symptoms#0",
                },
              },
              {
                label: {
                  en: "Same as usual",
                  ar: "كالمعتاد",
                  value: "somatic-symptoms#1",
                },
              },
              {
                label: {
                  en: "Worse than usual",
                  ar: "اسوأ من المعتاد",
                  value: "somatic-symptoms#2",
                },
              },
              {
                label: {
                  en: "Much worse than usual",
                  ar: "أسوأ بكثير من المعتاد",
                  value: "somatic-symptoms#3",
                },
              },
            ],
          },
          {
            question: 2,
            en: "Have you recently been feeling in need of a good tonic?",
            ar: "تشعر بأنك في حاجة لمنشط أو مقوٍ.",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "somatic-symptoms#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "somatic-symptoms#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "somatic-symptoms#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "somatic-symptoms#3",
                },
              },
            ],
          },
          {
            question: 3,
            en: "Have you recently been feeling rundown and out of sorts",
            ar: "تحس بالإنهاك وبأنك متوعك",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "somatic-symptoms#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "somatic-symptoms#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "somatic-symptoms#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "somatic-symptoms#3",
                },
              },
            ],
          },
          {
            question: 4,
            en: "Have you recently felt that you are ill?",
            ar: "تشعر بأنك مريض",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "somatic-symptoms#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "somatic-symptoms#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "somatic-symptoms#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "somatic-symptoms#3",
                },
              },
            ],
          },
          {
            question: 5,
            en: "Have you recently been geeting any pains in your head?",
            ar: "تحس بآلام في رأسك",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "somatic-symptoms#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "somatic-symptoms#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "somatic-symptoms#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "somatic-symptoms#3",
                },
              },
            ],
          },
          {
            question: 6,
            en: "Have you recently been getting a feeling of tightness or pressure in your head?",
            ar: "تشعر بضغط وتوتر في الرأس",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "somatic-symptoms#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "somatic-symptoms#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "somatic-symptoms#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "somatic-symptoms#3",
                },
              },
            ],
          },
          {
            question: 7,
            en: "Have you recently been having hot or cold spells?",
            ar: "تنتابك نوبات برد أو سخونة",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "somatic-symptoms#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "somatic-symptoms#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "somatic-symptoms#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "somatic-symptoms#3",
                },
              },
            ],
          },
          {
            question: 8,
            en: "Have you recently lost much sleep over worry?",
            ar: "لم تنم بما فيه الكفاية بسبب القلق",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "anxiety-insomnia#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "anxiety-insomnia#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "anxiety-insomnia#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "anxiety-insomnia#3",
                },
              },
            ],
          },
          {
            question: 9,
            en: "Have you recently had difficulty in staying asleep once your are off?",
            ar: "تجد صعوبة في البقاء نائماً بعد الخلود إلى النوم ",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "anxiety-insomnia#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "anxiety-insomnia#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "anxiety-insomnia#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "anxiety-insomnia#3",
                },
              },
            ],
          },
          {
            question: 10,
            en: "Have you recently been managing to keep yourself busy and occupied?",
            ar: "قادر على شغل نفسك أو البقاء منشغلاً",
            labels: [
              {
                label: {
                  en: "More so than usual",
                  ar: "أكثر من المعتاد",
                  value: "social-dysfunction#0",
                },
              },
              {
                label: {
                  en: "Same as usual",
                  ar: "كالمعتاد",
                  value: "social-dysfunction#1",
                },
              },
              {
                label: {
                  en: "Less so than usual",
                  ar: "أقل من المعتاد",
                  value: "social-dysfunction#2",
                },
              },
              {
                label: {
                  en: "Much less than usual",
                  ar: "أقل بكثير من المعتاد",
                  value: "social-dysfunction#3",
                },
              },
            ],
          },
          {
            question: 11,
            en: "Have you recently been taking longer over the things you do?",
            ar: "تأخذ وقتاً أطول لإنجاز الأشياء التي تفعلها",
            labels: [
              {
                label: {
                  en: "Quicker than usual",
                  ar: "أسرع من المعتاد",
                  value: "social-dysfunction#0",
                },
              },
              {
                label: {
                  en: "Same as usual",
                  ar: "كالمعتاد",
                  value: "social-dysfunction#1",
                },
              },
              {
                label: {
                  en: "Longer than usual",
                  ar: "أطول من المعتاد",
                  value: "social-dysfunction#2",
                },
              },
              {
                label: {
                  en: "Much longer than usual",
                  ar: "أطول بكثير من المعتاد",
                  value: "social-dysfunction#3",
                },
              },
            ],
          },
          {
            question: 12,
            en: "Have you recently felt on the whole you were doing things well?",
            ar: "تحس بصفة عامة أنك تؤدى أو تفعل الأشياء بصورة جيدة",
            labels: [
              {
                label: {
                  en: "Better than usual",
                  ar: "أحسن من المعتاد",
                  value: "social-dysfunction#0",
                },
              },
              {
                label: {
                  en: "About the same",
                  ar: "كالمعتاد",
                  value: "social-dysfunction#1",
                },
              },
              {
                label: {
                  en: "Less well than usual",
                  ar: "أسوء من المعتاد",
                  value: "social-dysfunction#2",
                },
              },
              {
                label: {
                  en: "Much less well",
                  ar: "أسوأ بكثير من المعتاد",
                  value: "social-dysfunction#3",
                },
              },
            ],
          },
          {
            question: 13,
            en: "Have you recently been satisfied with the way you've carried out your task?",
            ar: "راض عن الطريقة أو الكيفية التي تؤدى بها عملك أو واجبك",
            labels: [
              {
                label: {
                  en: "More satisfied",
                  ar: "أكثر رضاً",
                  value: "social-dysfunction#0",
                },
              },
              {
                label: {
                  en: "About same as usual",
                  ar: "كالمعتاد",
                  value: "social-dysfunction#1",
                },
              },
              {
                label: {
                  en: "Less satisfied than usual",
                  ar: "أقل رضاً من المعتاد",
                  value: "social-dysfunction#2",
                },
              },
              {
                label: {
                  en: "Much less satisfied",
                  ar: "أقل بكثير من المعتاد",
                  value: "social-dysfunction#3",
                },
              },
            ],
          },
          {
            question: 14,
            en: "Have you recently felt that you are playing a useful part in things?",
            ar: "تشعر أنك تقوم بدور فعال في الأحداث و الأشياء",
            labels: [
              {
                label: {
                  en: "More so than usual",
                  ar: "أكثر من المعتاد",
                  value: "social-dysfunction#0",
                },
              },
              {
                label: {
                  en: "Same as usual",
                  ar: "كالمعتاد",
                  value: "social-dysfunction#1",
                },
              },
              {
                label: {
                  en: "Less so than usual",
                  ar: "أقل من المعتاد",
                  value: "social-dysfunction#2",
                },
              },
              {
                label: {
                  en: "Much less than usual",
                  ar: "أقل بكثير من المعتاد",
                  value: "social-dysfunction#3",
                },
              },
            ],
          },
          {
            question: 15,
            en: "Have you recently felt capable of making decisions about things?",
            ar: "تحس بأنك قادر على إتخاذ قرارات تجاه ما يدور من حولك",
            labels: [
              {
                label: {
                  en: "More so than usual",
                  ar: "أكثر من المعتاد",
                  value: "social-dysfunction#0",
                },
              },
              { label: { en: "Same as usual", ar: "كالمعتاد", value: 1 } },
              {
                label: {
                  en: "Less so than usual",
                  ar: "أقل من المعتاد",
                  value: "social-dysfunction#2",
                },
              },
              {
                label: {
                  en: "Much less than usual",
                  ar: "أقل بكثير من المعتاد",
                  value: "social-dysfunction#3",
                },
              },
            ],
          },
          {
            question: 16,
            en: "Have you recently felt constantly understrain?",
            ar: "تشعر باستمرار بأنك منهك",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "anxiety-insomnia#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "anxiety-insomnia#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "anxiety-insomnia#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "anxiety-insomnia#3",
                },
              },
            ],
          },
          {
            question: 17,
            en: "Have you recently been able to enjoy your normal day-to-day activities?",
            ar: "تستطيع أن تستمع بنشاطاتك اليومية العادية ",
            labels: [
              {
                label: {
                  en: "More so than usual",
                  ar: "أكثر من المعتاد",
                  value: "social-dysfunction#0",
                },
              },
              { label: { en: "Same as usual", ar: "كالمعتاد", value: 1 } },
              {
                label: {
                  en: "Less so than usual",
                  ar: "أقل من المعتاد",
                  value: "social-dysfunction#2",
                },
              },
              {
                label: {
                  en: "Much less than usual",
                  ar: "أقل بكثير من المعتاد",
                  value: "social-dysfunction#3",
                },
              },
            ],
          },
          {
            question: 18,
            en: "Have you recently been getting edgy and bad-tempered?",
            ar: "تكون منفعلاً ومعكر المزاج",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "anxiety-insomnia#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "anxiety-insomnia#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "anxiety-insomnia#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "anxiety-insomnia#3",
                },
              },
            ],
          },
          {
            question: 19,
            en: "Have you recently been getting scared or panicky for no good reason?",
            ar: "تكون خائفاً أو مذعوراً دون سبب مقنع",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "anxiety-insomnia#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "anxiety-insomnia#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "anxiety-insomnia#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "anxiety-insomnia#3",
                },
              },
            ],
          },
          {
            question: 20,
            en: "Have you recently found everything getting on top of you?",
            ar: "تجد أن كل شئ يفلت منك أو لا تستطيع التحكم فيه",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "anxiety-insomnia#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "anxiety-insomnia#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "anxiety-insomnia#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "anxiety-insomnia#3",
                },
              },
            ],
          },
          {
            question: 21,
            en: "Have you recently been thinking of yourself as a worthless person?",
            ar: "تعتقد أنك شخص لا قيمة له",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "servere-depression#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "servere-depression#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "servere-depression#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "servere-depression#3",
                },
              },
            ],
          },
          {
            question: 22,
            en: "Have you recently felt that life is entirely hopeless?",
            ar: "تشعر بأن الحياة لا أمل فيها البتة",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "servere-depression#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "servere-depression#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "servere-depression#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "servere-depression#3",
                },
              },
            ],
          },
          {
            question: 23,
            en: "Have you recently been feeling nervous astrung-up all the time?",
            ar: "تحس بالتوتر والشد في كل الأوقات",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "anxiety-insomnia#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "anxiety-insomnia#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "anxiety-insomnia#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "anxiety-insomnia#3",
                },
              },
            ],
          },
          {
            question: 24,
            en: "Have you recently felt that life isn't worthliving?",
            ar: "تشعر أن الحياة لا تستحق العيش",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "servere-depression#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "servere-depression#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "servere-depression#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "servere-depression#3",
                },
              },
            ],
          },
          {
            question: 25,
            en: "Have you recently thought of the possibility that you might make away with yourself?",
            ar: "ينتابك التفكير بأن تنهي حياتك",
            labels: [
              {
                label: {
                  en: "Definitly not",
                  ar: "بالتأكيد لا",
                  value: "servere-depression#0",
                },
              },
              {
                label: {
                  en: "I don't think so",
                  ar: "لا أعتقد ذلك",
                  value: "servere-depression#1",
                },
              },
              {
                label: {
                  en: "Has crossed my mind",
                  ar: "فكرت في ذلك",
                  value: "servere-depression#2",
                },
              },
              {
                label: {
                  en: "Definitely has",
                  ar: "بالتأكيد فكرت في ذلك",
                  value: "servere-depression#3",
                },
              },
            ],
          },
          {
            question: 26,
            en: "Have you recently found at times you couldn't do anything because your nerves were too bad?",
            ar: "تجد أنه ليس بإمكانك فعل أي شئ في بعض الأحيان لأن أعصابك تعبة جداً",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "servere-depression#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "servere-depression#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "servere-depression#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "servere-depression#3",
                },
              },
            ],
          },
          {
            question: 27,
            en: "Have you recently found yourself wishing you were dead and away from it all?",
            ar: "تجد أنك تتمنى لو أنك ميت وبعيد عن كل شئ",
            labels: [
              {
                label: {
                  en: "Not at all",
                  ar: "لا",
                  value: "servere-depression#0",
                },
              },
              {
                label: {
                  en: "No more than usual",
                  ar: "ليس أكثر من المعتاد",
                  value: "servere-depression#1",
                },
              },
              {
                label: {
                  en: "Rather more than usual",
                  ar: "أكثر من المعتاد",
                  value: "servere-depression#2",
                },
              },
              {
                label: {
                  en: "Much more than usual",
                  ar: "أكثر من المعتاد بكثير",
                  value: "servere-depression#3",
                },
              },
            ],
          },
          {
            question: 28,
            en: "Have you recently found that the idea of taking your own life keptcoming into your mind?",
            ar: "تجد أن فكرة الإنتحار تراودك أو تتردد فيرأسك",
            labels: [
              {
                label: {
                  en: "Definitly not",
                  ar: "بالتأكيد لا",
                  value: "servere-depression#0",
                },
              },
              {
                label: {
                  en: "I don't think so",
                  ar: "لا أعتقد ذلك",
                  value: "servere-depression#1",
                },
              },
              {
                label: {
                  en: "Has crossed my mind",
                  ar: "فكرت في ذلك",
                  value: "servere-depression#2",
                },
              },
              {
                label: {
                  en: "Definitely has",
                  ar: "بالتأكيد فكرت في ذلك",
                  value: "servere-depression#3",
                },
              },
            ],
          },
        ],
        title: {
          en: "General Health Questionnaire",
          ar: "استبيان الصحة العامة ",
        },
        sectionType: "scale",
      },
    ],
    description: "Student Psychological Health Questionnaire",
    name: "student-phq",
  },
};

const student_stq = {
  statusCode: 200,
  body: {
    created: "2021-06-10T22:48:01.169Z",
    updated: "2021-06-10T22:48:01.169Z",
    sections: [
      {
        questions: [
          {
            question: 1,
            en: "When I am with a large group of people, I often ____________",
            ar: "عندما أتواجد مع مجموعة كبيرة من الأشخاص ، فإنني في الغالب",
            labels: [
              {
                label: {
                  en: "I speak",
                  ar: "أتحدث",
                  value: 0,
                },
              },
              {
                label: {
                  en: "Listen",
                  ar: "أستمع",
                  value: 1,
                },
              },
            ],
          },
          {
            question: 2,
            en: "When I plan to be away from home for a few days, I ___________",
            ar: "عندما أخطط للإبتعاد عن البيت لعدة أيام، فإنني",
            labels: [
              {
                label: {
                  en: "I put my things in my bag right before I leave",
                  ar: "أضع حاجياتي في حقيبتي مباشرة قبل أن أغادر",
                  value: 0,
                },
              },
              {
                label: {
                  en: "Make a list of things I will take with me",
                  ar: "أجهز قائمة بالأشياء التي سوف آخدها معي",
                  value: 1,
                },
              },
            ],
          },
          // {question:0,
          //   en: "",
          //   ar: "",
          //   labels: [
          //     {
          //       label: {
          //         en: "",
          //         ar: "",
          //         value: 0,
          //       },
          //     },
          //     {
          //       label: {
          //         en: "",
          //         ar: "",
          //         value:1,
          //       },
          //     },
          //   ],
          // },
        ],
        sectionType: "scale",
        title: { en: "", ar: "" },
      },
    ],
    description: "Student STQ",
    name: "student-stq",
  },
};
