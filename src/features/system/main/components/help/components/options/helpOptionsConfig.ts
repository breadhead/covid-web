import { HelpPartnersType } from '@app/src/domain/models/common/PartnerTypes';

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
        type: HelpItemType.Button,
        label: 'Пожертвовать деньги',
        link: '/#donation',
      },
      {
        id: '20',
        type: HelpItemType.Link,
        label: 'Стать волонтером',
        link: '/help-volunteers',
      },
      {
        id: '30',
        type: HelpItemType.Link,
        label: 'Волонтерский фандрайзинг',
        link: `/help-partners?type=${HelpPartnersType.VolunteerFundraising}`,
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
        link: `/help-partners?type=${HelpPartnersType.BecomePartner}`,
      },
      {
        id: '20',
        type: HelpItemType.Link,
        label: 'Стать инфопартнером',
        link: `/help-partners?type=${HelpPartnersType.BecomeInfopartner}`,
      },
      {
        id: '30',
        type: HelpItemType.Link,
        label: 'Заказать лекцию',
        link: `/help-partners?type=${HelpPartnersType.LectureRequest}`,
      },
    ],
  },
];
