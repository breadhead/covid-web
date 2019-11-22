import { ExtraArgs, State } from '@app/lib/store'
import { Dispatch } from 'redux'

import { actions } from './reducer/reducer'
import { StoryEnum } from '@app/models/Story/StoryEnum'

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

export const updateStatus = (id: string, status: StoryEnum) => async (
  dispatch: Dispatch<any>,
  getState: () => State,
  { getApi }: ExtraArgs,
) => {
  const api = getApi(getState)

  try {
    await api.updateStoryStatus({ id, status })

    dispatch(actions.updateStatus(id, status))
  } catch (error) {
    console.log('error:', error)
  }
}
