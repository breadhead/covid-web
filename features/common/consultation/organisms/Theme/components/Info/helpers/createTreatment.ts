import { SituationClaim } from '@app/models/Claim/SituationClaim'

import { InfoBlock } from './types'

const mothNumberToName = (month: string) =>
  (({
    '1': 'Январь',
    '2': 'Февраль',
    '3': 'Март',
    '4': 'Апрель',
    '5': 'Май',
    '6': 'Июнь',
    '7': 'Июль',
    '8': 'Август',
    '9': 'Сентябрь',
    '10': 'Октябрь',
    '11': 'Ноябрь',
    '12': 'Декабрь',
  } as any)[month] || '')

interface YearMonth {
  month: string
  year: string
}

const yearMonthToString = (yearMonth: YearMonth) =>
  yearMonth ? `${mothNumberToName(yearMonth.month)} ${yearMonth.year} года` : ''

const createTreatment = ({
  diagnosisDate,
  surgicalTreatments,
  medicalsTreatments,
  radiationTreatments,
}: SituationClaim): InfoBlock[] => [
  {
    title: 'Лечение',
    articles: [
      {
        subtitle: 'Когда было диагностировано онкологическое заболевание',
        text: yearMonthToString(diagnosisDate),
      },
      {
        subtitle: 'Хирургическое лечение',
        children: surgicalTreatments.map(surgical => ({
          subtitle: surgical.clinic,
          children: [
            {
              subtitle: 'Регион, где проходили лечение',
              text: surgical.region,
            },
            {
              subtitle: 'Когда делали операцию',
              text: yearMonthToString(surgical.when),
            },
            {
              subtitle: 'ФИО врача',
              text: surgical.doctor,
            },
            {
              subtitle: 'Суть операции',
              text: surgical.surgery,
            },
          ],
        })),
      },
      {
        subtitle: 'Лекарственное лечение',
        children: medicalsTreatments.map(medical => ({
          subtitle: medical.clinic,
          children: [
            {
              subtitle: 'Регион, где проходили лечение',
              text: medical.region,
            },
            {
              subtitle: 'Когда начали это лечение',
              text: yearMonthToString(medical.when),
            },
            {
              subtitle: 'Когда закончили это лечение',
              text: yearMonthToString(medical.end),
            },
            {
              subtitle: 'ФИО врача',
              text: medical.doctor,
            },
            {
              subtitle: 'Количество циклов лекарственного лечения',
              text: medical.cyclesCount,
            },
            {
              subtitle: 'Схема лечения',
              text: medical.schema,
            },
          ],
        })),
      },
      {
        subtitle: 'Лучевая терапия',
        children: radiationTreatments.map(radioation => ({
          subtitle: radioation.clinic,
          children: [
            {
              subtitle: 'В каком городе?',
              text: radioation.region,
            },
            {
              subtitle: 'В каком городе?',
              text: radioation.region,
            },
            {
              subtitle: 'Период лечения',
              text: yearMonthToString(radioation.when),
            },
            {
              subtitle: 'Когда закончили это лечение',
              text: yearMonthToString(radioation.end),
            },
            {
              subtitle: 'Схема лечения',
              text: radioation.schema,
            },
          ],
        })),
      },
    ],
  },
]

export default createTreatment
