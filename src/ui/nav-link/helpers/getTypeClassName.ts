import { NavLinkType } from '../NavLinkType'

export const getTypeClassName = (type?: NavLinkType): string =>
  !!type
    ? {
        [NavLinkType.Nav]: 'nav',
        [NavLinkType.WithUnderline]: 'link',
      }[type]
    : ''
