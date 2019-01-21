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
import { regions } from './organisms/Contacts/regions'
import { Props as PageProps } from './page'
import { getNewClaimError } from './selectors'

const Router = routes.Router

interface Props {
  createClaim: (request: ShortClaimRequest) => Promise<ShortClaim>
  error: false | string
  shortClaim?: ShortClaim
  id: string
}

interface LocalState {
  clientInRussia: boolean
}

interface Query {
  id?: string
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props, LocalState> {
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

    public state = this.getInitialState() as LocalState

    public render() {
      const { error, shortClaim } = this.props

      const initialFields = this.getInitialFields(shortClaim)

      return (
        <WrappedComponent
          error={error}
          initialFields={initialFields}
          onFormSubmit={this.onFormSubmit}
          clientInRussia={this.state.clientInRussia}
          onChangeInRussia={this.onChangeInRussia}
        />
      )
    }

    private getInitialState(): LocalState {
      return {
        clientInRussia: this.props.id
          ? regions.includes(this.props.shortClaim!.personalData.region)
          : true,
      }
    }

    private getInitialFields = (claim?: ShortClaim) => {
      if (!!claim) {
        return {
          ...claim,
          localizationPresence: !!claim.localization,
          companyPresence: !!claim.company,
          phonePresence: !!claim.personalData.phone,
        }
      }
      return {
        phonePresence: true,
        companyPresence: false,
      }
    }

    private onChangeInRussia = (value: boolean) =>
      this.setState({ clientInRussia: value })

    private onFormSubmit = async (claimFields: ShortClaimFields) => {
      const request = this.createRequest(claimFields)
      const { id, quotaAllocated, personalData } = await this.props.createClaim(
        request as ShortClaimRequest,
      )

      const { email } = personalData

      const { error } = this.props

      this.redirectIfNeeded(error, quotaAllocated, id, email)
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
      if (!claimFields.phonePresence) {
        fields.personalData.phone = null
      }

      if (id) {
        fields.id = id
      }

      return fields
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
        } else if (email) {
          Router.pushRoute(`/client/claim/wait/${encodeURIComponent(email)}`)
        }
      }
    }
  }
}

const mapState = (state: State) => ({
  error: getNewClaimError(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createClaim: (claimRequest: ShortClaimRequest) =>
    dispatch(createClaim(claimRequest) as any),
})

export default compose(
  connect(
    mapState,
    mapDipatch,
  ),
  Container,
)
