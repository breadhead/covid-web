import { set } from '@app/features/common/browserQuery'
import { getRoles } from '@app/features/login'
import ShortClaimRequest from '@app/lib/api/request/ShortClaim'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { Role } from '@app/models/Users/User'
import routes from '@app/routes'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { createClaim, fetchShortClaim } from './actions'
import { FooterType, ShortClaimFields } from './organisms/ClaimForm'
import { Props as PageProps } from './page'
import { getLoading, getNewClaimError } from './selectors'

const Router = routes.Router

interface Query {
  id?: string
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => (
  layout: React.ComponentType,
  footer: FooterType,
) => {
  return connect(
    mapState,
    mapDipatch,
  )(
    class extends React.Component<any> {
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
        if (!!claim) {
          return {
            ...claim,
            localizationPresence: !!claim.localization,
            companyPresence: !!claim.company,
          }
        }
        return {
          companyPresence: false,
        }
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

        const {
          id,
          quotaAllocated,
          personalData,
        } = await this.props.createClaim(request as ShortClaimRequest)

        const { email } = personalData

        const { error, roles } = this.props

        if (!error) {
          this.redirect(quotaAllocated, id, email, roles)
        }

        if (quotaAllocated) {
          this.props.setIdInQuery(id)
        }
      }

      private redirect(
        quotaAllocated: boolean,
        id: string,
        email: string | undefined,
        roles: Role[],
      ) {
        if (roles.includes(Role.Client)) {
          if (quotaAllocated) {
            Router.pushRoute(`/client/claim/${id}/situation`)
          } else if (email) {
            Router.pushRoute(`/client/claim/wait/${encodeURIComponent(email)}`)
          }
        } else if (roles.includes(Role.CaseManager)) {
          Router.pushRoute(`/manager/consultation/${id}`)
        }
      }
    },
  )
}

const mapState = (state: State) => ({
  error: getNewClaimError(state),
  loading: getLoading(state),
  roles: getRoles(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createClaim: (claimRequest: ShortClaimRequest) =>
    dispatch(createClaim(claimRequest) as any),
  setIdInQuery: (id: string) => dispatch(set({ id })),
})

export default Container
