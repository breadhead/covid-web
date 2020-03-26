import * as React from 'react';
import { canUseDOM } from '@app/lib/helpers/canUseDOM';


export const Chat = () => {


  const [chat, setChat] = React.useState<any>(null)

  React.useEffect(() => {

    if (canUseDOM) {
      // const Intercom = require("intercom-react");

      setChat(<div>
        
        {/* <Intercom
          open
          appId="pxkfd7bu"
          user={{
            user_id: "211133434",
            Age: "70"
          }}
        /> */}

      </div>)


    } else {
      setChat(<div>nothing</div>)
    }

  }, [canUseDOM])



  return chat
}
