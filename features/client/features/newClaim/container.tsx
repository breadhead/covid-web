import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import ShortClaimRequest from '@app/lib/api/request/ShortClaimRequest'
import { State } from '@app/lib/store'
import ClaimTarget from '@app/models/Claim/ClaimTarget'

import { validator } from '@app/features/common/formHOCs/withFinalForm'
import { createClaim } from './actions'
import { ShortClaimFields } from './organisms/ClaimForm'
import { Props as PageProps } from './page'
import { getCreatedId } from './selectors'
interface Props {
  createdId?: string
  createClaim: (request: ShortClaimRequest) => Promise<void>
}

interface LocalState {
  clientInRussia: boolean
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props, LocalState> {
    public state = {
      clientInRussia: true,
    } as LocalState

    public render() {
      return (
        <WrappedComponent
          validator={validator}
          onFormSubmit={this.onFormSubmit}
          clientInRussia={this.state.clientInRussia}
          onChangeInRussia={this.onChangeInRussia}
        />
      )
    }

    private onChangeInRussia = (value: boolean) =>
      this.setState({ clientInRussia: value })

    private onFormSubmit = async (claimFields: ShortClaimFields) => {
      const request: ShortClaimRequest = {
        target: claimFields.target as ClaimTarget,
        personalData: {
          name: claimFields.name,
          region: claimFields.region,
          age: claimFields.age,
          gender: claimFields.gender,
          email: claimFields.email,
          phone: claimFields.phone,
        },
        diagnosis: claimFields.diagnosis ? claimFields.localization : undefined,
        theme: claimFields.theme,
        company: this.createCompanyRequest(claimFields),
      }

      await this.props.createClaim(request)
    }

    private createCompanyRequest = (fields: ShortClaimFields) => {
      if (fields.corporate) {
        return {
          name: fields.companyName || '',
          position: fields.companyPosition || '',
        }
      }
    }
  }
}

const mapState = (state: State) => ({
  createdId: getCreatedId(state),
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
