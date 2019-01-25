import { fetchShortClaim } from '@app/features/client/features/newClaim'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import routes from '@app/routes'

import { createQuestionsClaim as createQuestionsClaimAction } from './actions'
import { getQuestionsClaimDraft } from './localStorage'
import { Props as PageProps } from './page'
import { getQuestionsError, getQuestionsLoading } from './selectors'

const Router = routes.Router
interface Props {
  shortClaim: ShortClaim
  createQuestionsClaim: (fields: QuestionsClaim) => Promise<QuestionsClaim>
  error: false | string
  loading: boolean
}

interface Query {
  id: string
}

interface LocalState {
  initialFields: any
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props, LocalState> {
    public static async getInitialProps(context: AppContext<Query>) {
      const { id } = context.query

      const shortClaim = await context.reduxStore.dispatch(fetchShortClaim(
        id,
      ) as any)
      return {
        shortClaim,
      }
    }

    public state = {
      initialFields: {},
    } as LocalState

    public componentDidMount() {
      this.setState({ initialFields: this.getIntialValues() })
    }

    public render() {
      const {
        shortClaim: { target, theme, id },
        error,
        loading,
      } = this.props

      const { initialFields } = this.state

      return (
        <WrappedComponent
          error={error}
          loading={loading}
          claimData={{ target, theme, id }}
          onFormSubmit={this.onFormSubmit}
          initialFields={initialFields}
        />
      )
    }

    private getIntialValues = () =>
      getQuestionsClaimDraft(this.props.shortClaim.id)

    private onFormSubmit = async ({
      defaultQuestions,
      ...rest
    }: QuestionsClaim) => {
      const { createQuestionsClaim, shortClaim } = this.props

      const request = {
        ...rest,
        defaultQuestions: defaultQuestions && Object.keys(defaultQuestions),
        id: shortClaim.id,
      }
      const claim = await createQuestionsClaim(request)

      const { error } = this.props
      this.redirectIfNeeded(shortClaim.personalData.email, error)
      return claim
    }

    private redirectIfNeeded(email: string = '', error: false | string) {
      if (!error) {
        Router.pushRoute(
          `/client/claim/form-finish/${encodeURIComponent(email)}`,
        )
      }
    }
  }
}

const mapState = (state: State) => ({
  error: getQuestionsError(state),
  loading: getQuestionsLoading(state),
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
