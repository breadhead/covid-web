import React from 'react'

interface Props {
  children: ReactNode,
  href: string,
  className: string
}

const ExternalLink = ({ children, href, className }: Props) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default ExternalLink
