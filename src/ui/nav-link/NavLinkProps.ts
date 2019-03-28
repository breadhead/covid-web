import { ReactNode } from 'react'
import { NavLinkType } from './NavLinkType'

export interface NavLinkProps {
  href: string
  children: ReactNode
  type?: NavLinkType
  blank?: boolean
  className?: string
}
