import * as React from 'react'

import routes from '@app/routes'
const Router = routes.Router

import { withLoginModal, WithLoginModal } from '@app/features/login'
import Button, { ButtonKind } from '@app/ui/atoms/Button'

type Props = WithLoginModal

const Header: React.StatelessComponent<Props> = ({ openLogin }) => (
  <>
    <Button onClick={openLogin} kind={ButtonKind.Secondary}>
      Войти
    </Button>
    <Button
      onClick={() => Router.pushRoute(`/client/new-claim`)}
      kind={ButtonKind.Primary}
    >
      Начать консультацию
    </Button>
  </>
)

export default withLoginModal(Header)
