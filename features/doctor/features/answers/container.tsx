import { FORM_ERROR } from 'final-form'
import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, stateProps } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import { AnswerRequest } from '@app/lib/api/request/AnswerRequest'

import { answerQuestions } from './actions'
import { Fields, Props as FormProps } from './organisms/Answers'

interface OwnProps {
  sendAnswers: (request: AnswerRequest) => Promise<void>
}

type ExternalProps = Pick<FormProps, 'claim'>

type Props = OwnProps & ExternalProps

interface State {
  error?: string
}

const Container = (WrappedComponent: React.ComponentType<FormProps>) => {
  return class extends React.Component<Props, State> {
    public state = {
      error: undefined,
    } as State

    public render() {
      return (
        <WrappedComponent
          onSubmit={this.onFormSubmit}
          error={this.state.error}
          {...this.props}
        />
      )
    }

    private onFormSubmit = async (fields: Fields) => {
      const { claim, sendAnswers } = this.props
      const { id } = claim

      if (!this.isValid(fields)) {
        this.setState({ error: 'Заполните все ответы' })
        return
      }

      const completeData = {
        claimId: id,
        answers: Object.entries(fields.answers).map(([question, answer]) => ({
          question: question.replace('Дополнительные вопросы: ', ''),
          answer,
        })),
      }

      await sendAnswers(completeData)

      this.setState({ error: undefined })

      Router.push(`/doctor/consultation/${id}`)
    }

    private isValid = ({ answers }: Fields) => {
      const { claim } = this.props
      const { defaultQuestions, additionalQuestions } = claim

      const questionsCount = [...defaultQuestions, ...additionalQuestions]
        .length

      const answered = Object.entries(answers || {})
        .filter(([_, answer]) => !!answer)
        .map(([question, _]) => question)

      return answered.length === questionsCount
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
