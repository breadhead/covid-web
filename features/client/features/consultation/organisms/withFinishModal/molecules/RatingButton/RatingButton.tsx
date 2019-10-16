import * as React from 'react'
import { Button, ButtonSize, ButtonKind } from '@app/src/ui/button'
import { RatingButtonI } from './interface'
import * as s from './RatingButton.css'

interface RatingButtonProps {
  button: RatingButtonI
  setRating: (id: number) => void
}

export const RatingButton = React.memo(
  ({ button, setRating }: RatingButtonProps) => {
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
        className={s.button}
      >
        {label}
      </Button>
    )
  },
)

RatingButton.displayName = 'RatingButton'
