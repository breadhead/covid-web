// import { get } from "lodash";
import * as content from './conslutionConfig'
import { temperatureList } from '../request/organisms/RequestForm/config'

export const getCovidSymptoms = (data: any) =>
  !!data.symptoms.temperature ||
  !!data.symptoms.dyspnea || !!data.symptoms.thorax

export const getNoCovidSymptoms = (data: any) =>
  !!data.symptoms.sneezing ||
  !!data.symptoms['runny-nose'] ||
  !!data.symptoms['loose-stools'] ||
  !!data.symptoms.nausea ||
  !!data.symptoms['abdominal-pain']

export const getDangerSymptoms = (data: any) => {
  return (
    !!data.symptoms.thorax ||
    !!data.symptoms.dyspnea ||
    (!!data.symptoms.temperatureType &&
      (data.symptoms.temperatureType === temperatureList[1].value ||
        data.symptoms.temperatureType === temperatureList[2].value))
  )
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


  // в любой группе с основными симптомами ковида 
  if (!!data.symptoms && getDangerSymptoms(data)) {
    return {
      text: content.DANGER,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    }
  }

  // в любой группе без симптомов, с болезнями онкологии 
  if (withoutSymptoms && withDeseases && !!data.deseases.oncological) {
    return {
      text: content.ONCOLOGICAL,
      articles: content.ONCO_LINKS,
    }
  }

  // не в группе риска без симптомов, без болезней 
  if (age < 60 && withoutSymptoms && withoutDeseases) {
    return {
      text: content.SUCCESS,
      articles: content.SUCCESS_LINKS,
    }
  }

  // не в группе риска, с симптомами не ковида
  if (age < 60 && withSymptoms && !getCovidSymptoms(data)) {
    return {
      text: content.WITH_OTHER_SYMPTOMS,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS
    }
  }

  // в группе риска, без симптомов, с болезнями, без онкологии 
  if (age >= 60 && withoutSymptoms && withDeseases && !data.deseases.oncological) {
    return {
      text: content.RISK_GROUP,
      articles: content.RISK_LINKS,
    }
  }

  // в группе риска, с симптомами не ковида
  if (age >= 60 && withSymptoms && !getCovidSymptoms(data)) {
    return {
      text: content.WITH_OTHER_SYMPTOMS_AND_RISK_GROUP,
      articles: content.WITH_OTHER_SYMPTOMS_AND_RISK_LINKS
    }
  }

  // в группе риска с симптомами ковида
  if (age >= 60 && getCovidSymptoms(data)) {
    return {
      text: content.DANGER_AND_RISK_GROUP,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    }
  }

  return {
    text: content.SUCCESS,
    articles: content.SUCCESS_LINKS,
  }
}
