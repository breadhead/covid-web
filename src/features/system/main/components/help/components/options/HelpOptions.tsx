import * as React from 'react';

import {Button, ButtonKind, ButtonSize} from '@app/src/ui/button';
import {NavLink} from '@app/src/ui/nav-link';

import {getHelpOptions} from './helpOptionsConfig';
import * as styles from './HelpOptions.css';

export enum HelpItemType {
  Button = 'Button',
  Link = 'Link',
}

interface HelpOptionItem {
  id: string;
  type: HelpItemType;
  secondary?: boolean;
  label: string;
  link: string;
}

interface HelpOption {
  title: string;
  items: HelpOptionItem[];
}

interface HelpOptionsProps {
  helpLink?: string;
}

export const HelpOptions = ({ helpLink }: HelpOptionsProps) => {
  return (
    <div className={styles.options}>
      {getHelpOptions(helpLink).map((option: HelpOption) => {
        return (
          <article className={styles.option} key={option.title}>
            <h3 className={styles.title}>{option.title}</h3>
            <ul className={styles.list}>
              {option.items.map((item) => {
                return item.type === HelpItemType.Button ? (
                  <NavLink
                    className={styles.buttonWrapper}
                    withoutUnderline
                    href={item.link}
                    key={item.id}
                  >
                    <Button kind={item.secondary ? ButtonKind.Secondary : ButtonKind.Primary} size={ButtonSize.Small}>{item.label}</Button>
                  </NavLink>
                ) : (
                  <NavLink
                    key={item.id}
                    href={item.link}
                    className={styles.link}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </ul>
          </article>
        );
      })}
    </div>
  );
};
