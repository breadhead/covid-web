export const dataSuccess = {
  target: 'Для себя',
  region: 'Ивановская область',
  age: '40',
  gender: 'Мужской',
  symptoms: {},
  deseases: {},
}


export const dataRisk = {
  target: 'Для себя',
  region: 'Ивановская область',
  age: '65',
  gender: 'Мужской',
  symptoms: {},
  deseases: { diabetes: true, cardiovascular: true, COPD: true },
}

export const dataOncological = {
  target: 'Для себя',
  region: 'Ивановская область',
  age: '78',
  gender: 'Мужской',
  symptoms: {},
  deseases: { diabetes: true, cardiovascular: true, oncological: true, COPD: true },
}

export const dataOtherSymptoms = {
  target: 'Для себя',
  region: 'Ивановская область',
  age: '56',
  gender: 'Мужской',
  symptoms: {
    sneezing: true,
  }
}

// export const dataOncological = {
//   target: 'Для себя',
//   region: 'Ивановская область',
//   age: '76678',
//   gender: 'Мужской',
//   symptoms: {
//     temperature: true,
//     ['sore-throat']: true,
//     thorax: true,
//     cough: true,
//     chills: true,
//     dyspnea: true,
//     ['loose-stools']: true,
//     sneezing: true,
//     ['runny-nose']: true,
//     weakness: true,
//     ['body-aches']: true,
//     headache: true,
//     nausea: true,
//     ['abdominal-pain']: true,
//     caughtType: 'Влажный с мокротой',
//     thoraxType: { coughing: true, inhale: true, ['physical-activity']: true, rest: true },
//     temperatureType: '38 - 39 градусов',
//     dyspneaType: { rest: true, ['physical-activity']: true },
//     symptomsSince: 'Несколько недель назад'
//   },
//   deseases: { diabetes: true, cardiovascular: true, oncological: true, COPD: true },
// }