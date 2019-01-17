import cx from 'classnames'

import Container from '@app/ui/atoms/Container'
import Footer, { FooterTheme, FooterType } from '@app/ui/organisms/Footer'

import Header from '../Header'
import styles from './Layout.css'

interface Props {
  children: React.ReactNode
  className?: string
  pageClassName?: string
}

const Layout = ({ children, className, pageClassName }: Props) => (
  <>
    <Header className={pageClassName} />

    <Container pageClassName={cx(styles.page, pageClassName)}>
      {(containerClassName: string) => (
        <main className={cx(className, containerClassName)}>{children}</main>
      )}
    </Container>

    <Footer theme={FooterTheme.White} type={FooterType.Secondary} />
  </>
)

export default Layout
