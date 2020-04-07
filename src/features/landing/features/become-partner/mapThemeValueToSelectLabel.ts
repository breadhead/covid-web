import {
  HelpPartnersType,
  PartneTypeLabels,
} from '@app/src/domain/models/common/PartnerTypes';

export const mapThemeValueToSelectLabel = {
  [HelpPartnersType.BecomePartner]: PartneTypeLabels.BecomePartner,
  [HelpPartnersType.BecomeInfopartner]: PartneTypeLabels.BecomeInfopartner,
  [HelpPartnersType.VolunteerFundraising]:
    PartneTypeLabels.VolunteerFundraising,
  [HelpPartnersType.LectureRequest]: PartneTypeLabels.LectureRequest,
};
