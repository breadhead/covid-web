import { Col, Icon, Row } from 'antd'
import * as React from 'react'

import { Quota } from '@app/models/Quota'
import CompanyLogo from '@app/ui/molecules/CompanyLogo'
import QuotaDetails from '@app/ui/molecules/QuotaDetails'
import IsCompaniyPublic from '../../molecules/IsCompanyPublic'
import QuotaConstraints from '../../molecules/QuotaConstraints'
import styles from './QuotaDescription.css'

const QuotaDescription = ({ quota }: Quota) => (
  <div className={styles.QuotaDescription}>
    <QuotaConstraints constraints={quota.constraints} />
    <QuotaDetails name={quota.company.name} type={quota.type} comment={quota.comment} />
    <IsCompaniyPublic publicCompany={quota.publicCompany}/>
    <Row gutter={16}>
      <Col span={3}>
        <CompanyLogo logo={quota.company.logo} site={quota.company.site} />
      </Col>
      <Col span={8}>
        {/* TODO: Change a public comment when the API is completed. */}
        <span>{quota.company.publicComment}</span>
      </Col>
    </Row>
  </div>
)

export default QuotaDescription
