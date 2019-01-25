import * as React from 'react'

import * as styles from './PartnersList.css'

import Router from 'next/router'

import PartnerCard, {
  PartnerCardInterface,
} from '@app/features/landing/organisms/PartnerCard'
import PartnersRadioGroup, {
  partnersType,
} from '../../molecules/PartnersRadioGroup'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { SelectValue } from 'antd/lib/select'
import PartnersGroupSelect from '../../molecules/PartnersGroupSelect'
import { partners } from './config'

interface State {
  list: PartnerCardInterface[]
  value: string | SelectValue
}

const DEFAULT_VALUE = partnersType[0].value
const CORP_VALUE = partnersType[1].value

class PartnersList extends React.Component<{}, State> {
  public state = {
    list: partners.filter(partner => partner.type === DEFAULT_VALUE),
    value: DEFAULT_VALUE,
  }

  public componentDidMount() {
    const { value } = this.state

    this.onValueChange(value)
  }

  public onValueChange = (value: string | SelectValue) => {
    this.setState({
      list: partners.filter(partner => partner.type === value),
      value,
    })
    Router.push(`/partners#${value}`)
  }

  public render() {
    const { list, value } = this.state
    return (
      <>
        <header className={styles.header}>
          <PartnersRadioGroup
            name="partners-radio-group"
            value={value}
            onChange={this.onValueChange}
            className={styles.radioGroup}
          />
          <PartnersGroupSelect
            value={value}
            onSelect={this.onValueChange}
            className={styles.select}
          />
        </header>
        {value === CORP_VALUE ? (
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              Корпоративные партнеры выделяют дополнительные средства на
              {NON_BREAKING_SPACE}консультации для своих сотрудников. Если вы
              {NON_BREAKING_SPACE}являетесь сотрудником одной из
              {NON_BREAKING_SPACE}этих компаний, укажите это в
              {NON_BREAKING_SPACE}своей заявке.
            </p>
          </div>
        ) : null}
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
}

export default PartnersList
