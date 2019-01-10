import Container from './container'
import Modal from './organisms/Modal'

export default Container(Modal)

export {
  default as withQuotaTypeModal,
  WithQuotaTypeModal,
} from './withQuotaTypeModal'

export { MODAL_KEY } from './container'
