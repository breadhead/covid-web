import { NON_BREAKING_SPACE } from '@app/lib/config'

export const SUCCESS = `Судя по всему, сейчас с вами всё в порядке.
Но рекомендуем быть на чеку и почитать наши инструкции. А если останутся вопросы —
используйте чат. 
Наш умный бот и врачи-волонтёры помогут разобраться.`

export const RISK = `Судя по всему, сейчас всё в порядке. 
Тем не менее, мы рекомендуем оставаться начеку и ознакомиться с нашими материалами по теме. 
Если останутся вопросы - задайте их в чат. 
Наш обученный бот и врачи-волонтёры помогут разобраться.
`
export const ONCOLOGICAL = `Если ваш вопрос связан с онкологическим заболеванием, мы рекомендуем вам обратиться в нашу справочную службу для онкологических пациентов и их близких. 
Если нет, то мы предлагаем ознакомиться с нашими материалами по теме. 
Если останутся вопросы - задайте их в чат. 
Наш обученный бот и врачи-волонтёры помогут разобраться.`


export const SUCCESS_LINKS = [
  {
    title: 'Профилактика COVID-2019',
    link:
      'http://faq.defeatcovid.ru/ru/collections/2213145-профилактика-covid-2019',
  },
  {
    title: 'Мифы',
    link: 'http://faq.defeatcovid.ru/ru/collections/2222612-мифы',
  },
  {
    title: 'Прогнозы',
    link: 'http://faq.defeatcovid.ru/ru/collections/2222638-прогнозы',
  },
]

export const RISK_LINKS = [
  {
    title: 'Профилактика COVID-2019',
    link:
      'http://faq.defeatcovid.ru/ru/collections/2213145-профилактика-covid-2019',
  },
  {
    title: `Симптомы и${NON_BREAKING_SPACE}передача`,
    link:
      'http://faq.defeatcovid.ru/ru/collections/2221891-симптомы-и-передача',
  },
  {
    title: 'Здоровье в период эпидемии',
    link:
      'http://faq.defeatcovid.ru/ru/collections/2222733-здоровье-в-период-эпидемии',
  },
]

export const ONCO_LINKS = [
  {
    title: 'Профилактика COVID-2019',
    link:
      'http://faq.defeatcovid.ru/ru/collections/2213145-профилактика-covid-2019',
  },
  {
    title: `Симптомы и${NON_BREAKING_SPACE}передача`,
    link:
      'http://faq.defeatcovid.ru/ru/collections/2221891-симптомы-и-передача',
  },
  {
    title: 'Здоровье в период эпидемии',
    link:
      'http://faq.defeatcovid.ru/ru/collections/2222733-здоровье-в-период-эпидемии',
  },
]
