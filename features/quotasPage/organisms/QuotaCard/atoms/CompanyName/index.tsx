import * as React from 'react'

export interface CompanyNameProps {
  companyName: string
}

const CompanyName: React.SFC<CompanyNameProps> = ({ companyName }) => {
  return (<div>{companyName}</div>)
}

export default CompanyName
