import Container from './container'
import ContentRaw from './organisms/Content'
import Page from './page'

export default Container(Page)

// TODO: fix types
export const Content = Container(ContentRaw) as any

export { reducer, State } from './reducer'
export { fetchQuotas } from './actions'
