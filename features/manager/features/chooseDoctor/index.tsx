import Container from './container'
import Doctors from './organisms/Doctors'

export default Container(Doctors)

export {
  default as withChooseDoctorModal,
  WithChooseDoctorModal,
} from './withCloseClaimModal'

export { reducer, State } from './reducer'

export { MODAL_KEY } from './container'
