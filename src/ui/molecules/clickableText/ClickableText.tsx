import { useCallback, useMemo } from 'react'

import { createRenderLink } from './createRenderLink'
import { findUrls } from './helpers/findUrls'
import { isUrl } from './helpers/isUrl'
import { splitText } from './helpers/splitText'

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

  const renderLink = useCallback(createRenderLink(linkClassName), [
    linkClassName,
  ])

  return (
    <span className={className}>
      {pieces.map(piece => (isUrl(piece) ? renderLink(piece) : piece))}
    </span>
  )
}
