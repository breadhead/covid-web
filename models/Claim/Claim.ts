import { ListedClaim } from './ListedClaim'
import { QuotaClaim } from './QuotaClaim'
import { ShortClaim } from './ShortClaim'
import { SituationClaim } from './SituationClaim'

export default interface Claim {
  short: ShortClaim
  situation: SituationClaim
  quota: QuotaClaim
  mainInfo: ListedClaim
}
