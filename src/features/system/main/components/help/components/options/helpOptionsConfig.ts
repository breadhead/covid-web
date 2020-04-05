import { PartnerTypes } from '@app/src/domain/models/PartnerTypes';

enum HelpItemType {
  Button = 'Button',
  Link = 'Link',
}

export const options = [
  {
    title: 'Лично',
    items: [
      {
        id: '10',
        type: HelpItemType.Link,
        label: 'Волонтерский фандрайзинг',
        link: `/help-partners?${PartnerTypes.VolunteerFundraising}`,
      },
      {
        id: '20',
        type: HelpItemType.Button,
        label: 'Пожертвовать деньги',
        link: '/#donation',
      },
      {
        id: '30',
        type: HelpItemType.Link,
        label: 'Стать волонтером',
        link: '/help-volunteers',
      },
    ],
  },
  {
    title: 'Организациям',
    items: [
      {
        id: '10',
        type: HelpItemType.Link,
        label: 'Стать партнером',
        link: `/help-partners?${PartnerTypes.BecomePartner}`,
      },
      {
        id: '20',
        type: HelpItemType.Link,
        label: 'Стать инфопартнером',
        link: `/help-partners?${PartnerTypes.BecomeInfopartner}`,
      },
      {
        id: '30',
        type: HelpItemType.Link,
        label: 'Заказать лекцию',
        link: `/help-partners?${PartnerTypes.LectureRequest}`,
      },
    ],
  },
];
