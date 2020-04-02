import * as React from 'react'

import * as styles from './PartnersList.css'

import routes from '@app/routes'
const { Router } = routes

import PartnerCard from '@app/features/landing/organisms/PartnerCard'
import PartnersRadioGroup from '../../molecules/PartnersRadioGroup'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { SelectValue } from 'antd/lib/select'
import PartnersGroupSelect from '../../molecules/PartnersGroupSelect'
import { PartnersType } from './config'
import { useMappedState } from 'redux-react-hook'
import { selectPartnersForPartnerPage } from '@app/features/common/partnerReducer/selectPartners'
import { Partner } from '@app/models/sanity/Partner'

interface Props {
  type: string
}
interface State {
  list: Partner[]
  value: string | SelectValue
  scrollPosition: number
}

const DEFAULT_VALUE = PartnersType.InfrastructurePartner

class PartnersList extends React.Component<Props, State> {
  public static defaultProps = {
    type: DEFAULT_VALUE,
  }

  public state = {
    list: useMappedState(selectPartnersForPartnerPage),
    value: this.props.type,
    scrollPosition: 0,
  }

  public onValueChange = (value: string | SelectValue) => {
    const partners = useMappedState(selectPartnersForPartnerPage)

    this.setState({
      list: partners.filter(partner => partner.type === value),
      value,
      scrollPosition: window.scrollY,
    })
    Router.pushRoute(`/partners/${value}`).then(() =>
      window.scrollTo(0, this.state.scrollPosition),
    )
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
        {value === PartnersType.Corp ? (
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              Корпоративные партнёры выделяют дополнительные средства на
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
              key={partner._id}
              partner={partner}
              className={styles.partnerCard}
            />
          ))}
        </div>
      </>
    )
  }
}

export default PartnersList
