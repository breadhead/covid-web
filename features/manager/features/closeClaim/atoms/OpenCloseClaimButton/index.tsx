import * as React from 'react'

import Button from '@app/ui/atoms/Button'
import { withCloseClaimModal } from '../..'
import { WithCloseClaimModal } from '../../withCloseClaimModal'

interface Props extends WithCloseClaimModal {
  className: string
  children?: React.ReactNode
}

class OpenCloseClaimButton extends React.Component<Props> {
  public render() {
    const { children, className, ...rest } = this.props
    return (
      <Button
        className={className}
        onClick={this.props.openCloseClaim}
        {...rest}
      >
        {children}
      </Button>
    )
  }
}

export default withCloseClaimModal(OpenCloseClaimButton) as any
