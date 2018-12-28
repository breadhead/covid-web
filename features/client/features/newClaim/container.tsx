import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import ShortClaimRequest from '@app/lib/api/request/ShortClaim'
import ClaimTarget from '@app/models/Claim/ClaimTarget'
import { ShortClaim } from '@app/models/Claim/ShortClaim'

import { createClaim } from './actions'
import { ShortClaimFields } from './organisms/ClaimForm'
import { Props as PageProps } from './page'
interface Props {
  createClaim: (request: ShortClaimRequest) => Promise<ShortClaim>
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
        localization: claimFields.diagnosis
          ? claimFields.localization
          : undefined,
        theme: claimFields.theme,
        company: this.createCompanyRequest(claimFields),
      }

      const { id, quotaAllocated, personalData } = await this.props.createClaim(
        request,
      )
      const { email } = personalData
      if (quotaAllocated) {
        Router.push(`/client/claim/${id}/situation`)
      } else if (email) {
        Router.push(`/client/claim/wait/${encodeURIComponent(email)}`)
      }
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

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createClaim: (claimRequest: ShortClaimRequest) =>
    dispatch(createClaim(claimRequest) as any),
})

export default compose(
  connect(
    null,
    mapDipatch,
  ),
  Container,
)
