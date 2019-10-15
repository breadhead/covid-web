import React, { useCallback, useMemo } from 'react'

import { displayFileName } from '@app/features/common/uploader/displayFileName'

import { NavLink } from '../nav-link'
import { findUrls } from './helpers/findUrls'
import { isUrl } from './helpers/isUrl'
import { normalizeUrl } from './helpers/normalizeUrl'
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
  const pieces = useMemo(
    () => {
      if (!children) {
        return []
      }

      const links = findUrls(children)

      return splitText(children, links)
    },
    [children],
  )

  const renderLink = useCallback(
    (url: string) => (
      <NavLink blank className={linkClassName} href={normalizeUrl(url)}>
        {displayFileName(url)}
      </NavLink>
    ),
    [],
  )

  if (!children) {
    return null
  }

  return (
    <p className={className}>
      {pieces.map(piece => (isUrl(piece) ? renderLink(piece) : piece))}
    </p>
  )
}
