import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import { AnswerRequest } from '@app/lib/api/request/AnswerRequest'

import { answerQuestions } from './actions'
import { Fields, Props as FormProps } from './organisms/Answers'

interface OwnProps {
  sendAnswers: (request: AnswerRequest) => Promise<void>
}

type ExternalProps = Pick<FormProps, 'claim'>

type Props = OwnProps & ExternalProps

const Container = (WrappedComponent: React.ComponentType<FormProps>) => {
  return class extends React.Component<Props> {
    public render() {
      return <WrappedComponent onSubmit={this.onFormSubmit} {...this.props} />
    }

    private onFormSubmit = async ({ answers }: Fields) => {
      const { claim, sendAnswers } = this.props

      // validate

      const completeData = {
        claimId: claim.id,
        answers: Object.entries(answers).map(([question, answer]) => ({
          question,
          answer,
        })),
      }

      await sendAnswers(completeData)
    }
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  sendAnswers: (request: AnswerRequest) =>
    dispatch(answerQuestions(request) as any),
})

export default compose<FormProps, ExternalProps>(
  connect(
    null,
    mapDispatch,
  ),
  Container,
)
