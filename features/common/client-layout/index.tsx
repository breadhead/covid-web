import React from 'react'
import cx from 'classnames'

import Container from '@app/ui/Container'
import Footer, { FooterTheme, FooterType } from '@app/ui/organisms/Footer'

import Header from '../header'
import styles from './Layout.css'

interface Props {
  children: React.ReactNode
  className?: string
  pageClassName?: string
  headerClassName?: string
  footerTheme?: FooterTheme
}

export const ClientLayout = ({
  children,
  className,
  pageClassName,
  headerClassName,
  footerTheme,
}: Props) => (
  <>
    <Header className={headerClassName} />

    <Container pageClassName={cx(styles.page, pageClassName)}>
      {(containerClassName: string) => (
        <main className={cx(className, containerClassName)}>{children}</main>
      )}
    </Container>

    <Footer theme={footerTheme} type={FooterType.Secondary} />
  </>
)
