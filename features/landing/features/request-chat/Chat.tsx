import * as React from 'react'
import { APP_ID } from '@app/features/common/intercom/config'

export const Chat = () => {
  //  const [chat, setChat] = React.useState<any>(<div></div>)

  const token = true //useMappedState(selectToken)

  React.useEffect(() => {
    if (!!token) {
      window.Intercom('boot', {
        app_id: APP_ID,
        email: 'john.doe@example.com',
        created_at: 1234567890,
        name: 'John Doe',
        user_id: '9876',
      })
    }
  })

  return <></>
}
