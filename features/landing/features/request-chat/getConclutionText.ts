import * as content from './conslutionConfig'

export const getCovidSymptoms = (data: any) =>
  data.symptoms.cough ||
  !!data.symptoms.temperature ||
  !!data.symptoms.dyspnea ||
  !!data.symptoms['sore-throat'] ||
  !!data.symptoms.chills ||
  data.symptoms['body-aches']

export const getNoCovidSymptoms = (data: any) =>
  !!data.symptoms.sneezing ||
  !!data.symptoms['runny-nose'] ||
  !!data.symptoms['loose-stools'] ||
  !!data.symptoms.nausea ||
  !!data.symptoms['abdominal-pain']




export const getConclutionText = (data: any) => {
  if (!data)
    return {
      text: 'no data',
      articles: content.ONCO_LINKS,
    }

  const age = Number(data.age)

  const withoutSymptoms = !data.symptoms || Object.keys(data.symptoms).length === 0
  const withoutDeseases = !data.deseases || Object.keys(data.deseases).length === 0
  const withSymptoms = !!data.symptoms && Object.keys(data.symptoms).length > 0
  const withDeseases = !!data.deseases && Object.keys(data.deseases).length > 0

  if (age < 60 && withoutSymptoms && withoutDeseases) {
    return {
      text: content.SUCCESS,
      articles: content.SUCCESS_LINKS,
    }
  }

  if (age >= 60 && withoutSymptoms && withDeseases && !data.deseases.oncological) {
    return {
      text: content.RISK,
      articles: content.RISK_LINKS,
    }
  }

  if (withoutSymptoms && withDeseases && !!data.deseases.oncological) {
    return {
      text: content.ONCOLOGICAL,
      articles: content.ONCO_LINKS,
    }
  }

  if (age < 60 && withSymptoms && !getCovidSymptoms(data)) {
    return {
      text: content.WITH_OTHER_SYMPTOMS,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS
    }
  }

  if (age >= 60 && withSymptoms && !getCovidSymptoms(data)) {
    return {
      text: content.WITH_OTHER_SYMPTOMS_AND_RISK,
      articles: content.WITH_OTHER_SYMPTOMS_AND_RISK_LINKS
    }
  }

  // if (age < 60 &&
  //   data.symptoms &&
  //   Object.keys(data.symptoms).length > 0 &&
  //   getNoCovidSymptoms(data)) {
  //   return {
  //     text: content.SUCCESS,
  //     articles: content.successLinks
  //   }
  // }

  // if (age < 60 &&
  //   data.symptoms &&
  //   Object.keys(data.symptoms).length > 0 &&
  //   getCovidSymptoms(data)) {
  //   return {
  //     text: content.SUCCESS,
  //     articles: content.successLinks
  //   }
  // }

  // if (age > 60 &&
  //   data.symptoms &&
  //   Object.keys(data.symptoms).length > 0 &&
  //   getNoCovidSymptoms(data)) {
  //   return {
  //     text: content.SUCCESS,
  //     articles: content.successLinks
  //   }
  // }

  // if (age > 60 &&
  //   data.symptoms &&
  //   Object.keys(data.symptoms).length > 0 &&
  //   getCovidSymptoms(data)) {
  //   return {
  //     text: content.SUCCESS,
  //     articles: content.successLinks
  //   }
  // }
}
