import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import routes from '@app/routes'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import {
  createQuestionsClaim as createQuestionsClaimAction,
  shortClaim as shortClaimAction,
} from './actions'
import { Props as PageProps } from './page'
import { getQuestionsError } from './selectors'
const Router = routes.Router
interface Props {
  shortClaim: ShortClaim
  createQuestionsClaim: (fields: QuestionsClaim) => Promise<QuestionsClaim>
  error: false | string
}

interface Query {
  id: string
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props> {
    public static async getInitialProps(context: AppContext<Query>) {
      const { id } = context.query

      const shortClaim = await context.reduxStore.dispatch(shortClaimAction(
        id,
      ) as any)
      return {
        shortClaim,
      }
    }
    public render() {
      const {
        shortClaim: { target, theme },
        error,
      } = this.props
      return (
        <WrappedComponent
          error={error}
          claimData={{ target, theme }}
          onFormSubmit={this.onFormSubmit}
        />
      )
    }

    private onFormSubmit = async ({
      defaultQuestions,
      ...rest
    }: QuestionsClaim) => {
      const { createQuestionsClaim, shortClaim } = this.props

      const request = {
        ...rest,
        defaultQuestions: Object.keys(defaultQuestions),
        id: shortClaim.id,
      }
      const claim = await createQuestionsClaim(request)

      const { error } = this.props
      this.redirectIfNeeded(error)
      return claim
    }

    private redirectIfNeeded(error: false | string) {
      if (!error) {
        Router.pushRoute(`/client/form-finish`)
      }
    }
  }
}

const mapState = (state: State) => ({
  error: getQuestionsError(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  createQuestionsClaim: (questionsClaim: QuestionsClaim) =>
    dispatch(createQuestionsClaimAction(questionsClaim) as any),
})

export default compose(
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
