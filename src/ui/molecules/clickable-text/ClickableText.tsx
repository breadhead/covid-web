import { useCallback, useMemo } from 'react'

import { ExternalLink } from '@front/ui/atoms/extarnal-link'

import { findUrls } from './helpers/findUrls'
import { isUrl } from './helpers/isUrl'
import { normalizeUrl } from './helpers/normalizeUrl'
import { splitText } from './helpers/splitText'
import { truncateUrl } from './helpers/truncateUrl'

interface Props {
  className?: string
  linkClassName?: string
  children?: string
}

export const ClickableText = ({
  className,
  linkClassName,
  children,
}: Props) => {
  if (!children) {
    return null
  }

  const pieces = useMemo(
    () => {
      const links = findUrls(children)

      return splitText(children, links)
    },
    [children],
  )

  const renderLink = useCallback(
    (url: string) => (
      <ExternalLink className={linkClassName} href={normalizeUrl(url)}>
        {truncateUrl(url)}
      </ExternalLink>
    ),
    [linkClassName],
  )

  return (
    <p className={className}>
      {pieces.map(piece => (isUrl(piece) ? renderLink(piece) : piece))}
    </p>
  )
}
