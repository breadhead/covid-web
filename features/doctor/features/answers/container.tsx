import Router from 'next/router'
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

    private onFormSubmit = async (fields: Fields) => {
      const { claim, sendAnswers } = this.props
      const { id } = claim
      const completeData = {
        claimId: id,
        answers: Object.entries(fields).map(([question, answer]) => ({
          question: question.replace('Дополнительные вопросы: ', ''),
          answer,
        })),
      }

      await sendAnswers(completeData)

      Router.push(`/consultation/redirect/${id}`)
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
