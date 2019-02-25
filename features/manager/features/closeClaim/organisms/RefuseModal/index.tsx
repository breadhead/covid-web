import * as React from 'react'
import * as styles from './RefuseModal.css'

import Form from '@app/features/common/form/components/Form'
import { isModal, WithModalProps } from '@app/features/common/modal'
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
import { useModal } from '@app/features/common/modal'
import { State } from '@app/lib/store'
import { getCloseClaimData } from '../../selectors'

export interface Props extends WithModalProps {
  closeClaim: (data: CloseClaimRequest) => Promise<void>
  claimId: string
  claimData: InitialValues
}

const RefuseModal = ({ closeClaim, claimId, claimData }: Props) => {
  const { close } = useModal()

  const onFormSubmit = async () => {
    const completeData = { ...claimData, id: claimId }
    await closeClaim(completeData)
    close()
  }

  return (
    <Form onSubmit={onFormSubmit as any}>
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
  connect(
    mapState,
    mapDispatch,
  ),
)(RefuseModal) as any
