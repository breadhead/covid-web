import { isEmpty } from 'lodash'
import nanomerge from 'nanomerge'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { SituationClaimRequest } from '@app/lib/api/request/SituationClaim'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { SituationClaim } from '@app/models/Claim/SituationClaim'
import routes from '@app/routes'

import { fetchShortClaim } from '@app/features/common/claim/features/newClaim'
import { getRoles } from '@app/features/login'
import { Role } from '@app/models/Users/User'
import {
  createSituationClaim as createSituationClaimAction,
  fetchSituationClaim,
} from './actions'
import { getSituationClaimDraft } from './localStorage'
import { FooterType } from './organisms/Form'
import { Props as PageProps } from './page'
import { getSituationError, getSituationLoading } from './selectors'
import { SituationClaimFields } from './types'

const Router = routes.Router

interface Query {
  id: string
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => (
  layout: React.ComponentType,
  footer: FooterType,
) => {
  return connect(
    mapState,
    mapDispatch,
  )(
    class extends React.Component<any> {
      public static async getInitialProps({
        reduxStore,
        query,
      }: AppContext<Query>) {
        const { id } = query
        const [shortClaim, situationClaim] = await Promise.all([
          reduxStore.dispatch(fetchShortClaim(query.id) as any),
          reduxStore.dispatch(fetchSituationClaim(query.id) as any),
        ])

        return { shortClaim, situationClaim, id }
      }
      public render() {
        const {
          shortClaim: { id, localization, theme },
          situationClaim,
          error,
          loading,
        } = this.props
        const initialFields = this.getInitialFields(situationClaim)
        const Layout = layout
        return (
          <Layout>
            <WrappedComponent
              initialFields={initialFields}
              error={error}
              loading={loading}
              claimData={{ localization, theme, id }}
              onFormSubmit={this.onFormSubmit}
              footer={footer}
            />
          </Layout>
        )
      }

      private onFormSubmit = async (fields: SituationClaimFields) => {
        const { createSituationClaim, shortClaim } = this.props

        const request = this.createRequest(fields, shortClaim.id)
        const { id } = await createSituationClaim(request)

        const { error, roles } = this.props
        if (!error) {
          this.redirect(id, roles)
        }
      }

      private redirect(id: string, roles: Role[]) {
        if (roles.includes(Role.Client)) {
          Router.pushRoute(`/client/claim/${id}/questions`)
        } else if (roles.includes(Role.CaseManager)) {
          Router.pushRoute(`/manager/consultation/${id}`)
        }
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

      private createRequest = (
        claimFields: SituationClaimFields,
        id: string,
      ) => {
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
    },
  )
}

const mapState = (state: State) => ({
  error: getSituationError(state),
  loading: getSituationLoading(state),
  roles: getRoles(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  createSituationClaim: (situationClaim: SituationClaimRequest) =>
    dispatch(createSituationClaimAction(situationClaim) as any),
})

export default Container
