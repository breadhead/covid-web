import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import Head from 'next/head'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { fetchClaim } from '@app/features/common/consultation'
import { getRoles } from '@app/features/login'
import { Role } from '@app/models/Users/User'
import routes from '@app/routes'

import { createQuestionsClaim as createQuestionsClaimAction } from './actions'
import { getQuestionsClaimDraft } from './localStorage'
import { FooterType } from './organisms/Form'
import { DefaultQuestion, FormFields, Props as PageProps } from './page'
import { actions } from './reducer'
import { getQuestionsError, getQuestionsLoading } from './selectors'
import { compose } from 'recompose'
import { hitYM } from '@app/features/common/analytics/config'

const { Router } = routes

const REQUEST_VALIDATION_ERROR =
  'Пожалуйста, выберите хотя бы один вопрос или напишите свой'

interface Query {
  id: string
}

interface LocalState {
  initialFields: any
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
  fetchAllClaim: (id: string) => dispatch(fetchClaim(id) as any),
})

const Container = (WrappedComponent: React.ComponentType<PageProps>) => (
  layout: React.ComponentType,
  footer: FooterType,
) => {
  return compose(
    connect(
      mapState,
      mapDispatch,
    ),
  )(
    class ConataineredComponent extends React.Component<any, LocalState> {
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
            <Head>
              <title>Задайте вопросы | Просто спросить</title>
            </Head>
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
          fetchAllClaim,
        } = this.props

        const request = this.createRequest(fields, shortClaim.id)

        const requestValid = this.validateRequest(request)

        if (requestValid) {
          setQuestionsClaimError(false)

          await createQuestionsClaim(request)

          const { error, roles } = this.props

          if (!error) {
            // tslint:disable-next-line: no-shadowed-variable
            const { mainInfo, shortClaim } = await fetchAllClaim(
              this.props.shortClaim.id,
            )

            this.redirect(
              shortClaim.personalData.email,
              shortClaim.id,
              roles,
              mainInfo.number,
              shortClaim.quotaAllocated,
            )
          }
          return
        }

        setQuestionsClaimError(REQUEST_VALIDATION_ERROR)
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
        number: number,
        quotaAallocated: boolean = false,
      ) {
        if (roles.includes(Role.Client)) {
          if (quotaAallocated) {
            Router.pushRoute(
              `/client/claim/form-finish/${encodeURIComponent(
                email,
              )}?number=${number}/`,
            ).then(() =>
              hitYM(
                `client/claim/form-finish/${encodeURIComponent(
                  email,
                )}?number=${number}/`,
              ),
            )
          } else {
            Router.pushRoute(
              `/client/claim/wait-please/${encodeURIComponent(
                email,
              )}?number=${number}/`,
            ).then(() => {
              hitYM(
                `client/claim/wait-please/${encodeURIComponent(
                  email,
                )}?number=${number}/`,
              )
            })
          }
        } else if (roles.includes(Role.CaseManager)) {
          Router.pushRoute(`/manager/consultation/${id}`)
        }
      }
    },
  )
}

export default Container
