import * as React from 'react'

import { withLoginModal, WithLoginModal } from '@app/features/login'
import Button, { ButtonKind } from '@app/ui/atoms/Button'

type Props = WithLoginModal

const Header: React.StatelessComponent<Props> = ({ openLogin }) => (
  <>
    <Button onClick={openLogin} kind={ButtonKind.Secondary}>
      Войти
    </Button>
  </>
)

export default withLoginModal(Header)
