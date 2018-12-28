import { State } from '@app/lib/store'

export const getMessages = (state: State) => state.client.chat.messages

export const getLoaded = (state: State) => state.client.chat.loaded
