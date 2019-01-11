import * as React from 'react'

import * as styles from './PartnersList.css'

import { SelectValue } from 'antd/lib/select'
import PartnersGroupSelect, {
  Options,
} from '../../molecules/PartnersGroupSelect'

import { partners } from './config'

class PartnersList extends React.Component {
  public state = {
    list: [],
    selectValue: Options[1].key,
  }

  public componentDidMount() {
    const { selectValue } = this.state

    this.getSelectedGroup(selectValue)
  }

  public render() {
    return <PartnersGroupSelect onSelect={this.getSelectedGroup} />
  }

  private getSelectedGroup = (selectValue: SelectValue) => {
    this.setState({
      list: partners.filter(partner => partner.type === selectValue),
    })
    console.log('this.state.list', this.state.list)
  }
}

export default PartnersList
