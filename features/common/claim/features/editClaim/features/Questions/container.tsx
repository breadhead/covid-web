import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { fetchClaim } from '@app/features/common/consultation'
import { getRoles } from '@app/features/login'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { Role } from '@app/models/Users/User'
import routes from '@app/routes'

import { fetchShortClaim } from '../../../newClaim'
import { createQuestionsClaim as createQuestionsClaimAction } from './actions'
import { getQuestionsClaimDraft } from './localStorage'
import { FooterType } from './organisms/Form'
import { DefaultQuestion, FormFields, Props as PageProps } from './page'
import { actions } from './reducer'
import { getQuestionsError, getQuestionsLoading } from './selectors'

const Router = routes.Router

const REQUEST_VALIDATION_ERROR =
  'Пожалуйста, выберите хотя бы один вопрос или напишите свой'

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

        const { shortClaim } = await context.reduxStore.dispatch(fetchClaim(
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

      private onFormSubmit = async (fields: FormFields) => {
        const {
          createQuestionsClaim,
          shortClaim,
          setQuestionsClaimError,
          fetchQuotaAllocated,
        } = this.props

        const request = this.createRequest(fields, shortClaim.id)

        const requestValid = this.validateRequest(request)

        if (requestValid) {
          setQuestionsClaimError(false)

          await createQuestionsClaim(request)

          const { error, roles } = this.props

          if (!error) {
            const { quotaAllocated }: ShortClaim = await fetchQuotaAllocated(
              this.props.shortClaim.id,
            )

            this.redirect(
              shortClaim.personalData.email,
              shortClaim.id,
              roles,
              quotaAllocated,
            )
          }
          return
        }

        return setQuestionsClaimError(REQUEST_VALIDATION_ERROR)
      }

      private filterDefaultQuestions = (questions: DefaultQuestion[]) =>
        Object.entries(questions)
          .filter(([_, value]) => !!value)
          .map(([question]) => question)

      private createRequest(
        { defaultQuestions, additionalQuestions }: FormFields,
        id: string,
      ) {
        return {
          additionalQuestions: additionalQuestions || [],
          defaultQuestions: defaultQuestions
            ? this.filterDefaultQuestions(defaultQuestions)
            : [],
          id,
        }
      }

      private validateRequest = ({
        defaultQuestions,
        additionalQuestions,
      }: QuestionsClaim) => {
        return !![...defaultQuestions, ...additionalQuestions].find(
          question => !!question,
        )
      }

      private redirect(
        email: string = '',
        id: string,
        roles: Role[],
        quotaAallocated: boolean = false,
      ) {
        if (roles.includes(Role.Client)) {
          if (quotaAallocated) {
            Router.pushRoute(
              `/client/claim/form-finish/${encodeURIComponent(email)}`,
            )
          } else {
            Router.pushRoute(
              `/client/claim/wait-please/${encodeURIComponent(email)}`,
            )
          }
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
  setQuestionsClaimError: (error: string) => dispatch(actions.error(error)),
  fetchQuotaAllocated: (id: string) => dispatch(fetchShortClaim(id) as any),
})

export default Container
