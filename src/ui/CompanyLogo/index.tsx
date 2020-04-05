import * as React from 'react';
import { Col } from 'antd';

import ServerImage from '@app/src/ui/ServerImage';
import { NavLink } from '@app/src/ui/nav-link';

import styles from './CompanyLogo.css';

interface Props {
  logo: string;
  site?: string;
  name?: string;
}

const Logo = ({ src, name }: { src: string; name?: string }) => (
  <ServerImage src={src} className={styles.CompanyLogo} alt={name} />
);

const CompanyLogo = ({ logo, site, name }: Props) => {
  if (!logo) {
    return null;
  }

  if (!site) {
    return (
      <Col span={6}>
        <Logo src={logo} name={name} />
      </Col>
    );
  }

  return (
    <Col span={6}>
      <NavLink blank className={styles.logoWrapper} href={site}>
        <Logo src={logo} name={name} />
      </NavLink>
    </Col>
  );
};

export default CompanyLogo;
