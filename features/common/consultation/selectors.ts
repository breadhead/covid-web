import { createSelector } from 'reselect'

import { getSituationClaim } from '@app/features/common/claim/features/editClaim/features/Situation'
import { getShortClaim } from '@app/features/common/claim/features/newClaim/selectors'
import { State } from '@app/lib/store'
import Claim from '@app/models/Claim/Claim'

export const getQuotaClaim = (state: State) =>
  state.consultation.claimData.claim

export const getQuotaClaimId = (state: State) =>
  state.consultation.claimData.claim && state.consultation.claimData.claim.id

export const getQuotaName = (state: State) =>
  state.consultation.claimData.claim && state.consultation.claimData.claim.name

export const getMainInfo = (state: State) =>
  state.consultation.claimData.mainInfo

export const getClientClaimsList = (state: State) =>
  state && state.clientClaim && state.clientClaim.clientClaims

export const getClaimStatus = createSelector(
  getMainInfo,
  mainInfo => mainInfo && mainInfo.status,
)

export const getAuthorLogin = (state: State) =>
  state.claim.newClaim.claim && state.claim.newClaim.claim.authorLogin

export const getClaimId = (state: State) =>
  state.claim.newClaim.claim && state.claim.newClaim.claim.id

const getQuestionClaim = (state: State) =>
  state.consultation.claimData.questions

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
