import { Provider } from 'react-redux'
import { Store } from 'redux'
import { ApplicationState } from './store'
import App from './components/App'
import GlobalStyle from './styles'

interface MainProps {
  store: Store<ApplicationState>
}

function Main({ store }: MainProps): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  )
}

export default Main
