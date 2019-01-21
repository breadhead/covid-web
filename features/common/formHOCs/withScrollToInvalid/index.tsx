import * as React from 'react'

interface Props {
  submitFailed: boolean
  formErrorClassName: string
}

class WithScrollToInvalid extends React.Component<Props> {
  public componentDidUpdate({ submitFailed: prevSubmitFailed }: Props) {
    const { submitFailed, formErrorClassName } = this.props
    if (submitFailed !== prevSubmitFailed && submitFailed) {
      this.logInvalidInputs(formErrorClassName)
    }
  }

  public render() {
    return null
  }

  private logInvalidInputs = (formErrorClassName: string) => {
    const invalidInputs = document.querySelectorAll(`.${formErrorClassName}`)
    invalidInputs[0].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }
}

export default WithScrollToInvalid
