import Claim from '@app/models/Claim/Claim'
import { tryOr } from '@front/helpers/tryOr'

export const forCorporate = (claim: Claim) =>
  tryOr(
    () =>
      !!(
        claim.short.company &&
        claim.short.company.name &&
        claim.short.company.position
      ),
    false,
  )
