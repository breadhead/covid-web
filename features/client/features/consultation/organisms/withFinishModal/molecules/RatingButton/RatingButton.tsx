import * as React from 'react'
import { Button, ButtonSize, ButtonKind } from '@app/src/ui/button'
import { RatingButtonI } from './interface'
import cx from 'classnames'
import * as s from './RatingButton.css'

interface RatingButtonProps {
  button: RatingButtonI
  setRating: (id: number) => void
  className: string
}

export const RatingButton = React.memo(
  ({ button, setRating, className }: RatingButtonProps) => {
    const { id, label } = button
    const updateRating = React.useCallback(
      () => {
        setRating(id)
      },
      [setRating, id],
    )
    return (
      <Button
        size={ButtonSize.Small}
        kind={ButtonKind.Secondary}
        onClick={updateRating}
        className={cx(s.button, className)}
      >
        {label}
      </Button>
    )
  },
)

RatingButton.displayName = 'RatingButton'
