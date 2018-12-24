import cx from 'classnames'
import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import * as styles from './index.css'
import * as transitionStyles from './transitionStyles.css'

interface OwnProps {
  error?: string
  className?: string
}

const withTooltip = <T extends {}>(
  WrappedComponent: React.ComponentType<{ error?: string }>,
) => ({ className, error, ...rest }: T & OwnProps) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <WrappedComponent {...rest} error={error} />
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
