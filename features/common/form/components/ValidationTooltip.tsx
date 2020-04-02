import * as React from 'react';

import withEnchancers from '@app/features/common/formHOCs/withEnchancers';

interface TooltipProps {
  className?: string;
  name: string;
}

const ValidationTooltip = ({ className }: TooltipProps) => (
  <div className={className} />
);

export default withEnchancers()(ValidationTooltip as any) as any;
