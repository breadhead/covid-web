import * as content from './../conslutionConfig'
import { getConclutionText } from '../getConclutionText';
import { dataSuccess, dataRisk, dataOncological } from './mock';


describe('getConclutionText', () => {
  test('should return success values for success data', () => {
    const income = dataSuccess

    const res = getConclutionText(income);

    expect(res).toMatchObject({
      text: content.SUCCESS,
      articles: content.SUCCESS_LINKS,
    })
  })

  test('should return risk values for risk data', () => {
    const income = dataRisk

    const res = getConclutionText(income);

    expect(res).toMatchObject({
      text: content.RISK,
      articles: content.RISK_LINKS,
    })
  })


  test('should return onco values for onco data', () => {
    const income = dataOncological

    const res = getConclutionText(income);

    expect(res).toMatchObject({
      text: content.ONCOLOGICAL,
      articles: content.ONCO_LINKS
    })
  })
})
