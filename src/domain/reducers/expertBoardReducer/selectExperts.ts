import { State } from '@app/src/lib/store';

export const selectExpertBoard = (state: State) => state.expertBoard.list;
