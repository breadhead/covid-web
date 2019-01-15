import { ShortClaim } from '@app/models/Claim/ShortClaim'

export enum QuestionsCategories {
  target = 'target',
  theme = 'theme',
}

export type ClaimData = Pick<ShortClaim, 'target' | 'theme' | 'id'>
