import Container from './container'
import Page from './page'

export default Container(Page as any) // TODO: fix it

export { State, reducer } from './reducer'
