import { useEffect } from 'react'

import { useModal } from '@app/features/common/modal'
import { MODAL_KEY as SIGN_IN_MODAL } from '@app/features/login/features/signIn/const'
import { MODAL_KEY as SIGN_UP_MODAL } from '@app/features/login/features/signUp/const'

const SIGN_IN_URL = 'sign-in'
const SIGN_UP_URL = 'sign-up'

export const useAuthModalByUrl = () => {
  const { open } = useModal()

  useEffect(
    () => {
      const currentPopup = window.location.href.split('?')[1]

      if (currentPopup === SIGN_IN_URL) {
        open(SIGN_IN_MODAL)
        return
      }

      if (currentPopup === SIGN_UP_URL) {
        open(SIGN_UP_MODAL)
        return
      }
    },
    [open],
  )
}
