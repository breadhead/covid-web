import * as React from 'react'

import { withLoginModal, WithLoginModal } from '@app/features/login'
import Button, { ButtonKind } from '@app/ui/atoms/Button'

interface LoginButtonProps {
  className?: any
}

type Props = LoginButtonProps & WithLoginModal

const LoginButton: React.StatelessComponent<Props> = ({
  className,
  openLogin,
}: Props) => (
  <Button className={className} onClick={openLogin} kind={ButtonKind.Secondary}>
    Войти
  </Button>
)

// Костыль, причина — иногда withLoginModal === undefined
// Добавил @igorkamyshev 16.1.2018
// На работоспособность приложение не вляет на первый взгляд
// Времени разбираться не было
const Container = withLoginModal || ((c: any) => c)
export default Container(LoginButton) as any
