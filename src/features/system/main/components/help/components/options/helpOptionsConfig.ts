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
        link: '/#donation',
      },
      {
        id: '30',
        type: HelpItemType.Link,
        label: 'Волонтерский фандрайзинг',
        link: '/#donation',
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
        link: '/#donation',
      },
      {
        id: '20',
        type: HelpItemType.Link,
        label: 'Стать инфопартнером',
        link: '/#donation',
      },
      {
        id: '30',
        type: HelpItemType.Link,
        label: 'Заказать лекцию',
        link: '/#donation',
      },
      {
        id: '40',
        type: HelpItemType.Link,
        label: 'Волонтерский фандрайзинг',
        link: '/#donation',
      },
    ],
  },
];
