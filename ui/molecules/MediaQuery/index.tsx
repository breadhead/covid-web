import React from 'react'
import * as styles from './MediaQuery.css'

interface Props {
  children: React.ReactNode
}

export const Sm = (props: Props) => (
  <span className={styles.Sm}>{props.children}</span>
)
export const Md = (props: Props) => (
  <span className={styles.Md}>{props.children}</span>
)
export const Lg = (props: Props) => (
  <span className={styles.Lg}>{props.children}</span>
)
export const Xl = (props: Props) => (
  <span className={styles.Xl}>{props.children}</span>
)

export const ToSm = (props: Props) => (
  <span className={styles.ToSm}>{props.children}</span>
)
export const ToMd = (props: Props) => (
  <span className={styles.ToMd}>{props.children}</span>
)
export const ToLg = (props: Props) => (
  <span className={styles.ToLg}>{props.children}</span>
)
export const ToXl = (props: Props) => (
  <span className={styles.ToXl}>{props.children}</span>
)
