import React from 'react'
import { Provider } from 'react-redux'
import store from './features/store'
import MainApp from './pages/MainApp'

const App = () => {
  return (
    <div>
      <Provider
        store={store} 
      >
        <MainApp/>
      </Provider>
    </div>
  )
}

export default App

