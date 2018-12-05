import * as React from 'react'

interface Props {
  onClick: () => void
}

const CloseButton = ({ onClick }: Props) =>
  <button onClick={onClick}>close popup</button>

export default CloseButton
