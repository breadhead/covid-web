import { Quota } from '@app/models/Quota'
import * as React from 'react'
import Comment from './atoms/Comment'
import CompanyName from './atoms/CompanyName'
import Count from './atoms/Count'
import Name from './atoms/Name'
import Type from './atoms/Type'

const QuotaCard: React.SFC<Quota> = ({ comment, company, count, name, type }) => {
  return <div>
    <Comment comment={comment} />
    <CompanyName companyName={company.name} />
    <Count count={count} />
    <Name name={name} />
    <Type type={type} />
  </div>
}

export default QuotaCard
