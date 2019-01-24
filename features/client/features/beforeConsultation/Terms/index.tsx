import * as React from 'react'

import {
  ButtonSize,
  ButtonType,
  ButtonWithTooltip,
  Checkbox,
  Form,
} from '@app/features/common/form'

import NavLink, { TargetType } from '@app/ui/atoms/NavLink'

import styles from './Terms.css'

interface Fields {
  consultationTerms: boolean
  personalDataConditions: boolean
}

interface Props {
  next: () => void
}

interface State {
  failed: boolean
}

class Terms extends React.Component<Props, State> {
  public state = {
    failed: false,
  } as State

  public render() {
    return (
      <Form onSubmit={this.onSubmit as any}>
        <Checkbox
          name="consultationTerms"
          type="checkbox"
          className={styles.checkbox}
        >
          Я согласен с{' '}
          <NavLink
            target={TargetType.Blank}
            href="/static/docs/terms-of-use.pdf"
          >
            условиями получения консультации
          </NavLink>
        </Checkbox>
        <Checkbox
          name="personalDataConditions"
          type="checkbox"
          className={styles.checkbox}
        >
          Я согласен с{' '}
          <NavLink
            target={TargetType.Blank}
            href="/static/docs/personal-data-processing-policy.pdf"
          >
            условиями обработки персональных данных
          </NavLink>
        </Checkbox>
        <ButtonWithTooltip
          error={this.getError()}
          type={ButtonType.Submit}
          className={styles.button}
          size={ButtonSize.ExtraLarge}
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
    return this.props.next()
  }

  private getError = () =>
    this.state.failed ? 'Пожалуйста, примите условия' : undefined
}
export default Terms
