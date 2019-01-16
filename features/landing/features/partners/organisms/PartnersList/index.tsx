import * as React from 'react'

import * as styles from './PartnersList.css'

import PartnerCard, {
  PartnerCardInterface,
} from '@app/features/landing/organisms/PartnerCard'
import { SelectValue } from 'antd/lib/select'
import PartnersGroupSelect, {
  Options,
} from '../../molecules/PartnersGroupSelect'

import { partners } from './config'

interface State {
  list: PartnerCardInterface[]
}

const DEFAULT_SELECT_VALUE = Options[1].key

class PartnersList extends React.Component<{}, State> {
  public state = {
    list: partners.filter(partner => partner.type === DEFAULT_SELECT_VALUE),
    selectValue: DEFAULT_SELECT_VALUE,
  }

  public componentDidMount() {
    const { selectValue } = this.state

    this.getSelectedGroup(selectValue)
  }

  public render() {
    const { list } = this.state
    return (
      <>
        <header className={styles.header}>
          <PartnersGroupSelect onSelect={this.getSelectedGroup} />
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

  private getSelectedGroup = (selectValue: SelectValue) => {
    this.setState({
      list: partners.filter(partner => partner.type === selectValue),
    })
  }
}

export default PartnersList
