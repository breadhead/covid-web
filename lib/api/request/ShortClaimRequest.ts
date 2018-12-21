import { ShortClaim } from '@app/models/Claim/ShortClaim'

// Omit taken from https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type ShortClaimRequest = Omit<ShortClaim, 'id'>

export default ShortClaimRequest
