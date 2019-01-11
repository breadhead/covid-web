import { State } from '@app/lib/store'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import ShortClaimRequest from '@app/lib/api/request/ShortClaim'
import { AppContext } from '@app/lib/server-types'
import ClaimTarget from '@app/models/Claim/ClaimTarget'
import { ShortClaim } from '@app/models/Claim/ShortClaim'

import { createClaim, fetchShortClaim } from './actions'
import { ShortClaimFields } from './organisms/ClaimForm'
import { Props as PageProps } from './page'

import routes from '@app/routes'
import { getNewClaimError } from './selectors'
const Router = routes.Router

interface Props {
  createClaim: (request: ShortClaimRequest) => Promise<ShortClaim>
  error: false | string
  shortClaim?: ShortClaim
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
        }
      }

      return {}
    }

    public state = {
      clientInRussia: true,
    } as LocalState

    public render() {
      const { error, shortClaim } = this.props

      const initialFields = !!shortClaim ? shortClaim : {}

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

    private onChangeInRussia = (value: boolean) =>
      this.setState({ clientInRussia: value })

    private onFormSubmit = async (claimFields: ShortClaimRequest) => {
      const { id, quotaAllocated, personalData } = await this.props.createClaim(
        claimFields,
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
