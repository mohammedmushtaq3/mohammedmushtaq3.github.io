/*jshint esversion: 6 */
/*jshint esversion: 8 */

const student_alpha_test = {
  statusCode: 200,
  body: {
    created: "2021-06-10T22:48:01.169Z",
    updated: "2021-06-10T22:48:01.169Z",
    sections: [
      {
        questions: [
          {
            question: 1,
            en: "Do you have variety of hobbies?",
            ar: "هل لديك هوايات متنوعة؟",
            labels: [
              { en: "yes", ar: "نعم", value: "yes" },
              { en: "no", ar: "لا", value: "no" },
            ],
          },
          {
            question: 2,
            en: "Are you always full of energy?",
            ar: "هل أنت دائما مليء بالطاقة؟",
            labels: [
              { en: "yes", ar: "نعم", value: "yes" },
              { en: "no", ar: "لا", value: "no" },
            ],
          },
          {
            question: 3,
            en: "Have you ever taken anything (even a pencil or an eraser) that belonged to someone else?",
            ar: "هل سبق لك أن أخذت شيئًا (حتى لو كان ممحاة أو قلما) يخص شخصًا آخر؟",
            labels: [
              { en: "yes", ar: "نعم", value: "no" },
              { en: "no", ar: "لا", value: "yes" },
            ],
          },
          {
            question: 4,
            en: "Do you always make new friends?",
            ar: "هل تُكون دائما صداقات جديدة؟",
            labels: [
              { en: "yes", ar: "نعم", value: "yes" },
              { en: "no", ar: "لا", value: "no" },
            ],
          },
          {
            question: 5,
            en: "Have You Ever Cheated at a game?",
            ar: "هل سبق أن قمت بالغش أثناء ممارسة لعبة ما",
            labels: [
              { en: "yes", ar: "نعم", value: "no" },
              { en: "no", ar: "لا", value: "yes" },
            ],
          },
          {
            question: 6,
            en: "Do you often interact with people?",
            ar: "هل تحب التعامل مع الناس دائما؟",
            labels: [
              { en: "yes", ar: "نعم", value: "yes" },
              { en: "no", ar: "لا", value: "no" },
            ],
          },
          {
            question: 7,
            en: "Have you ever blamed someone for doing something you knew was really your fault?",
            ar: "هل سبق لك أن القيت باللوم على شخص آخربسبب خطأ قمت أنت بارتكابه ؟",
            labels: [
              { en: "yes", ar: "نعم", value: "no" },
              { en: "no", ar: "لا", value: "yes" },
            ],
          },
          {
            question: 8,
            en: "Are you always right, and your decisions never go wrong?",
            ar: "هل أنت دائمًا على صواب وقراراتك لا تخطىء أبدًا؟",
            labels: [
              { en: "yes", ar: "نعم", value: "yes" },
              { en: "no", ar: "لا", value: "no" },
            ],
          },
          {
            question: 9,
            en: "Have you ever said anything bad or nasty about anyone?",
            ar: "هل سبق لك أن قلت شيئًا سيئًا أو بذيئا عن أي شخص؟",
            labels: [
              { en: "yes", ar: "نعم", value: "no" },
              { en: "no", ar: "لا", value: "yes" },
            ],
          },
          {
            question: 10,
            en: "Have you ever lied?",
            ar: "هل سبق لك أن كذبت؟",
            labels: [
              { en: "yes", ar: "نعم", value: "no" },
              { en: "no", ar: "لا", value: "yes" },
            ],
          },
        ],
        sectionType: "scale",
        title: { en: "", ar: "" },
        en: "",
        ar: "",
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
            ar: "تحس بأنك في أحسن حال و صحة جيدة",
            labels: [
              {
                en: "Better than usual",
                ar: "احسن من المعتاد",
                value: "somatic-symptoms#0",
              },
              {
                en: "Same as usual",
                ar: "كالمعتاد",
                value: "somatic-symptoms#1",
              },
              {
                en: "Worse than usual",
                ar: "اسوأ من المعتاد",
                value: "somatic-symptoms#2",
              },
              {
                en: "Much worse than usual",
                ar: "أسوأ بكثير من المعتاد",
                value: "somatic-symptoms#3",
              },
            ],
          },
          {
            question: 2,
            en: "Have you recently been feeling in need of a good tonic?",
            ar: "تشعر بأنك في حاجة لمنشط أو مقوٍ",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "somatic-symptoms#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "somatic-symptoms#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "somatic-symptoms#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "somatic-symptoms#3",
              },
            ],
          },
          {
            question: 3,
            en: "Have you recently been feeling rundown and out of sorts",
            ar: "تحس بالإنهاك وبأنك متوعك",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "somatic-symptoms#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "somatic-symptoms#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "somatic-symptoms#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "somatic-symptoms#3",
              },
            ],
          },
          {
            question: 4,
            en: "Have you recently felt that you are ill?",
            ar: "تشعر بأنك مريض",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "somatic-symptoms#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "somatic-symptoms#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "somatic-symptoms#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "somatic-symptoms#3",
              },
            ],
          },
          {
            question: 5,
            en: "Have you recently been geeting any pains in your head?",
            ar: "تحس بآلام في رأسك",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "somatic-symptoms#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "somatic-symptoms#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "somatic-symptoms#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "somatic-symptoms#3",
              },
            ],
          },
          {
            question: 6,
            en: "Have you recently been getting a feeling of tightness or pressure in your head?",
            ar: "تشعر بضغط وتوتر في الرأس",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "somatic-symptoms#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "somatic-symptoms#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "somatic-symptoms#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "somatic-symptoms#3",
              },
            ],
          },
          {
            question: 7,
            en: "Have you recently been having hot or cold spells?",
            ar: "تنتابك نوبات برد أو سخونة",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "somatic-symptoms#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "somatic-symptoms#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "somatic-symptoms#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "somatic-symptoms#3",
              },
            ],
          },
          {
            question: 8,
            en: "Have you recently lost much sleep over worry?",
            ar: "لم تنم بما فيه الكفاية بسبب القلق",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "anxiety-insomnia#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "anxiety-insomnia#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "anxiety-insomnia#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "anxiety-insomnia#3",
              },
            ],
          },
          {
            question: 9,
            en: "Have you recently had difficulty in staying asleep once your are off?",
            ar: "تجد صعوبة في البقاء نائماً بعد الخلود إلى النوم ",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "anxiety-insomnia#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "anxiety-insomnia#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "anxiety-insomnia#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "anxiety-insomnia#3",
              },
            ],
          },
          {
            question: 10,
            en: "Have you recently been managing to keep yourself busy and occupied?",
            ar: "قادر على شغل نفسك أو البقاء منشغلاً",
            labels: [
              {
                en: "More so than usual",
                ar: "أكثر من المعتاد",
                value: "social-dysfunction#0",
              },
              {
                en: "Same as usual",
                ar: "كالمعتاد",
                value: "social-dysfunction#1",
              },
              {
                en: "Less so than usual",
                ar: "أقل من المعتاد",
                value: "social-dysfunction#2",
              },
              {
                en: "Much less than usual",
                ar: "أقل بكثير من المعتاد",
                value: "social-dysfunction#3",
              },
            ],
          },
          {
            question: 11,
            en: "Have you recently been taking longer over the things you do?",
            ar: "تأخذ وقتاً أطول لإنجاز الأشياء التي تفعلها",
            labels: [
              {
                en: "Quicker than usual",
                ar: "أسرع من المعتاد",
                value: "social-dysfunction#0",
              },
              {
                en: "Same as usual",
                ar: "كالمعتاد",
                value: "social-dysfunction#1",
              },
              {
                en: "Longer than usual",
                ar: "أطول من المعتاد",
                value: "social-dysfunction#2",
              },
              {
                en: "Much longer than usual",
                ar: "أطول بكثير من المعتاد",
                value: "social-dysfunction#3",
              },
            ],
          },
          {
            question: 12,
            en: "Have you recently felt on the whole you were doing things well?",
            ar: "تحس بصفة عامة أنك تؤدى أو تفعل الأشياء بصورة جيدة",
            labels: [
              {
                en: "Better than usual",
                ar: "أحسن من المعتاد",
                value: "social-dysfunction#0",
              },
              {
                en: "About the same",
                ar: "كالمعتاد",
                value: "social-dysfunction#1",
              },
              {
                en: "Less well than usual",
                ar: "أسوء من المعتاد",
                value: "social-dysfunction#2",
              },
              {
                en: "Much less well",
                ar: "أسوأ بكثير من المعتاد",
                value: "social-dysfunction#3",
              },
            ],
          },
          {
            question: 13,
            en: "Have you recently been satisfied with the way you've carried out your task?",
            ar: "راض عن الطريقة أو الكيفية التي تؤدى بها عملك أو واجبك",
            labels: [
              {
                en: "More satisfied",
                ar: "أكثر رضاً",
                value: "social-dysfunction#0",
              },
              {
                en: "About same as usual",
                ar: "كالمعتاد",
                value: "social-dysfunction#1",
              },
              {
                en: "Less satisfied than usual",
                ar: "أقل رضاً من المعتاد",
                value: "social-dysfunction#2",
              },
              {
                en: "Much less satisfied",
                ar: "أقل بكثير من المعتاد",
                value: "social-dysfunction#3",
              },
            ],
          },
          {
            question: 14,
            en: "Have you recently felt that you are playing a useful part in things?",
            ar: "تشعر أنك تقوم بدور فعال في الأحداث و الأشياء",
            labels: [
              {
                en: "More so than usual",
                ar: "أكثر من المعتاد",
                value: "social-dysfunction#0",
              },
              {
                en: "Same as usual",
                ar: "كالمعتاد",
                value: "social-dysfunction#1",
              },
              {
                en: "Less so than usual",
                ar: "أقل من المعتاد",
                value: "social-dysfunction#2",
              },
              {
                en: "Much less than usual",
                ar: "أقل بكثير من المعتاد",
                value: "social-dysfunction#3",
              },
            ],
          },
          {
            question: 15,
            en: "Have you recently felt capable of making decisions about things?",
            ar: "تحس بأنك قادر على إتخاذ قرارات تجاه ما يدور من حولك",
            labels: [
              {
                en: "More so than usual",
                ar: "أكثر من المعتاد",
                value: "social-dysfunction#0",
              },
              {
                en: "Same as usual",
                ar: "كالمعتاد",
                value: "social-dysfunction#1",
              },
              {
                en: "Less so than usual",
                ar: "أقل من المعتاد",
                value: "social-dysfunction#2",
              },
              {
                en: "Much less than usual",
                ar: "أقل بكثير من المعتاد",
                value: "social-dysfunction#3",
              },
            ],
          },
          {
            question: 16,
            en: "Have you recently felt constantly understrain?",
            ar: "تشعر باستمرار بأنك منهك",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "anxiety-insomnia#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "anxiety-insomnia#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "anxiety-insomnia#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "anxiety-insomnia#3",
              },
            ],
          },
          {
            question: 17,
            en: "Have you recently been able to enjoy your normal day-to-day activities?",
            ar: "تستطيع أن تستمع بنشاطاتك اليومية العادية ",
            labels: [
              {
                en: "More so than usual",
                ar: "أكثر من المعتاد",
                value: "social-dysfunction#0",
              },
              {
                en: "Same as usual",
                ar: "كالمعتاد",
                value: "social-dysfunction#1",
              },
              {
                en: "Less so than usual",
                ar: "أقل من المعتاد",
                value: "social-dysfunction#2",
              },
              {
                en: "Much less than usual",
                ar: "أقل بكثير من المعتاد",
                value: "social-dysfunction#3",
              },
            ],
          },
          {
            question: 18,
            en: "Have you recently been getting edgy and bad-tempered?",
            ar: "تكون منفعلاً ومعكر المزاج",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "anxiety-insomnia#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "anxiety-insomnia#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "anxiety-insomnia#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "anxiety-insomnia#3",
              },
            ],
          },
          {
            question: 19,
            en: "Have you recently been getting scared or panicky for no good reason?",
            ar: "تكون خائفاً أو مذعوراً دون سبب مقنع",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "anxiety-insomnia#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "anxiety-insomnia#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "anxiety-insomnia#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "anxiety-insomnia#3",
              },
            ],
          },
          {
            question: 20,
            en: "Have you recently found everything getting on top of you?",
            ar: "تجد أن كل شئ يفلت منك أو لا تستطيع التحكم فيه",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "anxiety-insomnia#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "anxiety-insomnia#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "anxiety-insomnia#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "anxiety-insomnia#3",
              },
            ],
          },
          {
            question: 21,
            en: "Have you recently been thinking of yourself as a worthless person?",
            ar: "تعتقد أنك شخص لا قيمة له",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "severe-depression#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "severe-depression#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "severe-depression#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "severe-depression#3",
              },
            ],
          },
          {
            question: 22,
            en: "Have you recently felt that life is entirely hopeless?",
            ar: "تشعر بأن الحياة لا أمل فيها البتة",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "severe-depression#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "severe-depression#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "severe-depression#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "severe-depression#3",
              },
            ],
          },
          {
            question: 23,
            en: "Have you recently been feeling nervous astrung-up all the time?",
            ar: "تحس بالتوتر والشد في كل الأوقات",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "anxiety-insomnia#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "anxiety-insomnia#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "anxiety-insomnia#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "anxiety-insomnia#3",
              },
            ],
          },
          {
            question: 24,
            en: "Have you recently felt that life isn't worthliving?",
            ar: "تشعر أن الحياة لا تستحق العيش",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "severe-depression#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "severe-depression#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "severe-depression#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "severe-depression#3",
              },
            ],
          },
          {
            question: 25,
            en: "Have you recently thought of the possibility that you might make away with yourself?",
            ar: "ينتابك التفكير بأن تنهي حياتك",
            labels: [
              {
                en: "Definitly not",
                ar: "بالتأكيد لا",
                value: "severe-depression#0",
              },
              {
                en: "I don't think so",
                ar: "لا أعتقد ذلك",
                value: "severe-depression#1",
              },
              {
                en: "Has crossed my mind",
                ar: "فكرت في ذلك",
                value: "severe-depression#2",
              },
              {
                en: "Definitely has",
                ar: "بالتأكيد فكرت في ذلك",
                value: "severe-depression#3",
              },
            ],
          },
          {
            question: 26,
            en: "Have you recently found at times you couldn't do anything because your nerves were too bad?",
            ar: "تجد أنه ليس بإمكانك فعل أي شئ في بعض الأحيان لأن أعصابك تعبة جداً",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "severe-depression#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "severe-depression#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "severe-depression#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "severe-depression#3",
              },
            ],
          },
          {
            question: 27,
            en: "Have you recently found yourself wishing you were dead and away from it all?",
            ar: "تجد أنك تتمنى لو أنك ميت وبعيد عن كل شئ",
            labels: [
              {
                en: "Not at all",
                ar: "لا",
                value: "severe-depression#0",
              },
              {
                en: "No more than usual",
                ar: "ليس أكثر من المعتاد",
                value: "severe-depression#1",
              },
              {
                en: "Rather more than usual",
                ar: "أكثر من المعتاد",
                value: "severe-depression#2",
              },
              {
                en: "Much more than usual",
                ar: "أكثر من المعتاد بكثير",
                value: "severe-depression#3",
              },
            ],
          },
          {
            question: 28,
            en: "Have you recently found that the idea of taking your own life keptcoming into your mind?",
            ar: "تجد ان فكرة الانتحار تراودك او تتردد في رأسك",
            labels: [
              {
                en: "Definitly not",
                ar: "بالتأكيد لا",
                value: "severe-depression#0",
              },
              {
                en: "I don't think so",
                ar: "لا أعتقد ذلك",
                value: "severe-depression#1",
              },
              {
                en: "Has crossed my mind",
                ar: "فكرت في ذلك",
                value: "severe-depression#2",
              },
              {
                en: "Definitely has",
                ar: "بالتأكيد فكرت في ذلك",
                value: "severe-depression#3",
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
            en: "When I am with a large group of people, I often __________",
            ar: "عندما أتواجد مع مجموعة كبيرة من الأشخاص ، فإنني في الغالب __________",
            labels: [
              {
                en: "I speak",
                ar: "أتحدث",
                value: "extrovert#3",
              },
              {
                en: "Listen",
                ar: "أستمع",
                value: "introvert#2",
              },
            ],
          },
          {
            question: 2,
            en: "When I plan to be away from home for a few days, I __________",
            ar: "عندما أخطط للإبتعاد عن البيت لعدة أيام، فإنني __________",
            labels: [
              {
                en: "I put my things in my bag right before I leave",
                ar: "أضع حاجياتي في حقيبتي مباشرة قبل أن أغادر",
                value: "flexible#3",
              },
              {
                en: "Make a list of things I will take with me",
                ar: "أجهز قائمة بالأشياء التي سوف آخدها معي",
                value: "organized#2",
              },
            ],
          },
          {
            question: 3,
            en: "I do my daily work and habits at home __________",
            ar: "أمارس أعمالي وعاداتي اليومية بالبيت __________",
            labels: [
              {
                en: "As others do",
                ar: "كما يمارسها الأخرون",
                value: "practical#1",
              },
              {
                en: "as it suits me",
                ar: "كما يناسبني",
                value: "imaginative#2",
              },
            ],
          },
          {
            question: 4,
            en: "After school, I prefer to do things __________",
            ar: "بعد المدرسة، إنني أفضل أن أفعل الأشياء __________",
            labels: [
              {
                en: "on my own",
                ar: "بمفردي",
                value: "introvert#2",
              },
              {
                en: "with my friends",
                ar: "مع أصدقائي ",
                value: "extrovert#3",
              },
            ],
          },
          {
            question: 5,
            en: "Usually, I do my homework __________ before it is due",
            ar: "في العادة، أقوم بواجباتي المدرسية قبل موعد تسليمها المحدد بفترة",
            labels: [
              { en: "shortly", ar: "قصيرة", value: "flexible#2" },
              { en: "long", ar: "طويلة", value: "organized#1" },
            ],
          },
          {
            question: 6,
            en: "At school, I like to learn about __________",
            ar: "في المدرسة، أحب أن أتعلم عن __________",
            labels: [
              {
                en: "Methods that make me think in a new way",
                ar: "الأساليب التي تجعلني أفكر بطريقة جديدة",
                value: "imaginative#2",
              },
              {
                en: "Facts that help me know a lot of things",
                ar: "الحقائق التي تساعدني في معرفة الكثير من الأشياء",
                value: "practical#1",
              },
            ],
          },
          {
            question: 7,
            en: "I think better when __________",
            ar: "أنا أفكر بطريقة أفضل عندما __________",
            labels: [
              {
                en: "I'm talking out loud",
                ar: "أتحدث بصوت مرتفع",
                value: "extrovert#3",
              },
              {
                en: "I keep my thoughts to myself",
                ar: "أحتفظ بأفكاري لنفسي",
                value: "introvert#2",
              },
            ],
          },
          {
            question: 8,
            en: "I like to work __________",
            ar: "أحب أن أعمل __________ ",
            labels: [
              {
                en: "one thing at a time",
                ar: "شيئاً واحدا في نفس الوقت",
                value: "organized#3",
              },
              {
                en: "Many things at the same time",
                ar: "أشياء عديدة في نفس الوقت",
                value: "flexible#2",
              },
            ],
          },
          {
            question: 9,
            en: "I enjoy listening to others tell __________ stories",
            ar: "أستمتع بالإصغاء للآخرين وهم يروون قصصا __________",
            labels: [
              {
                en: "fictional",
                ar: "خيالية",
                value: "imaginative#2",
              },
              { en: "real", ar: "حقيقية", value: "practical#1" },
            ],
          },
          {
            question: 10,
            en: "In school, I prefer to work __________",
            ar: "في المدرسة، أنا أفضل أن أعمل __________",
            labels: [
              {
                en: "Quietly in my seat",
                ar: "بهدوء وأنا في مقعدي",
                value: "introvert#2_flexible#2",
              },
              {
                en: "Actively within a group",
                ar: "بنشاط ضمن مجموعة",
                value: "extrovert#3_organized#3",
              },
            ],
          },
          {
            question: 11,
            en: "Mostly my thoughts __________",
            ar: "في الغالب تكون أفكاري __________ ",
            labels: [
              {
                en: "Similar to others' ideas",
                ar: "متشابهة مع أفكار الأخرين",
                value: "practical#1",
              },
              {
                en: "Different from other people's ideas",
                ar: "مختلفة عن أفكار الآخرين",
                value: "imaginative#2",
              },
            ],
          },
          {
            question: 12,
            en: "When I disappoint others, I __________",
            ar: "عندما يخيب ظني بالآخرين، فإنني __________",
            labels: [
              {
                en: "Forget it quickly",
                ar: "أنسى ذلك بسرعة",
                value: "thinking#3",
              },
              {
                en: "It takes me a long time to forget it",
                ar: "أحتاج إلى وقت أطويل حتى أنسى ذلك ",
                value: "feeling#2",
              },
            ],
          },
          {
            question: 13,
            en: "I'd love to have __________",
            ar: "أحب أن يكون لي __________",
            labels: [
              {
                en: "A few good friends",
                ar: "عدداً قليلا من الأصدقاء الجيدين",
                value: "introvert#3",
              },
              {
                en: "Lots of friends",
                ar: "عددا كبيراً من الأصدقاء",
                value: "extrovert#2",
              },
            ],
          },
          {
            question: 14,
            en: "When I do a job, I prefer to __________",
            ar: "عندما أقوم بعمل ، فإنني أفضل أن __________",
            labels: [
              {
                en: "work well",
                ar: "أعمل بإتقان",
                value: "organized#1",
              },
              {
                en: "make others happy",
                ar: "أجعل الأخرين سعداء ",
                value: "flexible#2",
              },
            ],
          },
          {
            question: 15,
            en: "I like the courses that __________",
            ar: "أحب المواد الدراسية التي __________",
            labels: [
              {
                en: "Teach me useful skills",
                ar: "تعلمني مهارات مفيدة",
                value: "practical#2",
              },
              {
                en: "Ignite (or stir) my imaginations",
                ar: "تشعل (أو تحرك) تخيلاتي",
                value: "imaginative#3",
              },
            ],
          },
          {
            question: 16,
            en: "I often __________",
            ar: "أنا غالباً __________",
            labels: [
              {
                en: "hide my feelings",
                ar: "أخفي مشاعري",
                value: "introvert#2",
              },
              {
                en: "show my feelings",
                ar: "أظهر مشاعري",
                value: "extrovert#3",
              },
            ],
          },
          {
            question: 17,
            en: "I like my school seat to be __________",
            ar: "أحب مقعدي الدراسي أن يكون __________ ",
            labels: [
              {
                en: "Clean and tidy in a certain way",
                ar: "نظيفا ومرتبا بطريقة معينة",
                value: "organized#3",
              },
              {
                en: "arranged in any way",
                ar: "مرتبا بأي طريقة",
                value: "flexible#2",
              },
            ],
          },
          {
            question: 18,
            en: "When I watch sad scenes in a movie, I __________",
            ar: "عندما أشاهد لقطات حزينة في فيلم فإنني __________",
            labels: [
              {
                en: "feel sad",
                ar: "أشعر بحزن",
                value: "feeling#3",
              },
              {
                en: "don't care at all",
                ar: "لا أهتم اطلاقاً",
                value: "thinking#2",
              },
            ],
          },
          {
            question: 19,
            en: "If I want to think about something important, I will __________",
            ar: "إذا أردت أن أفكر في شيء مهم فإنني __________",
            labels: [
              {
                en: "looking for a friend to talk to",
                ar: "أبحث عن صديق أتحدث إليه",
                value: "extrovert#3",
              },
              {
                en: "walking alone",
                ar: "أسير ماشيا لوحدي",
                value: "introvert#2",
              },
            ],
          },
          {
            question: 20,
            en: "When my father or teacher assigns me several tasks, I __________",
            ar: "عندما يكلفني والدي أو معلمي بعدة أعمال، فإنني __________",
            labels: [
              {
                en: "start the work I love without planning the arrangement of the works",
                ar: "أبدأ بالعمل الذي أحب دون تخطيط ترتيب الأعمال",
                value: "flexible#2",
              },
              {
                en: "Make a list of these tasks in a specific order",
                ar: "أجهز قائمة بتلك الأعمال حسب ترتيب معين",
                value: "organized#3",
              },
            ],
          },
          {
            question: 21,
            en: "I love TV shows that teach me __________",
            ar: "أحب البرامج التلفزيونية التي تعلمني __________",
            labels: [
              {
                en: "How do I think differently",
                ar: "كيف أفكر بطريقة متنوعة",
                value: "imaginative#3",
              },
              {
                en: "More facts",
                ar: "حقائق أكثر",
                value: "practical#2",
              },
            ],
          },
          {
            question: 22,
            en: "When I sit near people I don't know, I prefer __________",
            ar: "عندما أجلس قرب أشخاص لا أعرفهم، فإنني أفضل __________",
            labels: [
              {
                en: "Stay silent until someone starts talking to me",
                ar: "البقاء صامتا على أن يبدأ أحدهم بالحديث معي",
                value: "introvert#2",
              },
              {
                en: "Take the initiative to talk to them",
                ar: "المبادرة بالحديث معهم",
                value: "extrovert#3",
              },
            ],
          },
          {
            question: 23,
            en: "I consider competition between students in linguistic or mathematical subjects as",
            ar: "أنا أعتبر التنافس بين الطلبة في مواضيع لغوية أو رياضية __________ ",
            labels: [
              {
                en: "Something fun because it makes the students accept to learn",
                ar: "شيئاً مسلياً لأنها تجعل الطلاب يقبلون على التعلم",
                value: "organized#3",
              },
              {
                en: "a bad thing because it makes the losing student frustrated",
                ar: "شيئاً سيئاً لأنها تجعل الطالب الخاسر محبطا",
                value: "flexible#2",
              },
            ],
          },
          {
            question: 24,
            en: "Mostly most people say that I __________",
            ar: "في الغالب يقول معظم الناس بأني __________",
            labels: [
              { en: "brave", ar: "شجاع", value: "extrovert#3_thinking#3" },
              { en: "Shy", ar: "خجول", value: "introvert#2_feeling#2" },
            ],
          },
          {
            question: 25,
            en: "I like to write about an event or a story __________",
            ar: "أنا أحب أن أكتب عن أمر __________",
            labels: [
              {
                en: "really happened to me	",
                ar: "حدث معي فعلا",
                value: "practical#3",
              },
              {
                en: "made by imagination ",
                ar: "من صنع خيالي",
                value: "imaginative#2",
              },
            ],
          },
          {
            question: 26,
            en: "I often __________",
            ar: "أنا غالباً __________",
            labels: [
              {
                en: "Tell others about my true feelings",
                ar: "أحدث الأخرين عن حقيقة مشاعري",
                value: "extrovert#3",
              },
              {
                en: "keep my feelings to myself",
                ar: "أحتفظ بمشاعري لنفسي",
                value: "introvert#2",
              },
            ],
          },
          {
            question: 27,
            en: "It is important that __________",
            ar: "إن من المهم أن __________",
            labels: [
              {
                en: "I love what I do",
                ar: "أحب ما أقوم به من عمل",
                value: "flexible#3",
              },
              {
                en: "Accomplish what I started",
                ar: "أنجز ما بدأت به من عمل",
                value: "organized#2",
              },
            ],
          },
          {
            question: 28,
            en: "When other people say bad things about me, even if it's for fun they __________",
            ar: "عندما يقول الآخرون أشياء سيئة عني، حتى وإن كان ذلك على سبيل المداعبة __________",
            labels: [
              {
                en: "hurt my feelings",
                ar: "فإنهم يجرحون مشاعري",
                value: "feeling#3",
              },
              {
                en: "don't hurt my feelings",
                ar: "فإنهم لا يجرحون مشاعري",
                value: "thinking#2",
              },
            ],
          },
          {
            question: 29,
            en: "My best teachers are the ones __________",
            ar: "أفضل المعلمين / المعلمات عندي هم الذين __________",
            labels: [
              {
                en: "teach me to think in new ways",
                ar: "يعلموني بأن أفكر بطرق جديدة",
                value: "imaginative#3_feeling#3",
              },
              {
                en: "give me a lot of information",
                ar: "يزودوني بمعلومات كثيرة",
                value: "practical#2_thinking#2",
              },
            ],
          },
          {
            question: 30,
            en: "When I see new students in my class, I __________",
            ar: "عندما أرى طلبة جدد في صفي، فإنني __________",
            labels: [
              {
                en: "start by introducing myself to them",
                ar: "أبدأ بتعريف نفسي إليهم ",
                value: "extrovert#2_organized#2",
              },
              {
                en: "stand away and watch them for a while",
                ar: "أقف بعيداً وأراقبهم لفترة من الوقت",
                value: "introvert#3_flexible#3",
              },
            ],
          },
          {
            question: 31,
            en: "I do my daily duties according to __________",
            ar: "أقوم بواجباتي اليومية حسب __________",
            labels: [
              {
                en: "The way most students perform",
                ar: "الطريقة التي يؤديها معظم الطلاب",
                value: "practical#2",
              },
              {
                en: "my own way",
                ar: "طريقتي الخاصة",
                value: "imaginative#1",
              },
            ],
          },
          {
            question: 32,
            en: "After I finish playing a game, I __________",
            ar: "بعد انتهائي من التسلية بلعبة ما فإنني __________ ",
            labels: [
              {
                en: "Leave the game as it is without returning it to its place",
                ar: "أترك اللعبة كما هي دون إرجاعها لمكانها",
                value: "flexible#2",
              },
              {
                en: "return the game to its place",
                ar: "أقوم بإرجاع اللعبة للمكان المخصص لها",
                value: "organized#3",
              },
            ],
          },
          {
            question: 33,
            en: "When something good happens to me, I will be __________",
            ar: "عندما يحدث لي شيء جيد، فإنني سوف أكون __________",
            labels: [
              {
                en: "Happy and keep calm ",
                ar: "سعيداً وأبقى هادئاً",
                value: "introvert#2",
              },
              {
                en: "so happy and show my joy",
                ar: "سعيداً جداً وأظهر فرحي",
                value: "extrovert#3",
              },
            ],
          },
          {
            question: 34,
            en: "I prefer the stories that __________",
            ar: "أنا أفضل القصص التي __________",
            labels: [
              {
                en: "be full of details",
                ar: "تكون مليئة بالتفاصيل",
                value: "practical#2",
              },
              {
                en: "Unleash my imagination",
                ar: "تطلق لخيالي العنان",
                value: "imaginative#3",
              },
            ],
          },
          {
            question: 35,
            en: "I want my work to __________",
            ar: "أريد لعملي أن __________",
            labels: [
              {
                en: "be done properly ",
                ar: "ينجز بشكل صحيح",
                value: "organized#2",
              },
              {
                en: "make others happy",
                ar: "يسعد الآخرين",
                value: "flexible#3",
              },
            ],
          },
          {
            question: 36,
            en: "I love sports that I can play __________",
            ar: "أحب الألعاب الرياضية التي أستطيع ممارستها __________",
            labels: [
              {
                en: 'By myself like "biking and swimming"',
                ar: 'بنفسي مثل "ركوب الدراجة والسباحة"',
                value: "introvert#2",
              },
              {
                en: 'With a team like "volleyball and soccer"',
                ar: 'مع فريق مثل "كرة الطائرة وكرة القدم"',
                value: "extrovert#3",
              },
            ],
          },
          {
            question: 37,
            en: "When I see a sad person, I __________",
            ar: "عندما أرى شخصاً حزيناً، فإنني __________",
            labels: [
              {
                en: "feel sad too",
                ar: "أشعر بالحزن ايضا",
                value: "feeling#3",
              },
              {
                en: "think he will get over his grief",
                ar: "أعتقد بأنه سيتغلب على حزنه",
                value: "thinking#2",
              },
            ],
          },
          {
            question: 38,
            en: "When I have work to do, I prefer to do it __________",
            ar: "عندما يكون لدي عمل يجب أن أنجزه، فإنني أفضل القيام به __________",
            labels: [
              {
                en: "After I finish playing",
                ar: "بعد الانتهاء من اللعب",
                value: "flexible#2",
              },
              {
                en: "before playing",
                ar: "قبل اللعب",
                value: "organized#3",
              },
            ],
          },
          {
            question: 39,
            en: "When I plan to have a party (for my birthday, for example), I prefer to invite __________",
            ar: "عندما أخطط لإقامة حفلة (عيد ميلادي مثلا)، فإنني أفضل أن أدعو __________",
            labels: [
              {
                en: "A few good friends",
                ar: "عدداً قليلاُ من الأصدقاء الجيدين",
                value: "introvert#3",
              },
              {
                en: "many friends",
                ar: "أصدقاء كثيرين",
                value: "extrovert#2",
              },
            ],
          },
          {
            question: 40,
            en: "When I spend my money on something, __________",
            ar: "عندما أنفق فلوسي في شيء ما، فإنني __________ ",
            labels: [
              {
                en: "I've been thinking about that for a long time",
                ar: "أفكر في ذلك وقتا طويلاً",
                value: "organized#1",
              },
              {
                en: "Decide it quickly",
                ar: "أقرر ذلك بسرعة",
                value: "flexible#2",
              },
            ],
          },
          {
            question: 41,
            en: "For me, the use of imagination is __________",
            ar: "بالنسبة لي، فإن استخدام التخيل (أو الخيال) يعد شيئاً __________",
            labels: [
              {
                en: "boring thing",
                ar: "مملاُ",
                value: "practical#1_flexible#2",
              },
              {
                en: "fun thing",
                ar: "ممتعاُ",
                value: "imaginative#2_organized#1",
              },
            ],
          },
          {
            question: 42,
            en: "In school, I prefer to work __________",
            ar: "في المدرسة، أفضل أن أعمل __________",
            labels: [
              {
                en: "Within a group of students",
                ar: "ضمن مجموعة من الطلاب",
                value: "extrovert#2",
              },
              {
                en: "solo by myself",
                ar: "منفرداً لوحدي",
                value: "introvert#3",
              },
            ],
          },
          {
            question: 43,
            en: "If given the opportunity, I would much rather help with a work __________",
            ar: "إذا أتيحت لي الفرصة، فإنني أفضل المساعدة في عمل __________",
            labels: [
              {
                en: "drawing (house design)",
                ar: "رسم (تصميم منزل)",
                value: "feeling#2",
              },
              {
                en: "building a house",
                ar: "بناء منزل",
                value: "thinking#3",
              },
            ],
          },
          {
            question: 44,
            en: "When my friends spend a night at my house, I __________",
            ar: "عندما يقضي أصدقائي/ صديقاتي ليلة في منزلي، فإنني __________",
            labels: [
              {
                en: "Watch what happens when we're together",
                ar: "أراقب ما يحدث عندما نكون مجتمعين",
                value: "flexible#2",
              },
              {
                en: "plan what we should do with each other",
                ar: "أخطط ما يجب أن نفعله مع بعضنا البعض",
                value: "organized#3",
              },
            ],
          },
          {
            question: 45,
            en: "I really like people who have __________",
            ar: "أحب كثيرا ً الأشخاص الذي لديهم أفكار __________ ",
            labels: [
              {
                en: "different ideas",
                ar: "مختلفة",
                value: "imaginative#1",
              },
              {
                en: "Practical ideas",
                ar: "عملية",
                value: "practical#2",
              },
            ],
          },
          {
            question: 46,
            en: "Often __________",
            ar: "في غالب الأحيان __________",
            labels: [
              {
                en: "I keep my true thoughts to myself only",
                ar: "أحتفظ بأفكاري الحقيقية لنفسي فقط",
                value: "introvert#2",
              },
              {
                en: "Tell others the truth of what's on my mind",
                ar: "أخبر الآخرين بحقيقة ما يدور في ذهني",
                value: "extrovert#3",
              },
            ],
          },
          {
            question: 47,
            en: "When I practice an activity such as sports or playing a musical instrument, I __________",
            ar: "عندما أمارس نشاطا ما كالرياضة أو العزف على آلة موسيقية فإنني __________",
            labels: [
              {
                en: "Monitor the time carefully to make sure that the time given for the activity is sufficient",
                ar: "أراقب الوقت بدقة للتأكد من كفاية الوقت المعطى للنشاط",
                value: "organized#2",
              },
              {
                en: "I don't keep track of time, I enjoy what I do ",
                ar: "لا اتابع الوقت، وأتمتع بما أقوم به",
                value: "flexible#3",
              },
            ],
          },
          {
            question: 48,
            en: "I like to be with people who have __________",
            ar: "أحب أن أكون مع الأشخاص الذين لديهم __________",
            labels: [
              {
                en: "Practical ideas",
                ar: "أفكار عملية",
                value: "practical#3",
              },
              {
                en: "unusual ideas",
                ar: "أفكار غير عادية",
                value: "imaginative#2",
              },
            ],
          },
          {
            question: 49,
            en: "I can make new friends __________",
            ar: "أستطيع تكوين أصدقاء جدد __________",
            labels: [
              {
                en: "faster than others",
                ar: "بسرعة اكثر من الأخرين",
                value: "extrovert#1",
              },
              {
                en: "Much slower than the others",
                ar: "بشكل أبطأ كثيراُ من الآخرين",
                value: "introvert#2",
              },
            ],
          },
          {
            question: 50,
            en: "I make my decisions based on __________",
            ar: "أنا أتخذ  قراراتي اعتمادا على __________",
            labels: [
              {
                en: "My mind and my thinking",
                ar: "عقلي وتفكيري",
                value: "thinking#3",
              },
              {
                en: "My heart and my emotions",
                ar: "قلبي وعواطفي",
                value: "feeling#2",
              },
            ],
          },
          {
            question: 51,
            en: "I love hearing stories __________",
            ar: "أنا أحب سماع قصص __________",
            labels: [
              {
                en: "Written by others",
                ar: "من تأليف الآخرين",
                value: "imaginative#3",
              },
              {
                en: "It really happened with others",
                ar: "حدثت فعلا مع الآخرين",
                value: "practical#2",
              },
            ],
          },
          {
            question: 52,
            en: "When I watch some people play a new game, __________",
            ar: "عندما أشاهد البعض يمارس لعبة جديدة، فإنني __________",
            labels: [
              {
                en: "I watch them for a while",
                ar: "أراقبهم لفترة معينة",
                value: "introvert#2",
              },
              {
                en: "Enter directly and share them",
                ar: "أدخل مباشرة وأشاركهم",
                value: "extrovert#1",
              },
            ],
          },
          {
            question: 53,
            en: "When I visit someone in his house, I prefer to arrive there __________",
            ar: "عندما أزور شخصاً في بيته، فإنني أفضل أن أصل هناك __________",
            labels: [
              {
                en: "On time or shortly thereafter",
                ar: "في الموعد المحدد أو بعده بقليل",
                value: "flexible#2",
              },
              {
                en: "Exactly on time",
                ar: "في الموعد المحدد تماماً",
                value: "organized#3",
              },
            ],
          },
          {
            question: 54,
            en: "In the classroom, I'm talking too __________",
            ar: "في داخل غرفة الصف، أتحدث __________",
            labels: [
              { en: "much", ar: "كثيراً", value: "extrovert#2_flexible#1" },
              {
                en: "Little",
                ar: "قليلاً",
                value: "introvert#1_organized#2",
              },
            ],
          },
          {
            question: 55,
            en: "When I am with a sad group when they hear bad news, I __________",
            ar: "عندما أكون مع مجموعة حزينة لحظة سماعهم أخبار سيئة فإني __________",
            labels: [
              {
                en: "Cry with them right away",
                ar: "ابكي معهم فوراً",
                value: "feeling#2",
              },
              {
                en: "I don't cry, because one of us must be calm",
                ar: "لا أبكي، لأنه من الضروري أن يكون أحدنا هادئاً",
                value: "thinking#1",
              },
            ],
          },
          {
            question: 56,
            en: "When I go to my friend's house I __________",
            ar: "عند الذهاب إلى منزل صديقي/ صديقتي فإنني __________",
            labels: [
              {
                en: "look here and there on my way home",
                ar: "أتطلع هنا وهناك وأنا في طريقي نحو المنزل",
                value: "flexible#1",
              },
              {
                en: "I walk straight home ",
                ar: "أسير مباشرة نحو المنزل",
                value: "organized#2",
              },
            ],
          },
          {
            question: 57,
            en: "When I have free time, I prefer to __________",
            ar: " عندما يكون لدي وقت فراغ، فإنني أفضل __________",
            labels: [
              {
                en: "Share friends to do something ",
                ar: "مشاركة الأصدقاء في القيام بعمل ما",
                value: "extrovert#3",
              },
              {
                en: "spend time alone",
                ar: "ان أقضي وقتا بمفردي",
                value: "introvert#2",
              },
            ],
          },
          {
            question: 58,
            en: "In my opinion, others should do their work __________",
            ar: "حسب رأيي، فإن على الآخرين القيام بأعمالهم __________",
            labels: [
              {
                en: "by playing",
                ar: "من خلال اللعب",
                value: "flexible#1",
              },
              {
                en: "before playing",
                ar: "قبل اللعب",
                value: "organized#3",
              },
            ],
          },
          {
            question: 59,
            en: "When I get into trouble with my parents, __________",
            ar: "عندما أقع بمشكلة ما مع والدي فإنني __________",
            labels: [
              {
                en: "I try to talk and discuss in my own way to get rid of the problem",
                ar: "أحاول التحدث والمناقشة بطريقتي الخاصة للتخلص من المشكلة",
                value: "flexible#3",
              },
              {
                en: "be silent",
                ar: "ألتزم الصمت",
                value: "organized#2",
              },
            ],
          },
          {
            question: 60,
            en: "Doing my homework __________",
            ar: "أقوم بواجباتي المدرسية __________",
            labels: [
              {
                en: "at the last minute",
                ar: "في اللحظة الأخيرة ",
                value: "flexible#3",
              },
              {
                en: "as soon as possible",
                ar: "في أسرع وقت ممكن",
                value: "organized#2",
              },
            ],
          },
          {
            question: 61,
            en: "If someone breaks an appointment with me, I __________",
            ar: " إذا أخلف أحدهم موعدا معي، فإنني __________",
            labels: [
              {
                en: "feel pain for a long time",
                ar: "أشعر بألم لفترة طويلة",
                value: "feeling#2",
              },
              {
                en: "forget that",
                ar: "أنسى ذلك",
                value: "thinking#3",
              },
            ],
          },
          {
            question: 62,
            en: "When I come home from school, I __________",
            ar: "عندما أعود إلى البيت من المدرسة، فإنني __________",
            labels: [
              {
                en: "want to talk to someone about what happened to me that day",
                ar: "أرغب بالحديث إلى شخص ما حول ما حدث معي خلال ذلك اليوم",
                value: "extrovert#3",
              },
              {
                en: "I'd rather be alone for a while",
                ar: "أن أكون لوحدي فترة من الوقت",
                value: "introvert#2",
              },
            ],
          },
          {
            question: 63,
            en: "When a project or task requires the use of a new computer program, I __________",
            ar: "عندما أقوم بعمل ما باستخدام برنامج حاسوبي جديد، فإنني __________",
            labels: [
              {
                en: "use the program",
                ar: "أقوم باستخدام البرنامج",
                value: "flexible#2",
              },
              {
                en: "Ask how the program works",
                ar: "استفسر عن كيفية عمل البرنامج",
                value: "organized#1",
              },
            ],
          },
          {
            question: 64,
            en: "I prefer to play games that __________",
            ar: " أفضل أن أمارس الألعاب التي __________",
            labels: [
              {
                en: "has already laws ",
                ar: "لها قوانين جاهزة",
                value: "practical#1",
              },
              {
                en: "Allows us to make rules while playing",
                ar: "تسمح لنا بصنع قوانين أثناء اللعب",
                value: "imaginative#2",
              },
            ],
          },
          {
            question: 65,
            en: "When I am with friends __________",
            ar: " عندما أكون مع الأصدقاء فإنني __________",
            labels: [
              {
                en: "I usually listen to other people telling jokes",
                ar: "عادة ما أكون مستمعا للأخرين وهم يرددون النكات",
                value: "introvert#2",
              },
              {
                en: "Mostly I'm the one who tells the jokes",
                ar: "في الغالب أنا الذي يقوم برواية النكات",
                value: "extrovert#3",
              },
            ],
          },
          {
            question: 66,
            en: "In my room __________",
            ar: "في غرفتي __________",
            labels: [
              {
                en: "Everything is in a certain place",
                ar: "يكون كل شيء في مكان معين",
                value: "organized#2",
              },
              {
                en: "I don't pay much attention to the locations of things",
                ar: "لا أكثرت كثيرا عن مواقع الأشياء",
                value: "flexible#3",
              },
            ],
          },
          {
            question: 67,
            en: "I mostly prefer __________",
            ar: "أنا في الغالب أفضل __________",
            labels: [
              {
                en: "Reading or watching TV",
                ar: "القراءة أو مشاهدة التلفاز",
                value: "introvert#2",
              },
              {
                en: "talking with friends",
                ar: "التحدث مع الأصدقاء",
                value: "extrovert#3",
              },
            ],
          },
          {
            question: 68,
            en: "It seems my head is full __________",
            ar: "يبدو أن رأسي مليء __________",
            labels: [
              {
                en: "with big ideas",
                ar: "بالأفكار الكبيرة",
                value: "imaginative#3",
              },
              {
                en: "Lots of facts",
                ar: "بالكثير من الحقائق ",
                value: "practical#2",
              },
            ],
          },
          {
            question: 69,
            en: "When I have task or homework, I often __________",
            ar: "عندما يكون لدي عمل أو واجب مدرسي، فإني في الغالب __________",
            labels: [
              {
                en: "need someone to remind me of the delivery date",
                ar: "احتاج الى من يذكرني بموعد التسليم",
                value: "flexible#2",
              },
              {
                en: "remember the delivery date",
                ar: "أتذكر بنفسي موعد التسليم",
                value: "organized#3",
              },
            ],
          },
        ],
        sectionType: "scale",
        title: { en: "", ar: "" },
      },
    ],
    description: "Student STQ",
    name: "student-stq",
  },
};
