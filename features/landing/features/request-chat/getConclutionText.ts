import * as text from './conslutionText'


// const getCovidSymptoms = (data: any) => data.symptoms.includes('cough') || data.deseases.includes('temperature') || data.deseases.includes('dyspnea') || data.deseases.includes('sore-throat') || data.deseases.includes('chills') || data.deseases.includes('body-aches')


// const getNoCovidSymptoms = (data: any) => data.symptoms.includes('sneezing') || data.deseases.includes('runny-nose') || data.deseases.includes('loose-stools') || data.deseases.includes('nausea') || data.deseases.includes('abdominal-pain')


const successLinks = [
  'http://faq.defeatcovid.ru/ru/collections/2213145-профилактика-covid-2019',
  'http://faq.defeatcovid.ru/ru/collections/2222612-мифы',
  'http://faq.defeatcovid.ru/ru/collections/2222638-прогнозы'
]

const riskLinks = [
  'http://faq.defeatcovid.ru/ru/collections/2213145-профилактика-covid-2019',
  'http://faq.defeatcovid.ru/ru/collections/2221891-симптомы-и-передача',
  'http://faq.defeatcovid.ru/ru/collections/2222733-здоровье-в-период-эпидемии',
]

const oncoLinks = [
  'http://faq.defeatcovid.ru/ru/collections/2213145-профилактика-covid-2019',
  'http://faq.defeatcovid.ru/ru/collections/2221891-симптомы-и-передача',
  'http://faq.defeatcovid.ru/ru/collections/2222733-здоровье-в-период-эпидемии',
]

export const getConclutionText = (data: any) => {
  console.log('data:', data)

  if (data.age < 60 && !data.deseases || data.deseases && data.deseases.length === 0) {
    return {
      text: text.SUCCESS,
      articles: successLinks
    }
  }

  if (data.age >= 60 &&
    data.deseases && data.deseases.length > 0 &&
    !data.deseases.includes('oncological')) {
    return {
      text: text.RISK,
      articles: riskLinks
    }
  }

  if (data.deseases && data.deseases.length > 0 &&
    data.deseases.includes('oncological')) {
    return {
      text: text.ONCOLOGICAL,
      articles: oncoLinks
    }
  }

  // if (data.age < 60 &&
  //   data.symptoms &&
  //   data.symptoms.length > 0 &&
  //   getNoCovidSymptoms(data)) {
  //   return {
  //     text: text.SUCCESS,
  //     articles: successLinks
  //   }
  // }


  // if (data.age < 60 &&
  //   data.symptoms &&
  //   data.symptoms.length > 0 &&
  //   getCovidSymptoms(data)) {
  //   return {
  //     text: text.SUCCESS,
  //     articles: successLinks
  //   }
  // }

  // if (data.age > 60 &&
  //   data.symptoms &&
  //   data.symptoms.length > 0 &&
  //   getNoCovidSymptoms(data)) {
  //   return {
  //     text: text.SUCCESS,
  //     articles: successLinks
  //   }
  // }



  // if (data.age > 60 &&
  //   data.symptoms &&
  //   data.symptoms.length > 0 &&
  //   getCovidSymptoms(data)) {
  //   return {
  //     text: text.SUCCESS,
  //     articles: successLinks
  //   }
  // }

  return null
}
