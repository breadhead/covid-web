import { dataLayer } from '../config'

export default class EventPusher {
  public constructor(private readonly sourceName: string) {}

  public smsSend = () => {
    const event = {
      event: 'custom_event',
      event_id: 'sms_send',
    }

    this.push(event)
  }

  private push = (event: any) => {
    if (dataLayer && dataLayer.push) {
      dataLayer.push({
        event_name: this.sourceName,
        ...event,
      })
    }
  }
}
