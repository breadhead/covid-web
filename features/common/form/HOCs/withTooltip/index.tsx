import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import * as styles from './index.css'
import * as transitionStyles from './transitionStyles.css'

const withTooltip = (WrappedComponent: React.ComponentType) => (props: any) => {
  return (
    <div className={styles.wrapper}>
      <WrappedComponent {...props} />
      <TransitionGroup component={null}>
        {!!props.error && (
          <CSSTransition
            key={props.error}
            timeout={300}
            classNames={transitionStyles}
          >
            <div className={styles.error}>{props.error}</div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default withTooltip
