import { useCallback, useMemo } from 'react'

import { displayFileName } from '@app/features/common/uploader/displayFileName'
import { ExternalLink } from '@front/ui/extarnal-link'

import { findUrls } from './helpers/findUrls'
import { isUrl } from './helpers/isUrl'
import { normalizeUrl } from './helpers/normalizeUrl'
import { splitText } from './helpers/splitText'

interface Props {
  className?: string
  linkClassName?: string
  children?: string | null
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
        {displayFileName(url)}
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
