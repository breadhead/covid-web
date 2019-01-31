import ClaimStatus from '@app/models/Claim/ClaimStatus'

export const showSendToClientButton = (status: ClaimStatus) => {
  return status === ClaimStatus.AnswerValidation
}
