import Container from './container';
import Modal from './organisms/Modal';

export default Container(Modal);

export { default as withSignUpModal } from './withSignUpModal';
export type { WithSignUpModal } from './withSignUpModal';

export { MODAL_KEY } from './container';
