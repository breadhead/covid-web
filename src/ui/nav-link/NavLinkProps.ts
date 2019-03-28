import { ReactNode } from 'react'
import { NavLinkTargetType } from './NavLinkTargetType'
import { NavLinkType } from './NavLinkType'

export interface NavLinkProps {
  href: string
  children: ReactNode
  type?: NavLinkType
  target?: NavLinkTargetType
  className?: string
}
