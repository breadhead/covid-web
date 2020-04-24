import { State } from '@app/src/lib/store';

import { HospitalsHelpWidgetData } from '@front/domain/models/common/HospitalsHelpWidgetData';

export const selectHospitalsHelpWidgetData = (
  state: State,
): HospitalsHelpWidgetData | undefined => state.hospitalsHelpWidget.value;
