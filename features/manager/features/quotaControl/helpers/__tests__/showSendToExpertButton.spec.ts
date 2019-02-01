import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { showChooseDoctorButton } from '../showSendToExpertButton'

describe('showChooseDoctorButton works', () => {
  test('should return true if status is QuestionnaireValidation and there is no doctor assigned', () => {
    expect(
      showChooseDoctorButton(ClaimStatus.QuestionnaireValidation, false),
    ).toBe(true)
  })
  test('should return false if status isnt QuestionnaireValidation and  there is no doctor assigned', () => {
    expect(showChooseDoctorButton(ClaimStatus.AtTheDoctor, false)).toBe(false)
  })
  test('should return false if status is QuestionnaireValidation and  there is a doctor assigned', () => {
    expect(
      showChooseDoctorButton(ClaimStatus.QuestionnaireValidation, true),
    ).toBe(false)
  })
})
