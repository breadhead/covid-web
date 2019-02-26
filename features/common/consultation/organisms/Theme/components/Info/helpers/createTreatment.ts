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
        children: surgicalTreatments.map(surgical => {
          const { clinic, region, when, doctor, surgery } = surgical

          return {
            subtitle: clinic,
            children: [
              {
                subtitle: region && 'Регион, где проходили лечение',
                text: region,
              },
              {
                subtitle: when && 'Когда делали операцию',
                text: yearMonthToString(when),
              },
              {
                subtitle: doctor && 'ФИО врача',
                text: doctor,
              },
              {
                subtitle: surgery && 'Суть операции',
                text: surgery,
              },
            ],
          }
        }),
      },
      {
        subtitle: 'Лекарственное лечение',
        children: medicalsTreatments.map(medical => {
          const {
            clinic,
            region,
            when,
            end,
            doctor,
            cyclesCount,
            schema,
          } = medical

          return {
            subtitle: clinic,
            children: [
              {
                subtitle: region && 'Регион, где проходили лечение',
                text: region,
              },
              {
                subtitle: when && 'Когда начали это лечение',
                text: yearMonthToString(when),
              },
              {
                subtitle: end && 'Когда закончили это лечение',
                text: yearMonthToString(end),
              },
              {
                subtitle: doctor && 'ФИО врача',
                text: doctor,
              },
              {
                subtitle:
                  cyclesCount && 'Количество циклов лекарственного лечения',
                text: cyclesCount,
              },
              {
                subtitle: schema && 'Схема лечения',
                text: schema,
              },
            ],
          }
        }),
      },
      {
        subtitle: 'Лучевая терапия',
        children: radiationTreatments.map(radioation => {
          const { clinic, region, when, end, schema, doctor } = radioation
          return {
            subtitle: clinic,
            children: [
              {
                subtitle: region && 'Регион, где проходили лечение',
                text: region,
              },
              {
                subtitle: when && 'Когда начали это лечение',
                text: yearMonthToString(when),
              },
              {
                subtitle: end && 'Когда закончили это лечение',
                text: yearMonthToString(end),
              },
              {
                subtitle: doctor && 'ФИО врача',
                text: doctor,
              },
              {
                subtitle: schema && 'Схема лечения',
                text: schema,
              },
            ],
          }
        }),
      },
    ],
  },
]

export default createTreatment
