import * as React from 'react'

interface Props {
  submitFailed: boolean
  formErrorClassName: string
}

class WithScrollToInvalid extends React.Component<Props> {
  componentDidUpdate({ submitFailed: prevSubmitFailed }: Props) {
    const { submitFailed, formErrorClassName } = this.props
    if (submitFailed !== prevSubmitFailed && submitFailed) {
      this.logInvalidInputs(formErrorClassName)
    }
  }

  private logInvalidInputs = (formErrorClassName: string) => {
    const invalidInputs = document.querySelectorAll(`.${formErrorClassName}`)
    invalidInputs[0].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }

  render() {
    return null
  }
}

export default WithScrollToInvalid
