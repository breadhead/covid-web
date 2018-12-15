import cx from 'classnames'

import Container from '@app/ui/atoms/Container'
import Footer, { FooterType } from '@app/ui/organisms/Footer'

import Header from '../Header'

interface Props {
  children: React.ReactNode
  className?: string
}

const Layout = ({ children, className }: Props) => (
  <>
    <Header />

    <Container>
      {(containerClassName: string) => (
        <main className={cx(className, containerClassName)}>{children}</main>
      )}
    </Container>

    <Footer type={FooterType.Secondary} />
  </>
)

export default Layout
