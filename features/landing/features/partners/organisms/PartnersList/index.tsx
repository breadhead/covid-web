import * as React from 'react'

import * as styles from './PartnersList.css'

import PartnerCard, {
  PartnerCardInterface,
} from '@app/features/landing/organisms/PartnerCard'
import PartnersRadioGroup, {
  partnersType,
} from '../../molecules/PartnersRadioGroup'

import { RadioChangeEvent } from 'antd/lib/radio'
import { partners } from './config'

interface State {
  list: PartnerCardInterface[]
  radioButtonValue: string
}

const DEFAULT_VALUE = partnersType[0].value

class PartnersList extends React.Component<{}, State> {
  public state = {
    list: partners.filter(partner => partner.type === DEFAULT_VALUE),
    radioButtonValue: DEFAULT_VALUE,
  }

  public componentDidMount() {
    const { radioButtonValue } = this.state

    this.getSelectedGroup(radioButtonValue)
  }

  public onRadioButtonChange = (evt: RadioChangeEvent) => {
    this.getSelectedGroup(evt.target.value)
    this.setState({ radioButtonValue: evt.target.value })
  }

  public render() {
    const { list, radioButtonValue } = this.state
    return (
      <>
        <header className={styles.header}>
          <PartnersRadioGroup
            name="partners-radio-group"
            value={radioButtonValue}
            onChange={this.onRadioButtonChange}
          />
        </header>
        <div className={styles.textWrapper}>
          <p className={styles.text}>{list[0].info}</p>
        </div>
        <div className={styles.partnersList}>
          {list.map(partner => (
            <PartnerCard
              key={partner.id}
              card={partner}
              className={styles.partnerCard}
            />
          ))}
        </div>
      </>
    )
  }

  private getSelectedGroup = (radioButtonValue: string) => {
    this.setState({
      list: partners.filter(partner => partner.type === radioButtonValue),
    })
  }
}

export default PartnersList
