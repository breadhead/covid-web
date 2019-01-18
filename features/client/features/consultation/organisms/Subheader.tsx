import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

import Company from '../molecules/Company'
import Notification from '../molecules/Notification'

interface Props {
  quotaClaim: QuotaClaim
}

const Subheader = ({ quotaClaim }: Props) => (
  <>
    <Company quotaClaim={quotaClaim} />
    <Notification />
  </>
)

export default Subheader
