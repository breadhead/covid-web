import * as React from 'react'

import cx from 'classnames'

import * as styles from './Loader.css'

import Button from '@app/ui/atoms/Button'
import Icon from './Icon'

interface Props {
  isLoading: boolean
  children: React.ReactNode
  className?: string
}

const Loader = ({ isLoading, children, className }: Props) =>
  isLoading ? (
    <Button className={cx(styles.button, className)}>
      <Icon />
    </Button>
  ) : (
    children
  )

export default Loader
