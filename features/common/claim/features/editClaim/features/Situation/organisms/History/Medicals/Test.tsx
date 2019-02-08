import withEnchancers from '@app/features/common/formHOCs/withEnchancers'
import * as React from 'react'

interface TooltipProps {
  className?: string
  name: string
}

const Test = ({ className }: TooltipProps) => <div className={className} />

export default withEnchancers()(Test as any) as any
