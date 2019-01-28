import { set } from '@app/features/common/browserQuery'
import ShortClaimRequest from '@app/lib/api/request/ShortClaim'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import routes from '@app/routes'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { createClaim, fetchShortClaim } from './actions'
import { ShortClaimFields } from './organisms/ClaimForm'
import { Props as PageProps } from './page'
import { getLoading, getNewClaimError } from './selectors'

const Router = routes.Router

interface Props {
  createClaim: (request: ShortClaimRequest) => Promise<ShortClaim>
  setIdInQuery: (id: string) => void
  error: false | string
  loading: boolean
  shortClaim?: ShortClaim
  id: string
}

interface Query {
  id?: string
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props> {
    public static async getInitialProps({
      query,
      reduxStore,
    }: AppContext<Query>) {
      const { id } = query

      if (id) {
        const shortClaim = await reduxStore.dispatch(fetchShortClaim(id) as any)

        return {
          shortClaim,
          id,
        }
      }

      return { id }
    }

    public render() {
      const { error, loading, shortClaim } = this.props

      const initialFields = this.getInitialFields(shortClaim)

      return (
        <WrappedComponent
          error={error}
          loading={loading}
          initialFields={initialFields}
          onFormSubmit={this.onFormSubmit}
        />
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
      const { id, quotaAllocated, personalData } = await this.props.createClaim(
        request as ShortClaimRequest,
      )

      const { email } = personalData

      const { error } = this.props

      this.redirectIfNeeded(error, quotaAllocated, id, email)
    }

    private redirectIfNeeded(
      error: false | string,
      quotaAllocated: boolean,
      id: string,
      email: string | undefined,
    ) {
      if (!error) {
        if (quotaAllocated) {
          Router.pushRoute(`/client/claim/${id}/situation`)
          this.props.setIdInQuery(id)
        } else if (email) {
          Router.pushRoute(`/client/claim/wait/${encodeURIComponent(email)}`)
        }
      }
    }
  }
}

const mapState = (state: State) => ({
  error: getNewClaimError(state),
  loading: getLoading(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createClaim: (claimRequest: ShortClaimRequest) =>
    dispatch(createClaim(claimRequest) as any),
  setIdInQuery: (id: string) => dispatch(set({ id })),
})

export default compose(
  connect(
    mapState,
    mapDipatch,
  ),
  Container,
)
