export enum CloseType {
  Successful = 'successful',
  Unsuccessful = 'unsuccessful',
  Refuse = 'refuse',
  NoContact = 'no-contact',
}

export interface CloseClaimRequest {
  id: string
  type: CloseType
  deallocateQuota: boolean
}
