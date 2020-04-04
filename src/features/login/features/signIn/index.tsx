import Container from './container';
import Modal from './organisms/Modal';

export { MODAL_KEY } from './container';

export { default as withSignInModal } from './withSignInModal';
export type { WithSignInModal } from './withSignInModal';

export default Container(Modal);
