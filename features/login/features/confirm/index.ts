import Container from './container'
import Modal from './organisms/Modal'

export default Container(Modal)

export { MODAL_KEY } from './container'

export { Actions, actions, State, reducer } from './reducer'

export { default as getSmsPhone } from './reducer/selectors'
