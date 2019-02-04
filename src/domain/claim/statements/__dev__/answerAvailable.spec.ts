import { Question } from '@app/models/Claim/AnswerClaim'
import Claim from '@app/models/Claim/Claim'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { answerAvailable } from '../answerAvailable'

describe('answerAvailable', () => {
  const createClaimMock = (
    status: ClaimStatus,
    defaultQuestions: Question[],
    additionalQuestions: Question[],
  ): Claim =>
    ({
      mainInfo: {
        status,
      },
      questions: {
        defaultQuestions,
        additionalQuestions,
      },
    } as any)

  const UNSUCCESS_STATUSES = [
    ClaimStatus.AnswerValidation,
    ClaimStatus.AtTheDoctor,
    ClaimStatus.Denied,
    ClaimStatus.Draft,
    ClaimStatus.QuestionnaireValidation,
    ClaimStatus.QuestionnaireWaiting,
    ClaimStatus.QueueForQuota,
    ClaimStatus.QuotaAllocation,
  ]

  const SUCCESS_STATUSES = [ClaimStatus.Closed, ClaimStatus.DeliveredToCustomer]

  test('should return false for invalid claim (not a claim)', () => {
    expect(answerAvailable({} as any)).toBeFalsy()
  })

  test('should return false for any not success status', () => {
    UNSUCCESS_STATUSES.forEach(status => {
      const claim = createClaimMock(status, [], [])

      expect(answerAvailable(claim)).toBeFalsy()
    })
  })

  test('should return true for claim in success status without answers', () => {
    SUCCESS_STATUSES.forEach(status => {
      const claim = createClaimMock(status, [], [])

      expect(answerAvailable(claim)).toBeFalsy()
    })
  })

  test('should return false for any claim without questions and answers', () => {
    Object.values(ClaimStatus).forEach(status => {
      const claim = createClaimMock(status, [], [])

      expect(answerAvailable(claim)).toBeFalsy()
    })
  })

  test('should return false for any claim with questions and without answers', () => {
    Object.values(ClaimStatus).forEach(status => {
      const claim = createClaimMock(
        status,
        [{ question: 'What?' }, { question: 'What?', answer: '' }],
        [{ question: 'What?' }, { question: 'What?', answer: '' }],
      )

      expect(answerAvailable(claim)).toBeFalsy()
    })
  })

  test('should return true for claim in success status with one answer', () => {
    SUCCESS_STATUSES.forEach(status => {
      const claim = createClaimMock(
        status,
        [{ question: 'What?', answer: 'YE' }],
        [{ question: 'What?', answer: 'Sure' }],
      )

      expect(answerAvailable(claim)).toBeTruthy()
    })
  })

  test('should return true for claim in success status with more than one answers', () => {
    SUCCESS_STATUSES.forEach(status => {
      const claim = createClaimMock(
        status,
        [{ question: 'What?', answer: 'YE' }],
        [{ question: 'What?', answer: 'Sure' }],
      )

      expect(answerAvailable(claim)).toBeTruthy()
    })
  })
})
