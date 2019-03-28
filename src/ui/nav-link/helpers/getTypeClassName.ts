import { NavLinkType } from '../NavLinkType'

export const getTypeClassName = (type: NavLinkType): string =>
  ({
    [NavLinkType.Nav]: 'nav',
    [NavLinkType.Link]: 'link',
  }[type])
