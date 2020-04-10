import { PrimaryFooterLink } from '@app/src/ui/organisms/Footer/components/Menu';

export const linksDesktop = [
  { title: 'Справочная служба', href: '/ask' },
  { title: 'О проекте', href: '/ask/#about' },
  { title: 'Помощь больницам', href: '/for-hospitals' },
  { title: 'Наблюдательный совет', href: '/supervisory' },
  { title: 'Партнёры', href: '/partners' },
  { title: '', href: '' },
  { title: 'Новости', href: '/news' },
  { title: '', href: '' },
  { title: 'Контакты', href: '/contacts' },
] as PrimaryFooterLink[];

export const linksMobile = [
  { title: 'Справочная служба', href: '/ask' },
  { title: 'О проекте', href: '/ask/#about' },
  { title: 'Помощь больницам', href: '/for-hospitals' },
  { title: 'Наблюдательный совет', href: '/supervisory' },
  { title: 'Врачам', href: '/for-doctors' },
  { title: 'Партнёры', href: '/partners' },
  { title: 'Новости', href: '/news' },
  { title: 'Контакты', href: '/contacts' },
] as PrimaryFooterLink[];
