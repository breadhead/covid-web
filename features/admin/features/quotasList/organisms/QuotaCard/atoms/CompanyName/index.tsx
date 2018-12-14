import * as React from 'react'

export interface CompanyNameProps {
  children: string
}

const CompanyName: React.SFC<CompanyNameProps> = ({ children }) => {
  return <div>{children}</div>
}

export default CompanyName
