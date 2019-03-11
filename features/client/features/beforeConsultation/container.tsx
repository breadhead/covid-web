import * as React from 'react'
import { compose } from 'recompose'

import { withModal, WithModalProps } from '@app/features/common/modal'
import { getToken } from '@app/features/landing/features/home/molecules/StartConsultationButton/selectors'
import { MODAL_KEY } from '@app/features/login/features/confirm'
import { currentUser } from '@app/features/login/features/user'
import { actions as userActions } from '@app/features/login/features/user'
import apiFactory from '@app/lib/api/apiFactory'
import { AppContext } from '@app/lib/server-types'
import { User } from '@app/models/Users/User'

interface Props extends WithModalProps {
  user: User
}

export interface PageProps {
  next: () => void
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) =>
  class extends React.Component<Props> {
    public static async getInitialProps({ reduxStore }: AppContext) {
      const user = await reduxStore.dispatch(currentUser() as any)

      const api = apiFactory(getToken(reduxStore.getState()))

      const quotasAvailable = await api.commonQuotasAvailable()
      reduxStore.dispatch(userActions.setQuotasAvailable(quotasAvailable))

      return {
        user,
      }
    }

    public render() {
      return <WrappedComponent next={this.next} />
    }

    private next = () => this.props.modal.open(MODAL_KEY)
  }

export default compose<PageProps, {}>(
  withModal,
  Container,
)
