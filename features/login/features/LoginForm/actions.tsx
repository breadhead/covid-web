import axios from 'axios'
import { Dispatch } from 'redux'

import { actions } from './reducer'

export const login = (data) => (
  dispatch: Dispatch<any>,
  getState,
  apiContainer,
) => {
  apiContainer.api.login(data).then(console.log).catch(console.log)
}
