import {ReactNode} from 'react';

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  withoutUnderline?: boolean;
  blank?: boolean;
  className?: string;
}
