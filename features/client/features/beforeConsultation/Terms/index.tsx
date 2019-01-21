import Router from 'next/router'
import * as React from 'react'

import {
  ButtonType,
  ButtonWithTooltip,
  Checkbox,
  Form,
} from '@app/features/common/form'

import styles from './Terms.css'

interface Fields {
  consultationTerms: boolean
  personalDataConditions: boolean
}

interface State {
  failed: boolean
}

class Terms extends React.Component<{}, State> {
  public state = {
    failed: false,
  } as State

  public render() {
    return (
      <Form onSubmit={this.onSubmit as any}>
        <Checkbox name="consultationTerms" className={styles.checkbox}>
          Я согласен с <a href="#">условиями получения консультации</a>
        </Checkbox>
        <Checkbox name="personalDataConditions" className={styles.checkbox}>
          Я согласен с <a href="#">условиями обработки персональных данных</a>
        </Checkbox>
        <ButtonWithTooltip
          error={this.getError()}
          type={ButtonType.Submit}
          className={styles.button}
        >
          Начать консультацию
        </ButtonWithTooltip>
      </Form>
    )
  }

  private onSubmit = ({
    consultationTerms,
    personalDataConditions,
  }: Fields) => {
    if (!consultationTerms || !personalDataConditions) {
      return this.setState({ failed: true })
    }

    this.setState({ failed: false })
    return Router.push('/client/new-claim')
  }

  private getError = () =>
    this.state.failed ? 'Пожалуйста, примите условия' : undefined
}
export default Terms
