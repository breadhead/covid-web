import Container from './container'
import Modal from './organisms/Modal'

export default Container(Modal)

export {
  default as withCloseClaimModal,
  WithCloseClaimModal,
} from './withCloseClaimModal'

export { State, reducer } from './reducer'

export { MODAL_KEY } from './container'

export { closeClaim } from './actions'

export { default as RefuseModal } from './organisms/RefuseModal'
