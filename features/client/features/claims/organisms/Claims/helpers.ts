import { ListedClaim } from '@app/models/Claim/ListedClaim'

export const compareNumeric = (a: ListedClaim, b: ListedClaim) => {
  if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
    return -1
  }

  if (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()) {
    return 1
  }

  return 0
}
