import cx from 'classnames'
import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import * as styles from './index.css'
import * as transitionStyles from './transitionStyles.css'

interface OwnProps {
  error?: string
  loading?: boolean
  className?: string
}
type WrappedComponentProps = Pick<OwnProps, 'error'>

const withTooltip = <T extends {}>(
  WrappedComponent: React.ComponentType<WrappedComponentProps>,
) => ({ className, error, loading, ...rest }: T & OwnProps) => {
  return (
    <div className={cx(styles.wrapper)}>
      <WrappedComponent
        {...rest}
        error={error}
        loading={loading}
        className={className}
      />
      <TransitionGroup component={null}>
        {!!error && (
          <CSSTransition
            key={error}
            timeout={300}
            classNames={transitionStyles}
          >
            <div className={styles.error}>{error}</div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default withTooltip
