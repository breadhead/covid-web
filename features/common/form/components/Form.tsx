import {
  withAutoSaveOnFieldBlur,
  withAutoSaveWithDebounce,
} from '@breadhead/form-saver'
import React, { Component, createRef } from 'react'
import { Form as FinalForm, FormProps, FormSpy } from 'react-final-form'

import { FORM_ERROR_CLASSNAME } from '../../formHOCs/withFinalForm'
import WithScrollToInvalid from '../../formHOCs/withScrollToInvalid'

interface OwnProps {
  className?: string
  resetAfterSubmit?: boolean
  forceSubmitOnEnter?: boolean
  preventDefault?: boolean
  scrollToInvalid?: boolean
  saveDebounced?: (fields: any) => Promise<any>
  saveOnBlur?: (fields: any) => Promise<any>
}

type Props = OwnProps & FormProps

type SubmitEvent = React.FormEvent<HTMLFormElement>
type SubmitResult = Promise<object | undefined> | undefined

const DebouncedSaver = withAutoSaveWithDebounce(FormSpy)
const BlurSaver = withAutoSaveOnFieldBlur(FormSpy)

class Form extends Component<Props> {
  public static defaultProps = {
    scrollToInvalid: true,
  }
  private formRef = createRef<HTMLFormElement>()

  public render() {
    const {
      children,
      className,
      resetAfterSubmit,
      scrollToInvalid,
      saveDebounced,
      saveOnBlur,
      ...rest
    } = this.props

    return (
      <section className={className}>
        <FinalForm
          render={props => (
            <form
              onKeyDown={this.onEnterPress}
              ref={this.formRef}
              onSubmit={this.onSubmit(props.form.reset, props.handleSubmit)}
            >
              {!!saveDebounced && <DebouncedSaver save={saveDebounced} />}
              {!!saveOnBlur && <BlurSaver save={saveOnBlur} />}
              {scrollToInvalid && (
                <WithScrollToInvalid
                  formErrorClassName={FORM_ERROR_CLASSNAME}
                  submitFailed={props.submitFailed}
                />
              )}
              {children}
            </form>
          )}
          {...rest}
        />
      </section>
    )
  }

  private onSubmit = (
    reset: () => void,
    handleSubmit: (event: SubmitEvent) => SubmitResult,
  ) => (event: SubmitEvent) => {
    const { resetAfterSubmit } = this.props

    let promise: Promise<any>
    try {
      promise = Promise.resolve(handleSubmit(event))
    } catch (e) {
      promise = Promise.reject(e)
    }

    return promise.then(data => {
      if (resetAfterSubmit) {
        reset()
      }
      return data
    })
  }

  private onEnterPress = (e: React.KeyboardEvent) => {
    const { forceSubmitOnEnter, preventDefault } = this.props

    const buttonFits = e.keyCode === 13 && e.shiftKey === false
    const element = this.formRef.current

    const shouldSubmit = buttonFits && forceSubmitOnEnter && element
    const shouldPreventDefault = element && preventDefault

    if (shouldSubmit || shouldPreventDefault) {
      e.preventDefault()
      element!.dispatchEvent(new Event('submit', { cancelable: true }))
    }
  }
}

export default Form
