import Button, { ButtonKind } from '@app/ui/atoms/Button'

import styles from './Login.css'

const Login = () => (
  <div className={styles.buttons}>
    <Button className={styles.button} kind={ButtonKind.Secondary}>
      Войти
    </Button>
    <Button className={styles.button}>Просто спросить</Button>
  </div>
)

export default Login
