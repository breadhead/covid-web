export enum CloseType {
  Successful = 'successful',
  Unsuccessful = 'unsuccessful',
  Refuse = 'refuse',
  NoContact = 'no-contact',
  NoAnswerNeeded = 'no-answer-needed',
  WithoutNotification = 'without-notification',
}

export interface CloseClaimRequest {
  id: string
  type: CloseType
  deallocateQuota: boolean
  comment: string
}