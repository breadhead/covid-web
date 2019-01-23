import { isEmpty } from 'lodash'
import nanomerge from 'nanomerge'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { SituationClaimRequest } from '@app/lib/api/request/SituationClaim'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { SituationClaim } from '@app/models/Claim/SituationClaim'
import routes from '@app/routes'

import { fetchShortClaim } from '../../../newClaim'
import {
  createSituationClaim as createSituationClaimAction,
  fetchSituationClaim,
} from './actions'
import { getSituationClaimDraft } from './localStorage'
import { Props as PageProps } from './page'
import { getSituationError } from './selectors'
import { SituationClaimFields } from './types'

const Router = routes.Router
interface Props {
  shortClaim: ShortClaim
  situationClaim: SituationClaim
  createSituationClaim: (fields: SituationClaimRequest) => SituationClaim
  error: false | string
}

interface Query {
  id: string
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props> {
    public static async getInitialProps({
      reduxStore,
      query,
    }: AppContext<Query>) {
      const { id } = query
      const [shortClaim, situationClaim] = await Promise.all([
        reduxStore.dispatch(fetchShortClaim(query.id) as any),
        reduxStore.dispatch(fetchSituationClaim(query.id) as any),
      ])

      return {
        shortClaim,
        situationClaim,
        id,
      }
    }
    public render() {
      const {
        shortClaim: { id, localization, theme },
        situationClaim,
        error,
      } = this.props
      const initialFields = this.getInitialFields(situationClaim)
      return (
        <WrappedComponent
          initialFields={initialFields}
          error={error}
          claimData={{ localization, theme, id }}
          onFormSubmit={this.onFormSubmit}
        />
      )
    }

    private onFormSubmit = async (fields: SituationClaimFields) => {
      const { createSituationClaim, shortClaim } = this.props

      const request = this.createRequest(fields, shortClaim.id)
      const { id } = await createSituationClaim(request)

      const { error } = this.props

      this.redirectIfNeeded(id, error)
    }

    private getInitialFields = (claim: SituationClaim) => {
      const draft = getSituationClaimDraft(claim.id)

      const claimWasSent = !!claim.description
      if (claimWasSent) {
        return nanomerge(
          {
            ...claim,
            relativesDiseasesPresence: !isEmpty(claim.relativesDiseases),
            surgicalTreatmentsPresence: !isEmpty(claim.surgicalTreatments),
            medicalsTreatmentsPresence: !isEmpty(claim.medicalsTreatments),
            radiationTreatmentsPresence: !isEmpty(claim.radiationTreatments),
          },
          draft,
        )
      }

      return nanomerge(claim, draft)
    }

    private createRequest = (claimFields: SituationClaimFields, id: string) => {
      const fields = claimFields

      if (!claimFields.relativesDiseasesPresence) {
        fields.relativesDiseases = []
      }
      if (!claimFields.surgicalTreatmentsPresence) {
        fields.surgicalTreatments = []
      }
      if (!claimFields.medicalsTreatmentsPresence) {
        fields.medicalsTreatments = []
      }
      if (!claimFields.radiationTreatmentsPresence) {
        fields.radiationTreatments = []
      }

      return { ...fields, id, otherFiles: fields.otherFiles || [] }
    }

    private redirectIfNeeded(id: string, error: false | string) {
      if (!error) {
        Router.pushRoute(`/client/claim/${id}/questions`)
      }
    }
  }
}

const mapState = (state: State) => ({
  error: getSituationError(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  createSituationClaim: (situationClaim: SituationClaimRequest) =>
    dispatch(createSituationClaimAction(situationClaim) as any),
})

export default compose(
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
