import { getConclutionText, oncoLinks, successLinks, riskLinks } from '../../getConclutionText'
import { dataSuccess, dataRisk, dataOncological } from './mock'
import * as text from '../../conslutionText';


describe('getConclutionText', () => {
  test('should return success values for success data', () => {
    const income = dataSuccess

    const res = getConclutionText(income);

    expect(res).toMatchObject({
      text: text.SUCCESS,
      articles: successLinks,
    })
  })

  test('should return risk values for risk data', () => {
    const income = dataRisk

    const res = getConclutionText(income);

    expect(res).toMatchObject({
      text: text.RISK,
      articles: riskLinks,
    })
  })


  test('should return onco values for onco data', () => {
    const income = dataOncological

    const res = getConclutionText(income);

    expect(res).toMatchObject({
      text: text.ONCOLOGICAL,
      articles: oncoLinks
    })
  })
})
