import React, { Component, createRef } from 'react'
import { Form as FinalForm, FormProps } from 'react-final-form'

interface OwnProps {
  className?: string
  resetAfterSubmit?: boolean
  forceSubmitOnEnter?: boolean
}

type Props = OwnProps & FormProps
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
              onSubmit={event =>
                Promise.resolve(handleSubmit(event)).then(data => {
                  if (resetAfterSubmit) {
                    form.reset()
                  }
                  return data
                })
              }
            >
              {children}
            </form>
          )}
          {...rest}
        />
      </section>
    )
  }

  private onEnterPress = (e: React.KeyboardEvent) => {
    const { forceSubmitOnEnter } = this.props

    const buttonFits = e.keyCode === 13 && e.shiftKey === false
    const element = this.formRef.current

    if (buttonFits && forceSubmitOnEnter && element) {
      e.preventDefault()
      element.dispatchEvent(new Event('submit', { cancelable: true }))
    }
  }
}

export default Form
