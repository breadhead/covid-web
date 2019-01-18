import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

import stylesLong from './MenuLong.css'
import stylesShort from './MenuShort.css'

const linksShort = [
  { title: 'О проекте', href: '#' },
  { title: 'Помочь проекту', href: '#donation' },
  { title: 'Обратная связь', href: '/contacts' },
]

const linksLong = [
  { title: 'Партнёры', href: '/partners' },
  { title: 'Контакты', href: '/contacts' },
  { title: 'Помочь проекту', href: '#donation' },
  { title: 'Обратная связь', href: '/contacts' },
  { title: 'Эксперты', href: '/experts' },
]

interface Props {
  long?: boolean
}

const Menu = ({ long }: Props) => {
  const links = !!long ? linksLong : linksShort

  const styles = !!long ? stylesLong : stylesShort

  return (
    <nav className={styles.menu}>
      {links.map(({ title, href }) => (
        <NavLink
          key={title}
          type={NavLinkType.Nav}
          href={href}
          className={styles.link}
        >
          {title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Menu
