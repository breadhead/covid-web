import { Col, Row } from 'antd'
import * as React from 'react'

import { Quota } from '@app/models/Quota/Quota'
import CompanyLogo from '@app/ui/molecules/CompanyLogo'
import QuotaDetails from '@app/ui/molecules/QuotaDetails'
import IsCompaniyPublic from '../../molecules/IsCompanyPublic'
import QuotaName from '../../molecules/QuotaName'
import styles from './QuotaDescription.css'

interface Props {
  quota: Quota
}

const QuotaDescription = ({ quota }: Props) => (
  <div className={styles.QuotaDescription}>
    <QuotaName name={quota.name} id={quota.id} />
    <QuotaDetails
      name={quota.company.name}
      type={quota.type}
      comment={quota.comment}
    />
    <IsCompaniyPublic publicCompany={quota.publicCompany} />
    <Row gutter={16}>
      <Col span={3}>
        <CompanyLogo logo={quota.company.logo} site={quota.company.site} />
      </Col>
      <Col span={8}>
        <span>{quota.comment}</span>
      </Col>
    </Row>
  </div>
)

export default QuotaDescription
