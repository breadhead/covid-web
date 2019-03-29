import { NavLinkType } from '../NavLinkType'

export const getTypeClassName = (type?: NavLinkType): string =>
  !!type
    ? {
        [NavLinkType.Nav]: 'nav',
        [NavLinkType.Link]: 'link',
      }[type]
    : ''
