import ClaimStatus from '@app/models/Claim/ClaimStatus'

export function showChooseDoctorButton(
  status: ClaimStatus,
  isDoctorAssigned: boolean,
) {
  return status === ClaimStatus.QuestionnaireValidation && !isDoctorAssigned
}
