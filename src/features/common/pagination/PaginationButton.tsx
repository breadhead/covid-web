import * as React from 'react';

import { NavLink } from '@app/src/ui/nav-link';

import s from './Pagination.css';

interface Props {
  href: string | object;
  active?: boolean;
  children: React.ReactNode;
}

export const PaginationButton = ({ href, active, children }: Props) => (
  <NavLink withoutUnderline href={href}>
    <span className={(s.paginationButton, active && s.active)}>{children}</span>
  </NavLink>
);
