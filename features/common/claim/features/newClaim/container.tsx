import { set } from '@app/features/common/browserQuery'
import { getRoles } from '@app/features/login'
import { getSmsPhone } from '@app/features/login/features/confirm'
import { getUserLogin } from '@app/features/login/features/confirm/reducer/selectors'
import ShortClaimRequest from '@app/lib/api/request/ShortClaim'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { Role } from '@app/models/Users/User'
import routes from '@app/routes'
import nanomerge from 'nanomerge'
import Head from 'next/head'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { createClaim, fetchShortClaim } from './actions'
import { DEFAULT_ID, getNewClaimDraft } from './localStorage'
import { FooterType, ShortClaimFields } from './organisms/ClaimForm'
import { Props as PageProps } from './page'
import { getNewClaimLoading, getNewClaimError } from './selectors'

const { Router } = routes

interface Query {
  id?: string
}

const mapState = (state: State) => ({
  error: getNewClaimError(state),
  loading: getNewClaimLoading(state),
  roles: getRoles(state),
  smsPhone: getSmsPhone(state),
  userLogin: getUserLogin(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createClaim: (claimRequest: ShortClaimRequest) =>
    dispatch(createClaim(claimRequest) as any),
  setIdInQuery: (id: string) => dispatch(set({ id })),
})

const Container = (WrappedComponent: React.ComponentType<PageProps>) => (
  layout: React.ComponentType,
  footer: FooterType,
) => {
  return connect(
    mapState,
    mapDipatch,
  )(
    class ContaineredComponent extends React.Component<any> {
      public static async getInitialProps({
        query,
        reduxStore,
      }: AppContext<Query>) {
        const { id } = query

        if (id) {
          const shortClaim = await reduxStore.dispatch(fetchShortClaim(
            id,
          ) as any)

          return {
            shortClaim,
            id,
          }
        }

        return { id }
      }

      public render() {
        const { error, loading, shortClaim, id } = this.props

        const initialFields = this.getInitialFields(shortClaim)
        const Layout = layout

        return (
          <Layout>
            <Head>
              <title>Заполните заявку | Просто спросить</title>
            </Head>
            <WrappedComponent
              id={id}
              error={error}
              loading={loading}
              initialFields={initialFields}
              onFormSubmit={this.onFormSubmit}
              footer={footer}
            />
          </Layout>
        )
      }

      private getInitialFields = (claim?: ShortClaim) => {
        const draft = getNewClaimDraft((!!claim && claim.id) || DEFAULT_ID)

        const { smsPhone, userLogin } = this.props
        if (!!claim) {
          return {
            ...claim,
            localizationPresence: !!claim.localization,
            companyPresence: !!claim.company,
          }
        }

        return nanomerge(
          {
            personalData: { phone: smsPhone, email: userLogin },
            companyPresence: false,
          },
          draft,
        )
      }

      private createRequest = (claimFields: ShortClaimFields) => {
        const { id } = this.props
        const fields = claimFields

        if (!claimFields.localizationPresence) {
          fields.localization = null
        }
        if (!claimFields.companyPresence) {
          fields.company = null
        }

        if (id) {
          fields.id = id
        }

        return fields
      }

      private onFormSubmit = async (claimFields: ShortClaimFields) => {
        const request = this.createRequest(claimFields)

        const { id } = await this.props.createClaim(
          request as ShortClaimRequest,
        )

        const { error, roles } = this.props

        if (!error) {
          this.redirect(id, roles)
        }

        this.props.setIdInQuery(id)
      }

      private redirect(id: string, roles: Role[]) {
        if (roles.includes(Role.Client)) {
          Router.pushRoute(`/client/claim/${id}/situation`)
        } else if (roles.includes(Role.CaseManager)) {
          Router.pushRoute(`/manager/consultation/${id}`)
        }
      }
    },
  )
}

export default Container
