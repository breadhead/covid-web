import { useEffect } from 'react'

import { FINISH_MODAL_KEY } from '@app/features/client/features/consultation/organisms/withFinishModal/container'
import { useModal } from '@app/features/common/modal'

const DONATION_URL = 'donation'

export const useDonationModalByUrl = () => {
  const { open } = useModal()

  useEffect(
    () => {
      const currentPopup = window.location.href

      if (currentPopup.includes(DONATION_URL)) {
        open(FINISH_MODAL_KEY)
      }
    },
    [open],
  )
}
