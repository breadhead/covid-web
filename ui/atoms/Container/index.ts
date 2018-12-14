import styles from './Container.css'

interface Props {
  children: (className: string) => JSX.Element
}

const Container = ({ children }: Props) => children(styles.container)

export default Container
