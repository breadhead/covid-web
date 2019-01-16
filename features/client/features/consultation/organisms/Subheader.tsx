import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

import AnswerNotification from '../molecules/AnswerNotification'
import Company from '../molecules/Company'

interface Props {
  quotaClaim: QuotaClaim
}

const Subheader = ({ quotaClaim }: Props) => (
  <>
    <Company quotaClaim={quotaClaim} />
    <AnswerNotification />
  </>
)

export default Subheader
