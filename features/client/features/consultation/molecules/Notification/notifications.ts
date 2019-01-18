import ClaimStatus from '@app/models/Claim/ClaimStatus'

export const notifications = {
  [ClaimStatus.QuotaAllocation]: {
    id: '1',
    image: '/static/images/waiting-letter.png',
    title: '',
    text: '',
    button: '',
  },
  [ClaimStatus.QuestionnaireWaiting]: {
    id: '2',
    image: '/static/images/continue-filling.png',
    title: '',
    text: '',
    button: '',
  },
  [ClaimStatus.QuestionnaireValidation]: {
    id: '3',
    image: '/static/images/expert-answered.png',
    title: '',
    text: '',
    button: '',
  },
  [ClaimStatus.DeliveredToCustomer]: {
    id: '4',
    image: '/static/images/expert-answering.png',
    title: '',
    text: '',
    button: '',
  },
  [ClaimStatus.Closed]: {
    id: '5',
    image: '/static/images/consultation-done-success.png',
    title: '',
    text: '',
    button: '',
  },
  [ClaimStatus.Denied]: {
    id: '6',
    image: '/static/images/expert-answering.png',
    title: '',
    text: '',
    button: '',
  },
  [ClaimStatus.QueueForQuota]: {
    id: '7',
    image: '/static/images/queue.png',
    title: '',
    text: '',
    button: '',
  },
}
