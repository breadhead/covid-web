import { State } from '@app/src/lib/store';

export const selectResources = () => (state: State) => state.resources.list;
