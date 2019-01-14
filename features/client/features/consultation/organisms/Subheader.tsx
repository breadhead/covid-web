import { QuotaClaim } from '@app/models/Claim/QuotaClaim'

import AnswerNotification from '../molucules/AnswerNotification'
import Company from '../molucules/Company'

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
