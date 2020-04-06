import {
  PartnerTypes,
  PartneTypeLabels,
} from '@app/src/domain/models/common/PartnerTypes';

export const mapThemeValueToSelectLabel = {
  [PartnerTypes.BecomePartner]: PartneTypeLabels.BecomePartner,
  [PartnerTypes.BecomeInfopartner]: PartneTypeLabels.BecomeInfopartner,
  [PartnerTypes.VolunteerFundraising]: PartneTypeLabels.VolunteerFundraising,
  [PartnerTypes.LectureRequest]: PartneTypeLabels.LectureRequest,
};
