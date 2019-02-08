import { ExternalLink } from '@front/ui/atoms/extarnal-link'

import { normalizeUrl } from './helpers/normalizeUrl'
import { truncateUrl } from './helpers/truncateUrl'

export const createRenderLink = (className?: string) => (url: string) => (
  <ExternalLink className={className} href={normalizeUrl(url)}>
    {truncateUrl(url)}
  </ExternalLink>
)
