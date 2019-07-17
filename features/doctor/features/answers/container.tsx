import { State } from '@app/lib/store'
import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import { AnswerRequest } from '@app/lib/api/request/AnswerRequest'

import { getClaimStatus } from '@app/features/common/consultation'
import { getMainInfo } from '@app/features/common/consultation/selectors'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { answerQuestions } from './actions'
import { Fields, Props as FormProps } from './organisms/Answers'
import { Omit } from 'utility-types'

type MinimalAnswerRequest = Omit<AnswerRequest, 'pre'>

interface OwnProps {
  sendAnswers: (request: MinimalAnswerRequest) => Promise<void>
  preSaveAnswer: (request: MinimalAnswerRequest) => Promise<void>
  mainInfo: ListedClaim
}

type ExternalProps = Pick<FormProps, 'claim' | 'claimStatus'>

type Props = OwnProps & ExternalProps

const Container = (WrappedComponent: React.ComponentType<FormProps>) => {
  return class ContaineredComoponent extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent
          onSave={this.onSave}
          onPreSave={this.onPreSave}
          {...this.props}
        />
      )
    }

    private onPreSave = async (fields: Fields) => {
      const { preSaveAnswer } = this.props

      const completeData = this.getCompleteData(fields)
      await preSaveAnswer(completeData)
    }

    private onSave = async (fields: Fields) => {

      const { claim, sendAnswers } = this.props
      const { id } = claim
      const completeData = this.getCompleteData(fields)
      await sendAnswers(completeData)

      Router.push(`/consultation/redirect/${id}`)
    }

    private getCompleteData = (fields: Fields) => {
      const { claim } = this.props
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
      return completeData
    }
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  sendAnswers: (request: MinimalAnswerRequest) =>
    dispatch(answerQuestions({ ...request, pre: false }) as any),
  preSaveAnswer: (request: MinimalAnswerRequest) =>
    dispatch(answerQuestions({ ...request, pre: true }) as any),
})

const mapState = (state: State) => ({
  claimStatus: getClaimStatus(state),
  mainInfo: getMainInfo(state),
})

export default compose<FormProps, ExternalProps>(
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
