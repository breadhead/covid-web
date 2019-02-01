import * as React from 'react'

import { QuotaClaim } from '@app/models/Claim/QuotaClaim'
import CompanyLogo from '@app/ui/molecules/CompanyLogo'

import * as styles from './Company.css'

interface Props {
  quotaClaim: QuotaClaim
}

const Company = ({
  quotaClaim: { name, comment, site, logo, publicCompany },
}: Props) =>
  !!name && publicCompany ? (
    <article className={styles.company}>
      {!!logo && <CompanyLogo logo={logo} site={site} name={name} />}
      <p className={styles.text}>
        {!comment && `Средства на консультацию предоставлены компанией ${name}`}
        {!!comment && comment}
      </p>
    </article>
  ) : null

export default Company
