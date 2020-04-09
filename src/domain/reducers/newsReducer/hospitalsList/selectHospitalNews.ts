import { State } from '@app/src/lib/store';

export const selectHospitalNews = (state: State) =>
  state.news.hospitalsList.list;
