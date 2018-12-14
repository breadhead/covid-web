import { Quota } from '@app/models/Quota/Quota'
import QuotaCard from '../QuotaCard'

export interface QuotasListProps {
  quotas: Quota[]
}

const QuotasList: React.SFC<QuotasListProps> = ({ quotas }) => {
  return (
    <div>
      {quotas.map(quota => (
        <QuotaCard key={quota.name} {...quota} />
      ))}
    </div>
  )
}

export default QuotasList