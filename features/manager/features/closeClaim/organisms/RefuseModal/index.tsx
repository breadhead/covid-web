import * as React from 'react'
import * as styles from './RefuseModal.css'

import Form from '@app/features/common/form/components/Form'
import { isModal, withModal, WithModalProps } from '@app/features/common/modal'
import { CloseClaimRequest } from '@app/lib/api/request/CloseClaimRequest'
import Button, {
  ButtonKind,
  ButtonSize,
  ButtonType,
} from '@app/ui/atoms/Button'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { closeClaim as closeClaimAction } from '../../actions'
import OpenCloseClaimButton from '../../atoms/OpenCloseClaimButton'
import { InitialValues } from '../Modal/config'
import { MODAL_KEY } from './const'

import { getClaimId } from '@app/features/common/consultation'
import { State } from '@app/lib/store'
import { getCloseClaimData } from '../../selectors'

export interface Props extends WithModalProps {
  closeClaim: (data: CloseClaimRequest) => Promise<void>
  claimId: string
  claimData: InitialValues
}

class RefuseModal extends React.Component<Props> {
  public render() {
    return (
      <Form onSubmit={this.onFormSubmit as any}>
        {() => (
          <article className={styles.modal}>
            <h1 className={styles.title}>
              Вы действительно хотите сменить статус на «Отказано»?
            </h1>
            <div className={styles.buttons}>
              <OpenCloseClaimButton
                className={styles.cancel}
                size={ButtonSize.Large}
                kind={ButtonKind.Secondary}
              >
                Отмена
              </OpenCloseClaimButton>
              <Button type={ButtonType.Submit} size={ButtonSize.Large}>
                Да, изменить статус
              </Button>
            </div>
          </article>
        )}
      </Form>
    )
  }

  private onFormSubmit = async () => {
    const { closeClaim, claimId, modal, claimData } = this.props
    const completeData = { ...claimData, id: claimId }
    await closeClaim(completeData)
    modal.close()
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  closeClaim: (data: CloseClaimRequest) =>
    dispatch(closeClaimAction(data) as any),
})

const mapState = (state: State) => ({
  claimId: getClaimId(state),
  claimData: getCloseClaimData(state),
})

export default compose(
  isModal(MODAL_KEY),
  withModal,
  connect(
    mapState,
    mapDispatch,
  ),
)(RefuseModal) as any
