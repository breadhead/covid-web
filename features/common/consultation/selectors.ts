import { createSelector } from 'reselect'

import { getSituationClaim } from '@app/features/client/features/editClaim/features/Situation'
import { getShortClaim } from '@app/features/client/features/newClaim/selectors'
import { State } from '@app/lib/store'
import Claim from '@app/models/Claim/Claim'

export const getQuotaClaim = (state: State) => state.consultation.claim

export const getMainInfo = (state: State) => state.consultation.mainInfo

export const getClaimId = (state: State) =>
  state.client.newClaim.claim && state.client.newClaim.claim.id

const getQuestionClaim = (state: State) => state.consultation.questions

export const getClaim = createSelector(
  getQuotaClaim,
  getMainInfo,
  getSituationClaim,
  getShortClaim,
  getQuestionClaim,
  (quota, mainInfo, situation, short, questions) => {
    if (quota && mainInfo && situation && short && questions) {
      const claim: Claim = {
        quota,
        mainInfo,
        situation,
        short,
        questions,
      }

      return claim
    }

    return null
  },
)
