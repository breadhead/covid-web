import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'

import { actions } from './reducer/reducer'

export const fetchStories = () => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)

  try {
    const stories = await api.fetchStories()

    dispatch(actions.addStories(stories))

  } catch (error) {
    console.log('error:', error)
  }

}
