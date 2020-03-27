import * as content from './conslutionConfig'
import { get } from 'lodash'
import { temperatureList } from '../request/organisms/RequestForm/config'

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

export const getDangerSymptomsForYoung = (data: any) => {
  return (
    !!data.symptoms.thorax ||
    !!data.symptoms.dyspnea ||
    (!!data.symptoms.temperatureType &&
      (data.symptoms.temperatureType === temperatureList[1].value ||
        data.symptoms.temperatureType === temperatureList[2].value))
  )
}

export const getDangerSymptomsForElderly = (data: any) => {
  return Number(data.age) >= 60 && !!get(data, 'symptoms.temperature')
}

export const getConclutionText = (data: any) => {
  if (!data)
    return {
      text: 'no data',
      articles: content.ONCO_LINKS,
    }

  const age = Number(data.age)

  const withoutSymptoms =
    !data.symptoms || Object.keys(data.symptoms).length === 0
  const withoutDeseases =
    !data.deseases || Object.keys(data.deseases).length === 0
  const withSymptoms = !!data.symptoms && Object.keys(data.symptoms).length > 0
  const withDeseases = !!data.deseases && Object.keys(data.deseases).length > 0

  if (getDangerSymptomsForElderly(data)) {
    return {
      text: content.DANGER_AND_RISK_GROUP,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    }
  }

  if (getDangerSymptomsForYoung(data)) {
    return {
      text: content.DANGER,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    }
  }

  if (age >= 60 && getCovidSymptoms(data)) {
    return {
      text: content.WITH_OTHER_SYMPTOMS_AND_RISK_GROUP,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    }
  }

  if (age < 60 && (getCovidSymptoms(data) || getDangerSymptomsForYoung(data))) {
    return {
      text: content.DANGER,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    }
  }

  if (!!data.deseases && !!data.deseases.oncological) {
    return {
      text: content.ONCOLOGICAL,
      articles: content.ONCO_LINKS,
    }
  }

  if (age >= 60) {
    return {
      text: content.RISK_GROUP,
      articles: content.RISK_LINKS,
    }
  }

  // if (age < 60 && withoutSymptoms && withoutDeseases) {
  //   return {
  //     text: content.SUCCESS,
  //     articles: content.SUCCESS_LINKS,
  //   }
  // }

  // if (age >= 60 && withoutSymptoms && withDeseases && !data.deseases.oncological) {
  //   return {
  //     text: content.RISK_GROUP,
  //     articles: content.RISK_LINKS,
  //   }
  // }

  // if (withoutSymptoms && withDeseases && !!data.deseases.oncological) {
  //   return {
  //     text: content.ONCOLOGICAL,
  //     articles: content.ONCO_LINKS,
  //   }
  // }

  // if (age < 60 && withSymptoms && !getCovidSymptoms(data)) {
  //   return {
  //     text: content.WITH_OTHER_SYMPTOMS,
  //     articles: content.WITH_OTHER_SYMPTOMS_LINKS
  //   }
  // }

  // if (age >= 60 && withSymptoms && !getCovidSymptoms(data)) {
  //   return {
  //     text: content.WITH_OTHER_SYMPTOMS_AND_RISK_GROUP,
  //     articles: content.WITH_OTHER_SYMPTOMS_AND_RISK_LINKS
  //   }
  // }

  return {
    text: content.SUCCESS,
    articles: content.SUCCESS_LINKS,
  }
}
