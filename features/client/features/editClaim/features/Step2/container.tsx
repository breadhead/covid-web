import { SituationClaimRequest } from '@app/lib/api/request/SituationClaim'
import { AppContext } from '@app/lib/server-types'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import {
  createSituationClaim as createSituationClaimAction,
  shortClaim as shortClaimAction,
} from './actions'
import { SituationClaimFields } from './organisms/Form/types'
import { Props as PageProps } from './page'

interface Props {
  shortClaim: ShortClaim
  createSituationClaim: (fields: SituationClaimRequest) => void
}

interface Query {
  id: string
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props> {
    public static async getInitialProps(context: AppContext<Query>) {
      const { id } = context.query

      const shortClaim = await context.reduxStore.dispatch(shortClaimAction(
        id,
      ) as any)
      return {
        shortClaim,
      }
    }
    public render() {
      const { shortClaim } = this.props
      return (
        <WrappedComponent
          shortClaim={shortClaim}
          onFormSubmit={this.onFormSubmit}
        />
      )
    }

    private onFormSubmit = async (fields: SituationClaimFields) => {
      const { createSituationClaim, shortClaim } = this.props
      const request = {
        ...fields,
        id: shortClaim.id,
        relativesDiseases: fields.relativesDiseases || [],
        surgicalTreatments: fields.surgicalTreatments || [],
        medicalsTreatments: fields.medicalsTreatments || [],
        radiationTreatments: fields.radiationTreatments || [],
        otherFiles: fields.otherFiles || [],
      }
      await createSituationClaim(request)
    }
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  createSituationClaim: (situationClaim: SituationClaimRequest) =>
    dispatch(createSituationClaimAction(situationClaim) as any),
})

export default compose(
  connect(
    null,
    mapDispatch,
  ),
  Container,
)
