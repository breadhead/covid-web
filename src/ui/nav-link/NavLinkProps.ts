import { ReactNode } from 'react';

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  withoutUnderline?: boolean;
  as?: string;
  blank?: boolean;
  className?: string;
}
