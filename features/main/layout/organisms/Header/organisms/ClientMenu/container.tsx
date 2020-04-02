import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import signOut from '@app/features/login/features/signOut';

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  signOut: () => dispatch(signOut() as any),
});

export default connect(null, mapDispatch);
