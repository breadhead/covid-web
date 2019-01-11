import Container from './container'
import Modal from './organisms/Modal'

export default Container(Modal)

export {
  default as withBindQuotaModal,
  WithBindQuotaModal as WithQuotaTypeModal,
} from './withQuotaTypeModal'

export { State, reducer } from './reducer'

export { MODAL_KEY } from './container'
