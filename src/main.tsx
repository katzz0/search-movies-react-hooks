import * as React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { ApplicationState } from './store'
import App from './containers/App'
import GlobalStyle from './styles'

interface MainProps {
  store: Store<ApplicationState>
}

function Main({ store }: MainProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  )
}

export default Main
