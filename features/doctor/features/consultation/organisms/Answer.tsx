import Button from '@app/ui/atoms/Button'
import Router from 'next/router'

interface Props {
  claimId: string
}

const Answer = ({ claimId }: Props) => (
  <Button onClick={() => Router.push(`/doctor/answer/${claimId}`)}>
    Заполнить ответ
  </Button>
)

export default Answer
