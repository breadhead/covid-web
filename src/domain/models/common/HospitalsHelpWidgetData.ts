import { SanityBase } from '@front/domain/models/sanity/SanityBase';

export interface HospitalsHelpWidgetData extends SanityBase {
  helpedCount: number;
  helpWanted: number;
  moneyGathered: number;
}
