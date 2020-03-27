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


export const WITH_OTHER_SYMPTOMS = `
Судя по всему, сейчас всё в порядке -  симптомы, описанные вами не характерны для тяжелой формы инфекции. 
Тем не менее, мы рекомендуем внимательно следить за своим самочувствием. 
Вызовите скорую помощь, если у вас появятся следующие симптомы:

— Одышка (ощущение нехватки воздуха в покое или даже при обычной бытовой физической нагрузке);
— Температура тела выше 38.5 градусов;
- Постоянная боль или чувство сдавленности в груди
- Спутанность сознания, сильная слабость
- Посинение губ или лица
Если останутся вопросы - задайте их в чат. Наш обученный бот и врачи-волонтёры помогут разобраться.`


export const WITH_OTHER_SYMPTOMS_AND_RISK = `
Судя по всему, сейчас всё в порядке -  симптомы, описанные вами не характерны для тяжелой формы инфекции. 
Тем не менее, мы рекомендуем внимательно следить за своим самочувствием. 
Вызовите скорую помощь, если у вас появятся следующие симптомы:

— Одышка (ощущение нехватки воздуха в покое или даже при обычной бытовой физической нагрузке);
— Температура тела выше 37.5 градусов;
- Постоянная боль или чувство сдавленности в груди
- Спутанность сознания, сильная слабость
- Посинение губ или лица
Если останутся вопросы - задайте их в чат. Наш обученный бот и врачи-волонтёры помогут разобраться.`

export const DANGER = `ВНИМАНИЕ! 
Симптомы, которые вы указали могут быть опасными, пожалуйста, вызовите скорую, если у вас или у близкого вам человека:

— Одышка (ощущение нехватки воздуха в покое или даже при обычной бытовой физической нагрузке);
— Температура тела выше 38.5 градусов;
- Постоянная боль или чувство сдавленности в груди
- Спутанность сознания, сильная слабость
- Посинение губ или лица`


export const DANGER_AND_RISK = `ВНИМАНИЕ! 
Симптомы, которые вы указали могут быть опасными, пожалуйста, вызовите скорую, если у вас или у близкого вам человека:

— Одышка (ощущение нехватки воздуха в покое или даже при обычной бытовой физической нагрузке);
— Температура тела выше 37.5 градусов;
- Постоянная боль или чувство сдавленности в груди
- Спутанность сознания, сильная слабость
- Посинение губ или лица`


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


export const WITH_OTHER_SYMPTOMS_LINKS = [
  {
    title: `Симптомы и${NON_BREAKING_SPACE}передача`,
    link:
      'http://faq.defeatcovid.ru/ru/collections/2221891-симптомы-и-передача',
  },
  {
    title: 'Как ухаживать за человеком с симптомами ковид и не заразиться самому?',
    link:
      'http://faq.defeatcovid.ru/ru/articles/3811646-как-ухаживать-за-человеком-с-симптомами-ковид-и-не-заразиться-самому',
  },
  {
    title: 'Лечение COVID-2019',
    link:
      'http://faq.defeatcovid.ru/ru/collections/2222135-лечение-covid-2019',
  },
]

export const WITH_OTHER_SYMPTOMS_AND_RISK_LINKS = [
  {
    title: `Симптомы и${NON_BREAKING_SPACE}передача`,
    link:
      'http://faq.defeatcovid.ru/ru/collections/2221891-симптомы-и-передача',
  },
  {
    title: 'Как ухаживать за человеком с симптомами ковид и не заразиться самому?',
    link:
      'http://faq.defeatcovid.ru/ru/articles/3811646-как-ухаживать-за-человеком-с-симптомами-ковид-и-не-заразиться-самому',
  },
  {
    title: 'Лечение COVID-2019',
    link:
      'http://faq.defeatcovid.ru/ru/collections/2222135-лечение-covid-2019',
  },
]