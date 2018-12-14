import Container from '@app/ui/atoms/Container'
import Footer, { FooterType } from '@app/ui/organisms/Footer'

import Header from '../Header'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />

    <Container>
      {(className: string) => <main className={className}>{children}</main>}
    </Container>

    <Footer type={FooterType.Secondary} />
  </>
)

export default Layout
