import Router from 'next/router'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import Button from '@app/ui/atoms/Button'

interface Props {
  claimId: string
  status: ClaimStatus
}

const Answer = ({ claimId, status }: Props) =>
  status !== ClaimStatus.DeliveredToCustomer ? (
    <Button onClick={() => Router.push(`/doctor/answers/${claimId}`)}>
      Заполнить ответ
    </Button>
  ) : null

export default Answer
