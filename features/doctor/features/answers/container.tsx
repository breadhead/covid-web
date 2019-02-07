import { State } from '@app/lib/store'
import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import { AnswerRequest } from '@app/lib/api/request/AnswerRequest'

import { getClaimStatus } from '@app/features/common/consultation'
import { answerQuestions } from './actions'
import { Fields, Props as FormProps } from './organisms/Answers'

interface OwnProps {
  sendAnswers: (request: AnswerRequest) => Promise<void>
}

type ExternalProps = Pick<FormProps, 'claim' | 'claimStatus'>

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
        answers: Object.entries(fields)
          .filter(([_, answer]) => !!answer)
          .map(([question, answer]) => ({
            question: question
              .replace('Дополнительные вопросы: ', '')
              .replace(//g, '.'),
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

const mapState = (state: State) => ({
  claimStatus: getClaimStatus(state),
})

export default compose<FormProps, ExternalProps>(
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
