import Container from './container'
import Page from './page'

export default Container(Page)

export {
  default as withChooseDoctorModal,
  WithChooseDoctorModal,
} from './withChooseDoctorModal'

export { reducer, State } from './reducers'

export { MODAL_KEY } from './container'
