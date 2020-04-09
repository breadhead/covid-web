import { ReactNode } from 'react';

export interface NavLinkProps {
  href: string | object;
  children: ReactNode;
  withoutUnderline?: boolean;
  as?: string;
  blank?: boolean;
  className?: string;
}
