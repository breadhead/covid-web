import { fetchShortClaim } from '@app/features/common/claim/features/newClaim'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import routes from '@app/routes'

import { getRoles } from '@app/features/login'
import { Role } from '@app/models/Users/User'
import { createQuestionsClaim as createQuestionsClaimAction } from './actions'
import { getQuestionsClaimDraft } from './localStorage'
import { FooterType } from './organisms/Form'
import { Props as PageProps } from './page'
import { getQuestionsError, getQuestionsLoading } from './selectors'

const Router = routes.Router

interface Query {
  id: string
}

interface LocalState {
  initialFields: any
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => (
  layout: React.ComponentType,
  footer: FooterType,
) => {
  return connect(
    mapState,
    mapDispatch,
  )(
    class extends React.Component<any, LocalState> {
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
        const Layout = layout
        return (
          <Layout>
            <WrappedComponent
              error={error}
              loading={loading}
              claimData={{ target, theme, id }}
              onFormSubmit={this.onFormSubmit}
              initialFields={initialFields}
              footer={footer}
            />
          </Layout>
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

        const {
          error,
          roles,
          claimData: { id },
        } = this.props

        if (!error) {
          this.redirect(shortClaim.personalData.email, id, roles)
        }
        return claim
      }

      private redirect(email: string = '', id: string, roles: Role[]) {
        if (roles.includes(Role.Client)) {
          Router.pushRoute(
            `/client/claim/form-finish/${encodeURIComponent(email)}`,
          )
        } else if (roles.includes(Role.CaseManager)) {
          Router.pushRoute(`/manager/consultation/${id}`)
        }
      }
    },
  )
}

const mapState = (state: State) => ({
  error: getQuestionsError(state),
  loading: getQuestionsLoading(state),
  roles: getRoles(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  createQuestionsClaim: (questionsClaim: QuestionsClaim) =>
    dispatch(createQuestionsClaimAction(questionsClaim) as any),
})

export default Container
