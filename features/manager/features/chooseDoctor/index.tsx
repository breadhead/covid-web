import Container from './container'
import Modal from './organisms/Modal'

export default Container(Modal)

export {
  default as withChooseDoctorModal,
  WithChooseDoctorModal,
} from './withCloseClaimModal'

export { MODAL_KEY } from './container'
