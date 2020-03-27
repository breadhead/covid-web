import * as text from './conslutionText'
import { NON_BREAKING_SPACE } from '@app/lib/config'

export const getCovidSymptoms = (data: any) =>
  data.symptoms.cough ||
  !!data.symptoms.temperature ||
  !!data.symptom.dyspnea ||
  !!data.symptoms['sore-throat'] ||
  !!data.symptoms.chills ||
  data.symptoms['body-aches']

export const getNoCovidSymptoms = (data: any) =>
  !!data.symptoms.sneezing ||
  !!data.symptoms['runny-nose'] ||
  !!data.symptoms['loose-stools'] ||
  !!data.symptoms.nausea ||
  !!data.symptoms['abdominal-pain']

export const successLinks = [
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

export const riskLinks = [
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

export const oncoLinks = [
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

export const getConclutionText = (data: any) => {
  if (!data)
    return {
      text: 'no data',
      articles: oncoLinks,
    }

  if (
    Number(data.age) < 60 &&
    (!data.deseases ||
      (data.deseases && Object.keys(data.deseases).length === 0))
  ) {
    return {
      text: text.SUCCESS,
      articles: successLinks,
    }
  }

  if (
    Number(data.age) >= 60 &&
    !!data.deseases &&
    Object.keys(data.deseases).length > 0 &&
    !data.deseases.oncological
  ) {
    return {
      text: text.RISK,
      articles: riskLinks,
    }
  }

  if (
    !!data.deseases &&
    Object.keys(data.deseases).length > 0 &&
    !!data.deseases.oncological
  ) {
    console.log('here')
    return {
      text: text.ONCOLOGICAL,
      articles: oncoLinks,
    }
  }

  // if (Number(data.age) < 60 &&
  //   data.symptoms &&
  //   Object.keys(data.symptoms).length > 0 &&
  //   getNoCovidSymptoms(data)) {
  //   return {
  //     text: text.SUCCESS,
  //     articles: successLinks
  //   }
  // }

  // if (Number(data.age) < 60 &&
  //   data.symptoms &&
  //   Object.keys(data.symptoms).length > 0 &&
  //   getCovidSymptoms(data)) {
  //   return {
  //     text: text.SUCCESS,
  //     articles: successLinks
  //   }
  // }

  // if (Number(data.age) > 60 &&
  //   data.symptoms &&
  //   Object.keys(data.symptoms).length > 0 &&
  //   getNoCovidSymptoms(data)) {
  //   return {
  //     text: text.SUCCESS,
  //     articles: successLinks
  //   }
  // }

  // if (Number(data.age) > 60 &&
  //   data.symptoms &&
  //   Object.keys(data.symptoms).length > 0 &&
  //   getCovidSymptoms(data)) {
  //   return {
  //     text: text.SUCCESS,
  //     articles: successLinks
  //   }
  // }
}
