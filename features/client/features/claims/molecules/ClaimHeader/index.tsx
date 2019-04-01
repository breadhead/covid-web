import cx from 'classnames'
import Router from 'next/router'

import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { Icon } from '@front/ui/icon'

import { IconsList } from '@app/src/ui/sprite'
import NewMessageBadge from '../../atoms/NewMessageBage'
import formatDate from '../../helpers/formatDate'
import styles from './ClaimHeader.css'

type Props = Pick<
  ListedClaim,
  'id' | 'createdAt' | 'newMessage' | 'target' | 'number'
>

const Header = ({ id, createdAt, newMessage, target, number }: Props) => (
  <header className={styles.container}>
    <div
      className={styles.mainInfo}
      onClick={() => Router.push(`/client/consultation/${id}`)}
    >
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>
          {formatDate(createdAt)} №{number}
        </h2>
        <Icon
          name={IconsList.ArrowBigBack}
          className={cx(styles.arrow, styles.defaultArrow)}
        />
        <Icon
          name={IconsList.ArrowBigBackHover}
          className={cx(styles.arrow, styles.hoverArrow)}
        />
      </div>
      <NewMessageBadge available={newMessage} />
      <small className={styles.for}>{target}</small>
    </div>
  </header>
)

export default Header
