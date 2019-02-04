import * as React from 'react'

import {
  ButtonSize,
  ButtonType,
  Checkbox,
  Form,
} from '@app/features/common/form'
import Button from '@app/ui/atoms/Button'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import NavLink, { TargetType } from '@app/ui/atoms/NavLink'

import styles from './Terms.css'

import transitionStyles from '@app/features/common/formHOCs/withTooltip/transitionStyles.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'

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
    const error = this.getError()
    return (
      <Form onSubmit={this.onSubmit as any}>
        {() => (
          <>
            {' '}
            <Checkbox
              name="consultationTerms"
              type="checkbox"
              className={styles.checkbox}
            >
              Я согласен с{' '}
              <NavLink
                target={TargetType.Blank}
                href="/static/docs/personal-data-processing-policy.pdf"
              >
                политикой обработки персональных данных
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
                href="/static/docs/terms-of-use.pdf"
              >
                условиями пользовательского соглашения
              </NavLink>
            </Checkbox>
            <TransitionGroup component={null}>
              {!!error && (
                <CSSTransition
                  key={error}
                  timeout={300}
                  classNames={transitionStyles}
                >
                  <div className={styles.error}>{error}</div>
                </CSSTransition>
              )}
            </TransitionGroup>
            <Button
              type={ButtonType.Submit}
              className={styles.button}
              size={ButtonSize.ExtraLarge}
            >
              Начать консультацию
            </Button>
          </>
        )}
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
    this.state.failed
      ? `Пожалуйста, подтвердите своё согласие с${NON_BREAKING_SPACE} условиями предоставления консультации`
      : undefined
}

export default Terms
