import * as content from './../conslutionConfig'
import { getConclutionText } from '../getConclutionText'
import {
  dataSuccess,
  dataRisk,
  dataOncological,
  dataDanger2,
  withOtherSymptomsAndNoRiskGroup,
  dataOtherSymptomsAndRisk,
  dataDanger,
  dataDangerAndRisk,
} from './mock'

describe('getConclutionText', () => {
  test('should return success values for success data', () => {
    const income = dataSuccess

    const res = getConclutionText(income)

    expect(res).toMatchObject({
      text: content.SUCCESS,
      articles: content.SUCCESS_LINKS,
    })
  })

  test('should return risk values for risk data', () => {
    const income = dataRisk

    const res = getConclutionText(income)

    expect(res).toMatchObject({
      text: content.RISK_GROUP,
      articles: content.RISK_LINKS,
    })
  })

  test('should return onco values for onco data', () => {
    const income = dataOncological

    const res = getConclutionText(income)

    expect(res).toMatchObject({
      text: content.ONCOLOGICAL,
      articles: content.ONCO_LINKS,
    })
  })

  test('should return success values for for success data', () => {
    const income = withOtherSymptomsAndNoRiskGroup

    const res = getConclutionText(income)

    expect(res).toMatchObject({
      text: content.WITH_OTHER_SYMPTOMS,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    })
  })

  test('should return with-other-symtoms-and-risk values for with-other-symtoms-and-risk data', () => {
    const income = dataOtherSymptomsAndRisk

    const res = getConclutionText(income)

    expect(res).toMatchObject({
      text: content.WITH_OTHER_SYMPTOMS_AND_RISK_GROUP,
      articles: content.WITH_OTHER_SYMPTOMS_AND_RISK_LINKS,
    })
  })

  test('should return danger values for danger data 1', () => {
    const income = dataDanger

    const res = getConclutionText(income)

    expect(res).toMatchObject({
      text: content.DANGER,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    })
  })

  test('should return danger values for danger data 2', () => {
    const income = dataDanger2

    const res = getConclutionText(income)

    expect(res).toMatchObject({
      text: content.DANGER,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    })
  })

  test('should return danger-and-risk values for danger-and-risk data', () => {
    const income = dataDangerAndRisk

    const res = getConclutionText(income)

    expect(res).toMatchObject({
      text: content.DANGER_AND_RISK_GROUP,
      articles: content.WITH_OTHER_SYMPTOMS_LINKS,
    })
  })
})
