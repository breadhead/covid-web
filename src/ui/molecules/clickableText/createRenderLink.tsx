import { normalizeUrl } from './helpers/normalizeUrl'
import { truncateUrl } from './helpers/truncateUrl'

export const createRenderLink = (className?: string) => (url: string) => (
  <a
    href={normalizeUrl(url)}
    className={className}
    target="_blank"
    rel="noopener"
  >
    {truncateUrl(url)}
  </a>
)
