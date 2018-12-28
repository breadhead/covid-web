import { SituationClaimRequest } from '@app/lib/api/request/SituationClaim'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { SituationClaim } from '@app/models/Claim/SituationClaim'
import routes from '@app/routes'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import {
  createSituationClaim as createSituationClaimAction,
  shortClaim as shortClaimAction,
} from './actions'
import { Props as PageProps } from './page'
import { getSituationError } from './selectors'
import { SituationClaimFields } from './types'
const Router = routes.Router
interface Props {
  shortClaim: ShortClaim
  createSituationClaim: (fields: SituationClaimRequest) => SituationClaim
  error: false | string
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
      const {
        shortClaim: { localization, theme },
        error,
      } = this.props
      return (
        <WrappedComponent
          error={error}
          claimData={{ localization, theme }}
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
      const { id } = await createSituationClaim(request)

      const { error } = this.props

      this.redirectIfNeeded(id, error)
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
