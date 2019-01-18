import React, { Component, createRef } from 'react'
import { Form as FinalForm, FormProps } from 'react-final-form'

interface OwnProps {
  className?: string
  resetAfterSubmit?: boolean
  forceSubmitOnEnter?: boolean
  preventDefault?: boolean
}

type Props = OwnProps & FormProps

type SubmitEvent = React.FormEvent<HTMLFormElement>
type SubmitResult = Promise<object | undefined> | undefined

class Form extends Component<Props> {
  private formRef = createRef<HTMLFormElement>()

  public render() {
    const { children, className, resetAfterSubmit, ...rest } = this.props

    return (
      <section className={className}>
        <FinalForm
          render={({ handleSubmit, form }) => (
            <form
              onKeyDown={this.onEnterPress}
              ref={this.formRef}
              onSubmit={this.onSubmit(form.reset, handleSubmit)}
            >
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
